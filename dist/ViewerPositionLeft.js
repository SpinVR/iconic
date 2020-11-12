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
var SvgViewerPositionLeft = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#viewer-position-left_svg__clip0)" },
        React.createElement("g", { clipPath: "url(#viewer-position-left_svg__clip1)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 10v20h14V10H16zM8 32V8h24v24H8z", fill: "#000" }))),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "viewer-position-left_svg__clip0" },
            React.createElement("path", { fill: "#000", d: "M0 0h40v40H0z" })),
        React.createElement("clipPath", { id: "viewer-position-left_svg__clip1" },
            React.createElement("path", { fill: "#000", transform: "rotate(-90 20 12)", d: "M0 0h24v24H0z" }))))); };
exports["default"] = SvgViewerPositionLeft;
