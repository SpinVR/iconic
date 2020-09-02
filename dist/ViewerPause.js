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
var SvgViewerPause = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M17 12h-4v16h4V12zM27 12h-4v16h4V12z", fill: "#000" }))); };
exports["default"] = SvgViewerPause;
