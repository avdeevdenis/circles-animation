"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("react-bootstrap/Button"));
var rc_slider_1 = __importStar(require("rc-slider"));
require("rc-slider/assets/index.css");
var Geometry_1 = require("./Geometry");
require("./Scss/index.scss");
var SliderWithTooltip = rc_slider_1.createSliderWithTooltip(rc_slider_1.default);
var Geometry = new Geometry_1.Geometry();
;
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        _this.defaultDotsSize = 15;
        _this.defaultDotsCount = 16;
        _this.maxDotsSize = 20;
        _this.maxDotsCount = 24;
        _this.maxDotsSizeDesktop = 40;
        _this.maxDotsCountDesktop = 40;
        _this.minDotsSize = 5;
        _this.minDotsCount = 8;
        _this.onChangeDotsStep = 4;
        var isMobile = _this.isMobile();
        if (!isMobile) {
            _this.maxDotsCount = _this.maxDotsCountDesktop;
            _this.maxDotsSize = _this.maxDotsSizeDesktop;
        }
        if (localStorage && localStorage.getItem('currentFigure')) {
            Geometry.setCurrent(localStorage.getItem('currentFigure'));
        }
        _this.onButtonAnimateClick = _this.onButtonAnimateClick.bind(_this);
        _this.onInputRangeCountChange = _this.onInputRangeCountChange.bind(_this);
        _this.onInputRangeSizeChange = _this.onInputRangeSizeChange.bind(_this);
        _this.initEvents();
        return _this;
    }
    App.prototype.initEvents = function () {
        var _this = this;
        this.makeCorrectWindowSize();
        window.addEventListener('resize', throttle.call(this, function () {
            _this.makeCorrectWindowSize();
            _this.drawInitialDots({
                dotsCount: _this.state.config.dotsCount,
                dotsSize: _this.state.config.dotsSize
            });
        }, 150));
    };
    App.prototype.isMobile = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
    };
    App.prototype.getInitialConfig = function (params) {
        params = params || {};
        var dotsSize = params.dotsSize || localStorage && Number(localStorage.getItem('dotsSize')) || this.defaultDotsSize;
        var dotsCount = params.dotsCount || localStorage && Number(localStorage.getItem('dotsCount')) || this.defaultDotsCount;
        var config = {
            dotsCount: dotsCount,
            dotsSize: dotsSize
        };
        if (config.dotsCount % 2 !== 0) {
            throw new Error('Число точек должно быть чётным.');
        }
        if (localStorage) {
            localStorage.setItem('dotsCount', config.dotsCount);
            localStorage.setItem('dotsSize', config.dotsSize);
        }
        var coords = document.querySelector('.template').getBoundingClientRect();
        config.coords = coords;
        var initianDraw = Geometry.getCurrentCoords(config);
        config.initianDraw = this.wrapperDots(initianDraw);
        return config;
    };
    App.prototype.componentDidMount = function () {
        this.drawInitialDots();
    };
    App.prototype.makeCorrectWindowSize = function () {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + "px");
    };
    App.prototype.drawInitialDots = function (params) {
        if (params && params.dotsCount % 4 !== 0) {
            throw new Error('Число точек должно быть кратно 4.');
        }
        var config = this.getInitialConfig(params);
        this.setState(__assign(__assign({}, this.state), { buttonText: Geometry.getNext().name, config: config, dots: config.initianDraw }));
    };
    App.prototype.setDotTransitions = function (dotsCount) {
        var dots = Array.prototype.slice.call(document.querySelectorAll('.dot'));
        var step = (dotsCount <= 15) ? 0.03 : 0.025;
        var offset = (dotsCount <= 15) ? 0.04 : 0.08;
        if (dotsCount > 30) {
            step = 0.02;
            offset = 0.02;
        }
        var halfDots = dotsCount / 2;
        for (var i = 0; i < dots.length; i++) {
            var transition = void 0;
            if (i > halfDots) {
                transition = (i + halfDots) * step + offset;
            }
            else {
                transition = i * step * 2 + offset;
            }
            transition = transition.toFixed(2);
            var transitionString = "transform " + transition + "s ease-in-out, width " + transition / 2 + "s ease-in-out, height " + transition / 2 + "s ease-in-out";
            dots[i].style.transition = transitionString;
        }
    };
    App.prototype.onButtonAnimateClick = function (e) {
        Geometry.updateNext();
        if (localStorage) {
            localStorage.setItem('currentFigure', Geometry.getCurrent().name);
        }
        var _a = this.getNextButtonTextAndDots(), buttonText = _a.buttonText, dots = _a.dots;
        this.setState(__assign(__assign({}, this.state), { buttonText: buttonText,
            dots: dots }));
    };
    App.prototype.getNextButtonTextAndDots = function () {
        var buttonText = Geometry.getNext().name;
        var dots = this.wrapperDots(Geometry.getCurrentCoords(this.state.config));
        return {
            buttonText: buttonText,
            dots: dots
        };
    };
    App.prototype.wrapperDots = function (dots) {
        return dots.map(function (dot, i) {
            return react_1.default.createElement("div", { className: 'dot', key: i, style: dot.style });
        });
    };
    App.prototype.onInputRangeCountChange = function (value) {
        var state = Object.assign({}, this.state);
        state.config.dotsCount = value;
        this.drawInitialDots({
            dotsCount: value,
            dotsSize: state.config.dotsSize
        });
        this.setState({
            state: state
        });
    };
    App.prototype.onInputRangeSizeChange = function (value) {
        var state = Object.assign({}, this.state);
        state.config.dotsSize = value;
        this.drawInitialDots({
            dotsSize: value,
            dotsCount: state.config.dotsCount
        });
        this.setState({
            state: state
        });
    };
    App.prototype.render = function () {
        var byDeviceText = this.isMobile() ?
            ' повернуть устройство в горизонтальное положение.' :
            ' увеличить размер окна браузера.';
        var dotsCount = this.state.config && this.state.config.dotsCount || this.defaultDotsCount;
        var dotsSize = this.state.config && this.state.config.dotsSize || this.defaultDotsSize;
        return (react_1.default.createElement("div", { className: 'App' },
            react_1.default.createElement("div", { className: 'component' },
                react_1.default.createElement("div", { className: 'template' }, this.state.dots),
                react_1.default.createElement("div", { className: 'actions' },
                    react_1.default.createElement("div", { className: 'actions__input-count' },
                        react_1.default.createElement(SliderWithTooltip, { min: this.minDotsCount, max: this.maxDotsCount, value: dotsCount, step: this.onChangeDotsStep, onChange: this.onInputRangeCountChange }),
                        react_1.default.createElement("div", { className: "actions__text-count" },
                            react_1.default.createElement("span", null, this.minDotsCount),
                            react_1.default.createElement("span", null, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"),
                            react_1.default.createElement("span", null, this.maxDotsCount))),
                    this.state.buttonText && react_1.default.createElement(Button_1.default, { size: 'sm', variant: "primary", onClick: this.onButtonAnimateClick }, this.state.buttonText),
                    react_1.default.createElement("div", { className: 'actions__input-size' },
                        react_1.default.createElement(SliderWithTooltip, { min: this.minDotsSize, max: this.maxDotsSize, value: dotsSize, step: 1, onChange: this.onInputRangeSizeChange, tipFormatter: function (value) { return value + "px"; } }),
                        react_1.default.createElement("div", { className: "actions__text-size" },
                            react_1.default.createElement("span", null, this.minDotsSize + 'px'),
                            react_1.default.createElement("span", null, "\u0420\u0430\u0437\u043C\u0435\u0440"),
                            react_1.default.createElement("span", null, this.maxDotsSize + 'px'))))),
            react_1.default.createElement("div", { className: 'device-info' },
                "\u0414\u043B\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E ",
                byDeviceText)));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
function throttle(func, ms) {
    var isThrottled = false, savedArgs, savedThis;
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments);
        isThrottled = true;
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}
