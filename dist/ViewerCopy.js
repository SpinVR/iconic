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
var SvgViewerCopy = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M27.9 15H16.1c-.6 0-1.1.5-1.1 1.1v11.8c0 .6.5 1.1 1.1 1.1h11.8c.6 0 1.1-.5 1.1-1.1V16.1c0-.6-.5-1.1-1.1-1.1zM27 27H17V17h10v10z", fill: "#000" }),
    React.createElement("path", { d: "M13 13h11v-2H12c-.6 0-1 .4-1 1v12h2V13z", fill: "#000" }))); };
exports["default"] = SvgViewerCopy;
