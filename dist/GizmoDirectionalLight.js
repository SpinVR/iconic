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
var SvgGizmoDirectionalLight = function (props) { return (React.createElement("svg", __assign({ width: 101, height: 102, fill: "none" }, props),
    React.createElement("g", { filter: "url(#gizmo-directional-light_svg__filter0_d)", fill: "#fff" },
        React.createElement("path", { d: "M64.612 51c0-7.974-6.392-14.43-14.287-14.43-7.895 0-14.287 6.456-14.287 14.43 0 7.976 6.392 14.432 14.287 14.432 7.895 0 14.287-6.456 14.287-14.431zM40.55 51c0-5.468 4.361-9.873 9.775-9.873 5.414 0 9.775 4.405 9.775 9.874 0 5.468-4.361 9.873-9.775 9.873-5.414 0-9.775-4.405-9.775-9.873zM52.58 25.936h-4.51v4.558h4.51v-4.558zM34.389 31.669l-3.19 3.222 3.19 3.223 3.19-3.223-3.19-3.222zM30.023 48.723h-4.511v4.557h4.511v-4.557zM75.139 48.723h-4.512v4.557h4.512v-4.557zM66.276 31.68l-3.19 3.223 3.19 3.222 3.19-3.222-3.19-3.223z" }),
        React.createElement("path", { d: "M42.825 58.725h15v9h-15zM42.825 69.725h15v2h-15z" })),
    React.createElement("defs", null,
        React.createElement("filter", { id: "gizmo-directional-light_svg__filter0_d", x: -1.175, y: -1, width: 103, height: 104, filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
            React.createElement("feColorMatrix", { "in": "SourceAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
            React.createElement("feOffset", null),
            React.createElement("feGaussianBlur", { stdDeviation: 1 }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0" }),
            React.createElement("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "effect1_dropShadow", result: "shape" }))))); };
exports["default"] = SvgGizmoDirectionalLight;
