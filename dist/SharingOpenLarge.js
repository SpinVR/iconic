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
var SvgSharingOpenLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { filter: "url(#sharing-open-large_svg__filter0_d)", fill: "#fff" },
        React.createElement("path", { d: "M17 27h-6c-.55 0-1-.45-1-1V14c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v2h2v-2c0-1.66-1.34-3-3-3H11c-1.66 0-3 1.34-3 3v12c0 1.66 1.34 3 3 3h6v-2z" }),
        React.createElement("path", { d: "M32 29c0-7.5-4.73-7.42-7-7.5V17l-8 6 8 6v-4.5c1.76-.03 5.5 0 7 4.5z" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "sharing-open-large_svg__filter0_d", x: -2, y: -2, width: 44, height: 44, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgSharingOpenLarge;
