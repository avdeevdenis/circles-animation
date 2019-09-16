import React from 'react';

import Button from 'react-bootstrap/Button';

import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Geometry as GeometryClass } from './Geometry';

import './Scss/index.scss';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const Geometry = new GeometryClass();

interface IState {
	[string: string]: any;
};

export default class App extends React.Component {
	public state: IState = {};

	public defaultDotsSize: number = 15;

	public defaultDotsCount: number = 16;

	public maxDotsSize: number = 20;

	public maxDotsCount: number = 24;

	public maxDotsSizeDesktop: number = 40;

	public maxDotsCountDesktop: number = 40;

	public minDotsSize: number = 5;

	public minDotsCount: number = 8;

	public onChangeDotsStep: number = 4;

	constructor(props) {
		super(props);

		const isMobile = this.isMobile();

		if (!isMobile) {
			this.maxDotsCount = this.maxDotsCountDesktop;
			this.maxDotsSize = this.maxDotsSizeDesktop;
		}

		if (localStorage && localStorage.getItem('currentFigure')) {
			Geometry.setCurrent(localStorage.getItem('currentFigure'));
		}

		this.onButtonAnimateClick = this.onButtonAnimateClick.bind(this);
		this.onInputRangeCountChange = this.onInputRangeCountChange.bind(this);
		this.onInputRangeSizeChange = this.onInputRangeSizeChange.bind(this);

		this.initEvents();
	}

	initEvents() {
		this.makeCorrectWindowSize();

		window.addEventListener('resize', throttle.call(this, () => {
			this.makeCorrectWindowSize();
			this.drawInitialDots({
				dotsCount: this.state.config.dotsCount,
				dotsSize: this.state.config.dotsSize
			});
		}, 150));
	}

	isMobile() {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
	}

	getInitialConfig(params) {
		params = params || {};

		const dotsSize = params.dotsSize || localStorage && Number(localStorage.getItem('dotsSize')) || this.defaultDotsSize;
		const dotsCount = params.dotsCount || localStorage && Number(localStorage.getItem('dotsCount')) || this.defaultDotsCount;

		const config: any = {
			dotsCount,
			dotsSize
		};

		if (config.dotsCount % 2 !== 0) {
			throw new Error('Число точек должно быть чётным.')
		}

		if (localStorage) {
			localStorage.setItem('dotsCount', config.dotsCount);
			localStorage.setItem('dotsSize', config.dotsSize);
		}

		const coords = document.querySelector('.template').getBoundingClientRect();
		config.coords = coords;

		const initianDraw = Geometry.getCurrentCoords(config);
		config.initianDraw = this.wrapperDots(initianDraw);

		return config;
	}

	componentDidMount() {
		this.drawInitialDots();
	}

	makeCorrectWindowSize() {
		let vh = window.innerHeight * 0.01;
		
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}

	drawInitialDots(params?) {
		if (params && params.dotsCount % 4 !== 0) {
			throw new Error('Число точек должно быть кратно 4.');
		}

		const config = this.getInitialConfig(params);

		// this.setDotTransitions(config.dotsCount);
		
		this.setState({
			...this.state,
			buttonText: Geometry.getNext().name,
			config,
			dots: config.initianDraw
		});
	}

	setDotTransitions(dotsCount) {
		const dots = Array.prototype.slice.call(document.querySelectorAll('.dot'));

		let step = (dotsCount <= 15) ? 0.03 : 0.025;
		let offset = (dotsCount <= 15) ? 0.04 : 0.08;

		if (dotsCount > 30) {
			step = 0.02;
			offset = 0.02;
		}

		const halfDots = dotsCount / 2;

		for(let i = 0; i < dots.length; i++) {
			let transition;

			if (i > halfDots) {
				transition = (i + halfDots) * step + offset;
			} else {
				transition = i * step * 2 + offset;
			}

			transition = transition.toFixed(2);

			const transitionString = `transform ${transition}s ease-in-out, width ${transition / 2}s ease-in-out, height ${transition / 2}s ease-in-out`;
			dots[i].style.transition = transitionString;
		}
	}

	onButtonAnimateClick(e) {
		Geometry.updateNext();

		if (localStorage) {
			localStorage.setItem('currentFigure', Geometry.getCurrent().name);
		}

		const { buttonText, dots } = this.getNextButtonTextAndDots();

		this.setState({
			...this.state,
			buttonText,
			dots
		});
	}

	getNextButtonTextAndDots() {
		const buttonText = Geometry.getNext().name;
		const dots = this.wrapperDots(
			Geometry.getCurrentCoords(this.state.config)
		);

		return {
			buttonText,
			dots
		};
	}

	wrapperDots(dots) {
		return dots.map((dot, i) =>
			<div className='dot' key={i} style={dot.style}></div>
		);
	}

	onInputRangeCountChange(value: number) {
		const state = Object.assign({}, this.state);
		state.config.dotsCount = value;

		this.drawInitialDots({
			dotsCount: value,
			dotsSize: state.config.dotsSize
		});

		this.setState({
			state
		});
	}

	onInputRangeSizeChange(value: number) {
		const state = Object.assign({}, this.state);
		state.config.dotsSize = value;

		this.drawInitialDots({
			dotsSize: value,
			dotsCount: state.config.dotsCount
		});

		this.setState({
			state
		});
	}

	render() {
		const byDeviceText = this.isMobile() ?
			' повернуть устройство в горизонтальное положение.' :
			' увеличить размер окна браузера.';

		const dotsCount = this.state.config && this.state.config.dotsCount || this.defaultDotsCount;
		const dotsSize = this.state.config && this.state.config.dotsSize || this.defaultDotsSize;

		return (
			<div className='App'>
				<div className='component'>
					<div className='template'>{this.state.dots}</div>
					<div className='actions'>
						<div className='actions__input-count'>
							<SliderWithTooltip
								min={this.minDotsCount}
								max={this.maxDotsCount}
								value={dotsCount}
								step={this.onChangeDotsStep}
								onChange={this.onInputRangeCountChange}
							/>
							<div className="actions__text-count">
								<span>{this.minDotsCount}</span>
								<span>Количество</span>
								<span>{this.maxDotsCount}</span>
							</div>
						</div>
						{this.state.buttonText && <Button size='sm' variant="primary" onClick={this.onButtonAnimateClick}>{this.state.buttonText}</Button>}
						<div className='actions__input-size'>
							<SliderWithTooltip
								min={this.minDotsSize}
								max={this.maxDotsSize}
								value={dotsSize}
								step={1}
								
								onChange={this.onInputRangeSizeChange}
								tipFormatter={value => `${value}px`}
							/>
							<div className="actions__text-size">
								<span>{this.minDotsSize + 'px'}</span>
								<span>Размер</span>
								<span>{this.maxDotsSize + 'px'}</span>
							</div>
						</div>
					</div>
				</div>
				<div className='device-info'>Для корректной работы необходимо {byDeviceText}</div>
			</div>
		);
	}
}

function throttle(func, ms) {
    let isThrottled = false,
    savedArgs,
    savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false;
            if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}
