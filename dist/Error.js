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
var SvgError = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { filter: "url(#error_svg__filter0_d)" },
        React.createElement("path", { d: "M19.5 13c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5 6.5-2.9 6.5-6.5-2.9-6.5-6.5-6.5zm.5 10h-1v-1h1v1zm0-2h-1v-5h1v5z", fill: "#fff" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "error_svg__filter0_d", x: 6, y: 6, width: 28, height: 28, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgError;
