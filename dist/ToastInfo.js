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
var SvgToastInfo = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M19.5 26c3.6 0 6.5-2.9 6.5-6.5S23.1 13 19.5 13 13 15.9 13 19.5s2.9 6.5 6.5 6.5zM19 16h1v1h-1v-1zm0 2h1v5h-1v-5z", fill: "#fff" }))); };
exports["default"] = SvgToastInfo;
