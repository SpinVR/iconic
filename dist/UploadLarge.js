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
var SvgUploadLarge = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { d: "M26.4 30H13.6C10 30 7 27 7 23.3c0-3.4 2.6-6.3 6-6.6 1-3.3 4.2-5.7 7.7-5.7 3.7 0 6.9 2.5 7.8 6 2.7.9 4.5 3.4 4.5 6.3 0 3.7-3 6.7-6.6 6.7zM13.6 18.7c-2.5 0-4.6 2.1-4.6 4.6 0 2.5 2.1 4.7 4.6 4.7h12.7c2.6 0 4.6-2.1 4.6-4.7 0-2.2-1.5-4-3.6-4.5l-.6-.2V18c-.5-2.9-3-5-5.9-5-2.9 0-5.4 2.1-5.9 4.9l-.3.8h-1z", fill: "#fff" }),
    React.createElement("path", { d: "M22 22v3h-3v-3h-2.5l4-4.5 4 4.5H22z", fill: "#fff" }))); };
exports["default"] = SvgUploadLarge;
