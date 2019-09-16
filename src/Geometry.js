"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Figures_1 = require("./Figures");
var Geometry = (function () {
    function Geometry() {
        this.currentIndex = 0;
        this.figures = this.getFiguresSequence();
        this.currentFigure = this.getCurrent();
        this.nextFigure = this.getNext();
    }
    Geometry.prototype.getFiguresSequence = function () {
        return [
            new Figures_1.Line(),
            new Figures_1.CurvedLine(),
            new Figures_1.Rectangle(),
            new Figures_1.Rhombus(),
            new Figures_1.Cross(),
            new Figures_1.Triangle()
        ];
    };
    Geometry.prototype.getCurrent = function () {
        return this.figures[this.currentIndex];
    };
    Geometry.prototype.getCurrentCoords = function (config) {
        return this.getCurrent()
            .getCoords(config)
            .map(this.mapStyle);
    };
    Geometry.prototype.setCurrent = function (figure) {
        var i = 0;
        while (figure !== this.getCurrent().name && i++ < this.figures.length) {
            this.updateNext();
        }
    };
    Geometry.prototype.getNext = function () {
        return this.figures[this.currentIndex + 1] || this.figures[0];
    };
    Geometry.prototype.updateNext = function () {
        var nextIndex = this.currentIndex + 1;
        if (!this.figures[nextIndex]) {
            nextIndex = 0;
        }
        this.currentFigure = this.nextFigure;
        this.nextFigure = this.figures[nextIndex];
        this.currentIndex = nextIndex;
    };
    Geometry.prototype.mapStyle = function (options) {
        var _a = options.x, x = _a === void 0 ? 0 : _a, _b = options.y, y = _b === void 0 ? 0 : _b, _c = options.bgColor, bgColor = _c === void 0 ? '' : _c;
        var style = {};
        if (bgColor) {
            style.backgroundColor = bgColor;
        }
        if (options.width) {
            style.width = options.width;
        }
        if (options.height) {
            style.height = options.height;
        }
        style.transform = "translate3d(" + x + "px, " + y + "px, 0)";
        return { style: style };
    };
    return Geometry;
}());
exports.Geometry = Geometry;
;
