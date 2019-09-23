(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(t,e,o){"use strict";o.r(e);e.default=function(t,e){var o,n,i=!1;return function r(){if(i)return o=arguments,void(n=this);t.apply(this,arguments),i=!0,setTimeout(function(){i=!1,o&&(r.apply(n,o),o=n=null)},e)}}},160:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(161),i=o(162),r=o(163),s=o(164),u=new n.Rectangle,a=new i.Line,c=new r.CurvedLine,d=(new s.Square,function(){function t(){this.currentIndex=0,this.figures=this.getFiguresSequence(),this.currentFigure=this.getCurrent(),this.nextFigure=this.getNext()}return t.prototype.getFiguresSequence=function(){return[a,c,u]},t.prototype.getCurrent=function(){return this.figures[this.currentIndex]},t.prototype.getCurrentCoords=function(t){return this.getCurrent().getCoords(t).map(this.mapStyle)},t.prototype.setCurrent=function(t){for(;t!==this.getCurrent().name;)this.updateNext()},t.prototype.getNext=function(){return this.figures[this.currentIndex+1]||this.figures[0]},t.prototype.updateNext=function(){var t=this.currentIndex+1;this.figures[t]||(t=0),this.currentFigure=this.nextFigure,this.nextFigure=this.figures[t],this.currentIndex=t},t.prototype.mapStyle=function(t){var e=t.x,o=void 0===e?0:e,n=t.y,i=void 0===n?0:n,r=t.bgColor,s=void 0===r?"":r,u={};return s&&(u.backgroundColor=s),t.width&&(u.width=t.width),t.height&&(u.height=t.height),u.transform="translate3d("+o+"px, "+i+"px, 0)",{style:u}},t}());e.Geometry=d},161:function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=r(o(33)),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a",e}return i(e,t),e.prototype.getRectangleDot=function(t,e){var o={};if(e.dotsCount%2!==0)throw new Error("\u0427\u0438\u0441\u043b\u043e \u0442\u043e\u0447\u0435\u043a \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u0440\u0430\u0442\u043d\u043e 2.");var n=this.getRectangleDotCount(e.dotsCount),i=n.verticalDotsCount,r=n.horizontalDotsCount,s=t<r+i,u=t<2*r+i,a=t<2*r+2*i;return t<i?o=this.getRectangleLeftSideDot(e,t,i,r):s?o=this.getRectangleTopSideDot(e,t,i,r):u?o=this.getRectangleBottomSideDot(e,t,i,r):a&&(o=this.getRectangleRightSideDot(e,t,i,r)),o},e.prototype.getRectangleDotCount=function(t){var e,o,n=(e=t,o=6,Math.floor((e-o)/2/2)+1);return{verticalDotsCount:(t-2*n)/2,horizontalDotsCount:n}},e.prototype.getRectangleTopSideDot=function(t,e,o,n){var i=t.dotsSize,r=t.width,u=t.height;return{x:s.default.getDotOffsetByDistance(r,i,n+2,n+o-e),y:s.default.getFirstDotCoords(u,i,o),width:i,height:i}},e.prototype.getRectangleRightSideDot=function(t,e,o,n){var i=t.dotsSize,r=t.width,u=t.height,a=n-o,c=2*n+2*o;return{x:s.default.getLastDotCoords(r,i,o+a+2),y:s.default.getDotOffsetByDistance(u,i,o,c-1-e),width:i,height:i}},e.prototype.getRectangleBottomSideDot=function(t,e,o,n){var i=t.dotsSize,r=t.width,u=t.height,a=2*n+o;return{x:s.default.getDotOffsetByDistance(r,i,n+2,a-e),y:s.default.getLastDotCoords(u,i,o),width:i,height:i}},e.prototype.getRectangleLeftSideDot=function(t,e,o,n){var i=t.dotsSize,r=t.width,u=t.height,a=n-o;return{x:s.default.getFirstDotCoords(r,i,o+a+2),y:s.default.getDotOffsetByDistance(u,i,o,e),width:i,height:i}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getRectangleDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords;return{dotsCount:e,dotsSize:o,width:n.width,height:n.height}},e}(o(34).FiguresItem);e.Rectangle=u},162:function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=r(o(33)),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u041b\u0438\u043d\u0438\u044f",e}return i(e,t),e.prototype.getLineDot=function(t,e){var o=e.dotsSize,n=e.dotsCount,i=e.width,r=e.height;return{x:s.default.getDotOffsetByDistance(i,o,n,n-t-1),y:r/2-o/2,width:o,height:o}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getLineDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords;return{dotsCount:e,dotsSize:o,width:n.width,height:n.height}},e}(o(34).FiguresItem);e.Line=u},163:function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=r(o(33)),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u041a\u0440\u0438\u0432\u0430\u044f \u043b\u0438\u043d\u0438\u044f",e}return i(e,t),e.prototype.getLineDot=function(t,e){var o=e.dotsSize,n=e.dotsCount,i=e.width,r=e.height,u=t%2===0?o/2:-o/2;return{x:s.default.getDotOffsetByDistance(i,o,n,n-t-1),y:r/2-o/2+u,width:o,height:o}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getLineDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords;return{dotsCount:e,dotsSize:o,width:n.width,height:n.height}},e}(o(34).FiguresItem);e.CurvedLine=u},164:function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=r(o(33)),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name="\u041a\u0432\u0430\u0434\u0440\u0430\u0442",e}return i(e,t),e.prototype.getLineDot=function(t,e){var o,n,i=e.dotsSize,r=(e.dotsCount,e.width);e.height;return t<4?(o=s.default.getLastDotCoords(r,i,4),n=s.default.getDotOffsetByDistance(r,i,9,8-t)):t<8||t<12||t<16&&(o=s.default.getFirstDotCoords(r,i,4),n=s.default.getDotOffsetByDistance(r,i,9,20-t)),{x:o,y:n,width:i,height:i}},e.prototype.getCoords=function(t){for(var e=this.getCommonParams(t),o=[],n=0;n<e.dotsCount;n++)o.push(this.getLineDot(n,e));return o},e.prototype.getCommonParams=function(t){var e=t.dotsCount,o=t.dotsSize,n=t.coords;return{dotsCount:e,dotsSize:o,width:n.width,height:n.height}},e}(o(34).FiguresItem);e.Square=u},165:function(t,e,o){},33:function(t,e,o){"use strict";function n(t,e,o){return(t-e*o)/(o+1)}function i(t,e,o){return t*(o+1)+e*o}Object.defineProperty(e,"__esModule",{value:!0}),e.default={getDistanceBetweenDots:n,getDotOffsetByIndex:i,getDotOffsetByDistance:function(t,e,o,r){return i(n(t,e,o),e,o-1-r)},getFirstDotCoords:function(t,e,o){return i(n(t,e,o),e,0)},getLastDotCoords:function(t,e,o){return i(n(t,e,o),e,o-1)}}},34:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){return function(){}}();e.FiguresItem=n},70:function(t,e,o){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var a=s(o(1)),c=s(o(80));o(86);var d=u(o(169)),f=d.createSliderWithTooltip(d.default),h=s(o(143)),l=s(o(159)),p=o(160);o(165),o(167);var g=new p.Geometry,m=function(t){function e(e){var o=t.call(this,e)||this;return o.state={},o.defaultDotsSize=15,o.defaultDotsCount=16,o.maxDotsSize=22,o.maxDotsCount=24,o.maxDotsSizeDesktop=40,o.maxDotsCountDesktop=40,o.minDotsSize=5,o.minDotsCount=6,o.isMobile()||(o.maxDotsCount=o.maxDotsCountDesktop,o.maxDotsSize=o.maxDotsSizeDesktop),localStorage&&localStorage.getItem("currentFigure")&&g.setCurrent(localStorage.getItem("currentFigure")),o.onButtonAnimateClick=o.onButtonAnimateClick.bind(o),o.onInputRangeCountChange=o.onInputRangeCountChange.bind(o),o.onInputRangeSizeChange=o.onInputRangeSizeChange.bind(o),o.initEvents(),o}return i(e,t),e.prototype.initEvents=function(){var t=this;this.makeCorrectWindowSize(),window.addEventListener("resize",l.default.call(this,function(){t.makeCorrectWindowSize(),t.drawInitialDots({dotsCount:t.state.config.dotsCount,dotsSize:t.state.config.dotsSize})},200))},e.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)},e.prototype.getInitialConfig=function(t){var e=(t=t||{}).dotsSize||localStorage&&Number(localStorage.getItem("dotsSize"))||this.defaultDotsSize,o={dotsCount:t.dotsCount||localStorage&&Number(localStorage.getItem("dotsCount"))||this.defaultDotsCount,dotsSize:e};if(o.dotsCount%2!==0)throw new Error("\u0427\u0438\u0441\u043b\u043e \u0442\u043e\u0447\u0435\u043a \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0451\u0442\u043d\u044b\u043c.");localStorage&&(localStorage.setItem("dotsCount",o.dotsCount),localStorage.setItem("dotsSize",o.dotsSize));var n=document.querySelector(".template").getBoundingClientRect();o.coords=n;var i=g.getCurrentCoords(o);return o.initianDraw=this.wrapperDots(i),o},e.prototype.componentDidMount=function(){this.drawInitialDots()},e.prototype.makeCorrectWindowSize=function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",t+"px")},e.prototype.drawInitialDots=function(t){var e=this.getInitialConfig(t);this.setState(r(r({},this.state),{buttonText:g.getNext().name,config:e,dots:e.initianDraw}))},e.prototype.setDotTransitions=function(t){var e=Array.prototype.slice.call(document.querySelectorAll(".dot")),o=t<=15?.03:.025,n=t<=15?.04:.08;t>30&&(o=.02,n=.02);for(var i=t/2,r=0;r<e.length;r++){var s=void 0,u="transform "+(s=(s=r>i?(r+i)*o+n:r*o*2+n).toFixed(2))+"s ease-in-out, width "+s/2+"s ease-in-out, height "+s/2+"s ease-in-out";e[r].style.transition=u}},e.prototype.onButtonAnimateClick=function(t){g.updateNext(),localStorage&&localStorage.setItem("currentFigure",g.getCurrent().name);var e=this.getNextButtonTextAndDots(),o=e.buttonText,n=e.dots;this.setState(r(r({},this.state),{buttonText:o,dots:n}))},e.prototype.getNextButtonTextAndDots=function(){return{buttonText:g.getNext().name,dots:this.wrapperDots(g.getCurrentCoords(this.state.config))}},e.prototype.wrapperDots=function(t){return t.map(function(t,e){return a.default.createElement("div",{className:"dot",key:e,style:t.style})})},e.prototype.onInputRangeCountChange=function(t){var e=Object.assign({},this.state);e.config.dotsCount=t,this.drawInitialDots({dotsCount:t,dotsSize:e.config.dotsSize}),this.setState({state:e})},e.prototype.onInputRangeSizeChange=function(t){var e=Object.assign({},this.state);e.config.dotsSize=t,this.drawInitialDots({dotsSize:t,dotsCount:e.config.dotsCount}),this.setState({state:e})},e.prototype.render=function(){var t=this.isMobile()?" \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435.":" \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.",e=this.state.config&&this.state.config.dotsCount||this.defaultDotsCount,o=this.state.config&&this.state.config.dotsSize||this.defaultDotsSize;return a.default.createElement("div",{className:"App"},a.default.createElement("div",{className:"component"},a.default.createElement("div",{className:"template"},this.state.dots),a.default.createElement("div",{className:"actions"},a.default.createElement("div",{className:"actions__input-count"},a.default.createElement(f,{min:this.minDotsCount,max:this.maxDotsCount,value:e,step:2,onChange:this.onInputRangeCountChange,tipFormatter:function(t){return t+"px"}}),a.default.createElement("div",{className:"actions__text-count"},"\u0427\u0438\u0441\u043b\u043e")),this.state.buttonText&&a.default.createElement(c.default,{size:"sm",variant:"primary",onClick:this.onButtonAnimateClick},this.state.buttonText),a.default.createElement("div",{className:"actions__input-size"},a.default.createElement(h.default,{minValue:this.minDotsSize,maxValue:this.maxDotsSize,value:o,onChange:this.onInputRangeSizeChange}),a.default.createElement("div",{className:"actions__text-size"},"\u0420\u0430\u0437\u043c\u0435\u0440")))),a.default.createElement("div",{className:"device-info"},"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e ",t))},e}(a.default.Component);e.default=m},74:function(t,e,o){t.exports=o(75)},75:function(t,e,o){"use strict";o.r(e);var n=o(1),i=o.n(n),r=o(7),s=o.n(r),u=o(70),a=o.n(u);s.a.render(i.a.createElement(a.a,null),document.getElementById("root"))}},[[74,2,1]]]);