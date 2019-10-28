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
var SvgObjectSpecialMirror = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#object-special-mirror_svg__clip0)", fill: "#fff" },
        React.createElement("path", { d: "M20 12h-1v16h1V12zM26 18v3h-3v-3h3zm1-1h-5v5h5v-5zM16 18v3h-3v-3h3zm1-1h-5v5h5v-5z" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "object-special-mirror_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "translate(12 13)", d: "M0 0h16v14H0z" }))))); };
exports["default"] = SvgObjectSpecialMirror;
