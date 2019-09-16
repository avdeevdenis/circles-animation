"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
exports.Rectangle = Rectangle_1.Rectangle;
var Line_1 = require("./Line");
exports.Line = Line_1.Line;
var CurvedLine_1 = require("./CurvedLine");
exports.CurvedLine = CurvedLine_1.CurvedLine;
var Rhombus_1 = require("./Rhombus");
exports.Rhombus = Rhombus_1.Rhombus;
var Cross_1 = require("./Cross");
exports.Cross = Cross_1.Cross;
var Triangle_1 = require("./Triangle");
exports.Triangle = Triangle_1.Triangle;
function getDistanceBetweenDots(templateSize, dotsSize, dotsCount) {
    return (templateSize - dotsSize * dotsCount) / (dotsCount + 1);
}
exports.getDistanceBetweenDots = getDistanceBetweenDots;
function getDotOffsetByIndex(distance, dotsSize, i) {
    return distance * (i + 1) + dotsSize * i;
}
exports.getDotOffsetByIndex = getDotOffsetByIndex;
function getDotOffsetByDistance(templateSize, dotsSize, dotsCount, counter) {
    var distance = getDistanceBetweenDots(templateSize, dotsSize, dotsCount);
    return getDotOffsetByIndex(distance, dotsSize, dotsCount - 1 - counter);
}
exports.getDotOffsetByDistance = getDotOffsetByDistance;
function getFirstDotCoords(templateSize, dotsSize, dotsCount) {
    var distance = getDistanceBetweenDots(templateSize, dotsSize, dotsCount);
    return getDotOffsetByIndex(distance, dotsSize, 0);
}
exports.getFirstDotCoords = getFirstDotCoords;
function getLastDotCoords(templateSize, dotsSize, dotsCount) {
    var distance = getDistanceBetweenDots(templateSize, dotsSize, dotsCount);
    return getDotOffsetByIndex(distance, dotsSize, dotsCount - 1);
}
exports.getLastDotCoords = getLastDotCoords;
function getRandomColor() {
    return '#' + Math.random().toString(16).substr(-6);
}
exports.getRandomColor = getRandomColor;
