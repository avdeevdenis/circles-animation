import * as React from 'react';
import * as Figures from '.';
import { FiguresItem, ICoords } from './FiguresItem';

export class Line extends FiguresItem {
	public name = 'Линия';

	getLineDot(i, params) {
        const {
			dotsSize,
			dotsCount,
			width,
			bgColor,
			y
		} = params;

        const x = Figures.getDotOffsetByDistance(width, dotsSize, dotsCount, dotsCount - i - 1);

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

		const y = coords.height / 2 - dotsSize / 2;
		
		const bgColor = Figures.getRandomColor();

		return {
			dotsCount,
			dotsSize,
			width: coords.width,
			y,
			bgColor
		};
	}
};
