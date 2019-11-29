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
var SvgViewRightLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M15 8h17v17.3L25.3 32H8V14l7-6zm-3.3 5.5h12.4l4.2-3.5H15.8l-4.1 3.5zM30 11.2L25.5 15v14l4.5-4.5V11.2zM23.5 30V15.5H10V30h13.5z", fill: "#fff" }),
    React.createElement("path", { d: "M29 24l-2.5 2.5V15.4l2.5-2.1V24z", fill: "#fff" }))); };
exports["default"] = SvgViewRightLarge;
