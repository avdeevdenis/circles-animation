import * as Figures from '.';
import { FiguresItem, ICoords } from './FiguresItem';

export class Rectangle extends FiguresItem {
	public name = 'Прямоугольник';

	getRectangleDot(i, params) {
		const {
			dotsSize,
			width,
			height,
			verticalDotsCount,
			horizontalDotsCount,
			bgColor
		} = params;

		const side = {
			left: i < verticalDotsCount,
			top: i < horizontalDotsCount + verticalDotsCount,
			bottom: i <= horizontalDotsCount * 2 + verticalDotsCount,
			right: i < horizontalDotsCount * 2 + verticalDotsCount * 2
		};

		let x, y;

		if (side.left) {
			const offset = horizontalDotsCount - verticalDotsCount;

			x = Figures.getFirstDotCoords(width, dotsSize, verticalDotsCount + offset + 2);
			y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, i);
		}

		else if (side.top) {
			x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount + 2, horizontalDotsCount + verticalDotsCount - i);
			y = Figures.getFirstDotCoords(height, dotsSize, verticalDotsCount);
		}

		else if (side.bottom) {
			const offset = horizontalDotsCount * 2 + verticalDotsCount;

			x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount + 2, offset - i);
			y = Figures.getLastDotCoords(height, dotsSize, verticalDotsCount);
		}

		else if(side.right) {
			const offset = horizontalDotsCount - verticalDotsCount;

			const offsetSecond = horizontalDotsCount + verticalDotsCount * 2 - 2;

			x = Figures.getLastDotCoords(width, dotsSize, verticalDotsCount + offset + 2);
			y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, i - offsetSecond);
		}

		return { x, y, width: dotsSize, height: dotsSize, bgColor };
	}

	/**
	 * Формула, которая умеет по общему числу точек определять количество вертикальных и горизонтальных
	 */
	getRectangleDotCount(dotsCount) {
		const fn = (dots, startedDots) => Math.floor((dots - startedDots) / 2 / 2) + 1;

		const horizontalDotsCount = fn(dotsCount, 6);
		const verticalDotsCount = (dotsCount - (horizontalDotsCount * 2)) / 2;

		return { 
			verticalDotsCount, horizontalDotsCount
		};
	}

	getCoords(config): ICoords[] {
		const params = this.getCommonParams(config);

		const dots = [];

		for (let i = 0; i < params.dotsCount; i++) {
            dots.push(this.getRectangleDot(i, params));
        }

        return dots;
	}

	getCommonParams(config) {
		const { dotsCount, dotsSize, coords } = config;

		const { verticalDotsCount, horizontalDotsCount } = this.getRectangleDotCount(dotsCount);

		const bgColor = Figures.getRandomColor();

		return {
			dotsCount,
			dotsSize,
			width: coords.width,
			height: coords.height,
			verticalDotsCount,
			horizontalDotsCount,
			bgColor
		};
	}
};
