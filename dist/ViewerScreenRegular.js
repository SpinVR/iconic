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
var SvgViewerScreenRegular = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M31 11l-2-2-4 4-3-3v8h8l-3-3 4-4zM13 25l-4 4 2 2 4-4 3 3v-8h-8l3 3z", fill: "#000" }))); };
exports["default"] = SvgViewerScreenRegular;
