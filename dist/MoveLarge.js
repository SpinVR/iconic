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
var SvgMoveLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M32 20l-5-3v2h-6v-6h2l-3-5-3 5h2v6h-6v-2l-5 3 5 3v-2h6v6h-2l3 5 3-5h-2v-6h6v2l5-3z", fill: "#fff" }))); };
exports["default"] = SvgMoveLarge;
