import * as Figures from '.';
import { FiguresItem, ICoords } from './FiguresItem';

export class Cross extends FiguresItem {
	public name = 'Крест';

	getCrossDot(i, params) {
		const { 
			dotsSize,
			height,
			width,
			lineDotsCount,
			lineDotsCountX2,
			lineDotsCountX3,
			lineDotsCountX4,
			bgColor
		} = params;

		let x, y;

		// top-left side
		if (i < lineDotsCount) {
			// bgColor = 'purple';
			x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCountX2, lineDotsCountX2 - i - 1);
			y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCountX2, lineDotsCountX2 - i - 1);

		// top-right side
		} else if (i < lineDotsCountX2) {
			// bgColor = 'grey';
			x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCountX2, lineDotsCountX2 - i - 1);
			y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCountX2, i);

		// bottom-right side
		} else if (i < lineDotsCountX3) {
			// bgColor = 'brown';
			x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCountX2, lineDotsCountX4 - i - 1);
			y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCountX2, i - lineDotsCountX2);

		// bottom-left side
		} else if (i < lineDotsCountX4) {
			// bgColor = 'green';
			x = Figures.getDotOffsetByDistance(width, dotsSize, lineDotsCountX2, lineDotsCountX4 - i - 1);
			y = Figures.getDotOffsetByDistance(height, dotsSize, lineDotsCountX2, lineDotsCountX4 - i - 1);
		}

		return { x, y, width: dotsSize, height: dotsSize, bgColor };
	}
	
	getCoords(config): ICoords[] {
		const params = this.getCommonParams(config);

		const dots = [];

		for (let i = 0; i < params.dotsCount; i++) {
            dots.push(this.getCrossDot(i, params));
        }

        return dots;
	}

	getCommonParams(config) {
		const { dotsCount, dotsSize, coords } = config;

		const lineDotsCount = dotsCount / 4;
		const lineDotsCountX2 = lineDotsCount * 2;
		const lineDotsCountX3 = lineDotsCount * 3;
		const lineDotsCountX4 = lineDotsCount * 4;

		const bgColor = Figures.getRandomColor();

		return {
			dotsCount,
			dotsSize,
			width: coords.width,
			height: coords.height,
			lineDotsCount,
			lineDotsCountX2,
			lineDotsCountX3,
			lineDotsCountX4,
			bgColor
		};
	}
};
