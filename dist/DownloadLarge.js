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
var SvgDownloadLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { filter: "url(#download-large_svg__filter0_d)", fill: "#fff" },
        React.createElement("path", { d: "M26.35 29h-12.7C9.98 29 7 26.01 7 22.33c0-3.46 2.64-6.31 6.01-6.63 1.03-3.35 4.14-5.7 7.7-5.7 3.68 0 6.86 2.5 7.78 6.03a6.63 6.63 0 014.51 6.3c0 3.68-2.98 6.67-6.65 6.67zM13.58 17.66c-2.5.01-4.58 2.1-4.58 4.67S11.08 27 13.65 27h12.71c2.56 0 4.65-2.09 4.65-4.67 0-2.17-1.48-4.04-3.59-4.53l-.64-.15-.13-.65c-.52-2.9-3.02-5-5.95-5-2.88 0-5.37 2.05-5.94 4.88l-.16.82-1.02-.04z" }),
        React.createElement("path", { d: "M19 20v-3h3v3h2.5l-4 4.5-4-4.5H19z" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "download-large_svg__filter0_d", x: -2, y: -2, width: 44, height: 44, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgDownloadLarge;
