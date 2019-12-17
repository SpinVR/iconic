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
var SvgSelectItem = function (props) { return (React.createElement("svg", __assign({ width: 55, height: 55, fill: "none" }, props),
    React.createElement("path", { d: "M39 26H29V16h-3v10H16v3h10v10h3V29h10v-3z", fill: "#fff" }))); };
exports["default"] = SvgSelectItem;
