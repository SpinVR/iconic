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
var SvgObjectSearch = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#object-search_svg__clip0)" },
        React.createElement("path", { d: "M27.85 27.15l-4.42-4.42A6.471 6.471 0 0025 18.5a6.5 6.5 0 10-6.5 6.5c1.61 0 3.09-.59 4.23-1.57l4.42 4.42.7-.7zM18.5 24a5.51 5.51 0 01-5.5-5.5c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z", fill: "#fff" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "object-search_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "translate(12 12)", d: "M0 0h15.85v15.85H0z" }))))); };
exports["default"] = SvgObjectSearch;
