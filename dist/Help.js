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
var SvgHelp = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { fill: "#fff" },
        React.createElement("path", { d: "M19.5 13c3.6 0 6.5 2.9 6.5 6.5S23.1 26 19.5 26 13 23.1 13 19.5s2.9-6.5 6.5-6.5zm0-1c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5z" }),
        React.createElement("path", { d: "M20 22h-1v1h1v-1zM19.5 16.5c-1.1 0-2 .9-2 2h1c0-.6.4-1 1-1s1 .4 1 1c0 1-1.5.9-1.5 2.5h1c0-1.1 1.5-1.3 1.5-2.5 0-1.1-.9-2-2-2z" })))); };
exports["default"] = SvgHelp;
