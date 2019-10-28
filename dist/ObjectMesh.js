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
var SvgObjectMesh = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#object-mesh_svg__clip0)" },
        React.createElement("path", { d: "M19.5 13L12 26.86h15L19.5 13zm.5 3.02l5.14 9.49L20 22.09v-6.07zm-1 6.07l-5.14 3.42L19 16.02v6.07zm.5.87l4.35 2.9h-8.7l4.35-2.9z", fill: "#fff" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "object-mesh_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "translate(12 13)", d: "M0 0h15v13.86H0z" }))))); };
exports["default"] = SvgObjectMesh;
