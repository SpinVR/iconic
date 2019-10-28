"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var SvgUploadPanorama = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M20 15c-5 0-9-1-9-1v12s4-1 9-1 9 1 9 1V14s-4 1-9 1zm-8 .2c.7.1 1.8.3 3 .5v8.6c-1.2.1-2.3.3-3 .5v-9.6zm4 9v-8.4c1.2.1 2.6.2 4 .2s2.8-.1 4-.2v8.4c-1.2-.1-2.6-.2-4-.2s-2.8.1-4 .2zm12 .6c-.7-.1-1.8-.3-3-.5v-8.6c1.2-.1 2.3-.3 3-.5v9.6z", fill: "#fff" }))); };
exports["default"] = SvgUploadPanorama;
