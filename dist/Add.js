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
var SvgAdd = function (props) { return (React.createElement("svg", __assign({ width: 30, height: 30, fill: "none" }, props),
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 0h-3v14H0v3h14v13h3V17h13v-3H17V0z", fill: "#fff" }))); };
exports["default"] = SvgAdd;
