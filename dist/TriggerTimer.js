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
var SvgTriggerTimer = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#trigger-timer_svg__clip0)", fill: "#fff" },
        React.createElement("path", { d: "M20.25 27.5c-4 0-7.25-3.25-7.25-7.25S16.25 13 20.25 13s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25zm0-13.5C16.8 14 14 16.8 14 20.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25S23.7 14 20.25 14z" }),
        React.createElement("path", { d: "M23.76 23.57l-4.01-3.07v-4.96h1V20l3.62 2.77-.61.8z" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "trigger-timer_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "translate(13 13)", d: "M0 0h14.5v14.5H0z" }))))); };
exports["default"] = SvgTriggerTimer;
