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
var Rhombus = (function (_super) {
    __extends(Rhombus, _super);
    function Rhombus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Ромб';
        return _this;
    }
    Rhombus.prototype.getRhombusDot = function (i, params) {
        var dotsSize = params.dotsSize, height = params.height, width = params.width, diagonalDotsCount = params.diagonalDotsCount, lineDotsCount = params.lineDotsCount, bgColor = params.bgColor;
        var x, y;
        if (i <= diagonalDotsCount) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCount, diagonalDotsCount * 2 - i);
            y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCount, i + diagonalDotsCount);
        }
        else if (i < diagonalDotsCount * 2) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCount, diagonalDotsCount * 2 - i);
            y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCount, diagonalDotsCount * 3 - i);
        }
        else if (i < diagonalDotsCount * 3) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCount, diagonalDotsCount * 4 - i - 1);
            y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCount, diagonalDotsCount * 3 - i - 1);
        }
        else if (i <= diagonalDotsCount * 4) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCount, diagonalDotsCount * 4 - i - 1);
            y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCount, i - diagonalDotsCount * 3 + 1);
        }
        return { x: x, y: y, width: dotsSize, height: dotsSize, bgColor: bgColor };
    };
    Rhombus.prototype.getCoords = function (config) {
        var params = this.getCommonParams(config);
        var dots = [];
        for (var i = 0; i < params.dotsCount; i++) {
            dots.push(this.getRhombusDot(i, params));
        }
        return dots;
    };
    Rhombus.prototype.getCommonParams = function (config) {
        var dotsCount = config.dotsCount, dotsSize = config.dotsSize, coords = config.coords;
        var diagonalDotsCount = dotsCount / 4;
        var lineDotsCount = dotsCount / 2 + 1;
        var bgColor = Figures.getRandomColor();
        return {
            dotsCount: dotsCount,
            dotsSize: dotsSize,
            width: coords.width,
            height: coords.height,
            diagonalDotsCount: diagonalDotsCount,
            lineDotsCount: lineDotsCount,
            bgColor: bgColor
        };
    };
    return Rhombus;
}(FiguresItem_1.FiguresItem));
exports.Rhombus = Rhombus;
;
