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
var SvgObjectPrimitiveTorus = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M20 14c-4.4 0-8 2.9-8 6.5s3.6 6.5 8 6.5 8-2.9 8-6.5-3.6-6.5-8-6.5zm0 12c-3.9 0-7-2.5-7-5.5s3.1-5.5 7-5.5 7 2.5 7 5.5-3.1 5.5-7 5.5z", fill: "#fff" }),
    React.createElement("path", { d: "M20 18c-1.7 0-3 .9-3 2s1.3 2 3 2 3-.9 3-2-1.3-2-3-2zm0 3c-1.2 0-2-.6-2-1s.8-1 2-1 2 .6 2 1-.8 1-2 1z", fill: "#fff" }))); };
exports["default"] = SvgObjectPrimitiveTorus;
