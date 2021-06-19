"use strict";
figma.showUI(__html__, { width: 600 });
figma.ui.onmessage = function (msg) {
    figma.ui.postMessage('hola');
    // figma.closePlugin()
};
