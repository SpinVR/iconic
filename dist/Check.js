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
var SvgCheck = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#check_svg__clip0)" },
        React.createElement("path", { d: "M16.667 29L10 20l4-3 3 4 9.833-11 3.667 3.333L16.667 29z", fill: "#34A1AD" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "check_svg__clip0" })))); };
exports["default"] = SvgCheck;
