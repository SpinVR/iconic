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
var SvgOutputLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M30 10v20H10V10h20zm2-2H8v24h24V8z", fill: "#fff" }),
    React.createElement("path", { d: "M25 15v10H15V15h10zm1-1H14v12h12V14z", fill: "#fff" }))); };
exports["default"] = SvgOutputLarge;
