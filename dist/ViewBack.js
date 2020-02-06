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
var SvgViewBack = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M23.3 12H12v11.5l4.5 4.5H28V16l-4.7-4zM16 26.1L13.9 24H16v2.1zM24 15v-1.1l2.5 2.1H24v-1zm3 11.6v.4H17V17h10v9.6z", fill: "#fff" }))); };
exports["default"] = SvgViewBack;
