/**
 * Координаты для трансформации элемента
 */
export interface ICoords {
    x: number;
    y: number;
    bgColor?: string;
    width?: string;
    height?: string
}

export abstract class FiguresItem {
    /**
     * Название фигуры (required)
     */
    public abstract name: string;

    /**
     * Функция, возвращающая координаты для трансформации
     */
    abstract getCoords(config?: any): ICoords[]
};
