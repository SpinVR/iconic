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
var SvgMoveSmall = function (props) { return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
    React.createElement("path", { d: "M18 11.5L16 10v1h-3V8h1l-1.5-2L11 8h1v3H9v-1l-2 1.5L9 13v-1h3v3h-1l1.5 2 1.5-2h-1v-3h3v1l2-1.5z", fill: "#fff" }))); };
exports["default"] = SvgMoveSmall;
