(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){t.exports=n(27)},19:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(9),r=n.n(o),s=n(6),c=n(2),u=n(3),l=n(13),d=n(10),g=n(12),v=n(1),f=n(11),m=n.n(f),h=(n(19),new(function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,[{key:"getRectangle",value:function(t){return this.getTemplate(this.getRectangleDot,t)}},{key:"getRectangleDot",value:function(t,e){var n={},i=20,o=0;return t<=5&&(i=50*t,o=50,n=this.getStyle({x:i,y:o,bgColor:"lime"})),t>=6&&t<=9&&(i=250,o=50*(t-4),n=this.getStyle({x:i,y:o,bgColor:"red"})),t>=10&&t<=15&&(i=50*(15-t),o=6*50,n=this.getStyle({x:i,y:o,bgColor:"blue"})),t>=16&&t<=20&&(i=0,o=50*(21-t),n=this.getStyle({x:i,y:o,bgColor:"yellow"})),a.a.createElement("div",{key:t,style:n,className:"dot"})}},{key:"getDirectLine",value:function(t){return this.getTemplate(this.getDirectLineDot,t)}},{key:"getDirectLineDot",value:function(t,e){var n,i=e.xOffset,o=e.yOffset,r=(e.dotsSize+i)*t+i,s=o;return n=this.getStyle({x:r,y:s}),a.a.createElement("div",{key:t,style:n,className:"dot"})}},{key:"getTemplate",value:function(t,e){var n=e.dotsCount,i=e.dotsSize,a=e.coords,o=[],r=(a.width-i*n)/(n+1);r<0&&(r=0);for(var s={dotsCount:n,dotsSize:i,xOffset:r,yOffset:a.height/2-i/2},c=0;c<n;c++)o.push(t.call(this,c,s));return o}},{key:"getStyle",value:function(t){var e=t.x,n=void 0===e?0:e,i=t.y,a=void 0===i?0:i,o=t.bgColor,r=void 0===o?"":o,s={};return r&&(s.backgroundColor=r),s.transform="translate3d(".concat(n,"px, ").concat(a,"px, 0)"),s}}]),t}())),y=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(d.a)(e).call(this,t))).onButtonAnimateClick=n.onButtonAnimateClick.bind(Object(v.a)(Object(v.a)(n))),n.figuresName={rectangle:"\u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a",directLine:"\u041b\u0438\u043d\u0438\u044f"},n.buttonTexts=[n.figuresName.rectangle,n.figuresName.directLine],n.state={buttonText:n.buttonTexts[0]},n.initEvents(),n}return Object(g.a)(e,t),Object(u.a)(e,[{key:"initEvents",value:function(){var t=this;!function(t,e,n){n=n||window;var i=!1;n.addEventListener(t,function(){i||(i=!0,requestAnimationFrame(function(){n.dispatchEvent(new CustomEvent(e)),i=!1}))})}("resize","throttle-resize"),window.addEventListener("throttle-resize",function(){t.drawInitialDots()})}},{key:"isMobileOrTablet",value:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},{key:"getInitialConfig",value:function(){var t={dotsCount:20,dotsSize:20},e=document.querySelector(".template").getBoundingClientRect();t.coords=e;var n=h.getDirectLine(t);return t.initianDraw=n,t}},{key:"componentDidMount",value:function(){this.drawInitialDots()}},{key:"drawInitialDots",value:function(){var t=this.getInitialConfig();this.setState(Object(s.a)({},this.state,{config:t,dots:t.initianDraw}))}},{key:"onButtonAnimateClick",value:function(t){var e=this.getNextButtonTextAndDots(t.target.innerText),n=e.nextButtonText,i=e.dots;this.setState(Object(s.a)({},this.state,{buttonText:n,dots:i}))}},{key:"getNextButtonTextAndDots",value:function(t){var e,n,i=this.state.config;return t===this.figuresName.rectangle?(e=this.figuresName.directLine,n=h.getRectangle(i)):t===this.figuresName.directLine&&(e=this.figuresName.rectangle,n=h.getDirectLine(i)),{nextButtonText:e,dots:n}}},{key:"render",value:function(){var t=this.isMobileOrTablet()?" \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435...":" \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.";return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"component"},a.a.createElement("div",{className:"template"},this.state.dots),a.a.createElement("div",{className:"actions"},this.state.buttonText&&a.a.createElement(m.a,{variant:"primary",onClick:this.onButtonAnimateClick},this.state.buttonText))),a.a.createElement("div",{className:"device-info"},"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e ",t))}}]),e}(i.Component);r.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.9367ee9e.chunk.js.map