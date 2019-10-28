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
var SvgObjectSpecialReflection = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#object-special-reflection_svg__clip0)", fill: "#fff" },
        React.createElement("path", { d: "M12 25v1h15.5v-1H12zM15 13v6.5h-3l3.5 3.5 3.5-3.5h-3V13h-1zM23 23v-6.5h-3l3.5-3.5 3.5 3.5h-3V23h-1z" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "object-special-reflection_svg__clip0" },
            React.createElement("path", { fill: "#fff", transform: "translate(11 13)", d: "M0 0h17v13H0z" }))))); };
exports["default"] = SvgObjectSpecialReflection;
