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
var SvgSwapColor = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M19 19v9h9v-9h-9zM16 13v3h-3v-3h3zm1-1h-5v5h5v-5zM18 13c2.8 0 5 2.2 5 5h1c0-3.3-2.7-6-6-6v1zM18 23c-2.8 0-5-2.2-5-5h-1c0 3.3 2.7 6 6 6v-1z", fill: "#fff" }))); };
exports["default"] = SvgSwapColor;
