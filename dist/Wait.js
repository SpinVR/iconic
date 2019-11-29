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
var SvgWait = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M24 13v3.6L20.6 20l3.4 3.4V27h-8v-3.6l3.4-3.4-3.4-3.4V13h8zm1-1H15v5l3 3-3 3v5h10v-5l-3-3 3-3v-5z", fill: "#fff" }))); };
exports["default"] = SvgWait;
