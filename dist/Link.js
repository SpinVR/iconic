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
var SvgLink = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M19 22h-3.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5H19v-1h-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5H19v-1zM24.5 16H21v1h3.5c1.4 0 2.5 1.1 2.5 2.5S25.9 22 24.5 22H21v1h3.5c1.9 0 3.5-1.6 3.5-3.5S26.4 16 24.5 16z", fill: "#fff" }),
    React.createElement("path", { d: "M23 19h-6v1h6v-1z", fill: "#fff" }))); };
exports["default"] = SvgLink;
