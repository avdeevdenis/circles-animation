import * as Figures from '.';
import { FiguresItem, ICoords } from './FiguresItem';

export class Triangle extends FiguresItem {
	public name = 'Треугольник';

	getTriangleDot(i, params) {
		const {
			dotsSize,
			height,
			width,
			bottomDotsCount,
			sideDotsCount,
			horizontalDotsCount,
			verticalDotsCount,
			bgColor
		} = params;

		let x, y;

		// left side
		if (i < sideDotsCount) {
			x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, sideDotsCount * 2 - i + 1);
			y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, i + 1);

		// bottom side
		} else if (i < sideDotsCount + bottomDotsCount) {
			// хз как это работает
			let offset = (horizontalDotsCount - 1) / (bottomDotsCount - 1);

			x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, sideDotsCount * 2 - (i - sideDotsCount) * offset + 2);
			y = Figures.getLastDotCoords(height, dotsSize, verticalDotsCount);

		// right side
		} else {
			x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, bottomDotsCount + sideDotsCount * 2 - i + 1)
			y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, bottomDotsCount + sideDotsCount * 2 - i + 1);
		}

		// bottom side
		// if (i < bottomDotsCount) {
		// 	// хз как это работает
		// 	let offset = (horizontalDotsCount - 1) / (bottomDotsCount - 1);

		// 	x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, i * offset);
		// 	y = Figures.getLastDotCoords(height, dotsSize, verticalDotsCount);

		// // left side
		// } else if (i <= sideDotsCount + bottomDotsCount) {
		// 	// console.log('left', i - bottomDotsCount + sideDotsCount + 1);
		// 	x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, i - sideDotsCount + 2);
		// 	y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, bottomDotsCount + sideDotsCount - i + 1);
		// 	// x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, i - bottomDotsCount + sideDotsCount + 1);
		// 	// y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, bottomDotsCount + sideDotsCount - i + 1);

		// // right side
		// } else {
		// 	x = Figures.getDotOffsetByDistance(width, dotsSize, horizontalDotsCount, i - bottomDotsCount - sideDotsCount);
		// 	y = Figures.getDotOffsetByDistance(height, dotsSize, verticalDotsCount, i - bottomDotsCount - sideDotsCount);
		// }

		return { x, y, width: dotsSize, height: dotsSize, bgColor };
	}
	
	getCoords(config): ICoords[] {
		const params = this.getCommonParams(config);

		const dots = [];

		for (let i = 0; i < params.dotsCount; i++) {
            dots.push(this.getTriangleDot(i, params));
        }

        return dots;
	}

	getCommonParams(config) {
		const { dotsCount, dotsSize, coords } = config;

		const bottomDotsCount = dotsCount / 2 - 1;
		const sideDotsCount = (dotsCount - bottomDotsCount - 1) / 2;

		const horizontalDotsCount = sideDotsCount * 2 + 3; // 3 = точка левая, точка верхняя, точка правая

		const verticalDotsCount = sideDotsCount + 2; // 2 = точка крайняя и точка центральная
		let bgColor = Figures.getRandomColor();

		return {
			dotsCount,
			dotsSize,
			width: coords.width,
			height: coords.height,
			bottomDotsCount,
			sideDotsCount,
			horizontalDotsCount,
			verticalDotsCount,
			bgColor
		};
	}
};
