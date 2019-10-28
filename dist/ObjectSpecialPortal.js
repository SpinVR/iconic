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
var SvgObjectSpecialPortal = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M27 20h-6.5v-3L17 20.5l3.5 3.5v-3H27v-1z", fill: "#fff" }),
    React.createElement("path", { d: "M14 20.5c0-2.7 1.2-5.2 3.3-6.8l-.6-.7c-2.3 1.8-3.7 4.6-3.7 7.5 0 2.9 1.4 5.7 3.7 7.5l.6-.7c-2.1-1.6-3.3-4.1-3.3-6.8z", fill: "#fff" }))); };
exports["default"] = SvgObjectSpecialPortal;
