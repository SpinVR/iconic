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
var SvgUndoLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M26 16H14v-6l-7 7 7 7v-6h12c2.8 0 5 2.2 5 5s-2.2 5-5 5h-7v2h7c3.9 0 7-3.1 7-7s-3.1-7-7-7z", fill: "#fff" }))); };
exports["default"] = SvgUndoLarge;
