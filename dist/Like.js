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
var SvgLike = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M12 20v7h4v-8h-3c-.6 0-1 .4-1 1zm3 6h-2v-6h2v6zM25.9 19.1h-1.4c-.8 0-1.3-.8-.9-1.4l1-1.8c.5-.9.2-2-.7-2.5l-.3-.2c-.1-.1-.3-.2-.5-.2-.3 0-.6.1-.8.3l-4.8 5.3c-.3.3-.5.8-.5 1.2V27h7.8c1 0 1.8-.6 2-1.5l1.1-3.9c.4-1.3-.6-2.5-2-2.5zm1.1 2.2l-1.1 3.9c-.1.4-.6.8-1.1.8H18v-6.2c0-.2.1-.4.2-.6L23 14h.2l.3.2c.3.3.5.8.2 1.2l-1 1.8c-.3.6-.3 1.3 0 1.9.4.6 1 1 1.8 1h1.4c.4 0 .7.2.9.4.1.2.3.5.2.8z", fill: "#fff" }))); };
exports["default"] = SvgLike;
