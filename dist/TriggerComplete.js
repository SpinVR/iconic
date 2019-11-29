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
var SvgTriggerComplete = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#trigger-complete_svg__clip0)", fill: "#C4C4C4" },
        React.createElement("path", { d: "M16 13h9v1h-9z" }),
        React.createElement("path", { d: "M20 13h1v8h-1v-8z" }),
        React.createElement("path", { d: "M20.5 26l-3.897-6h7.794L20.5 26z" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "trigger-complete_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "translate(13 13)", d: "M0 0h14.27v13.48H0z" }))))); };
exports["default"] = SvgTriggerComplete;
