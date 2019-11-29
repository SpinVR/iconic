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
var SvgViewerConfigurator = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { filter: "url(#viewer-configurator_svg__filter0_d)", fill: "#fff" },
        React.createElement("path", { d: "M24 17c-1.3 0-2.4.8-2.8 2H10v2h11.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H31v-2h-4.2c-.4-1.2-1.5-2-2.8-2zm0 4.5c-.4 0-.8-.2-1.1-.5-.2-.3-.4-.6-.4-1s.2-.7.4-1c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.2.3.4.6.4 1s-.2.7-.4 1c-.3.3-.7.5-1.1.5zM16 24c-1.3 0-2.4.8-2.8 2H10v2h3.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H31v-2H18.8c-.4-1.2-1.5-2-2.8-2zm0 4.5c-.4 0-.8-.2-1.1-.5-.2-.3-.4-.6-.4-1s.2-.7.4-1c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.2.3.4.6.4 1s-.2.7-.4 1c-.3.3-.7.5-1.1.5zM18.8 12c-.4-1.2-1.5-2-2.8-2-1.3 0-2.4.8-2.8 2H10v2h3.2c.4 1.2 1.5 2 2.8 2 1.3 0 2.4-.8 2.8-2H31v-2H18.8zM16 14.5c-.4 0-.8-.2-1.1-.5-.2-.3-.4-.6-.4-1s.2-.7.4-1c.3-.3.7-.5 1.1-.5.4 0 .8.2 1.1.5.2.3.4.6.4 1s-.2.7-.4 1c-.3.3-.7.5-1.1.5z" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "viewer-configurator_svg__filter0_d", x: -2, y: -2, width: 44, height: 44, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgViewerConfigurator;
