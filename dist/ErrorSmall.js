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
var SvgErrorSmall = function (props) { return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
    React.createElement("path", { d: "M11.5 5C7.9 5 5 7.9 5 11.5S7.9 18 11.5 18s6.5-2.9 6.5-6.5S15.1 5 11.5 5zm.5 10h-1v-1h1v1zm0-2h-1V8h1v5z", fill: "#fff" }))); };
exports["default"] = SvgErrorSmall;
