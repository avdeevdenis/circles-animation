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
var Cross = (function (_super) {
    __extends(Cross, _super);
    function Cross() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Крест';
        return _this;
    }
    Cross.prototype.getCrossDot = function (i, params) {
        var dotsSize = params.dotsSize, height = params.height, width = params.width, lineDotsCount = params.lineDotsCount, lineDotsCountX2 = params.lineDotsCountX2, lineDotsCountX3 = params.lineDotsCountX3, lineDotsCountX4 = params.lineDotsCountX4, bgColor = params.bgColor;
        var x, y;
        if (i < lineDotsCount) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCountX2, lineDotsCountX2 - i - 1);
            y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCountX2, lineDotsCountX2 - i - 1);
        }
        else if (i < lineDotsCountX2) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCountX2, lineDotsCountX2 - i - 1);
            y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCountX2, i);
        }
        else if (i < lineDotsCountX3) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCountX2, lineDotsCountX4 - i - 1);
            y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCountX2, i - lineDotsCountX2);
        }
        else if (i < lineDotsCountX4) {
            x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCountX2, lineDotsCountX4 - i - 1);
            y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCountX2, lineDotsCountX4 - i - 1);
        }
        return { x: x, y: y, width: dotsSize, height: dotsSize, bgColor: bgColor };
    };
    Cross.prototype.getCoords = function (config) {
        var params = this.getCommonParams(config);
        var dots = [];
        for (var i = 0; i < params.dotsCount; i++) {
            dots.push(this.getCrossDot(i, params));
        }
        return dots;
    };
    Cross.prototype.getCommonParams = function (config) {
        var dotsCount = config.dotsCount, dotsSize = config.dotsSize, coords = config.coords;
        var lineDotsCount = dotsCount / 4;
        var lineDotsCountX2 = lineDotsCount * 2;
        var lineDotsCountX3 = lineDotsCount * 3;
        var lineDotsCountX4 = lineDotsCount * 4;
        var bgColor = Figures.getRandomColor();
        return {
            dotsCount: dotsCount,
            dotsSize: dotsSize,
            width: coords.width,
            height: coords.height,
            lineDotsCount: lineDotsCount,
            lineDotsCountX2: lineDotsCountX2,
            lineDotsCountX3: lineDotsCountX3,
            lineDotsCountX4: lineDotsCountX4,
            bgColor: bgColor
        };
    };
    return Cross;
}(FiguresItem_1.FiguresItem));
exports.Cross = Cross;
;
