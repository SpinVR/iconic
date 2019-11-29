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
var SvgSelect = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("circle", { cx: 19.5, cy: 18.5, r: 7, stroke: "#fff" }),
    React.createElement("path", { stroke: "#fff", d: "M19.5 10v6M19.5 21v6M11 18.5h6M22 18.5h6" }))); };
exports["default"] = SvgSelect;
