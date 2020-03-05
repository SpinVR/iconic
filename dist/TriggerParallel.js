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
var SvgTriggerParallel = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M15.5 19a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM28 12h-7v7h7v-7zM25 21h-1v4h-1.5l2 3 2-3H25v-4zM16 21h-1v4h-1.5l2 3 2-3H16v-4z", fill: "#fff" }))); };
exports["default"] = SvgTriggerParallel;
