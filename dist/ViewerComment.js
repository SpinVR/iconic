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
var SvgViewerComment = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M28.849 12H11.15C9.978 12 9 12.95 9 14.09v9.497c0 1.14.978 2.089 2.151 2.089h6.551L20.244 29l2.543-3.324h6.062c1.173 0 2.151-.95 2.151-2.09V14.09C31 12.95 30.022 12 28.849 12z", fill: "#000" }))); };
exports["default"] = SvgViewerComment;
