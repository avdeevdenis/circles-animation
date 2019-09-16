import {
	Rectangle,
	Line,
	CurvedLine,
	Rhombus,
	Cross,
	Triangle
} from './Figures';

import { FiguresItem, ICoords } from './Figures/FiguresItem';

/**
 * Стили для трансформации одного элемента
 */
interface IGeometryStyle {
	backgroundColor?: string;
	transform?: string;
	width?: string;
	height?: string;
}

export class Geometry {
	/**
	 * Индекс текущего элемента
	 */
	protected currentIndex: number = 0;

	/**
	 * Последовательность всех отображаемых фигур
	 */
	protected figures: FiguresItem[] = this.getFiguresSequence();

	/**
	 * Показываемая фигура
	 */
	protected currentFigure: FiguresItem = this.getCurrent();

	/**
	 * Следующая фигура
	 */
	protected nextFigure: FiguresItem = this.getNext();

	/**
	 * Возвращает фигуры в последовательности, в которой они будут показаны
	 */
	getFiguresSequence(): FiguresItem[] {
		return [
			new Line(),
			new CurvedLine(),
			new Rectangle(),
			new Rhombus(),
			new Cross(),
			new Triangle()
		];
	}

	/**
	 * Получает текущую фигуру из списка
	 */
	getCurrent(): FiguresItem {
		return this.figures[this.currentIndex];
	}

	/**
	 * Получает координаты, необходимые для преобразования текущей фигуры
	 */
	getCurrentCoords(config) {
		return this.getCurrent()
			.getCoords(config)
			.map(this.mapStyle);
	}

	setCurrent(figure) {
		let i = 0;
		while (figure !== this.getCurrent().name && i++ < this.figures.length) {
			this.updateNext();
		}
	}

	/**
	 * Получает следующую фигуру из списка
	 */
	getNext() {
		return this.figures[this.currentIndex + 1] || this.figures[0];
	}

	/**
	 * Делает активной следующую фигуру по списку, а в случае последней - первую
	 */
	updateNext() {
		let nextIndex = this.currentIndex + 1;

		if (!this.figures[nextIndex]) {
			nextIndex = 0;
		}

		this.currentFigure = this.nextFigure;
		this.nextFigure = this.figures[nextIndex];

		this.currentIndex = nextIndex;
	}

	mapStyle(options: ICoords) {
		const { x = 0, y = 0, bgColor = '' } = options;
		const style: IGeometryStyle = {};

		if (bgColor) {
			style.backgroundColor = bgColor;
		}

		if (options.width) {
			style.width = options.width;
		}

		if (options.height) {
			style.height = options.height;
		}

		style.transform = `translate3d(${x}px, ${y}px, 0)`;

		return { style };
	}
};
