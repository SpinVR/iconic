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
var SvgUndockPreviewSmall = function (props) { return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
    React.createElement("path", { d: "M8 7v7h8V7H8zm7 6H9V8h6v5z", fill: "#fff" }),
    React.createElement("path", { d: "M7 10H6v6h8v-1H7v-5z", fill: "#fff" }))); };
exports["default"] = SvgUndockPreviewSmall;
