parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({363:[function(require,module,exports) {
module.exports="0.5a42c80e.jpg";
},{}],364:[function(require,module,exports) {
module.exports="1.0a02c3dc.jpg";
},{}],365:[function(require,module,exports) {
module.exports="2.5b8194d0.jpg";
},{}],366:[function(require,module,exports) {
module.exports="3.59b0e8c6.jpg";
},{}],280:[function(require,module,exports) {
module.exports = {
  "0": require("./0.jpg"),
  "1": require("./1.jpg"),
  "2": require("./2.jpg"),
  "3": require("./3.jpg")
};
},{"./0.jpg":363,"./1.jpg":364,"./2.jpg":365,"./3.jpg":366}],367:[function(require,module,exports) {
module.exports="0.9b86e354.webp";
},{}],370:[function(require,module,exports) {
module.exports="1.92a83556.webp";
},{}],369:[function(require,module,exports) {
module.exports="2.26348f2f.webp";
},{}],368:[function(require,module,exports) {
module.exports="3.6ed9a0fb.webp";
},{}],281:[function(require,module,exports) {
module.exports = {
  "0": require("./0.webp"),
  "1": require("./1.webp"),
  "2": require("./2.webp"),
  "3": require("./3.webp")
};
},{"./0.webp":367,"./1.webp":370,"./2.webp":369,"./3.webp":368}],41:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../assets/Banner/*.jpg"),t=l(e),o=require("../../assets/Banner/*.webp"),n=l(o);function l(e){return e&&e.__esModule?e:{default:e}}exports.default={data:function(){return{slide:0,sliding:null,texts:["flower","dark","quiet","light"],captions:["Hello","Admit defeat","I love you","promised you"],img:0==document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")?n.default:t.default,slogan:"Welcome to my website",showB:!1,showC:!1,title:["#list-item-1","#list-item-2"],label:["标题1","标题2"],text1:"她愿意和你说这么多,则说明她并不讨厌你,并且当你是朋友!她没有答应你是因为她心里很矛盾,她不知自己是否该答应你,或许是因为还不太了解你,怕自己受到伤害!你应该继续下去,别老是乎冷乎热,她说过时间会证明一切,这是在考验你说的话!其次不可心急,可以看出这是个很单纯的女孩子,或许还是初恋,她想要的是一份很甜蜜的恋爱!她叫你傻瓜证明她开始在意你了,你很有机会!可以收买她的死党,但是千万别妄想很快追到她,这或许是一场持久战!毕竟好女孩不容易追嘛!你就象之前那样对她好,别刻意去展现对她的好,切记!还有不要写情书,可以发短信,发些笑话或可爱的脑筋急转弯,不要发黄段子!一点一点积累她对你的感觉,但是自己一定要有衡心!如果只是想玩玩人家那我劝你还是别去伤害人家了!既然是真心喜欢就一直执着下去,没有过不了的河!时间会宣布一切,别去想她最后会拒绝你,要有必胜的决心!至于生日礼物你可以去石头记看看,那里面卖的都是女孩子喜欢的!可以找服务员推荐下! 最后祝你成功!希望这些话能对你有启发!"}},watch:{slide:function(){this.$store.state.count=this.slide}},mounted:function(){var e=this;window.addEventListener("scroll",this.handlerScroll),document.getElementById("up").style.display="none",setTimeout(function(){e.showB=!0},0),setTimeout(function(){e.showC=!0},0)},methods:{swipeLeft:function(){this.slide+1==4?this.slide=0:this.slide++},swipeRight:function(){this.slide-1==-1?this.slide=3:this.slide--},handlerScroll:function(){document.getElementById("scrollTop").getBoundingClientRect().top<0?document.getElementById("up").style.display="block":document.getElementById("up").style.display="none"},backTop:function(){var e=!0;if(e)var t=setInterval(function(){e=!1;var o=document.documentElement.scrollTop|document.body.scrollTop;window.scrollTo(0,o-Math.floor(o/3)),o<6&&(window.scrollTo(0,0),e=!0,clearInterval(t))},15)}},destroyed:function(){window.removeEventListener("scroll",this.handlerScroll)}};var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{nativeOn:{scroll:function(s){return t.handlerScroll(s)}}},[e("b-carousel",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:t.swipeLeft,expression:"swipeLeft",arg:"swipe",modifiers:{left:!0}},{name:"touch",rawName:"v-touch:swipe.right",value:t.swipeRight,expression:"swipeRight",arg:"swipe",modifiers:{right:!0}}],staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{controls:"",indicators:"",interval:6e3,"img-width":"1024","img-height":"480",background:"#ababab"},model:{value:t.slide,callback:function(s){t.slide=s},expression:"slide"}},t._l(t.img,function(s,i){return e("b-carousel-slide",{key:i},[e("h1",[t._v(t._s(t.captions[i]))]),t._v(" "),e("p",[t._v(t._s(t.texts[i]))]),t._v(" "),e("b-img",{staticClass:"img",attrs:{slot:"img",src:s,"fluid-grow":"",alt:"image"},slot:"img"})],1)})),e("br"),t._v(" "),e("b-container",{attrs:{fluid:"",id:"scrollTop"}},[e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("div",{attrs:{id:"listgroup-ex"}},[e("h1",{attrs:{id:"list-item-1"}},[t._v(t._s(t.slogan))]),t._v(" "),t.showB?e("p",{staticClass:"p"},[t._v(t._s(t.text1))]):t._e(),t._v(" "),e("h1",{attrs:{id:"list-item-2"}},[t._v(t._s(t.slogan))]),t._v(" "),t.showC?e("p",{staticClass:"p"},[t._v(t._s(t.text1))]):t._e()])]),t._v(" "),e("b-col",{attrs:{cols:"4"}},[e("b-list-group",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy:listgroup-ex",arg:"listgroup-ex"}]},t._l(t.title,function(s,i){return e("b-list-group-item",{key:i,attrs:{href:s}},[t._v(t._s(t.label[i]))])}))],1)],1)],1),t._v(" "),e("div",{attrs:{id:"up"},on:{click:t.backTop}},[e("i",{staticClass:"fa fa-angle-up"})])],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});
},{"../../assets/Banner/*.jpg":280,"../../assets/Banner/*.webp":281}]},{},[41])
//# sourceMappingURL=home.d5cd3eab.map