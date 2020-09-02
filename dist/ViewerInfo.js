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
var SvgViewerInfo = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M20 9C13.95 9 9 13.95 9 20s4.95 11 11 11 11-4.95 11-11S26.05 9 20 9zm1.375 17.875h-2.75v-8.25h2.75v8.25zm0-11h-2.75v-2.75h2.75v2.75z", fill: "#000" }))); };
exports["default"] = SvgViewerInfo;
