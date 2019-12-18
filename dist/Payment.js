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
var SvgPayment = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#payment_svg__clip0)" },
        React.createElement("path", { d: "M25.3 15H14c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h11.3c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm0 1v2H14v-2h11.3zM14 24v-4h11.3v4H14z", fill: "#fff" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "payment_svg__clip0" },
            React.createElement("path", { fill: "#fff", d: "M13 15h13.3v10H13z" }))))); };
exports["default"] = SvgPayment;
