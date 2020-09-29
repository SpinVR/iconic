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
var SvgSharingCloseLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { filter: "url(#sharing-close-large_svg__filter0_d)" },
        React.createElement("g", { clipPath: "url(#sharing-close-large_svg__clip0)", fill: "#fff" },
            React.createElement("path", { d: "M25.5 16.07l-6.5 3v8l6.5 3.86 6.5-3.86v-8l-6.5-3zm0 1.1l4.93 2.28-4.93 3.04-4.93-3.04 4.93-2.28zm-5.05 9.6L20 26.5V20.27l4.55 2.8.45.28v6.11l-4.55-2.69zm5.55 2.7v-6.12l.45-.28 4.55-2.8V26.5l-.45.27-4.55 2.7z" }),
            React.createElement("path", { d: "M17 26h-6c-.55 0-1-.45-1-1V13c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v2h2v-2c0-1.66-1.34-3-3-3H11c-1.66 0-3 1.34-3 3v12c0 1.66 1.34 3 3 3h6v-2z" }))),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "sharing-close-large_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "translate(8 10)", d: "M0 0h24v20.93H0z" })),
        React.createElement("filter", { id: "sharing-close-large_svg__filter0_d", x: -2, y: -2, width: 44, height: 44, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgSharingCloseLarge;
