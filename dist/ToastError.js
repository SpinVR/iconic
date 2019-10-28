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
var SvgToastError = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#toast-error_svg__clip0)" },
        React.createElement("path", { d: "M19.5 13c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5zm.5 10h-1v-1h1v1zm0-2h-1v-5h1v5z", fill: "#fff" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "toast-error_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "rotate(-180 13.5 13.5)", d: "M0 0h14v14H0z" }))))); };
exports["default"] = SvgToastError;
