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
var SvgUploadPresentation = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 13h-8v14h8V13zm-9 3h-5v8h5v-8zm10 0h5v8h-5v-8z", fill: "#fff" }))); };
exports["default"] = SvgUploadPresentation;
