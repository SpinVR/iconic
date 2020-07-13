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
var SvgCommentPinSmall = function (props) { return (React.createElement("svg", __assign({ width: 20, height: 23, fill: "none" }, props),
    React.createElement("path", { d: "M20 9.885C19.5 17.047 10 23 10 23S0 15.873 0 9.885C0 3.896 4.477 0 10 0s10 3.896 10 9.885z", fill: "#fff" }))); };
exports["default"] = SvgCommentPinSmall;
