(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{229:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("05230570",content,!0,{sourceMap:!1})},230:function(t,e,n){"use strict";n.r(e);var o={name:"SecondaryButton",props:{disabled:{type:Boolean,required:!1,default:!1}},methods:{click:function(){this.disabled||this.$emit("click")}},computed:{classList:function(){return this.disabled?"button disabled":"button button--secondary"}}},r=(n(232),n(10)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("button",{class:this.classList,attrs:{type:"button"},on:{click:this.click}},[this._t("default")],2)}),[],!1,null,"19006bb6",null);e.default=component.exports},231:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMSAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5Ljk1IDYuNzYzNjFMMy41ODQ4MSA2Ljc2MzYxTDkuMTQyNDIgMS42NDkyNkM5LjU1MjQ1IDEuMjcxOTQgOS41NTI0NSAwLjY2MDMxIDkuMTQyNDIgMC4yODI5OUM4LjczMjQgLTAuMDk0MzI5OCA4LjA2NzQ5IC0wLjA5NDMyOTggNy42NTc0NyAwLjI4Mjk5TDAuMzA3NTE2IDcuMDQ2NzJDLTAuMTAyNTA1IDcuNDI0MDQgLTAuMTAyNTA1IDguMDM1OTIgMC4zMDc1MTYgOC40MTNMNy42NTc0NyAxNS4xNzY3QzcuODYyNDggMTUuMzY1NCA4LjEzMTI4IDE1LjQ1OTggOC40MDAwOCAxNS40NTk4QzguNjY4NjIgMTUuNDU5OCA4LjkzNzQxIDE1LjM2NTQgOS4xNDI0MiAxNS4xNzY3QzkuNTUyNDUgMTQuNzk5NCA5LjU1MjQ1IDE0LjE4NzUgOS4xNDI0MiAxMy44MTA1TDMuNTg0ODEgOC42OTYxMUwxOS45NSA4LjY5NjExQzIwLjUyOTYgOC42OTYxMSAyMSA4LjI2MzQ3IDIxIDcuNzI5ODZDMjEgNy4xOTYyNSAyMC41Mjk5IDYuNzYzNjEgMTkuOTUgNi43NjM2MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},232:function(t,e,n){"use strict";n(229)},233:function(t,e,n){(e=n(34)(!1)).push([t.i,".button.button--secondary[data-v-19006bb6]{background:hsla(0,0%,100%,.30196)}",""]),t.exports=e},234:function(t,e,n){var content=n(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("c1054c0c",content,!0,{sourceMap:!1})},235:function(t,e,n){var content=n(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("9e1f4b10",content,!0,{sourceMap:!1})},242:function(t,e,n){"use strict";n.r(e);var o=n(36),r=n(230),c=n(246),l=n(18);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"Result",components:{SecondaryButton:r.default,ResultSection:c.default},methods:{prev:function(){this.current?this.$router.push("/servers/".concat(this.current.toLowerCase())):this.$router.push("/severs/")}},computed:d(d(d({},Object(l.e)("calculatorModule",{from:function(t){return t.from},to:function(t){return t.to},count:function(t){return t.count}})),Object(l.e)("serversModule",{current:function(t){return t.current}})),{},{validData:function(){return this.from.points&&this.to.points&&this.count>0}}),created:function(){this.previuosRoute=this.$router.history._startLocation,this.previuosRoute&&this.validData||this.$router.push("/servers/")}},_=(n(253),n(10)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container steps steps__result",attrs:{id:"result"}},[o("div",{staticClass:"row justify-content-between align-items-start"},[o("div",{staticClass:"col-lg-6"},[o("article",{staticClass:"info"},[t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"info__separator"}),t._v(" "),o("div",{staticClass:"info__button d-flex align-items-center"},[o("div",{staticClass:"info__button-container back"},[o("SecondaryButton",{on:{click:t.prev}},[o("span",{staticClass:"info__button-icon"},[o("picture",[o("img",{attrs:{src:n(231),alt:"Назад"}})])]),t._v(" "),o("span",{staticClass:"info__button-text"},[t._v("Назад")])])],1)])])]),t._v(" "),o("div",{staticClass:"col-xl-5 col-lg-6"},[o("ResultSection")],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info__step-counter"},[e("span",{staticClass:"step-counter"},[e("span",{staticClass:"step-counter__number"},[this._v("3")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"info__title"},[e("span",{staticClass:"bold"},[this._v("Шаг -")]),this._v(" "),e("br"),this._v("\n          получите результат.\n        ")])}],!1,null,"1fad5cae",null);e.default=component.exports;installComponents(component,{SecondaryButton:n(230).default,ResultSection:n(246).default})},246:function(t,e,n){"use strict";n.r(e);var o=n(36),r=n(18);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"ResultSection",computed:l(l({},Object(r.e)("calculatorModule",{from:function(t){return t.from},to:function(t){return t.to},count:function(t){return t.count}})),{},{value:function(){var t=this.to.points*this.count/this.from.points,e="";if(t>=64){var n=Math.ceil(t%64),o=Math.ceil((t-n)/64);e="".concat(o," стака(ов)"),n>0&&(e+=" и ".concat(n," единица(ы)"))}else e="".concat(Math.ceil(t)," единица(ы)");return t<.8?"Увеличьте кол-во предметов для покупки или измените предмет для продажи!":e},points:function(){return this.to.points*this.count}})},d=(n(251),n(10)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"result-form"},[n("div",{staticClass:"result__block"},[n("span",{staticClass:"result__label"},[t._v("Кол-во предметов для обмена")]),t._v(" "),n("div",{staticClass:"result__value"},[t._v("\n      "+t._s(t.value)+"\n    ")])]),t._v(" "),n("div",{staticClass:"result__block"},[n("span",{staticClass:"result__label"},[t._v("Кол-во поинтов для приобретения:")]),t._v(" "),n("div",{staticClass:"result__value"},[t._v("\n      "+t._s(t.points)+"\n    ")])])])}),[],!1,null,"644b5c30",null);e.default=component.exports},251:function(t,e,n){"use strict";n(234)},252:function(t,e,n){(e=n(34)(!1)).push([t.i,".result__block[data-v-644b5c30]{margin-bottom:43px;background:#252b33}.result__block[data-v-644b5c30]:last-child{margin-bottom:0}.result__label[data-v-644b5c30]{margin-bottom:20px;display:block;font-weight:400;color:#ececec}.result__label[data-v-644b5c30],.result__value[data-v-644b5c30]{font-size:18px;line-height:21px}.result__value[data-v-644b5c30]{max-width:480px;width:100%;min-height:75px;display:flex;align-items:center;padding:15px 28px;font-weight:500;color:#fff;border:1px solid #fd6950}@media (max-width:1024px){.result-form[data-v-644b5c30]{margin-top:70px}}",""]),t.exports=e},253:function(t,e,n){"use strict";n(235)},254:function(t,e,n){(e=n(34)(!1)).push([t.i,'.info__button-container[data-v-1fad5cae]{width:217px;height:61px}.info__button-icon[data-v-1fad5cae]{width:61px;height:100%;display:flex;align-items:center;justify-content:center;position:relative}.info__button-icon[data-v-1fad5cae]:after{content:"";display:block;position:absolute;width:1px;right:0;top:10px;bottom:10px;background:hsla(0,0%,100%,.3)}.info__button-text[data-v-1fad5cae]{width:151px}',""]),t.exports=e},270:function(t,e,n){"use strict";n.r(e);var o={name:"Results",components:{Result:n(242).default},head:function(){return{title:"Результат | Калькулятор цен Kaboom 2.0"}}},r=n(10),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"page__result animation-wrapper"},[e("Result")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Result:n(242).default})}}]);