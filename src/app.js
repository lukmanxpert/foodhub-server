"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var port = process.env.PORT || 5000;
console.log("port", port);
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.APP_URL,
}));
exports.default = app;
