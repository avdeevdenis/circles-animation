(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(19),r=function(){function t(){this.currentIndex=0,this.figures=this.getFiguresSequence(),this.currentFigure=this.getCurrent(),this.nextFigure=this.getNext()}return t.prototype.getFiguresSequence=function(){return[new n.Line,new n.CurvedLine,new n.Rectangle,new n.Rhombus,new n.Cross,new n.Triangle]},t.prototype.getCurrent=function(){return this.figures[this.currentIndex]},t.prototype.getCurrentCoords=function(t){return this.getCurrent().getCoords(t).map(this.mapStyle)},t.prototype.setCurrent=function(t){for(var e=0;t!==this.getCurrent().name&&e++<this.figures.length;)this.updateNext()},t.prototype.getNext=function(){return this.figures[this.currentIndex+1]||this.figures[0]},t.prototype.updateNext=function(){var t=this.currentIndex+1;this.figures[t]||(t=0),this.currentFigure=this.nextFigure,this.nextFigure=this.figures[t],this.currentIndex=t},t.prototype.mapStyle=function(t){var e=t.x,o=void 0===e?0:e,n=t.y,r=void 0===n?0:n,i=t.bgColor,s=void 0===i?"":i,a={};return s&&(a.backgroundColor=s),t.width&&(a.width=t.width),t.height&&(a.height=t.height),a.transform="translate3d("+o+"px, "+r+"px, 0)",{style:a}},t}();e.Geometry=r},141:function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(19)),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a",e}return r(e,t),e.prototype.getRectangleDot=function(t,e){var o,n,r=e.dotsSize,i=e.width,a=e.height,u=e.verticalDotsCount,c=e.horizontalDotsCount,l=e.bgColor,f=t<c+u,d=t<=2*c+u,h=t<2*c+2*u;if(t<u){var p=c-u;o=s.getFirstDotCoords(i,r,u+p+2),n=s.getDotOffsetByDistance(a,r,u,t)}else if(f)o=s.getDotOffsetByDistance(i,r,c+2,c+u-t),n=s.getFirstDotCoords(a,r,u);else if(d){p=2*c+u;o=s.getDotOffsetByDistance(i,r,c+2,p-t),n=s.getLastDotCoords(a,r,u)}else if(h){p=c-u;var g=c+2*u-2;o=s.getLastDotCoords(i,r,u+p+2),n=s.getDotOffsetByDistance(a,r,u,t-g)}return{x:o,y:n,width:r,height:r,bgColor:l}},e.prototype.getRectangleDotCount=function(t){var e,o,n=(e=t,o=6,Math.floor((e-o)/2/2)+1);return{verticalDotsCount:(t-2*n)/2,horizontalDotsCount:n}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getRectangleDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords,r=this.getRectangleDotCount(e),i=r.verticalDotsCount,a=r.horizontalDotsCount,u=s.getRandomColor();return{dotsCount:e,dotsSize:o,width:n.width,height:n.height,verticalDotsCount:i,horizontalDotsCount:a,bgColor:u}},e}(o(25).FiguresItem);e.Rectangle=a},142:function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(19)),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u041b\u0438\u043d\u0438\u044f",e}return r(e,t),e.prototype.getLineDot=function(t,e){var o=e.dotsSize,n=e.dotsCount,r=e.width,i=e.bgColor,a=e.y;return{x:s.getDotOffsetByDistance(r,o,n,n-t-1),y:a,width:o,height:o,bgColor:i}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getLineDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords,r=n.height/2-o/2,i=s.getRandomColor();return{dotsCount:e,dotsSize:o,width:n.width,y:r,bgColor:i}},e}(o(25).FiguresItem);e.Line=a},143:function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(19)),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u041a\u0440\u0438\u0432\u0430\u044f \u043b\u0438\u043d\u0438\u044f",e}return r(e,t),e.prototype.getLineDot=function(t,e){var o=e.dotsSize,n=e.dotsCount,r=e.width,i=e.height,a=e.bgColor,u=t%2===0?o/2:-o/2;return{x:s.getDotOffsetByDistance(r,o,n,n-t-1),y:i/2-o/2+u,width:o,height:o,bgColor:a}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getLineDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords,r=s.getRandomColor();return{dotsCount:e,dotsSize:o,width:n.width,height:n.height,bgColor:r}},e}(o(25).FiguresItem);e.CurvedLine=a},144:function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(19)),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u0420\u043e\u043c\u0431",e}return r(e,t),e.prototype.getRhombusDot=function(t,e){var o,n,r=e.dotsSize,i=e.height,a=e.width,u=e.diagonalDotsCount,c=e.lineDotsCount,l=e.bgColor;return t<=u?(o=s.getDotOffsetByDistance(a,r,c,2*u-t),n=s.getDotOffsetByDistance(i,r,c,t+u)):t<2*u?(o=s.getDotOffsetByDistance(a,r,c,2*u-t),n=s.getDotOffsetByDistance(i,r,c,3*u-t)):t<3*u?(o=s.getDotOffsetByDistance(a,r,c,4*u-t-1),n=s.getDotOffsetByDistance(i,r,c,3*u-t-1)):t<=4*u&&(o=s.getDotOffsetByDistance(a,r,c,4*u-t-1),n=s.getDotOffsetByDistance(i,r,c,t-3*u+1)),{x:o,y:n,width:r,height:r,bgColor:l}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getRhombusDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords,r=e/4,i=e/2+1,a=s.getRandomColor();return{dotsCount:e,dotsSize:o,width:n.width,height:n.height,diagonalDotsCount:r,lineDotsCount:i,bgColor:a}},e}(o(25).FiguresItem);e.Rhombus=a},145:function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(19)),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u041a\u0440\u0435\u0441\u0442",e}return r(e,t),e.prototype.getCrossDot=function(t,e){var o,n,r=e.dotsSize,i=e.height,a=e.width,u=e.lineDotsCount,c=e.lineDotsCountX2,l=e.lineDotsCountX3,f=e.lineDotsCountX4,d=e.bgColor;return t<u?(o=s.getDotOffsetByDistance(a,r,c,c-t-1),n=s.getDotOffsetByDistance(i,r,c,c-t-1)):t<c?(o=s.getDotOffsetByDistance(a,r,c,c-t-1),n=s.getDotOffsetByDistance(i,r,c,t)):t<l?(o=s.getDotOffsetByDistance(a,r,c,f-t-1),n=s.getDotOffsetByDistance(i,r,c,t-c)):t<f&&(o=s.getDotOffsetByDistance(a,r,c,f-t-1),n=s.getDotOffsetByDistance(i,r,c,f-t-1)),{x:o,y:n,width:r,height:r,bgColor:d}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getCrossDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords,r=e/4,i=2*r,a=3*r,u=4*r,c=s.getRandomColor();return{dotsCount:e,dotsSize:o,width:n.width,height:n.height,lineDotsCount:r,lineDotsCountX2:i,lineDotsCountX3:a,lineDotsCountX4:u,bgColor:c}},e}(o(25).FiguresItem);e.Cross=a},146:function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s=i(o(19)),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u0422\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a",e}return r(e,t),e.prototype.getTriangleDot=function(t,e){var o,n,r=e.dotsSize,i=e.height,a=e.width,u=e.bottomDotsCount,c=e.sideDotsCount,l=e.horizontalDotsCount,f=e.verticalDotsCount,d=e.bgColor;if(t<c)o=s.getDotOffsetByDistance(a,r,l,2*c-t+1),n=s.getDotOffsetByDistance(i,r,f,t+1);else if(t<c+u){var h=(l-1)/(u-1);o=s.getDotOffsetByDistance(a,r,l,2*c-(t-c)*h+2),n=s.getLastDotCoords(i,r,f)}else o=s.getDotOffsetByDistance(a,r,l,u+2*c-t+1),n=s.getDotOffsetByDistance(i,r,f,u+2*c-t+1);return{x:o,y:n,width:r,height:r,bgColor:d}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getTriangleDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords,r=e/2-1,i=(e-r-1)/2,a=2*i+3,u=i+2,c=s.getRandomColor();return{dotsCount:e,dotsSize:o,width:n.width,height:n.height,bottomDotsCount:r,sideDotsCount:i,horizontalDotsCount:a,verticalDotsCount:u,bgColor:c}},e}(o(25).FiguresItem);e.Triangle=a},147:function(t,e,o){},19:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(141);e.Rectangle=n.Rectangle;var r=o(142);e.Line=r.Line;var i=o(143);e.CurvedLine=i.CurvedLine;var s=o(144);e.Rhombus=s.Rhombus;var a=o(145);e.Cross=a.Cross;var u=o(146);function c(t,e,o){return(t-e*o)/(o+1)}function l(t,e,o){return t*(o+1)+e*o}e.Triangle=u.Triangle,e.getDistanceBetweenDots=c,e.getDotOffsetByIndex=l,e.getDotOffsetByDistance=function(t,e,o,n){return l(c(t,e,o),e,o-1-n)},e.getFirstDotCoords=function(t,e,o){return l(c(t,e,o),e,0)},e.getLastDotCoords=function(t,e,o){return l(c(t,e,o),e,o-1)},e.getRandomColor=function(){return"#"+Math.random().toString(16).substr(-6)}},25:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return function(){}}();e.FiguresItem=n},67:function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var r in e=arguments[o])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var u=s(o(1)),c=s(o(77)),l=a(o(149));o(138);var f=o(140);o(147);var d=l.createSliderWithTooltip(l.default),h=new f.Geometry,p=function(t){function e(e){var o=t.call(this,e)||this;return o.state={},o.defaultDotsSize=15,o.defaultDotsCount=16,o.maxDotsSize=20,o.maxDotsCount=24,o.maxDotsSizeDesktop=40,o.maxDotsCountDesktop=40,o.minDotsSize=5,o.minDotsCount=8,o.onChangeDotsStep=4,o.isMobile()||(o.maxDotsCount=o.maxDotsCountDesktop,o.maxDotsSize=o.maxDotsSizeDesktop),localStorage&&localStorage.getItem("currentFigure")&&h.setCurrent(localStorage.getItem("currentFigure")),o.onButtonAnimateClick=o.onButtonAnimateClick.bind(o),o.onInputRangeCountChange=o.onInputRangeCountChange.bind(o),o.onInputRangeSizeChange=o.onInputRangeSizeChange.bind(o),o.initEvents(),o}return r(e,t),e.prototype.initEvents=function(){var t=this;this.makeCorrectWindowSize(),window.addEventListener("resize",function(t,e){var o,n,r=!1;return function i(){if(r)return o=arguments,void(n=this);t.apply(this,arguments);r=!0;setTimeout(function(){r=!1,o&&(i.apply(n,o),o=n=null)},e)}}.call(this,function(){t.makeCorrectWindowSize(),t.drawInitialDots({dotsCount:t.state.config.dotsCount,dotsSize:t.state.config.dotsSize})},150))},e.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)},e.prototype.getInitialConfig=function(t){var e=(t=t||{}).dotsSize||localStorage&&Number(localStorage.getItem("dotsSize"))||this.defaultDotsSize,o={dotsCount:t.dotsCount||localStorage&&Number(localStorage.getItem("dotsCount"))||this.defaultDotsCount,dotsSize:e};if(o.dotsCount%2!==0)throw new Error("\u0427\u0438\u0441\u043b\u043e \u0442\u043e\u0447\u0435\u043a \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0451\u0442\u043d\u044b\u043c.");localStorage&&(localStorage.setItem("dotsCount",o.dotsCount),localStorage.setItem("dotsSize",o.dotsSize));var n=document.querySelector(".template").getBoundingClientRect();o.coords=n;var r=h.getCurrentCoords(o);return o.initianDraw=this.wrapperDots(r),o},e.prototype.componentDidMount=function(){this.drawInitialDots()},e.prototype.makeCorrectWindowSize=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",t+"px")},e.prototype.drawInitialDots=function(t){if(t&&t.dotsCount%4!==0)throw new Error("\u0427\u0438\u0441\u043b\u043e \u0442\u043e\u0447\u0435\u043a \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u0440\u0430\u0442\u043d\u043e 4.");var e=this.getInitialConfig(t);this.setState(i(i({},this.state),{buttonText:h.getNext().name,config:e,dots:e.initianDraw}))},e.prototype.setDotTransitions=function(t){var e=Array.prototype.slice.call(document.querySelectorAll(".dot")),o=t<=15?.03:.025,n=t<=15?.04:.08;t>30&&(o=.02,n=.02);for(var r=t/2,i=0;i<e.length;i++){var s=void 0,a="transform "+(s=(s=i>r?(i+r)*o+n:i*o*2+n).toFixed(2))+"s ease-in-out, width "+s/2+"s ease-in-out, height "+s/2+"s ease-in-out";e[i].style.transition=a}},e.prototype.onButtonAnimateClick=function(t){h.updateNext(),localStorage&&localStorage.setItem("currentFigure",h.getCurrent().name);var e=this.getNextButtonTextAndDots(),o=e.buttonText,n=e.dots;this.setState(i(i({},this.state),{buttonText:o,dots:n}))},e.prototype.getNextButtonTextAndDots=function(){return{buttonText:h.getNext().name,dots:this.wrapperDots(h.getCurrentCoords(this.state.config))}},e.prototype.wrapperDots=function(t){return t.map(function(t,e){return u.default.createElement("div",{className:"dot",key:e,style:t.style})})},e.prototype.onInputRangeCountChange=function(t){var e=Object.assign({},this.state);e.config.dotsCount=t,this.drawInitialDots({dotsCount:t,dotsSize:e.config.dotsSize}),this.setState({state:e})},e.prototype.onInputRangeSizeChange=function(t){var e=Object.assign({},this.state);e.config.dotsSize=t,this.drawInitialDots({dotsSize:t,dotsCount:e.config.dotsCount}),this.setState({state:e})},e.prototype.render=function(){var t=this.isMobile()?" \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435.":" \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.",e=this.state.config&&this.state.config.dotsCount||this.defaultDotsCount,o=this.state.config&&this.state.config.dotsSize||this.defaultDotsSize;return u.default.createElement("div",{className:"App"},u.default.createElement("div",{className:"component"},u.default.createElement("div",{className:"template"},this.state.dots),u.default.createElement("div",{className:"actions"},u.default.createElement("div",{className:"actions__input-count"},u.default.createElement(d,{min:this.minDotsCount,max:this.maxDotsCount,value:e,step:this.onChangeDotsStep,onChange:this.onInputRangeCountChange}),u.default.createElement("div",{className:"actions__text-count"},u.default.createElement("span",null,this.minDotsCount),u.default.createElement("span",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),u.default.createElement("span",null,this.maxDotsCount))),this.state.buttonText&&u.default.createElement(c.default,{size:"sm",variant:"primary",onClick:this.onButtonAnimateClick},this.state.buttonText),u.default.createElement("div",{className:"actions__input-size"},u.default.createElement(d,{min:this.minDotsSize,max:this.maxDotsSize,value:o,step:1,onChange:this.onInputRangeSizeChange,tipFormatter:function(t){return t+"px"}}),u.default.createElement("div",{className:"actions__text-size"},u.default.createElement("span",null,this.minDotsSize+"px"),u.default.createElement("span",null,"\u0420\u0430\u0437\u043c\u0435\u0440"),u.default.createElement("span",null,this.maxDotsSize+"px"))))),u.default.createElement("div",{className:"device-info"},"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e ",t))},e}(u.default.Component);e.default=p},71:function(t,e,o){t.exports=o(72)},72:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n),i=o(7),s=o.n(i),a=o(67),u=o.n(a);s.a.render(r.a.createElement(u.a,null),document.getElementById("root"))}},[[71,2,1]]]);