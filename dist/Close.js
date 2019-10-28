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
var SvgClose = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M25.5 15.5l-1-1L20 19l-4.5-4.5-1 1L19 20l-4.5 4.5 1 1L20 21l4.5 4.5 1-1L21 20l4.5-4.5z", fill: "#fff" }))); };
exports["default"] = SvgClose;
