(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1408:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7819),o=n.n(r),i=n(1664),a=n(5893);function u(e){function t(){return(0,a.jsx)("button",{className:o().button,onClick:e.onClick,children:e.text})}return e.href?(0,a.jsx)(i.default,{href:e.href,children:t()}):t()}},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),u=n(4651),c=n(7426);var s={};function l(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=u.useRouter(),f=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],u=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):u||i}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),j=r(w,2),k=j[0],x=j[1],O=i.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);i.default.useEffect((function(){var e=x&&n&&a.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,x,b,n,o]);var _={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:u}))}(e,o,d,p,h,y,m,b)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var A="undefined"!==typeof b?b:o&&o.locale,S=o&&o.isLocaleDomain&&a.getDomainLocale(p,A,o&&o.locales,o&&o.domainLocales);_.href=S||a.addBasePath(a.addLocale(p,A,o&&o.defaultLocale))}return i.default.cloneElement(t,_)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=o.useRef(),s=o.useState(!1),l=r(s,2),f=l[0],d=l[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var u=new Map},9385:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,c,"next",e)}function c(e){r(a,o,i,u,c,"throw",e)}u(void 0)}))}}n.r(t),n.d(t,{default:function(){return Z}});var i=n(7757),a=n.n(i),u=n(7294),c=n(7876),s=n.n(c),l=n(1408),f=n(3774),d=n.n(f),p=n(6259),v=n.n(p),h=n(5893);function y(e){var t=e.value,n=t.revealed?v().answerRevealed:"";return(0,h.jsx)("div",{className:v().answer,onClick:function(){return e.onResponse(e.index)},children:(0,h.jsxs)("div",{className:"".concat(n," ").concat(v().answerContent),children:[(0,h.jsxs)("div",{className:v().front,children:[(0,h.jsx)("div",{className:v().letter,style:{backgroundColor:e.backgroundLetterCollor},children:e.letter}),(0,h.jsx)("div",{className:v().value,children:t.value})]}),(0,h.jsx)("div",{className:v().back,children:t.rightAnswer?(0,h.jsxs)("div",{className:v().right,children:[(0,h.jsx)("div",{children:"La bonne r\xe9ponse est..."}),(0,h.jsx)("div",{className:v().value,children:t.value})]}):(0,h.jsxs)("div",{className:v().wrong,children:[(0,h.jsx)("div",{children:"Cette r\xe9ponse est incorrecte !"}),(0,h.jsx)("div",{className:v().value,children:t.value})]})})]})})}var m=n(7427),b=n.n(m);function g(e){return(0,h.jsx)("div",{className:b().subtitle,children:(0,h.jsx)("span",{className:b().text,children:e.text})})}var w=n(7907),j=n(4875),k=n.n(j);function x(e){return(0,h.jsx)("div",{className:k().timer,children:(0,h.jsx)(w.CountdownCircleTimer,{duration:e.duration,size:120,isPlaying:!0,onComplete:e.timeOut,colors:[["#bce596",.33],["#f7b801",.33],["#ed827a",.33]],children:function(e){return e.remainingTime}})})}var O=n(9964),_=n.n(O);function A(e){return(0,h.jsx)("div",{className:_().title,children:(0,h.jsx)("span",{className:_().text,children:e.text})})}var S=[{value:"A",collor:"#F2C866"},{value:"B",collor:"#F266BA"},{value:"C",collor:"#85D4F2"},{value:"D",collor:"#BCE596"}];function T(e){var t,n=e.value;return(0,h.jsxs)("div",{className:d().question,children:[(0,h.jsx)(A,{text:n.title}),(0,h.jsx)(g,{text:n.subtitle}),(0,h.jsx)(x,{duration:null!==(t=e.timeToAnswer)&&void 0!==t?t:10,timeOut:e.timeOut},n.id),n.answers.map((function(t,r){return(0,h.jsx)(y,{value:t,index:r,letter:S[r].value,backgroundLetterCollor:S[r].collor,onResponse:e.onResponse},"".concat(n.id,"-").concat(r))}))]})}function E(e){return(0,h.jsxs)("div",{className:s().survey,children:[!!e.question&&(0,h.jsx)(T,{value:e.question,timeToAnswer:15,onResponse:function(t){e.question.notAnswered&&e.questionAnswered(e.question.answerWith(t))},timeOut:e.goToNextStep}),(0,h.jsx)(l.Z,{onClick:e.goToNextStep,text:e.last?"Terminer":"Suivant"})]})}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),e}function M(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function L(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,M(e,t,"get"))}function I(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,M(e,t,"set"),n),n}var N=new WeakMap,q=new WeakMap,W=new WeakMap,D=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];C(this,e),N.set(this,{writable:!0,value:void 0}),q.set(this,{writable:!0,value:void 0}),W.set(this,{writable:!0,value:void 0}),I(this,N,t),I(this,q,n),I(this,W,r)}return R(e,[{key:"value",get:function(){return L(this,N)}},{key:"rightAnswer",get:function(){return L(this,q)}},{key:"revealed",get:function(){return L(this,W)}},{key:"reveal",value:function(){return new e(L(this,N),L(this,q),!0)}},{key:"toObject",value:function(){return{value:L(this,N),rightAnswer:L(this,q),revealed:L(this,W)}}}],[{key:"right",value:function(t){return new e(t,!0)}},{key:"wrong",value:function(t){return new e(t,!1)}},{key:"createUsingObject",value:function(t){return new e(t.value,t.rightAnswer,t.revealed)}}]),e}();function U(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=new WeakMap,G=new WeakMap,K=new WeakMap,z=new WeakMap,H=new WeakMap,$=function(){function e(t,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];C(this,e),B.set(this,{writable:!0,value:void 0}),G.set(this,{writable:!0,value:void 0}),K.set(this,{writable:!0,value:void 0}),z.set(this,{writable:!0,value:void 0}),H.set(this,{writable:!0,value:void 0}),I(this,B,t),I(this,G,n),I(this,K,r),I(this,z,o),I(this,H,i)}return R(e,[{key:"id",get:function(){return L(this,B)}},{key:"subtitle",get:function(){return L(this,K)}},{key:"title",get:function(){return L(this,G)}},{key:"answers",get:function(){return L(this,z)}},{key:"right",get:function(){return L(this,H)}},{key:"notAnswered",get:function(){return!this.answered}},{key:"answered",get:function(){var e,t=U(L(this,z));try{for(t.s();!(e=t.n()).done;){if(e.value.revealed)return!0}}catch(n){t.e(n)}finally{t.f()}return!1}},{key:"answerWith",value:function(t){var n,r=null===(n=L(this,z)[t])||void 0===n?void 0:n.rightAnswer,o=L(this,z).map((function(e,n){return t===n||e.rightAnswer?e.reveal():e}));return new e(this.id,this.title,this.subtitle,o,r)}},{key:"revealAnswers",value:function(){var t=L(this,z).map((function(e){return e.reveal()}));return new e(this.id,this.title,this.subtitle,t,!1)}},{key:"shuffleAnswers",value:function(){var t=L(this,z).map((function(e){return{value:e,random:Math.random()}})).sort((function(e,t){return e.random-t.random})).map((function(e){return e.value}));return new e(L(this,B),L(this,G),L(this,K),t,L(this,H))}},{key:"toObject",value:function(){return{id:L(this,B),title:L(this,G),subtitle:L(this,K),answered:this.answered,right:L(this,H),answers:L(this,z).map((function(e){return e.toObject()}))}}}],[{key:"createUsingObject",value:function(t){var n=t.answers.map((function(e){return D.createUsingObject(e)}));return new e(t.id,t.title,t.subtitle,n,t.right)}}]),e}(),X=n(1163),J="https://betosan83.github.io/quiz-next/api/survey";function Z(){var e=(0,X.useRouter)(),t=(0,u.useState)([]),n=t[0],r=t[1],i=(0,u.useState)(),c=i[0],s=i[1],l=(0,u.useState)(0),f=l[0],d=l[1];function p(){return(p=o(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"/survey"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return y.apply(this,arguments)}function y(){return(y=o(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"/questions/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,o=$.createUsingObject(r),s(o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){var e=n.indexOf(c.id)+1;return n[e]}return(0,u.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),(0,u.useEffect)((function(){n.length>0&&v(n[0])}),[n]),!!c&&(0,h.jsx)(E,{question:c,last:void 0===m(),questionAnswered:function(e){s(e);var t=e.right;d(f+(t?1:0))},goToNextStep:function(){if(c.answered){var t=m();t?function(e){v(e)}(t):e.push({pathname:"/result",query:{total:n.length,rights:f}})}else c.right||s(c.revealAnswers())}})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9385)}])},6259:function(e){e.exports={answer:"Answer_answer__1y2c0",answerContent:"Answer_answerContent__3WZK-",answerRevealed:"Answer_answerRevealed__dLayi",front:"Answer_front__5HFXt",back:"Answer_back__ynN70",right:"Answer_right__3fsBv",wrong:"Answer_wrong__Obglr",value:"Answer_value__2lqja",letter:"Answer_letter__3JfBe"}},7819:function(e){e.exports={button:"Button_button__1rPei"}},3774:function(e){e.exports={question:"Question_question__3fcTu"}},7427:function(e){e.exports={subtitle:"Subtitle_subtitle__2IUk2",text:"Subtitle_text__1o3nn"}},7876:function(e){e.exports={survey:"Survey_survey__2b3lc"}},4875:function(e){e.exports={timer:"Timer_timer__3Pzd9"}},9964:function(e){e.exports={title:"Title_title__PJ6Nn",text:"Title_text__1Jwig"}},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},7907:function(e,t,n){!function(){var t={262:function(e,t,n){"use strict";var r=n(586);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},980:function(e,t,n){e.exports=n(262)()},586:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},592:function(e,t,n){!function(){"use strict";var t={d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};t.r(r),t.d(r,{useElapsedTime:function(){return u}});var o=n(297);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,r=t.onComplete,a=t.startAt,u=void 0===a?0:a,s=t.autoResetKey,l=(0,o.useState)(u),f=i(l,2),d=f[0],p=f[1],v=(0,o.useRef)(-1e3*u),h=(0,o.useRef)(null),y=(0,o.useRef)(null),m=(0,o.useRef)(null),b=(0,o.useRef)(!1),g=(0,o.useRef)(!1),w=(0,o.useRef)(0),j=(0,o.useCallback)((function(e){w.current+=1,p("number"==typeof e?e:u)}),[]),k=function e(t){var o=t/1e3;if(null===y.current)return y.current=o,void(h.current=requestAnimationFrame(e));var i=o-y.current;if(y.current=o,p((function(e){var t=e+i;return"number"!=typeof n||t<n?t:(g.current=!0,n)})),g.current){if("function"==typeof r){v.current+=1e3*n;var a=v.current/1e3,u=r(a)||{},c=u.shouldRepeat,s=void 0!==c&&c,l=u.delay,f=void 0===l?0:l,d=u.newStartAt;s&&b.current&&(m.current=setTimeout((function(){j(d)}),1e3*f))}}else h.current=requestAnimationFrame(e)},x=function(){cancelAnimationFrame(h.current),clearTimeout(m.current),y.current=null};return c((function(){return e&&(h.current=requestAnimationFrame(k)),x}),[e]),c((function(){e&&b.current&&(x(),h.current=requestAnimationFrame(k))}),[n]),c((function(){b.current&&j()}),[s]),c((function(){e&&g.current&&(x(),h.current=requestAnimationFrame(k)),g.current=!1}),[w.current]),c((function(){return b.current=!0,function(){b.current=!1}}),[]),{elapsedTime:d,reset:j}},c="undefined"==typeof window?o.useEffect:o.useLayoutEffect;e.exports=r}()},297:function(e){"use strict";e.exports=n(7294)}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};!function(){"use strict";o.r(i),o.d(i,{CountdownCircleTimer:function(){return R}});var e=o(297),t=o.n(e),n=function(e){return{position:"relative",width:e,height:e}},r={display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,width:"100%",height:"100%"},a=function(e){return e.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)},u=function(e,t){return"Invalid prop '".concat(e,"' supplied to '").concat(t,"'")},c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"array";return new Error("".concat(u(e,t),". Expect ").concat("array"===n?"an array of tuples where the first element is a":""," HEX color code string.\n ."))},s=function(e,t){return 0===t?0:"number"==typeof e?t-e:0},l=o(980),f=o.n(l),d={duration:f().number.isRequired,colors:function(e,t,n){var r=e[t];return"string"==typeof r?function(e,t,n){if(!a(e))return c(t,n,"string")}(r,t,n):function(e,t,n){for(var r=0;r<e.length;r+=1){var o=e[r][0],i=e[r][1];if(!a(o))return c(t,n);if(!(void 0===i||i>=0&&i<=1))return new Error("".concat(u(t,n),".\n        Expect an array of tuples where the second element is a number between 0 and 1 representing color transition duration."))}}(r,t,n)},children:f().oneOfType([f().func,f().node]),size:f().number,strokeWidth:f().number,trailStrokeWidth:f().number,trailColor:f().string,isPlaying:f().bool,strokeLinecap:f().oneOf(["round","square"]),isLinearGradient:f().bool,gradientUniqueKey:f().string,onComplete:f().func,ariaLabel:f().string,renderAriaTime:f().func,initialRemainingTime:f().number,rotation:f().oneOf(["clockwise","counterclockwise"])};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var n=e.gradientId,r=e.colors,o=e.defs,i=void 0===o?"defs":o,a=e.linearGradient,u=void 0===a?"linearGradient":a,c=e.stop,s=void 0===c?"stop":c;return t().createElement(i,null,t().createElement(u,{id:n,x1:"1",y1:"0",x2:"0",y2:"0"},function(e){var t="string"==typeof e;if(t||1===e.length)return[{offset:1,stopColor:t?e:e[0][0],key:0}];var n,r=e.length,o=0;return[{offset:0,stopColor:e[0][0],key:0}].concat(function(e){if(Array.isArray(e))return h(e)}(n=e.map((function(e,t){var n,i=(2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),2!==i.length);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(n)||v(n,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],u=i[1];return o+=u,{offset:r===t+1?1:o,stopColor:a,key:t+1}})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||v(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}(r).map((function(e){return t().createElement(s,p({},e,{key:e.key}))}))))},m=f().oneOfType([f().func,f().string]);y.propTypes={gradientId:f().string.isRequired,colors:d.colors,defs:m,linearGradient:m,stop:m};var b=o(592),g=function(e,t,n,r){return 0===r?n:t+n*(e/r)};function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){var t=e.r,n=e.g,r=e.b,o=e.opacity;return"rgba(".concat(t,", ").concat(n,", ").concat(r,", ").concat(o,")")},O=function(e,t){if(1===e.length)return x(e[0]);var n=e.find((function(e){var n=e.colorEndTime;return t<=n}));if(void 0===n.duration)return x(n);var r=t-n.colorStartTime,o=0|g(r,n.r,n.goalR,n.duration),i=0|g(r,n.g,n.goalG,n.duration),a=0|g(r,n.b,n.goalB,n.duration);return x({r:o,g:i,b:a,opacity:n.opacity})},_={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:0,clip:"rect(0 0 0 0)",padding:0,overflow:"hidden",whiteSpace:"nowrap",wordWrap:"normal"};function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=function(t){var o=t.isPlaying,i=t.size,a=t.strokeWidth,u=t.duration,c=t.initialRemainingTime,l=t.colors,f=t.isLinearGradient,d=t.gradientUniqueKey,p=t.onComplete,v=t.rotation,h=(0,e.useRef)({duration:u,startAt:s(c,u)}).current,y=h.duration,m=h.startAt,w=(0,e.useMemo)((function(){return function(e,t,n){var r=e/2,o=t/2,i=r-o,a=2*i,u="clockwise"===n?"1,0":"0,1",c=2*Math.PI*i;return{path:"m ".concat(r,",").concat(o,"\n          a ").concat(i,",").concat(i," 0 ").concat(u," 0,").concat(a,"\n          a ").concat(i,",").concat(i," 0 ").concat(u," 0,-").concat(a),pathLength:c}}(i,a,v)}),[i,a,v]),k=w.path,S=w.pathLength,T=(0,e.useMemo)((function(){return function(e,t,n){var r=function(e,t){var n=function(e){return e.map((function(e){var t=e[0].replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return"#".concat(t).concat(t).concat(n).concat(n).concat(r).concat(r)})).substring(1).match(/.{2}/g).map((function(e){return parseInt(e,16)}));return[{r:t[0],g:t[1],b:t[2],opacity:1},e[1]]}))}(e);if(!t)return n;var r=0;return n.map((function(e,t){var o=n.length===t+1,i="0%";if(t>0){var a=n[t-1][1],u=Math.round(100*a);(r+=u)>100||o?(r=100,i="100%"):i="".concat(r,"%")}var c={offset:i,stopColor:x(e[0]),key:t};return[j(j({},e[0]),{},{gradient:c}),e[1]]}))}("string"==typeof e?[[e,1]]:e,n),o=0;return r.map((function(e,n){var i=r.length===n+1;if(o>=t||i)return o=t,j(j({},e[0]),{},{colorEndTime:o});var a=o,u=void 0!==e[1]?a+e[1]*t:t,c=u>=t?t:u,s=r[n+1][0],l={goalR:s.r-e[0].r,goalG:s.g-e[0].g,goalB:s.b-e[0].b};return o=c,j(j(j({},e[0]),l),{},{colorStartTime:a,colorEndTime:c,duration:c-a})}))}(l,y,f)}),[l,y,f]),E=(0,e.useMemo)((function(){return function(e){return"countdown-circle-timer-gradient-".concat(e||Math.random().toString(36).substring(2))}(d)}),[d]),C=(0,b.useElapsedTime)(o,{duration:y,startAt:m,onComplete:"function"==typeof p?function(){var e=p.apply(void 0,arguments)||[],t=A(e,2),n=t[0],r=void 0!==n&&n,o=t[1],i=void 0===o?0:o;return{shouldRepeat:r,delay:i/1e3,newStartAt:0}}:void 0}).elapsedTime;return{path:k,pathLength:S,gradientId:E,stroke:O(T,C),strokeDashoffset:g(C,0,S,y),timeProps:{remainingTime:Math.ceil(y-C),elapsedTime:C},styles:{wrapperStyle:n(i),timeStyle:r,visuallyHidden:_}}};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(e){var n=e.size,r=e.strokeWidth,o=e.trailStrokeWidth,i=e.trailColor,a=e.duration,u=e.isPlaying,c=e.colors,s=e.strokeLinecap,l=e.children,f=e.isLinearGradient,d=e.gradientUniqueKey,p=e.onComplete,v=e.ariaLabel,h=e.renderAriaTime,m=e.initialRemainingTime,b=e.rotation,g=T({isPlaying:u,size:n,strokeWidth:Math.max(r,null!=o?o:0),duration:a,initialRemainingTime:m,colors:c,isLinearGradient:f,gradientUniqueKey:d,onComplete:p,rotation:b}),w=g.path,j=g.pathLength,k=g.stroke,x=g.strokeDashoffset,O=g.gradientId,_=g.styles,A=g.timeProps;return t().createElement("div",{style:_.wrapperStyle,"aria-label":v},t().createElement("svg",{width:n,height:n,xmlns:"http://www.w3.org/2000/svg"},f&&t().createElement(y,{colors:c,gradientId:O}),t().createElement("path",{d:w,fill:"none",stroke:i,strokeWidth:null!=o?o:r}),t().createElement("path",{d:w,fill:"none",stroke:f?"url(#".concat(O,")"):k,strokeLinecap:s,strokeWidth:r,strokeDasharray:j,strokeDashoffset:x})),null!==l&&t().createElement("div",{"aria-hidden":"true",style:C(C({},_.timeStyle),{},{color:k})},t().isValidElement(l)?t().cloneElement(t().Children.only(l),A):l(A)),"function"==typeof h&&t().createElement("div",{role:"timer","aria-live":"assertive",style:_.visuallyHidden},h(A)))};R.propTypes=d,R.defaultProps={size:180,strokeWidth:12,trailColor:"#d9d9d9",isPlaying:!1,strokeLinecap:"round",isLinearGradient:!1,ariaLabel:"Countdown timer",children:null,rotation:"clockwise"},R.displayName="CountdownCircleTimer"}(),e.exports=i}()}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);