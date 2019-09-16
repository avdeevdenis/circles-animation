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
var CurvedLine = (function (_super) {
    __extends(CurvedLine, _super);
    function CurvedLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Кривая линия';
        return _this;
    }
    CurvedLine.prototype.getLineDot = function (i, params) {
        var dotsSize = params.dotsSize, dotsCount = params.dotsCount, width = params.width, height = params.height, bgColor = params.bgColor;
        var isEven = i % 2 === 0;
        var offset = isEven ? dotsSize / 2 : -dotsSize / 2;
        var x = Figures.getDotOffsetByDistance(width, dotsSize, dotsCount, dotsCount - i - 1);
        var y = height / 2 - dotsSize / 2 + offset;
        return { x: x, y: y, width: dotsSize, height: dotsSize, bgColor: bgColor };
    };
    CurvedLine.prototype.getCoords = function (config) {
        var params = this.getCommonParams(config);
        var dots = [];
        for (var i = 0; i < params.dotsCount; i++) {
            dots.push(this.getLineDot(i, params));
        }
        return dots;
    };
    CurvedLine.prototype.getCommonParams = function (config) {
        var dotsCount = config.dotsCount, dotsSize = config.dotsSize, coords = config.coords;
        var bgColor = Figures.getRandomColor();
        return {
            dotsCount: dotsCount,
            dotsSize: dotsSize,
            width: coords.width,
            height: coords.height,
            bgColor: bgColor
        };
    };
    return CurvedLine;
}(FiguresItem_1.FiguresItem));
exports.CurvedLine = CurvedLine;
;
