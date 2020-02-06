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
var SvgViewFront = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M23.3 12H12v11.5l4.5 4.5H28V16l-4.7-4zm3.7 4.5h-9.8L13.7 13H23l4 3.5zm-14 6.6v-9.4l3.5 3.5v9.4L13 23.1z", fill: "#fff" }))); };
exports["default"] = SvgViewFront;
