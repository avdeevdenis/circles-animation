(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){t.exports=n(27)},19:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(9),r=n.n(a),s=n(6),c=n(2),l=n(3),u=n(13),d=n(10),f=n(12),g=n(1),h=n(11),m=n.n(h),v=(n(19),new(function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"getRectangle",value:function(t){return this.getTemplate(this.getRectangleDot,t)}},{key:"getRectangleDot",value:function(t,e){var n={},i=50,a=0,r=20,s=0;return t<=5&&(i=e.rectangle.top.xOffset,a=e.rectangle.top.yOffset,r=(i+e.dotsSize)*t+i,s=a,n=this.getStyle({x:r,y:s,bgColor:"lime"})),t>=6&&t<=9&&(a=e.rectangle.right.yOffset,r=e.rectangle.right.xOffset,s=a*(t-5)+e.dotsSize+e.dotsSize/2,n=this.getStyle({x:r,y:s,bgColor:"red"})),t>=10&&t<=15&&(a=e.rectangle.bottom.yOffset,r=((i=e.rectangle.top.xOffset)+e.dotsSize)*(15-t)+i,s=a,n=this.getStyle({x:r,y:s,bgColor:"blue"})),t>=16&&t<=20&&(a=e.rectangle.left.yOffset,r=5*((i=e.rectangle.left.xOffset)+e.dotsSize)+i,s=a*(20-t)+e.dotsSize+e.dotsSize/2,n=this.getStyle({x:r,y:s,bgColor:"yellow"})),o.a.createElement("div",{key:t,style:n,className:"dot"})}},{key:"getDirectLine",value:function(t){return this.getTemplate(this.getDirectLineDot,t)}},{key:"getDirectLineDot",value:function(t,e){var n,i=e.xOffset,a=e.yOffset,r=(e.dotsSize+i)*t+i,s=a;return n=this.getStyle({x:r,y:s}),o.a.createElement("div",{key:t,style:n,className:"dot"})}},{key:"getTemplate",value:function(t,e){var n=e.dotsCount,i=e.dotsSize,o=e.coords,a=[],r=(o.width-i*n)/(n+1);r<0&&(r=0);for(var s={dotsCount:n,dotsSize:i,xOffset:r,yOffset:o.height/2-i/2,rectangle:{top:{xOffset:(o.width-6*i)/7,yOffset:50},bottom:{yOffset:o.height-50-i},left:{xOffset:(o.width-6*i)/7,yOffset:(o.height-4*i)/5},right:{xOffset:(o.width-6*i)/7,yOffset:(o.height-4*i)/5}}},c=0;c<n;c++)a.push(t.call(this,c,s));return a}},{key:"getStyle",value:function(t){var e=t.x,n=void 0===e?0:e,i=t.y,o=void 0===i?0:i,a=t.bgColor,r=void 0===a?"":a,s={};return r&&(s.backgroundColor=r),s.transform="translate3d(".concat(n,"px, ").concat(o,"px, 0)"),s}}]),t}())),y=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).onButtonAnimateClick=n.onButtonAnimateClick.bind(Object(g.a)(Object(g.a)(n))),n.figuresName={rectangle:"\u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a",directLine:"\u041b\u0438\u043d\u0438\u044f"},n.buttonTexts=[n.figuresName.rectangle,n.figuresName.directLine],n.state={buttonText:n.buttonTexts[0]},n.initEvents(),n.makeCorrectWindowSize(),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"initEvents",value:function(){var t=this;!function(t,e,n){n=n||window;var i=!1;n.addEventListener(t,function(){i||(i=!0,requestAnimationFrame(function(){n.dispatchEvent(new CustomEvent(e)),i=!1}))})}("resize","throttle-resize"),window.addEventListener("throttle-resize",function(){t.drawInitialDots()})}},{key:"isMobileOrTablet",value:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},{key:"getInitialConfig",value:function(){var t={dotsCount:20,dotsSize:20},e=document.querySelector(".template").getBoundingClientRect();t.coords=e;var n=v.getDirectLine(t);return t.initianDraw=n,t}},{key:"componentDidMount",value:function(){this.drawInitialDots()}},{key:"makeCorrectWindowSize",value:function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px")),window.addEventListener("resize",function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))})}},{key:"drawInitialDots",value:function(){var t=this.getInitialConfig();this.setState(Object(s.a)({},this.state,{config:t,dots:t.initianDraw}))}},{key:"onButtonAnimateClick",value:function(t){var e=this.getNextButtonTextAndDots(t.target.innerText),n=e.nextButtonText,i=e.dots;this.setState(Object(s.a)({},this.state,{buttonText:n,dots:i}))}},{key:"getNextButtonTextAndDots",value:function(t){var e,n,i=this.state.config;return t===this.figuresName.rectangle?(e=this.figuresName.directLine,n=v.getRectangle(i)):t===this.figuresName.directLine&&(e=this.figuresName.rectangle,n=v.getDirectLine(i)),{nextButtonText:e,dots:n}}},{key:"render",value:function(){var t=this.isMobileOrTablet()?" \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435.":" \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.";return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"component"},o.a.createElement("div",{className:"template"},this.state.dots),o.a.createElement("div",{className:"actions"},this.state.buttonText&&o.a.createElement(m.a,{variant:"primary",onClick:this.onButtonAnimateClick},this.state.buttonText))),o.a.createElement("div",{className:"device-info"},"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e ",t))}}]),e}(i.Component);r.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.dd563b50.chunk.js.map