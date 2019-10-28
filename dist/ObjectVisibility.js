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
var SvgObjectVisibility = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M20 22a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", fill: "#fff" }),
    React.createElement("path", { d: "M20 17.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-1c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z", fill: "#fff" }),
    React.createElement("path", { d: "M20 15c3.04 0 5.78 1.79 6.93 4.5C25.78 22.21 23.04 24 20 24c-3.04 0-5.78-1.79-6.93-4.5C14.22 16.79 16.96 15 20 15zm0-1c-3.7 0-6.83 2.3-8 5.5 1.17 3.2 4.3 5.5 8 5.5s6.83-2.3 8-5.5c-1.17-3.2-4.3-5.5-8-5.5z", fill: "#fff" }))); };
exports["default"] = SvgObjectVisibility;
