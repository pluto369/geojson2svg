(function t(e,r,i){function n(s,o){if(!r[s]){if(!e[s]){var f=typeof require=="function"&&require;if(!o&&f)return f(s,!0);if(a)return a(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return n(r?r:t)},l,l.exports,t,e,r,i)}return r[s].exports}var a=typeof require=="function"&&require;for(var s=0;s<i.length;s++)n(i[s]);return n})({1:[function(t,e,r){e.exports={fontFamily:"Arial, Helvetica, sans-serif",values:[{avg:1.5294586181640626,height:3.03125,size:3},{avg:4.078556315104167,height:8.54296875,size:8},{avg:5.098195393880208,height:11.0234375,size:10},{avg:6.11783447265625,height:13.50390625,size:12},{avg:8.157112630208333,height:18,size:16},{avg:10.196390787760416,height:22.05078125,size:20},{avg:16.314225260416666,height:36,size:32},{avg:24.471337890625,height:53.5234375,size:48}]}},{}],2:[function(t,e,r){e.exports={fontFamily:"Georgia, Times, serif",values:[{avg:1.5411266620342547,height:3.56640625,size:3},{avg:4.109671098758013,height:9.5,size:8},{avg:5.1370888734475155,height:11.0390625,size:10},{avg:6.164506648137019,height:13.5234375,size:12},{avg:8.219342197516026,height:18,size:16},{avg:10.274177746895031,height:23,size:20},{avg:16.438684395032052,height:36.5,size:32},{avg:24.658026592548076,height:54.5,size:48}]}},{}],3:[function(t,e,r){e.exports={fontFamily:"Helvetica, Arial, sans-serif",values:[{avg:1.5294730846698468,height:3.5390625,size:3},{avg:4.078594892452925,height:9,size:8},{avg:5.098243615566156,height:11.5,size:10},{avg:6.117892338679387,height:14,size:12},{avg:8.15718978490585,height:18.5078125,size:16},{avg:10.196487231132313,height:23,size:20},{avg:16.3143795698117,height:37,size:32},{avg:24.47156935471755,height:55,size:48}]}},{}],4:[function(t,e,r){e.exports={fontFamily:'"Lucida Console", Monaco, monospace',values:[{avg:1.620263671875,height:4,size:3},{avg:4.320703125,height:10,size:8},{avg:5.40087890625,height:12.5,size:10},{avg:6.4810546875,height:15,size:12},{avg:8.64140625,height:20,size:16},{avg:10.8017578125,height:25,size:20},{avg:17.2828125,height:40,size:32},{avg:25.92421875,height:60,size:48}]}},{}],5:[function(t,e,r){e.exports={fontFamily:"Verdana, Geneva, sans-serif",values:[{avg:1.7060499924879808,height:3.55078125,size:3},{avg:4.549466646634615,height:9.54296875,size:8},{avg:5.686833308293269,height:12.015625,size:10},{avg:6.824199969951923,height:14.5,size:12},{avg:9.09893329326923,height:19.5,size:16},{avg:11.373666616586538,height:24.03125,size:20},{avg:18.19786658653846,height:38.52734375,size:32},{avg:27.296799879807693,height:58.5,size:48}]}},{}],6:[function(t,e,r){/**
 * @preserve
 * GeoJSON -> SVG text renderer
 *
 * @license MIT
 * @copyright 2016 Alexander Milevski <info@w8r.name>
 */
e.exports=t("./src/renderer")},{"./src/renderer":15}],7:[function(t,e,r){e.exports=function(t,e,r){t=JSON.parse(JSON.stringify(t));if(t.type==="FeatureCollection"){for(var n=t.features.length-1;n>=0;n--){t.features[n]=i(t.features[n],e,r)}}else{t=i(t,e,r)}return t};e.exports.projectFeature=i;e.exports.projectGeometry=n;function i(t,e,r){if(t.type==="GeometryCollection"){for(var i=0,a=t.geometries.length;i<a;i++){t.geometries[i]=n(t.geometries[i],e,r)}}else{t.geometry=n(t.geometry,e,r)}return t}function n(t,e,r){var i=t.coordinates;switch(t.type){case"Point":t.coordinates=e.call(r,i);break;case"MultiPoint":case"LineString":for(var n=0,s=i.length;n<s;n++){i[n]=e.call(r,i[n])}t.coordinates=i;break;case"Polygon":t.coordinates=a(i,1,e,r);break;case"MultiLineString":t.coordinates=a(i,1,e,r);break;case"MultiPolygon":t.coordinates=a(i,2,e,r);break;default:break}return t}function a(t,e,r,i){var n,s,o;var f=[];for(s=0,o=t.length;s<o;s++){n=e?a(t[s],e-1,r,i):r.call(i,t[s]);f.push(n)}return f}},{}],8:[function(t,e,r){(function(t){"use strict";if(!Array.isArray){Array.isArray=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}function r(t){return t!==Object(t)}function i(t){if(r(t)){return t}if(Array.isArray(t)){return n(t.slice(0),t)}return a({},t)}function n(t,e){var r,n;for(r=0,n=e.length;r<n;r+=1){t[r]=i(e[r])}return t}function a(t,e){var r;for(r in e){if(e.hasOwnProperty(r)){t[r]=i(e[r])}}return t}function s(t){var e,i,s;if(!t||r(t)){return}for(e=1,i=arguments.length;e<i;e+=1){s=arguments[e];if(!r(s)){if(Array.isArray(s)){n(t,s)}else{a(t,s)}}}return t}if(typeof e==="undefined"){t.extend=s}else{e.exports=s}})(this)},{}],9:[function(t,e,r){e.exports=function(t){var e=5381,r=t.length;while(r)e=e*33^t.charCodeAt(--r);return e>=0?e:(e&2147483647)+2147483648}},{}],10:[function(t,e,r){/**
 * 2D transformation matrix object initialized with identity matrix.
 *
 * The matrix can synchronize a canvas 2D context by supplying the context
 * as an argument, or later apply current absolute transform to an
 * existing context.
 *
 * To synchronize a DOM element you can use [`toCSS()`]{@link Matrix#toCSS} or [`toCSS3D()`]{@link Matrix#toCSS3D}.
 *
 * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
 * @prop {number} a - scale x
 * @prop {number} b - shear y
 * @prop {number} c - shear x
 * @prop {number} d - scale y
 * @prop {number} e - translate x
 * @prop {number} f - translate y
 * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
 * @constructor
 * @license MIT license (header required)
 * @copyright Epistemex.com 2014-2016
 */
function i(t){var e=this;e._t=e.transform;e.a=e.d=1;e.b=e.c=e.e=e.f=0;if(t)(e.context=t).setTransform(1,0,0,1,0,0)}i.fromTriangles=function(t,e,r){var n=new i,a=new i(r),s,o,f,h,l,u;if(Array.isArray(t)){if(typeof t[0]==="number"){f=t[4];h=t[5];l=e[4];u=e[5];s=[t[0]-f,t[1]-h,t[2]-f,t[3]-h,f,h];o=[e[0]-l,e[1]-u,e[2]-l,e[3]-u,l,u]}else{f=t[2].x;h=t[2].y;l=e[2].x;u=e[2].y;s=[t[0].x-f,t[0].y-h,t[1].x-f,t[1].y-h,f,h];o=[e[0].x-l,e[0].y-u,e[1].x-l,t[1].y-u,l,u]}}else{s=[t.px-t.rx,t.py-t.ry,t.qx-t.rx,t.qy-t.ry,t.rx,t.ry];o=[e.px-e.rx,e.py-e.ry,e.qx-e.rx,e.qy-e.ry,e.rx,e.ry]}n.setTransform.apply(n,s);a.setTransform.apply(a,o);return a.multiply(n.inverse())};i.fromSVGMatrix=function(t,e){console.warn("Obsolete. Use Matrix.from()");return new i(e).multiply(t)};i.fromDOMMatrix=function(t,e){console.warn("Obsolete. Use Matrix.from()");if(!t.is2D)throw"Cannot use 3D matrix.";return new i(e).multiply(t)};i.fromSVGTransformList=function(t,e){var r=new i(e),n=0;while(n<t.length)r.multiply(t[n++].matrix);return r};i.from=function(t,e,r,n,a,s,o){var f=new i(o);if(typeof t==="number")f.setTransform(t,e,r,n,a,s);else{if(typeof t.is2D==="boolean"&&!t.is2D)throw"Cannot use 3D DOMMatrix.";if(e)f.context=e;f.multiply(t)}return f};i.prototype={concat:function(t){return this.clone().multiply(t)},flipX:function(){return this._t(-1,0,0,1,0,0)},flipY:function(){return this._t(1,0,0,-1,0,0)},reflectVector:function(t,e){var r=this.applyToPoint(0,1),i=(r.x*t+r.y*e)*2;t-=i*r.x;e-=i*r.y;return{x:t,y:e}},reset:function(){return this.setTransform(1,0,0,1,0,0)},rotate:function(t){var e=Math.cos(t),r=Math.sin(t);return this._t(e,r,-r,e,0,0)},rotateFromVector:function(t,e){return this.rotate(Math.atan2(e,t))},rotateDeg:function(t){return this.rotate(t*Math.PI/180)},scaleU:function(t){return this._t(t,0,0,t,0,0)},scale:function(t,e){return this._t(t,0,0,e,0,0)},scaleX:function(t){return this._t(t,0,0,1,0,0)},scaleY:function(t){return this._t(1,0,0,t,0,0)},shear:function(t,e){return this._t(1,e,t,1,0,0)},shearX:function(t){return this._t(1,0,t,1,0,0)},shearY:function(t){return this._t(1,t,0,1,0,0)},skew:function(t,e){return this.shear(Math.tan(t),Math.tan(e))},skewDeg:function(t,e){return this.shear(Math.tan(t/180*Math.PI),Math.tan(e/180*Math.PI))},skewX:function(t){return this.shearX(Math.tan(t))},skewY:function(t){return this.shearY(Math.tan(t))},setTransform:function(t,e,r,i,n,a){var s=this;s.a=t;s.b=e;s.c=r;s.d=i;s.e=n;s.f=a;return s._x()},translate:function(t,e){return this._t(1,0,0,1,t,e)},translateX:function(t){return this._t(1,0,0,1,t,0)},translateY:function(t){return this._t(1,0,0,1,0,t)},transform:function(t,e,r,i,n,a){var s=this,o=s.a,f=s.b,h=s.c,l=s.d,u=s.e,c=s.f;s.a=o*t+h*e;s.b=f*t+l*e;s.c=o*r+h*i;s.d=f*r+l*i;s.e=o*n+h*a+u;s.f=f*n+l*a+c;return s._x()},multiply:function(t){return this._t(t.a,t.b,t.c,t.d,t.e,t.f)},divide:function(t){if(!t.isInvertible())throw"Matrix not invertible";return this.multiply(t.inverse())},divideScalar:function(t){var e=this;e.a/=t;e.b/=t;e.c/=t;e.d/=t;e.e/=t;e.f/=t;return e._x()},inverse:function(t){var e=this,r=new i(t?e.context:null),n=e.determinant();if(e._q(n,0))throw"Matrix not invertible.";r.a=e.d/n;r.b=-e.b/n;r.c=-e.c/n;r.d=e.a/n;r.e=(e.c*e.f-e.d*e.e)/n;r.f=-(e.a*e.f-e.b*e.e)/n;return r},interpolate:function(t,e,r){var n=this,a=r?new i(r):new i;a.a=n.a+(t.a-n.a)*e;a.b=n.b+(t.b-n.b)*e;a.c=n.c+(t.c-n.c)*e;a.d=n.d+(t.d-n.d)*e;a.e=n.e+(t.e-n.e)*e;a.f=n.f+(t.f-n.f)*e;return a._x()},interpolateAnim:function(t,e,r){var n=new i(r?r:null),a=this.decompose(),s=t.decompose(),o=a.translate,f=s.translate,h=a.scale,l=a.rotation+(s.rotation-a.rotation)*e,u=o.x+(f.x-o.x)*e,c=o.y+(f.y-o.y)*e,p=h.x+(s.scale.x-h.x)*e,v=h.y+(s.scale.y-h.y)*e;n.translate(u,c);n.rotate(l);n.scale(p,v);return n._x()},decompose:function(t){var e=this,r=e.a,i=e.b,n=e.c,a=e.d,s=Math.acos,o=Math.atan,f=Math.sqrt,h=Math.PI,l={x:e.e,y:e.f},u=0,c={x:1,y:1},p={x:0,y:0},v=r*a-i*n;if(t){if(r){p={x:o(n/r),y:o(i/r)};c={x:r,y:v/r}}else if(i){u=h*.5;c={x:i,y:v/i};p.x=o(a/i)}else{c={x:n,y:a};p.x=h*.25}}else{if(r||i){var g=f(r*r+i*i);u=i>0?s(r/g):-s(r/g);c={x:g,y:v/g};p.x=o((r*n+i*a)/(g*g))}else if(n||a){var y=f(n*n+a*a);u=h*.5-(a>0?s(-n/y):-s(n/y));c={x:v/y,y:y};p.y=o((r*n+i*a)/(y*y))}else{c={x:0,y:0}}}return{translate:l,rotation:u,scale:c,skew:p}},determinant:function(){return this.a*this.d-this.b*this.c},applyToPoint:function(t,e){var r=this;return{x:t*r.a+e*r.c+r.e,y:t*r.b+e*r.d+r.f}},applyToArray:function(t){var e=0,r,i,n=[];if(typeof t[0]==="number"){i=t.length;while(e<i){r=this.applyToPoint(t[e++],t[e++]);n.push(r.x,r.y)}}else{while(r=t[e++]){n.push(this.applyToPoint(r.x,r.y))}}return n},applyToTypedArray:function(t,e){var r=0,i,n=t.length,a=e?new Float64Array(n):new Float32Array(n);while(r<n){i=this.applyToPoint(t[r],t[r+1]);a[r++]=i.x;a[r++]=i.y}return a},applyToContext:function(t){var e=this;t.setTransform(e.a,e.b,e.c,e.d,e.e,e.f);return e},isIdentity:function(){var t=this;return t._q(t.a,1)&&t._q(t.b,0)&&t._q(t.c,0)&&t._q(t.d,1)&&t._q(t.e,0)&&t._q(t.f,0)},isInvertible:function(){return!this._q(this.determinant(),0)},isValid:function(){return!(this.a*this.d)},isEqual:function(t){var e=this,r=e._q;return r(e.a,t.a)&&r(e.b,t.b)&&r(e.c,t.c)&&r(e.d,t.d)&&r(e.e,t.e)&&r(e.f,t.f)},clone:function(t){return new i(t?null:this.context).multiply(this)},toArray:function(){var t=this;return[t.a,t.b,t.c,t.d,t.e,t.f]},toTypedArray:function(t){var e=t?new Float64Array(6):new Float32Array(6),r=this;e[0]=r.a;e[1]=r.b;e[2]=r.c;e[3]=r.d;e[4]=r.e;e[5]=r.f;return e},toCSS:function(){return"matrix("+this.toArray()+")"},toCSS3D:function(){var t=this;return"matrix3d("+t.a+","+t.b+",0,0,"+t.c+","+t.d+",0,0,0,0,1,0,"+t.e+","+t.f+",0,1)"},toJSON:function(){var t=this;return'{"a":'+t.a+',"b":'+t.b+',"c":'+t.c+',"d":'+t.d+',"e":'+t.e+',"f":'+t.f+"}"},toString:function(t){var e=this;t=t||4;return"a="+e.a.toFixed(t)+" b="+e.b.toFixed(t)+" c="+e.c.toFixed(t)+" d="+e.d.toFixed(t)+" e="+e.e.toFixed(t)+" f="+e.f.toFixed(t)},toCSV:function(){return this.toArray().join()+"\r\n"},toDOMMatrix:function(){var t=null;if("DOMMatrix"in window){t=new DOMMatrix;t.a=this.a;t.b=this.b;t.c=this.c;t.d=this.d;t.e=this.e;t.f=this.f}return t},toSVGMatrix:function(){var t=this.decompose(),e=t.translate,r=t.scale,i=t.skew,n=this._q,a=document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGMatrix();if(!a)return null;a=a.translate(e.x,e.y);a=a.rotate(t.rotation/Math.PI*180);a=a.scaleNonUniform(r.x,r.y);if(!n(0,i.x))a=a.skewX(i.x);if(!n(0,i.y))a=a.skewY(i.y);return a},_q:function(t,e){return Math.abs(t-e)<1e-14},_x:function(){var t=this;if(t.context)t.context.setTransform(t.a,t.b,t.c,t.d,t.e,t.f);return t}};if(typeof r!=="undefined")r.Matrix=i},{}],11:[function(t,e,r){function i(t,e){var r=e[0];var i=e[1];t[0]=Math.min(r,t[0]);t[1]=Math.min(i,t[1]);t[2]=Math.max(r,t[2]);t[3]=Math.max(i,t[3])}function n(t,e){t[0]-=e;t[1]-=e;t[2]+=e;t[3]+=e}function a(){return[Infinity,Infinity,-Infinity,-Infinity]}e.exports={extend:i,pad:n,getDefault:a}},{}],12:[function(t,e,r){var i="#000000";var n="#333333";var a=1;var s=.75;var o={Polygon:{stroke:a,color:n,opacity:s},LineString:{stroke:a,color:n,opacity:s},Point:{radius:3,stroke:a,color:n,fill:i},textbox:{fontFamily:"Helvetica, Arial, sans-serif",fontColor:n,weight:0,color:n}};o["MultiPolygon"]=o.Polygon;o["MultiLineString"]=o.LineString;o["MultiPoint"]=o.Point;e.exports=o},{}],13:[function(t,e,r){var i=1.01567;var n=1/1.946;var a=t("./measure_glyphs");e.exports=function o(t,e,r){var o=null;var f,h;for(var l=0,u=r.length;l<u;l++){var c=r[l];f=h=null;if(c.fontFamily===t){for(var p=0,v=c.values.length;p<v;p++){var g=c.values[p];if(g.size===e){o=g;break}else if(g.size<e){f=g}else if(!h&&g.size>e){h=g}}break}}if(!o){var y;if(typeof window!=="undefined"){o=a(t,e).values[0]}else if(f){if(h){y=(e-f.size)/(h.size-f.size);o={avg:f.avg+(h.avg-f.avg)*y,height:f.height+(h.height-f.height)*y,size:e}}else{o=s(e,f)}}else if(h){o=s(e,h)}else{o={avg:e*n,height:e*i,size:e}}}return o};function s(t,e){var r=t/e.size;return{avg:e.avg*r,size:t,height:e.height*r}}},{"./measure_glyphs":14}],14:[function(t,e,r){e.exports=function i(t,e,r){function i(t,e){var r=0;var i=0;var n=[];var a=arguments.length-2;for(var s=2,o=arguments.length;s<o;s++){var f=arguments[s];f.setAttribute("font-size",t);var h=f.innerHTML.length;var l=f.getComputedTextLength();var u=f.getBBox();r+=l/h;i+=u.height;if(e){n.push({length:l,width:u.width,height:u.height,n:h,avg:l/h})}}var c={avg:r/a,height:i/a,size:t};if(e){c.measurements=n}return c}function n(){var t="";for(var e=160;e<256;e++){t+="&#"+e+";"}return t}function a(t,e,r){var i=o("text");i.setAttribute("font-family",e);var n=document.createTextNode(t||"");i.appendChild(n);r.appendChild(i);return i}var s="http://www.w3.org/2000/svg";function o(t){return document.createElementNS(s,t)}var f=o("svg");if(typeof e==="number"){e=[e]}var h=a("abcdefghijklmnopqrstuvwxyz",t,f);var l=a("ABCDEFGHIJKLMNOPQRTSUVWXYZ",t,f);var u=a("0123456789",t,f);var c=a(n(),t,f);f.style.position="absolute";f.style.top=f.style.left="-9999px";document.body.appendChild(f);var p=[];for(var v=0,g=e.length;v<g;v++){p.push(i(e[v],r,h,l,u,c))}f.parentNode.removeChild(f);return{fontFamily:t,values:p}}},{}],15:[function(t,e,r){var i=t("json-extend");var n=t("string-hash");var a=t("geojson-project");var s=t("./get_font_data");var o=t("transformation-matrix-js").Matrix;var f=t("./bbox");var h=f.extend;var l=f.pad;var u=f.getDefault;var c="http://www.w3.org/2000/svg";var p="http://www.w3.org/1999/xlink";var v=1.2;var g="symbol";var y="textbox";var d=10;var m=t("./default_styles");var _=[t("../fonts/arial_helvetica_sans-serif"),t("../fonts/helvetica_arial_sans-serif"),t("../fonts/georgia_times_serif"),t("../fonts/lucida_console_monaco_monospace"),t("../fonts/verdana_geneva_sans-serif")];e.exports=b;e.exports.Renderer=x;e.exports.DefaultStyles=m;function x(t,e,r,i,n,a,s){this._data=null;this._extent=null;this._type=null;this._styles=m;this._projection=null;this._type=null;this._fonts=[];this._transform=null;this._plugins={};this._decorators={};this._defs=null;if(e)this.styles(e);if(r)this.extent(r);if(i)this.projection(i);if(n)this.type(n);if(s)this.transform(s);if(t)this.data(t);this.fonts(a||_)}function b(t,e,r,i,n,a,s){return new x(t,e,r,i,n,a,s)}x.prototype={styles:function(t){this._styles=typeof t==="function"?t:i({},m,t);return this},fonts:function(t){if(!Array.isArray(t)){t=[t]}for(var e=0,r=t.length;e<r;e++){t[e].values=t[e].values.sort(function(t,e){return t.size-e.size});this._fonts.push(t[e])}return this},transform:function(t){if(typeof t!=="function"){throw new Error("Transform feature must be a function")}this._transform=t;return this},type:function(t){this._type=t;return this},data:function(t){if(t.type!=="FeatureCollection"){if(t.type==="Feature"){t={type:"FeatureCollection",features:[t]}}else{throw new Error("Input has to be a FeatureCollection or a Feature")}}if(this._projection){t=a(t,this._projection)}this._data=t;return this},projection:function(t){if(typeof t!=="function"){throw new Error("Projection must be a function [x, y] -> [x, y]")}this._projection=t;return this},extent:function(t){this._extent=t;return this},decorator:function(t,e){if(typeof e!=="function"){throw new Error("Decorator must be a function "+"(feature, coordinates, closed, bbox, featureBounds) -> SVGPath ")}this._decorators[t]=e;return this},render:function(t){if(t)this.data(t);var e=[];var r=u();this._defs=[];for(var i=0,n=this._data.features.length;i<n;i++){this._feature(this._data.features[i],e,r)}this._renderContainer(e,this._extent||this._data.extent||this._data.bbox||(this._data.properties?this._data.properties.bbox:null)||r);return e.join("")},_renderContainer:function(t,e){var r=[e[0],e[1],e[2]-e[0],e[3]-e[1]];t.unshift("<g>");if(this._defs.length!==0){t.unshift("</defs>");t.unshift.apply(t,this._defs.slice());t.unshift("<defs>")}t.unshift(['<svg viewBox="',r.join(" "),'" xmlns="',c,'" xmlns:xlink="',p,'" version="',v,'">'].join(""));t.push("</g>","</svg>")},plugin:function(t,e){this._plugins[t]=e;return this},_getPluginRenderer:function(t){var e=t.properties[this._type];var r=null;if(e){r=this._plugins[e]}return r},_feature:function(t,e,r){var i=u();if(this._transform)t=this._transform(t);var n=this._getPluginRenderer(t);if(n){n.call(this,t,e,r,i);return i}switch(t.geometry.type){case"Polygon":case"MultiPolygon":this._polygon(t,e,r,i);break;case"LineString":case"MultiLineString":this._lineString(t,e,r,i);break;case"Point":this._point(t,e,r,i);break;case"MultiPoint":this._multiPoint(t,e,r,i);break;case"GeometryCollection":this._geometryCollection(t,e,r,i);break;default:break}return i},_geometryCollection:function(t,e,r,n){var a=("geometrycollection "+(t.properties.className||"")).trim();e.push('<g class="',a,'">');var s=t.geometry.geometries.length;var o=t.properties["geometriesTypes"]||Array(s);for(var f=0;f<s;f++){var h=i({},t.properties,{collectionIndex:f});h[this._type]=o[f];if(t.properties.styles&&t.properties.styles[o[f]]){i(h,t.properties.styles[o[f]])}this._feature({type:"Feature",properties:h,geometry:t.geometry.geometries[f]},e,r)}e.push("</g>")},_multiPoint:function(t,e,r,i){var n=("multipoint "+(t.properties.className||"")).trim();e.push('<g class="',n,'">');for(var a=0,s=t.geometry.coordinates.length;a<s;a++){this._point({type:"Feature",properties:t.properties,geometry:{type:"Point",coordinates:t.geometry.coordinates[a]}},e,r,u())}e.push("</g>")},_lineString:function(t,e,r,i){var n=t.properties;var a=("linestring "+(n.className||"")).trim();e.push('<path class="',a,'" d="',this._getPath(t,false,r,i),'"',this._getStyles(t,r,i)," />")},_text:function(t,e,r,n){var a=i({},this._selectStyle(t),t.properties);var s=a.fontSize||d;var o=a.fontColor||a.color;var f=a.fontFamily||"";var h=a.text;var l=[n[0],n[1]];var u=this._renderTextContent(h,s,f,n,a);if(f){f='font-family="'+f.replace(/\"/g,"'").trim()+'" '}var c=("textbox "+(a.className||"")).trim();e.push("<text ",f,'class="',c,'" ','font-size="',s,'" ','fill="',o,'" ','x="',l[0],'" ','y="',l[1],'" ',">",u,"</text>")},_renderTextContent:function(t,e,r,i,n){var a=[];if(Array.isArray(t)&&n.lineHeight){for(var o=0,f=t.length;o<f;o++){a.push("<tspan ",'dy="',n.lineHeight,'" ','x="',i[0],'">',String(t[o]),"</tspan>")}t=a.join("")}else{var h=s(r,e,this._fonts);t=this._renderMultilineText(String(t),h,i)}return t},_renderMultilineText:function(t,e,r){var i=r[2]-r[0];var n=t.length;var a=[];var s="";var o=0,f=e.height,h=0;if(i===0){f-=e.height*.68}while(o<n){if(o===0||h+e.avg>i){var l=i===0?r[0]-e.avg/2:r[0];s+=["<tspan ",'dy="',f,'" ','x="',l,'"',">"].join("");h=0}s+=t[o++];h+=e.avg;if(o===n||h+e.avg>i){s+="</tspan>";a.push(s);s=""}}return a.join("")},_polygon:function(t,e,r,i){var n=t.properties;var a=("polygon "+(n.className||"")).trim();e.push('<path class="',a,'" d="',this._getPath(t,true,r,i),'"',this._getStyles(t,r,i),"/>");if(this._type&&t.properties[this._type]===y){this._text(t,e,r,i)}},_point:function(t,e,r,i){var n=this._type?t.properties[this._type]:"";if(n&&n===g){this._symbol(t,e,r,i)}else{var a=t.geometry.coordinates;var s=("point "+(t.properties.className||"")).trim();var o=t.properties.radius||1;h(r,a);h(i,a);if(n&&n===y){this._text(t,e,r,i)}else{e.push('<circle class="',s,'" cx="',a[0],'" cy="',a[1],'" r="',o,'" ',this._getStyles(t,r,i)," />")}l(i,o);h(r,i.slice(0,2));h(r,i.slice(2,4))}},_createArrow:function(t){var e=t.arrowLength||t.weight*20;var r=t.arrowThickness||t.weight*10;var i=e;var n=t.direction;var a=["arrow",r,i,n].join("-").replace(/\./g,"");var s=this._defs.filter(function(t){return t.indexOf(a)!==-1})[0];if(!s){var o=0,f=r/2,h="";if(n===1){o=i;h=["M",0,0,"L",0,r,"L",i,r/2,"Z"].join(" ")}else{h=["M",i,0,"L",i,r,"L",0,r/2,"Z"].join(" ")}s=['<path id="path-',a,'" class="arrow-path" d="',h,'" />'];var l=this._createMarker(s.join(""),a,e,r,[o,f]);this._defs.push(l)}return a},_createMarker:function(t,e,r,i,n){var a=['<marker id="',e,'" ','markerWidth="',r,'" ','markerHeight="',i,'" ','orient="auto" '];if(n){a.push('refX="',n[0],'" ','refY="',n[1],'" ')}a.push(">",t,"</marker>");return a.join("")},_getSymbolDef:function(t,e){var r=t.properties.symbol.src.trim();var i="feature-symbol-"+n(r);r=r.replace(/<\/?svg[^>]*>/g,"").replace(/\<\?xml.+\?\>|\<\!DOCTYPE.+]\>/g,"").replace(/<metadata>[\s\S]*?<\/metadata>/g,"");var a=['<symbol id="',i,'" viewBox="',e.join(" "),'">',r,"</symbol>"].join("");if(this._defs.indexOf(a)===-1){this._defs.push(a)}return i},_createSymbol:function(t,e,r){var i=t.properties.symbol.src.match(/view[Bb]ox\=["']([^"']+)["']/m)[1];i=i?i.split(" ").map(parseFloat):r;var n=t.properties.symbol;var a=this._getSymbolDef(t,i);var s=n.width||i[2]||"";var o=n.height||i[3]||"";var f=t.geometry.coordinates;var l=("symbol "+(t.properties.className||"")).trim();var u=[f[0]-s/2,f[1]-o/2,f[0]+s/2,f[1]+o/2];var c=this._getSymbolTransform(t,e,r,s,o);h(r,u.slice(0,2));h(r,u.slice(2,4));h(e,u.slice(0,2));h(e,u.slice(2,4));var p=['<use xlink:href="#',a,'" transform="matrix(',c.join(" "),')" ','width="',s,'" ','height="',o,'" ','x="',f[0],'" ','y="',f[1],'" ','class="',l,'" ',this._getStyles(t,e,r),"/>"].join("");return p},_getSymbolTransform:function(t,e,r,i,n){var a=t.properties;var s=t.geometry.coordinates;var f=a.scale||1;var h=a.rotation||0;var l=o.from(1,0,0,1,0,0).translate(s[0],s[1]).rotate(h).scale(f,f).translate(-s[0],-s[1]).translate(-i/2,-n/2);return l.toArray()},_symbol:function(t,e,r,i){var n=t.geometry.coordinates;var a=("point "+(t.properties.className||"")).trim();var s=t.properties.radius||1;h(r,n);h(i,n);if(t.properties.symbol.src){e.push(this._createSymbol(t,r,i))}else{e.push('<circle class="',a,'" cx="',n[0],'" cy="',n[1],'" r="',s,'" ',this._getStyles(t,r,i),"/>")}},_coordinatesToPath:function(t,e,r,i,n){var a="",s,o,f,l,u;if(!isFinite(t[0][0])){for(s=0,o=t.length;s<o;s++){a+=" "+this._coordinatesToPath(t[s],e,r,i,n)}}else{for(s=0,o=t.length;s<o;s++){f=t[s];l=f[0];u=f[1];a+=(s===0?"M":"L")+l+" "+u;h(r,f);h(i,f)}if(e)a+="Z"}return a||"M0 0"},_getPath:function(t,e,r,i){var n="";var a=t.geometry.coordinates;if(this._type&&this._decorators[t.properties[this._type]]){var s=this._decorators[t.properties[this._type]];n=s.call(this,t,a,e,r,i)}else{n=this._coordinatesToPath(a,e,r,i)}return n.trim()},_selectStyle:function(t){if(this._type){if(typeof this._type==="function"){return this._type(t,this._styles)}else{return this._styles[t.properties[this._type]]}}else{return this._styles[t.geometry.type]}},_getStyles:function(t,e,r){var n={"stroke-width":1};var a={};var s="";if(typeof this._styles==="function"){n=this._styles(t)}else{n=i({},this._selectStyle(t),t.properties)}if(n.stroke||n.weight){a["stroke"]=n.stroke||n.color;a["stroke-opacity"]=n.opacity;a["stroke-width"]=n.weight;a["stroke-linecap"]=n.lineCap||"round";a["stroke-linejoin"]=n.lineJoin||"round";if(n.dashArray){a["stroke-dasharray"]=n.dashArray}if(n.dashOffset){a["stroke-dashoffset"]=n.dashOffset}if(n.weight){l(r,n.weight);h(e,r.slice(0,2));h(e,r.slice(2,4))}if(n.direction){var o=this._createArrow(n);a[n.direction===1?"marker-end":"marker-start"]="url(#"+o+")"}}else{a["stroke"]="none"}if(n.fill){a["fill"]=n.fill||n.fillColor||n.color;a["fill-opacity"]=n.fillOpacity||n.opacity||"";a["fill-rule"]=n.fillRule||t.geometry.type==="MultiPolygon"?"nonzero":"evenodd"}else{a["fill"]="none"}for(var f in a){if(a[f]!==undefined){s+=" "+f+'="'+a[f]+'"'}}return s}}},{"../fonts/arial_helvetica_sans-serif":1,"../fonts/georgia_times_serif":2,"../fonts/helvetica_arial_sans-serif":3,"../fonts/lucida_console_monaco_monospace":4,"../fonts/verdana_geneva_sans-serif":5,"./bbox":11,"./default_styles":12,"./get_font_data":13,"geojson-project":7,"json-extend":8,"string-hash":9,"transformation-matrix-js":10}]},{},[6]);