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
var SvgWaypointStraight = function (props) { return (React.createElement("svg", __assign({ width: 40, height: 40, fill: "none" }, props),
    React.createElement("g", { clipPath: "url(#waypoint-straight_svg__clip0)" },
        React.createElement("path", { d: "M27.6 12.4c-.1-.1-.3-.2-.5-.3-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1-.3.1-.5.3-.7.5-.1.3-.2.6-.2.9 0 .3.1.6.3.8l.3.3-2 5.4c-.2 0-.4 0-.6.1l-5.1-5.9c0-.2.1-.4.1-.7 0-.4-.2-.8-.4-1.1-.1-.1-.3-.2-.5-.3-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1-.3.1-.5.3-.7.5-.1.3-.2.6-.2.9 0 .3.1.6.3.8.1.2.3.3.4.4L13.3 25c-.1 0-.3 0-.4.1-.3.1-.5.3-.7.5-.2.2-.3.5-.3.8 0 .3.1.6.3.8.2.2.4.4.7.5.2.1.4.1.6.1.2 0 .4 0 .6-.1.2-.1.3-.2.5-.3.3-.3.4-.6.4-1.1 0-.4-.2-.8-.4-1.1-.1-.1-.2-.1-.3-.2l2.4-10c.1 0 .3 0 .4-.1l5.1 5.9c-.1.2-.2.4-.2.7 0 .3.1.6.3.8.2.2.4.4.7.5.2.1.4.1.6.1.2 0 .4 0 .6-.1.2-.1.3-.2.5-.3.3-.3.4-.6.4-1.1 0-.4-.2-.8-.4-1.1l-.1-.1 2-5.4c.2 0 .4 0 .6-.1.2-.1.3-.2.5-.3.1-.1.3-.5.3-.9s-.2-.8-.4-1.1zM13.5 27c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm3-13c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm7 8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5zm3-8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z", fill: "#fff" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "waypoint-straight_svg__clip0" },
            React.createElement("path", { fill: "#fff", d: "M12 12h16v16H12z" }))))); };
exports["default"] = SvgWaypointStraight;
