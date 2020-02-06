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
var SvgSizeSmall = function (props) { return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
    React.createElement("path", { d: "M16 10.8h-1v1.3h1v-1.3zM16 13.4h-1v1.3h1v-1.3zM15 9.5h1V8h-1.5v1h.5v.5zM10.6 8H9.3v1h1.3V8zM13.2 8h-1.3v1h1.3V8z", fill: "#fff" }),
    React.createElement("path", { d: "M18 16.5L16 15v1H8V8h1L7.5 6 6 8h1v9h9v1l2-1.5z", fill: "#fff" }))); };
exports["default"] = SvgSizeSmall;
