"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
var sum = function (a, b) {
    return a + b;
};
app.get('/', function (req, res) {
    var a = Math.floor(Math.random() * 100);
    var b = Math.floor(Math.random() * 100);
    res.send("Sum of " + a + " and " + b + ": " + sum(a, b));
});
app.listen(port, function (err) {
    if (err) {
        return console.error(err);
    }
    return console.log("server is listening on " + port);
});
