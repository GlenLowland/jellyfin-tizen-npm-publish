"use strict";

(function () {
    const currentApplication = {
        appInfo: {
            // Just emulate the value cause I don't see any sense to provide TizenBrew version here
            version: 'DEVELOPMENT'
        },
        exit: () => {
            // cannot do anything about it :(
        }
    };

    window.tizen = {
        application: {
            getCurrentApplication: () => currentApplication
        },
        systeminfo: {
            getPropertyValue: (propertyValue, cb) => {
                if (propertyValue === 'DISPLAY') {
                    return {
                        resolutionWidth: 3840,
                        resolutionHeight: 2160
                    };
                } else {
                    return {};
                }
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
            is8KPanelSupported: () => false,
            isUdPanelSupported: () => true
        }
    };
})();
