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
var SvgTextSizeSmall = function (props) { return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
    React.createElement("path", { d: "M15 7H6v1h4v9h1V8h4V7z", fill: "#fff" }),
    React.createElement("path", { d: "M18 12h-5v1h2v4h1v-4h2v-1z", fill: "#fff" }))); };
exports["default"] = SvgTextSizeSmall;
