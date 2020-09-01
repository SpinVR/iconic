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
var SvgItemViewGrid = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M13 19h6v-6h-6v6zm8 0h6v-6h-6v6zM13 27h6v-6h-6v6zm8 0h6v-6h-6v6z", fill: "#C2C2C2" }))); };
exports["default"] = SvgItemViewGrid;
