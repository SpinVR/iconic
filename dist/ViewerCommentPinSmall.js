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
var SvgViewerCommentPinSmall = function (props) { return (React.createElement("svg", __assign({ width: 30, height: 30, fill: "none" }, props),
    React.createElement("g", { filter: "url(#viewer-comment-pin-small_svg__filter0_d)" },
        React.createElement("path", { d: "M25 12.885C24.5 20.047 15 26 15 26S5 18.873 5 12.885C5 6.896 9.477 3 15 3s10 3.896 10 9.885z", fill: "#000" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "viewer-comment-pin-small_svg__filter0_d", x: -2, y: -2, width: 34, height: 34, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgViewerCommentPinSmall;
