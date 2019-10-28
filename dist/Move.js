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
var SvgMove = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M27 19.5l-3-2V19h-4v-4h1.5l-2-3-2 3H19v4h-4v-1.5l-3 2 3 2V20h4v4h-1.5l2 3 2-3H20v-4h4v1.5l3-2z", fill: "#fff" }))); };
exports["default"] = SvgMove;
