import { Rectangle } from './Rectangle';
import { Line } from './Line';
import { CurvedLine } from './CurvedLine';
import { Rhombus } from './Rhombus';
import { Cross } from './Cross';
import { Triangle } from './Triangle';

/**
 * Возвращает расстояние между точками
 */
function getDistanceBetweenDots(templateSize: number, dotsSize: number, dotsCount: number): number {
    return (templateSize - dotsSize * dotsCount) / (dotsCount + 1);
}

/**
 * Возвращает смещение точки в зависимости от индекса
 */
function getDotOffsetByIndex(distance: number, dotsSize: number, i: number): number {
    return distance * (i + 1) + dotsSize * i;
}

/**
 * Выполняет сначала getDistanceBetweenDots, затем getDotOffsetByIndex
 */
function getDotOffsetByDistance(templateSize: number, dotsSize: number, dotsCount: number, counter: number) {
    const distance = getDistanceBetweenDots(templateSize, dotsSize, dotsCount);

    return getDotOffsetByIndex(distance, dotsSize, dotsCount - 1 - counter);
}

/**
 * Возвращает отступ для первой точки
 */
function getFirstDotCoords(templateSize: number, dotsSize: number, dotsCount: number) {
    const distance = getDistanceBetweenDots(templateSize, dotsSize, dotsCount);

    return getDotOffsetByIndex(distance, dotsSize, 0);
}

/**
 * Возвращает отступ для последней точки
 */
function getLastDotCoords(templateSize: number, dotsSize: number, dotsCount: number) {
    const distance = getDistanceBetweenDots(templateSize, dotsSize, dotsCount);

    return getDotOffsetByIndex(distance, dotsSize, dotsCount - 1);
}

/**
 * Random color HEX
 */
function getRandomColor() {
    return '#' + Math.random().toString(16).substr(-6);
}

export {
    getDistanceBetweenDots,
    getDotOffsetByIndex,
    getDotOffsetByDistance,
    getFirstDotCoords,
    getLastDotCoords,
    getRandomColor,
    // ---- figures ----
    Rectangle,
    Line,
    CurvedLine,
    Rhombus,
    Cross,
    Triangle,
};
