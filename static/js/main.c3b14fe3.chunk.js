(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){t.exports=n(27)},19:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n.n(i),a=n(9),s=n.n(a),r=n(6),c=n(2),u=n(3),l=n(12),g=n(10),d=n(13),h=n(1),f=n(11),v=n.n(f),y=function(t,e){var n,i,o=!1;return function a(){if(o)return n=arguments,void(i=this);t.apply(this,arguments),o=!0,setTimeout(function(){o=!1,n&&(a.apply(i,n),n=i=null)},e)}},D=function(){function t(){Object(c.a)(this,t)}return Object(u.a)(t,[{key:"getRectangle",value:function(t){return this.getTemplate(this.getRectangleDot,t)}},{key:"getRectangleDot",value:function(t,e){var n={},i=t>=6&&t<10,a=t>=10&&t<16,s=t>=16&&t<=20;return t<6&&(n=this.getRectangleTopSideDot(e,t,6,4)),i?n=this.getRectangleRightSideDot(e,t,6,4):a?n=this.getRectangleBottomSideDot(e,t,6,4):s&&(n=this.getRectangleLeftSideDot(e,t,6,4)),o.a.createElement("div",{key:t,style:n,className:"dot"})}},{key:"getRectangleRightSideDot",value:function(t,e,n,i){var o=t.dotsSize,a=t.width,s=t.height,r=this.getFirstDotCoords(a,o,n),c=this.getDotOffsetByDistance(s,o,i+2,10-e);return this.getStyle({x:r,y:c,bgColor:"darkblue"})}},{key:"getRectangleBottomSideDot",value:function(t,e,n,i){var o=t.dotsSize,a=t.width,s=t.height,r=i+2*n-1,c=this.getDotOffsetByDistance(a,o,n,r-e),u=this.getLastDotCoords(s,o,i+2);return this.getStyle({x:c,y:u,bgColor:"red"})}},{key:"getRectangleLeftSideDot",value:function(t,e,n,i){var o=t.dotsSize,a=t.width,s=t.height,r=this.getLastDotCoords(a,o,n),c=this.getDotOffsetByDistance(s,o,i+2,20-e);return this.getStyle({x:r,y:c,bgColor:"darkgreen"})}},{key:"getRectangleTopSideDot",value:function(t,e,n,i){var o=t.dotsSize,a=t.width,s=t.height,r=this.getDotOffsetByDistance(a,o,n,e),c=this.getFirstDotCoords(s,o,i+2);return this.getStyle({x:r,y:c,bgColor:"lime"})}},{key:"getDirectLine",value:function(t){return this.getTemplate(this.getDirectLineDot,t)}},{key:"getDirectLineDot",value:function(t,e){var n,i=e.xOffset,a=e.yOffset,s=(e.dotsSize+i)*t+i,r=a;return n=this.getStyle({x:s,y:r}),o.a.createElement("div",{key:t,style:n,className:"dot"})}},{key:"getTemplate",value:function(t,e){var n=e.dotsCount,i=e.dotsSize,o=e.coords,a=[],s=(o.width-i*n)/(n+1);s<0&&(s=0);for(var r={dotsCount:n,dotsSize:i,xOffset:s,yOffset:o.height/2-i/2,width:o.width,height:o.height,rectangle:{top:{yOffset:50},bottom:{yOffset:o.height-50-i},left:{xOffset:(o.width-6*i)/7,yOffset:(o.height-4*i)/5},right:{xOffset:(o.width-6*i)/7,yOffset:(o.height-4*i)/5}}},c=0;c<n;c++)a.push(t.call(this,c,r));return a}},{key:"getDistanceBetweenDots",value:function(t,e,n){return(t-e*n)/(n+1)}},{key:"getDotOffsetByIndex",value:function(t,e,n){return t*(n+1)+e*n}},{key:"getDotOffsetByDistance",value:function(t,e,n,i){var o=this.getDistanceBetweenDots(t,e,n);return this.getDotOffsetByIndex(o,e,n-1-i)}},{key:"getFirstDotCoords",value:function(t,e,n){var i=this.getDistanceBetweenDots(t,e,n);return this.getDotOffsetByIndex(i,e,0)}},{key:"getLastDotCoords",value:function(t,e,n){var i=this.getDistanceBetweenDots(t,e,n);return this.getDotOffsetByIndex(i,e,n-1)}},{key:"getStyle",value:function(t){var e=t.x,n=void 0===e?0:e,i=t.y,o=void 0===i?0:i,a=t.bgColor,s=void 0===a?"":a,r={};return s&&(r.backgroundColor=s),r.transform="translate3d(".concat(n,"px, ").concat(o,"px, 0)"),r}}]),t}(),m=(n(19),new D),k=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(g.a)(e).call(this,t))).onButtonAnimateClick=n.onButtonAnimateClick.bind(Object(h.a)(Object(h.a)(n))),n.figuresName={rectangle:"\u041f\u0440\u044f\u043c\u043e\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a",directLine:"\u041b\u0438\u043d\u0438\u044f"},n.buttonTexts=[n.figuresName.rectangle,n.figuresName.directLine],n.state={buttonText:n.buttonTexts[0]},n.drawInitialDots=n.drawInitialDots.bind(Object(h.a)(Object(h.a)(n))),n.initEvents(),n.makeCorrectWindowSize(),n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"initEvents",value:function(){window.addEventListener("resize",y.call(this,this.drawInitialDots,100))}},{key:"isMobileOrTablet",value:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},{key:"getInitialConfig",value:function(){var t={dotsCount:20,dotsSize:20},e=document.querySelector(".template").getBoundingClientRect();t.coords=e;var n=m.getDirectLine(t);return t.initianDraw=n,t}},{key:"componentDidMount",value:function(){this.drawInitialDots()}},{key:"makeCorrectWindowSize",value:function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px")),window.addEventListener("resize",function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))})}},{key:"drawInitialDots",value:function(){console.log("draw");var t=this.getInitialConfig();this.setState(Object(r.a)({},this.state,{config:t,dots:t.initianDraw}))}},{key:"onButtonAnimateClick",value:function(t){var e=this.getNextButtonTextAndDots(t.target.innerText),n=e.nextButtonText,i=e.dots;this.setState(Object(r.a)({},this.state,{buttonText:n,dots:i}))}},{key:"getNextButtonTextAndDots",value:function(t){var e,n,i=this.state.config;return t===this.figuresName.rectangle?(e=this.figuresName.directLine,n=m.getRectangle(i)):t===this.figuresName.directLine&&(e=this.figuresName.rectangle,n=m.getDirectLine(i)),{nextButtonText:e,dots:n}}},{key:"render",value:function(){var t=this.isMobileOrTablet()?" \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435.":" \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u043e\u043a\u043d\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.";return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"component"},o.a.createElement("div",{className:"template"},this.state.dots),o.a.createElement("div",{className:"actions"},this.state.buttonText&&o.a.createElement(v.a,{variant:"primary",onClick:this.onButtonAnimateClick},this.state.buttonText))),o.a.createElement("div",{className:"device-info"},"\u0414\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e ",t))}}]),e}(i.Component);s.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.c3b14fe3.chunk.js.map