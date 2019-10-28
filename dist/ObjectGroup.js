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
var SvgObjectGroup = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M27 13v14H13V13h14zm1-1H12v16h16V12z", fill: "#fff" }),
    React.createElement("path", { d: "M21 16v5h-5v-5h5zm1-1h-7v7h7v-7z", fill: "#fff" }),
    React.createElement("path", { d: "M24 19v5h-5v-5h5zm1-1h-7v7h7v-7z", fill: "#fff" }))); };
exports["default"] = SvgObjectGroup;
