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
var SvgObjectCamera = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M27 16v10H13V16h14zm1-1H12v12h16V15z", fill: "#fff" }),
    React.createElement("path", { d: "M20 23.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", fill: "#fff" }),
    React.createElement("path", { d: "M20 19c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM23 13h-6v1h6v-1z", fill: "#fff" }),
    React.createElement("path", { d: "M23 13h-6v1h6v-1z", fill: "#fff" }))); };
exports["default"] = SvgObjectCamera;
