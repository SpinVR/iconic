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
var SvgViewerPlay = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M28 20l-14-8v16l14-8z", fill: "#000" }))); };
exports["default"] = SvgViewerPlay;
