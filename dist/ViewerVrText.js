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
var SvgViewerVrText = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { filter: "url(#viewer-vr-text_svg__filter0_d)", fill: "#000" },
        React.createElement("path", { d: "M17.072 15.12h2.32L16.864 26h-4.08l-2.528-10.88h2.32l1.888 8.96h.72l1.888-8.96zM23.033 22.352V26h-2.208V15.12h4.224c2.56 0 3.84 1.195 3.84 3.584 0 1.419-.534 2.464-1.6 3.136L28.84 26h-2.416l-1.264-3.648h-2.128zm2.048-1.888c.522 0 .912-.16 1.168-.48.256-.32.384-.741.384-1.264s-.14-.939-.416-1.248c-.267-.31-.656-.464-1.168-.464h-2.016v3.456h2.048z" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "viewer-vr-text_svg__filter0_d", x: -2, y: -2, width: 44, height: 44, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgViewerVrText;
