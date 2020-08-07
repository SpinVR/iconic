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
var SvgPlus = function (props) { return (React.createElement("svg", __assign({ width: 6, height: 6, fill: "none" }, props),
    React.createElement("path", { d: "M2.296 6h1.408V3.661H6V2.339H3.704V0H2.296v2.339H0v1.322h2.296V6z", fill: "#242424" }))); };
exports["default"] = SvgPlus;
