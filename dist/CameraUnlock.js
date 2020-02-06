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
var SvgCameraUnlock = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M19 23a3 3 0 100-6 3 3 0 000 6zM22 12h-6v1h6v-1z", fill: "#fff" }),
    React.createElement("path", { d: "M12 15h14v2h1v-3H11v12h9v-1h-8V15z", fill: "#fff" }),
    React.createElement("path", { d: "M25.2 23v-1.5c0-.7.6-1.2 1.2-1.2.7 0 1.2.5 1.2 1.2l1.4-.3c-.2-1.2-1.2-2.2-2.5-2.2-1.4 0-2.5 1.1-2.5 2.5V23h-1v5h7v-5h-4.8zm3.8 4h-5v-3h5v3z", fill: "#fff" }))); };
exports["default"] = SvgCameraUnlock;
