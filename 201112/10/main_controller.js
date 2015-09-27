/**
  Copyright Joyent, Inc. and other Node contributors.
  Copyright 2011 uxebu Consulting Ltd. & Co. KG
  Copyright 2011 David Aurelio <aurelio@uxebu.com>

  Permission is hereby granted, free of charge, to any person obtaining a
  copy of this software and associated documentation files (the
  "Software"), to deal in the Software without restriction, including
  without limitation the rights to use, copy, modify, merge, publish,
  distribute, sublicense, and/or sell copies of the Software, and to permit
  persons to whom the Software is furnished to do so, subject to the
  following conditions:

  The above copyright notice and this permission notice shall be included
  in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
define("error",[],function(){function e(f){this.name="ParserError";this.message=f[0]}e.prototype=Error();e.prototype.constructor=e;return{ParserError:e}});
define("color_map",{aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,
darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,
gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,
lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,
midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,red:4278190335,rosybrown:3163525119,royalblue:1097458175,
saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,transparent:0,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199});
define("tools",["color_map"],function(e){function f(a,c,b){b=b<0?b+1:b>1?b-1:b;return b*6<1?a+(c-a)*b*6:b*2<1?c:b*3<2?a+(c-a)*(2/3-b)*6:a}return{descriptorAccessor:function(a,c,b,d){return{get:a,set:c,enumerable:!!b,configurable:!!d}},descriptorData:function(a,c,b,d){return{value:a,writable:!!c,enumerable:!!b,configurable:!!d}},getter:function(a){return function(){return this[a]}},mixin:function(a,c){var b,d,i,g,h=2,f=Object.keys;do if(c){g=f(c);b=0;for(d=g.length;b<d;b++)i=g[b],a[i]=c[i]}while(c=
arguments[h++]);return a},parseColor:function(a,c){var b,d;if(+a)return a>>>0;if(a in e)return e[a];if(/^#[0-9a-f]{6}$/i.test(a))return(parseInt(a.slice(1),16)<<8|255)>>>0;if(/^#[0-9a-f]{3}$/i.test(a)){a=parseInt(a.slice(1),16);d=a&3840;b=a&240;var i=a&15;return(d<<20|d<<16|b<<16|b<<12|i<<12|i<<8|255)>>>0}a=(""+a).split("(");if(a.length==2)switch(a[0]){case "rgb":b=/\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/,d=255;case "rgba":b||(b=/\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(0|1|[01]?(?:\.\d+))\s*\)$/);
if(b=b.exec(a[1]))return((b[1]&255)<<24|(b[2]&255)<<16|(b[3]&255)<<8|(d||b[4]*255&255))>>>0;break;case "hsl":b=/\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/,d=255;case "hsla":if(b||(b=/\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(0|1|[01]?(?:\.\d+))\s*\)$/),b=b.exec(a[1])){var i=b[1]%360/360,g=b[2]/100,h=b[3]/100,g=h<=0.5?h*(g+1):h+g-h*g,j=h*2-g,h=f(j,g,i+1/3)*255,l=f(j,g,i)*255,i=f(j,g,i-1/3)*255;return((h+0.5<<16)+(l+0.5<<8)+(i+0.5|0)<<8|(d||b[4]*255&255))>>>0}}return c==null?255:c},hitch:function(a,
c){c||(c=a,a=null);if(typeof c=="string"){a=a||window;if(!a[c])throw["method not found"];return function(){return a[c].apply(a,arguments||[])}}return!a?c:function(){return c.apply(a,arguments||[])}},toArray:function(a,c,b){return(b||[]).concat(Array.prototype.slice.call(a,c||0))}}});
define("tree_helper",["./error","./tools"],function(e,f){var a=f.descriptorData,c=function(d){var a=d.parent;d==a.top&&(a.top=d.prev);d==a.bottom&&(a.bottom=d.next);d.next&&(d.next.prev=d.prev);d.prev&&(d.prev.next=d.next)},b=function(d,b,g){return Object.create(null,{id:a(d,!1,!1,!1),message:a(b,!0,!1,!1),parent:a(g,!0,!1,!1),next:a(null,!0,!1,!1),prev:a(null,!0,!1,!1)})};return{newTree:function(){return Object.create(null,{0:a(b("ROOT",null),!0,!1,!1)})},newItem:b,insertAfter:function(d,a){if(d===
a)throw Error("insertItem mustn't be equal to afterItem.");if(!("parent"in d))throw Error("insertItem must have a parent property.");var b=d.parent;(a=a||b.top)?(c(d),a==b.top&&(b.top=d),a.next&&(a.next.prev=d),d.next=a.next,d.prev=a,a.next=d):(b.bottom=d,b.top=d)},tear:c}});
define("renderer",["./tree_helper","./tools"],function(e){function f(){this._tree=c();this._waitingForParentId=null}var a=e.newItem,c=e.newTree,b=e.insertAfter,e=f.prototype={};e.render=function(a){if(!(a instanceof Array))throw Error("we only accept arrays atm.");var b=this,g,c,f;this._waitingForParentId=Object.create(null);this.clearStage();a.forEach(this.parseMessage,this);(function k(a){for(;a!==null;)g=a.message,c=a.id,f=a.parent,"bottom"in a&&b.createGroup(c)&&k(a.bottom),g&&f&&b.drawItem(c,
f.id,g),a=a.next;a&&a.prev&&k(a.prev.parent.next)})(this._tree[0])};e.parseMessage=function(d){var c=this._tree,g=this._waitingForParentId,h,f;h=d.parentId;if(typeof h==="undefined")throw Error("Mandatory property parentId is missing.");if(h in c){var e=d.id;if(typeof e==="undefined")throw Error("Mandatory property id is missing.");f=d.type;if(typeof f==="undefined")throw Error("Mandatory property type is missing.");if(typeof(f==="group")==="undefined")throw Error("Mandatory property isGroup is missing.");
if(typeof d.data==="undefined")throw Error("Mandatory property data is missing.");f=c[h];(h=c[e])?h.message=d:(h=this._tree[e]=a(e,d,f),b(h));if("afterId"in d){c=c[d.afterId];if(!c)throw Error("afterId is unknown.");b(h,d.after)}e in g&&g[e].forEach(this.parseMessage,this);Object.keys(d).length===1&&this.removeObject(e)}else h in g?g[h].push(d):g[h]=[d]};e.drawItem=function(a,b,c){c.type==="Shape"&&this.drawShape(a,b,c.data,c.attributes);if(c.type==="bitmap")throw Error("not implemented");};return f});
define("raphael_renderer",["./renderer"],function(e){var f=function(a){return a.map(function(a){return a.join(" ")})},a={cap:"stroke-linecap",fill:"fill",fillOpacity:"fill-opacity",join:"stroke-linejoin",line:"stroke",lineWidth:"stroke-width",lineOpacity:"stroke-opacity",matrix:"transform",miterLimit:"stroke-miterlimit",opacity:"opacity",x:"x",y:"y"},c=function(d){var b,c={},f;for(f in d)switch(b=d[f],f){case "line":case "fill":c[a[f]]="rgba("+[b>>>24,b>>16&255,b>>8&255,
b&255]+")";break;case "matrix":c[a[f]]=Raphael.matrix(b.a,b.b,b.c,b.d,b.tx,b.ty).toTransformString();break;default:c[a[f]]=b}return c},b=function(a,b){e.call(this);this._stage=Raphael(a,b.width,b.height)},d=e.prototype,i=b.prototype=Object.create(d);i.render=function(a){d.render.call(this,a)};i.drawShape=function(a,b,d,i){var b=this._stage,d=f(d),e=b.getById(a);if(e===null)e=b.path(""),e.id=a;e.attr({path:d}).attr(c(i))};i.createGroup=function(){return!0};i.clearStage=function(){this._stage.clear()};
i.removeObject=function(a){a=this._stage.getById(a);if(a===null)throw Error("Unknown object.");else a.remove()};i.changeOrder=function(){throw Error("not implemented");};return b});
define("event_emitter",[],function(){var e;e={addListener:function(f,a){if("function"!==typeof a)throw Error("addListener only takes instances of Function");var c=this._events||(this._events=Object.create(null)),b=c[f],d,e;if(b){e=a.listener||a;for(c=0;d=b[c];c++)if(e===d||e===d.listener)return this;b.push(a)}else c[f]=[a];return this},emit:function(f,a,c){var b,d,e,g;e=this._events;if(f==="error"&&(!e||!e.error||!e.error.length))if(a instanceof Error)throw a;else throw Error("Uncaught, unspecified \u201cerror\u201d event.");
if(!e)return!1;if(e=e[f]){e=e.slice();d=arguments.length;switch(d){case 1:break;case 2:b=[a];break;case 3:b=[a,c];break;default:b=[];for(g=1;g<d;g++)b[g-1]=arguments[g]}for(g=0;d=e[g];g++)d.apply(this,b)}return this},listeners:function(e){var a=this._events||(this._events=Object.create(null));return a[e]||(a[e]=[])},once:function(e,a){if("function"!==typeof a)throw Error("once only takes instances of Function");var c=function(){this.removeListener(e,c);a.apply(this,arguments)};c.listener=a;return this.on(e,
c)},removeAllListeners:function(e){var a=this._events;arguments.length===0?delete this._events:a&&delete a[e];return this},removeListener:function(e,a){if("function"!==typeof a)throw Error("removeListener only takes instances of Function");var c,b,d=(c=this._events)&&c[e];if(c&&d)for(c=0;b=d[c];c++)if(a===b||a===b.listener){d.splice(c,1);break}return this}};e.on=e.addListener;return e});
define("stage_controller",["./tools","./event_emitter","require"],function(e,f,a){function c(b,c){var e=new Worker(a.toUrl("bikeshed_worker"));Object.defineProperties(this,{_worker:{value:e},_renderer:{value:b}});e.addEventListener("message",this);e.postMessage(c)}var b=c.prototype={handleEvent:function(a){a=a.data;switch(a.command){case "render":this.currentFrame=a.frame;this._renderer.render(a.data);break;case "play":case "stop":this.emit(a.command,a.data);break;case "debug":console.log.apply(console,
["WORKER DEBUG:"].concat(a.data))}},play:function(a){return this.post("play",a)},post:function(a,b){this._worker.postMessage({command:a,data:b});return this},stop:function(a){return this.post("stop",a)}};e.mixin(b,f);return c});define("main_controller",["./raphael_renderer","./stage_controller"],function(e,f){return{load:function(a,c,b){var d=document.createElement("a");d.href=c;b.url=d.href;b.framerate=b.framerate||60;a=new e(a,b);return new f(a,b)}}});
