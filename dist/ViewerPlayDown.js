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
var SvgViewerPlayDown = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#viewer-play-down_svg__clip0)" },
        React.createElement("path", { d: "M20 26.4l8-12.8H12l8 12.8z", fill: "#000" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "viewer-play-down_svg__clip0" },
            React.createElement("path", { fill: "#000", transform: "rotate(90 8 20)", d: "M0 0h16v16H0z" }))))); };
exports["default"] = SvgViewerPlayDown;
