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
var SvgUnpinLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M23 12v7.6l.3.5 1.2 2h-9l1.2-2 .3-.5V12h6zm2-2H15v9l-3 5h7v7h2v-7h7l-3-5v-9z", fill: "#fff" }))); };
exports["default"] = SvgUnpinLarge;
