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
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Линия';
        return _this;
    }
    Line.prototype.getLineDot = function (i, params) {
        var dotsSize = params.dotsSize, dotsCount = params.dotsCount, width = params.width, bgColor = params.bgColor, y = params.y;
        var x = Figures.getDotOffsetByDistance(width, dotsSize, dotsCount, dotsCount - i - 1);
        return { x: x, y: y, width: dotsSize, height: dotsSize, bgColor: bgColor };
    };
    Line.prototype.getCoords = function (config) {
        var params = this.getCommonParams(config);
        var dots = [];
        for (var i = 0; i < params.dotsCount; i++) {
            dots.push(this.getLineDot(i, params));
        }
        return dots;
    };
    Line.prototype.getCommonParams = function (config) {
        var dotsCount = config.dotsCount, dotsSize = config.dotsSize, coords = config.coords;
        var y = coords.height / 2 - dotsSize / 2;
        var bgColor = Figures.getRandomColor();
        return {
            dotsCount: dotsCount,
            dotsSize: dotsSize,
            width: coords.width,
            y: y,
            bgColor: bgColor
        };
    };
    return Line;
}(FiguresItem_1.FiguresItem));
exports.Line = Line;
;
