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
var SvgCameraLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M30 15v13H10V15h20zm2-2H8v17h24V13z", fill: "#fff" }),
    React.createElement("path", { d: "M20 26c2.5 0 4.5-2 4.5-4.5S22.5 17 20 17s-4.5 2-4.5 4.5 2 4.5 4.5 4.5zM25 9H15v2h10V9z", fill: "#fff" }))); };
exports["default"] = SvgCameraLarge;
