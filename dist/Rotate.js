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
var SvgRotate = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M25.6 22.566l.9.302c.1-.403.2-.805.3-1.308l-1-.201c0 .503-.1.905-.2 1.207zM27 20.352c0-.402 0-.905-.1-1.308l-1 .201c0 .403.1.705.1 1.107h1zM24.5 24.579l.8.603c.3-.301.5-.704.7-1.106l-.9-.504c-.1.403-.3.705-.6 1.007zM22.8 25.987l.5.906c.4-.201.7-.503 1-.805l-.7-.805c-.1.302-.4.604-.8.704zM20.8 26.893L21 27.9c.4-.1.8-.2 1.2-.402l-.4-.906c-.3.1-.7.201-1 .302zM13 20.453c0-3.623 2.9-6.541 6.5-6.541.9 0 1.7.201 2.4.503l-.9 1.51h4L23.4 12l-.9 1.51c-.9-.403-1.9-.604-3-.604-4.1 0-7.5 3.32-7.5 7.547C12 24.679 15.4 28 19.5 28h.5v-1.006h-.5c-3.6 0-6.5-2.918-6.5-6.541z", fill: "#fff" }))); };
exports["default"] = SvgRotate;
