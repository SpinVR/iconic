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
var SvgTriggerSequential = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M23 25h-7v3h7v-3zM19 18v3h-1.5l2 3 2-3H20v-3h-1zM19.5 17c2.5 0 4.5-2 4.5-4.5V12h-9v.5c0 2.5 2 4.5 4.5 4.5z", fill: "#fff" }))); };
exports["default"] = SvgTriggerSequential;
