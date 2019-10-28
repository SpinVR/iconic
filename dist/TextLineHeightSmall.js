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
var SvgTextLineHeightSmall = function (props) { return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
    React.createElement("path", { d: "M12 9H7v1h5V9zM12 12H7v1h5v-1zM12 15H7v1h5v-1zM16 12V9h1l-1.5-2L14 9h1v7h-1l1.5 2 1.5-2h-1v-4z", fill: "#fff" }))); };
exports["default"] = SvgTextLineHeightSmall;
