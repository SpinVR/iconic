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
var SvgCopySmall = function (props) { return (React.createElement("svg", __assign({ width: 24, height: 24, fill: "none" }, props),
    React.createElement("g", { filter: "url(#copy-small_svg__filter0_d)" },
        React.createElement("g", { clipPath: "url(#copy-small_svg__clip0)", fill: "#fff" },
            React.createElement("path", { d: "M17.3 9.7H9.4c-.4 0-.7.3-.7.7v7.9c0 .4.3.7.7.7h7.9c.4 0 .7-.3.7-.7v-7.9c0-.4-.3-.7-.7-.7zm-.6 8H10V11h6.7v6.7z" }),
            React.createElement("path", { d: "M7.3 8.3h7.3V7h-8c-.3 0-.6.3-.6.7v8h1.3V8.3z" }))),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "copy-small_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "translate(6 7)", d: "M0 0h12v12H0z" })),
        React.createElement("filter", { id: "copy-small_svg__filter0_d", x: -2, y: -2, width: 28, height: 28, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgCopySmall;
