"use strict";

(function () {
    let client;
    let systemInfo = {};
    let productInfo;

    const currentApplication = {
        appInfo: {
            // Just emulate the value cause I don't see any sense to provide TizenBrew version here
            version: 'DEVELOPMENT'
        },
        exit: () => {
            send({ type: 'exit' });
        }
    };

    window.tizen = {
        application: {
            getCurrentApplication: () => currentApplication
        },
        systeminfo: {
            getPropertyValue: (propertyValue, cb) => {
                if (systemInfo[propertyValue]) {
                    return cb(systemInfo[propertyValue]);
                }
                send({ type: 'requestSystemInfo', propertyValue });

                let tries = 0;
                const interval = setInterval(() => {
                    if (systemInfo[propertyValue]) {
                        return cb(systemInfo[propertyValue]);
                    }
                    tries++;
                    if (tries === 10) {
                        clearInterval(interval);
                        alert('It took too long to recieve Tizen system info!');
                        return cb({});
                    }
                }, 1000);
            }
        },
        tvinputdevice: {
            // a placeholder, keys are registered in a parent app anyway
            registerKey: () => {},
            // a placeholder for now
            unregisterKey: () => {}
        }
    };

    window.webapis = {
        productinfo: {
            is8KPanelSupported: () => productInfo.is8KPanelSupported,
            isUdPanelSupported: () => productInfo.isUdPanelSupported
        }
    };

    function connect() {
        const ip = localStorage.getItem('ip');
        try {
            if (ip.includes(':')) {
                client = new WebSocket(`ws://${ip}`);
            } else {
                client = new WebSocket(`ws://127.0.0.1:8081`);
            }
            client.onmessage = onMessage;
            client.onopen = onOpen;
            client.onerror = (error) => {
                localStorage.removeItem('ip');
                alert('Error connecting to WS: ' + error.message);
                window.location.reload();
            }
        } catch(e) {
            localStorage.removeItem('ip');
            alert('Error when creating WS connection: ' + e.message);
            window.location.reload();
        }
    }

    window.send = (message) => {
        client.send(JSON.stringify(message));
    }

    function onMessage(msg) {
        const message = JSON.parse(msg.data);
        switch (message.type) {
            case 'systemInfo': {
                alert('Received system info: ' + JSON.stringify(message.result));
                systemInfo[message.propertyValue] = message.result;
                break;
            }

            case 'productInfo': {
                alert('Received product info: ' + JSON.stringify(message.result));
                productInfo = message.result;
                break;
            }

            default: {
                // ignore
            }
        }
    }

    function onOpen() {
        // We have to get the product info cause it has no async api.
        send({ type: 'requestProductInfo' });
    }

    localStorage.setItem('ip', '127.0.0.1');
    connect();
})();
