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
var SvgViewerView = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M20 12c-8.8 0-12 8-12 8s3.2 8 12 8 12-8 12-8-3.2-8-12-8zm0 13.333c-2.933 0-5.333-2.4-5.333-5.333 0-2.933 2.4-5.333 5.333-5.333 2.933 0 5.333 2.4 5.333 5.333 0 2.933-2.4 5.333-5.333 5.333z", fill: "#000" }))); };
exports["default"] = SvgViewerView;
