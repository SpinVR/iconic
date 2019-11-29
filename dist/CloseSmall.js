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
var SvgCloseSmall = function (props) { return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
    React.createElement("path", { d: "M17.5 7.5l-1-1L12 11 7.5 6.5l-1 1L11 12l-4.5 4.5 1 1L12 13l4.5 4.5 1-1L13 12l4.5-4.5z", fill: "#fff" }))); };
exports["default"] = SvgCloseSmall;
