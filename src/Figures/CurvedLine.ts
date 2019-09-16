import * as React from 'react';
import * as Figures from '.';
import { FiguresItem, ICoords } from './FiguresItem';

export class CurvedLine extends FiguresItem {
	public name = 'Кривая линия';

	getLineDot(i: number, params: any) {
		const { dotsSize, dotsCount, width, height, bgColor } = params;
		
		const isEven = i % 2 === 0;
		const offset = isEven ? dotsSize / 2 : -dotsSize / 2;

		const x = Figures.getDotOffsetByDistance(width, dotsSize, dotsCount, dotsCount - i - 1);
		const y = height / 2 - dotsSize / 2 + offset;

		return { x, y, width: dotsSize, height: dotsSize, bgColor };
	}

	getCoords(config): ICoords[] {
		const params = this.getCommonParams(config);

		const dots = [];

		for (let i = 0; i < params.dotsCount; i++) {
            dots.push(this.getLineDot(i, params));
        }

        return dots;
	}

	getCommonParams(config) {
		const { dotsCount, dotsSize, coords } = config;
				
		const bgColor = Figures.getRandomColor();

		return {
			dotsCount,
			dotsSize,
			width: coords.width,
			height: coords.height,
			bgColor
		};
	}
};
