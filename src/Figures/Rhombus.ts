import * as Figures from '.';
import { FiguresItem, ICoords } from './FiguresItem';

export class Rhombus extends FiguresItem {
	public name = 'Ромб';

	getRhombusDot(i, params) {
		const { 
			dotsSize,
			height,
			width,
			diagonalDotsCount,
			lineDotsCount,
			bgColor
		} = params;

		let x, y;

		// top-left side
		if (i <= diagonalDotsCount) {
			// bgColor = 'lime';
			x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCount, diagonalDotsCount * 2 - i);
			y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCount, i + diagonalDotsCount);

		// top-right side
		} else if (i < diagonalDotsCount * 2) {
			// bgColor = 'red';
			x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCount, diagonalDotsCount * 2 - i);
			y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCount, diagonalDotsCount * 3 - i);

		// bottom-left side
		} else if (i < diagonalDotsCount * 3) {
			// bgColor = 'blue';
			x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCount, diagonalDotsCount * 4 - i - 1);
			y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCount, diagonalDotsCount * 3 - i - 1);

		// bottom-right side
		} else if (i <= diagonalDotsCount * 4) {
			// bgColor = 'yellow';
			// x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCount, i - diagonalDotsCount * 3);
			x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCount, diagonalDotsCount * 4 - i - 1);
			// y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCount, diagonalDotsCount * 4 - i);
			y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCount, i - diagonalDotsCount * 3 + 1);
		}

		return { x, y, width: dotsSize, height: dotsSize, bgColor };
	}
	
	getCoords(config): ICoords[] {
		const params = this.getCommonParams(config);

		const dots = [];

		for (let i = 0; i < params.dotsCount; i++) {
            dots.push(this.getRhombusDot(i, params));
        }

        return dots;
	}

	getCommonParams(config) {
		const { dotsCount, dotsSize, coords } = config;

		const diagonalDotsCount = dotsCount / 4;
		const lineDotsCount = dotsCount / 2 + 1;

		const bgColor = Figures.getRandomColor();

		return {
			dotsCount,
			dotsSize,
			width: coords.width,
			height: coords.height,
			diagonalDotsCount,
			lineDotsCount,
			bgColor
		};
	}
};
