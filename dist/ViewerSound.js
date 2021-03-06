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
var SvgViewerSound = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M20 12l-5 5h-4v6h4l5 5V12zM22 12v2c3 .4 5 2.9 5 6s-2 5.6-5 6v2c4.2-.5 7-3.9 7-8s-2.8-7.5-7-8z", fill: "#000" }),
    React.createElement("path", { d: "M22 16v8c1.8-.2 3-2 3-4s-1.2-3.8-3-4z", fill: "#000" }))); };
exports["default"] = SvgViewerSound;
