"use strict";

(function () {
    window.webapis = {
        productinfo: {
            is8KPanelSupported: () => false,
            isUdPanelSupported: () => true // unfortunately tv browser is lying to us about pixel ratio: window.devicePixelRatio === 2
        }
    };
})();
