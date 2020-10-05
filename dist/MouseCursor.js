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
var SvgMouseCursor = function (props) { return (React.createElement("svg", __assign({ width: 36, height: 36, fill: "none" }, props),
    React.createElement("mask", { id: "mouse-cursor_svg__a", fill: "#fff" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.373 16.881L6.746 6.746 16.88 30.373l4.987-4.987 5.627 5.627 3.518-3.518-5.627-5.627 4.987-4.987z" })),
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.373 16.881L6.746 6.746 16.88 30.373l4.987-4.987 5.627 5.627 3.518-3.518-5.627-5.627 4.987-4.987z", fill: "#fff", fillOpacity: 0.5 }),
    React.createElement("path", { d: "M6.746 6.746l.394-.92-2.3-.986.987 2.3.919-.394zM30.373 16.88l.707.707 1.044-1.044-1.357-.582-.394.92zM16.88 30.373l-.919.394.582 1.357 1.044-1.044-.707-.707zm4.987-4.987l.707-.707-.707-.707-.707.707.707.707zm5.627 5.627l-.707.707.707.707.707-.707-.707-.707zm3.518-3.518l.707.707.707-.707-.707-.707-.707.707zm-5.627-5.627l-.707-.707-.707.707.707.707.707-.707zM6.352 7.665L29.979 17.8l.788-1.838L7.14 5.827l-.788 1.838zM17.8 29.979L7.665 6.352l-1.838.788 10.135 23.627 1.838-.788zm3.361-5.3l-4.987 4.987 1.414 1.414 4.987-4.987-1.414-1.414zm7.041 5.627l-5.627-5.627-1.414 1.414 5.627 5.627 1.414-1.414zm2.104-3.518l-3.518 3.518 1.414 1.414 3.518-3.518-1.414-1.414zm-5.627-4.213l5.627 5.627 1.414-1.414-5.627-5.627-1.414 1.414zm4.987-6.4l-4.987 4.986 1.414 1.414 4.987-4.987-1.414-1.414z", fill: "#043194", mask: "url(#mouse-cursor_svg__a)" }))); };
exports["default"] = SvgMouseCursor;
