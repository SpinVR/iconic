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
var SvgViewerPlayLeft = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#viewer-play-left_svg__clip0)" },
        React.createElement("path", { d: "M13.6 20l12.8 8V12l-12.8 8z", fill: "#000" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "viewer-play-left_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "rotate(-180 14 14)", d: "M0 0h16v16H0z" }))))); };
exports["default"] = SvgViewerPlayLeft;
