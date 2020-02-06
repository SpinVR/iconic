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
var SvgViewBottom = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M24 19h-1v2h1v-2z", fill: "#fff" }),
    React.createElement("path", { d: "M23.3 12H12v11.5l4.5 4.5H28V16l-4.7-4zM16 23h-3v-9.3l3 3V23zm-2.3-10H23v2h1v-1.1l2.5 2.1h-9.8l-3-3zM27 26.6l-1.2-1.2-.7-.7-1.1-1.1V22h-1v1h-6v-6h6v1h1v-1h3v9.6z", fill: "#fff" }))); };
exports["default"] = SvgViewBottom;
