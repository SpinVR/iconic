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
var SvgViewerAndroid = function (props) { return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
    React.createElement("path", { d: "M2 12C2 6.486 6.486 2 12 2c2.227 0 4.334.716 6.095 2.072l-2.324 3.02A6.123 6.123 0 0012 5.81 6.198 6.198 0 005.81 12 6.198 6.198 0 0012 18.19a6.2 6.2 0 005.89-4.285H12v-3.81h10V12c0 5.514-4.486 10-10 10S2 17.514 2 12z", fill: "#000" }))); };
exports["default"] = SvgViewerAndroid;
