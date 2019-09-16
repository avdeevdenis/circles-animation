"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Figures = __importStar(require("."));
var FiguresItem_1 = require("./FiguresItem");
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Прямоугольник';
        return _this;
    }
    Rectangle.prototype.getRectangleDot = function (i, params) {
        var dotsSize = params.dotsSize, width = params.width, height = params.height, verticalDotsCount = params.verticalDotsCount, horizontalDotsCount = params.horizontalDotsCount, bgColor = params.bgColor;
        var side = {
            left: i < verticalDotsCount,
            top: i < horizontalDotsCount + verticalDotsCount,
            bottom: i <= horizontalDotsCount * 2 + verticalDotsCount,
            right: i < horizontalDotsCount * 2 + verticalDotsCount * 2
        };
        var x, y;
        if (side.left) {
            var offset = horizontalDotsCount - verticalDotsCount;
            x = Figures.getFirstDotCoords(width, dotsSize, verticalDotsCount + offset + 2);
            y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, i);
        }
        else if (side.top) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount + 2, horizontalDotsCount + verticalDotsCount - i);
            y = Figures.getFirstDotCoords(height, dotsSize, verticalDotsCount);
        }
        else if (side.bottom) {
            var offset = horizontalDotsCount * 2 + verticalDotsCount;
            x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount + 2, offset - i);
            y = Figures.getLastDotCoords(height, dotsSize, verticalDotsCount);
        }
        else if (side.right) {
            var offset = horizontalDotsCount - verticalDotsCount;
            var offsetSecond = horizontalDotsCount + verticalDotsCount * 2 - 2;
            x = Figures.getLastDotCoords(width, dotsSize, verticalDotsCount + offset + 2);
            y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, i - offsetSecond);
        }
        return { x: x, y: y, width: dotsSize, height: dotsSize, bgColor: bgColor };
    };
    Rectangle.prototype.getRectangleDotCount = function (dotsCount) {
        var fn = function (dots, startedDots) { return Math.floor((dots - startedDots) / 2 / 2) + 1; };
        var horizontalDotsCount = fn(dotsCount, 6);
        var verticalDotsCount = (dotsCount - (horizontalDotsCount * 2)) / 2;
        return {
            verticalDotsCount: verticalDotsCount, horizontalDotsCount: horizontalDotsCount
        };
    };
    Rectangle.prototype.getCoords = function (config) {
        var params = this.getCommonParams(config);
        var dots = [];
        for (var i = 0; i < params.dotsCount; i++) {
            dots.push(this.getRectangleDot(i, params));
        }
        return dots;
    };
    Rectangle.prototype.getCommonParams = function (config) {
        var dotsCount = config.dotsCount, dotsSize = config.dotsSize, coords = config.coords;
        var _a = this.getRectangleDotCount(dotsCount), verticalDotsCount = _a.verticalDotsCount, horizontalDotsCount = _a.horizontalDotsCount;
        var bgColor = Figures.getRandomColor();
        return {
            dotsCount: dotsCount,
            dotsSize: dotsSize,
            width: coords.width,
            height: coords.height,
            verticalDotsCount: verticalDotsCount,
            horizontalDotsCount: horizontalDotsCount,
            bgColor: bgColor
        };
    };
    return Rectangle;
}(FiguresItem_1.FiguresItem));
exports.Rectangle = Rectangle;
;
