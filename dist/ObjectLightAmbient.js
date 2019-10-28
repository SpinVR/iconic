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
var SvgObjectLightAmbient = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M23 22h-6v4h6v-4zM22 27h-4v1h4v-1z", fill: "#fff" }),
    React.createElement("path", { d: "M20 12c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-2.97 2c.83-.62 1.85-1 2.97-1s2.14.38 2.97 1h-5.94zm-1.93 3c.15-.74.48-1.42.92-2h7.95c.44.58.77 1.26.92 2H15.1zm.32 3a4.94 4.94 0 01-.42-2h10c0 .71-.15 1.39-.42 2h-9.16zM20 23c-1.63 0-3.06-.79-3.97-2h7.95c-.92 1.21-2.35 2-3.98 2z", fill: "#fff" }))); };
exports["default"] = SvgObjectLightAmbient;
