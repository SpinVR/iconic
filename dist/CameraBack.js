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
var SvgCameraBack = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M13 13h14v4h1v-5H12v16h9v-1h-8V13z", fill: "#fff" }),
    React.createElement("path", { d: "M26 24c0-5-3.5-4.9-5-5v-3l-5 4 5 4v-3c1.2 0 4 0 5 3z", fill: "#fff" }))); };
exports["default"] = SvgCameraBack;
