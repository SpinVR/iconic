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
var SvgViewerShareCopylink = function (props) { return (React.createElement("svg", __assign({ width: 44, height: 44, fill: "none" }, props),
    React.createElement("g", { filter: "url(#viewer-share-copylink_svg__filter0_d)" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22 5C12.6 5 5 12.6 5 22s7.6 17 17 17 17-7.6 17-17S31.4 5 22 5zm-5.7 8.8h-2.5v16.4h16.4v-2.5H16.3V13.8zm1.6 10.7v-9c0-.9.7-1.7 1.6-1.6h9c.9 0 1.6.7 1.6 1.6v9c0 .9-.7 1.6-1.6 1.6h-9c-.9 0-1.6-.7-1.6-1.6zm2.4-.9h7.4v-7.4h-7.4v7.4z", fill: "#000" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "viewer-share-copylink_svg__filter0_d", x: -2, y: -2, width: 48, height: 48, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgViewerShareCopylink;
