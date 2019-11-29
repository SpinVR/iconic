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
var SvgTriggerClick = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.793 12.429h1.414V17h-1.414v-4.571zM17 18.793h-4.571v1.414H17v-1.414zM18.793 22v4.571h1.414V22h-1.414zM22 20.207h4.571v-1.414H22v1.414z", fill: "#fff" }))); };
exports["default"] = SvgTriggerClick;
