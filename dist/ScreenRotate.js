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
var SvgScreenRotate = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { filter: "url(#screen-rotate_svg__filter0_d)", fill: "#fff" },
        React.createElement("path", { d: "M14 20c0-3.3 2.7-6 6-6 .9 0 1.7.2 2.4.5l2.2-2.2c-1.3-.8-2.9-1.3-4.6-1.3-5 0-9 4-9 9H8l4.5 5 4.5-5h-3zM32 20l-4.5-5-4.5 5h3c0 3.3-2.7 6-6 6-.9 0-1.7-.2-2.5-.5l-2.2 2.2c1.4.8 3 1.3 4.7 1.3 5 0 9-4 9-9h3z" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "screen-rotate_svg__filter0_d", x: -2, y: -2, width: 44, height: 44, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgScreenRotate;
