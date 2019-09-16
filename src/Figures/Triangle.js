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
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Треугольник';
        return _this;
    }
    Triangle.prototype.getTriangleDot = function (i, params) {
        var dotsSize = params.dotsSize, height = params.height, width = params.width, bottomDotsCount = params.bottomDotsCount, sideDotsCount = params.sideDotsCount, horizontalDotsCount = params.horizontalDotsCount, verticalDotsCount = params.verticalDotsCount, bgColor = params.bgColor;
        var x, y;
        if (i < sideDotsCount) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, sideDotsCount * 2 - i + 1);
            y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, i + 1);
        }
        else if (i < sideDotsCount + bottomDotsCount) {
            var offset = (horizontalDotsCount - 1) / (bottomDotsCount - 1);
            x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, sideDotsCount * 2 - (i - sideDotsCount) * offset + 2);
            y = Figures.getLastDotCoords(height, dotsSize, verticalDotsCount);
        }
        else {
            x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, bottomDotsCount + sideDotsCount * 2 - i + 1);
            y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, bottomDotsCount + sideDotsCount * 2 - i + 1);
        }
        return { x: x, y: y, width: dotsSize, height: dotsSize, bgColor: bgColor };
    };
    Triangle.prototype.getCoords = function (config) {
        var params = this.getCommonParams(config);
        var dots = [];
        for (var i = 0; i < params.dotsCount; i++) {
            dots.push(this.getTriangleDot(i, params));
        }
        return dots;
    };
    Triangle.prototype.getCommonParams = function (config) {
        var dotsCount = config.dotsCount, dotsSize = config.dotsSize, coords = config.coords;
        var bottomDotsCount = dotsCount / 2 - 1;
        var sideDotsCount = (dotsCount - bottomDotsCount - 1) / 2;
        var horizontalDotsCount = sideDotsCount * 2 + 3;
        var verticalDotsCount = sideDotsCount + 2;
        var bgColor = Figures.getRandomColor();
        return {
            dotsCount: dotsCount,
            dotsSize: dotsSize,
            width: coords.width,
            height: coords.height,
            bottomDotsCount: bottomDotsCount,
            sideDotsCount: sideDotsCount,
            horizontalDotsCount: horizontalDotsCount,
            verticalDotsCount: verticalDotsCount,
            bgColor: bgColor
        };
    };
    return Triangle;
}(FiguresItem_1.FiguresItem));
exports.Triangle = Triangle;
;
