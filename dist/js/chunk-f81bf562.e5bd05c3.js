(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f81bf562"],{"1dde":function(e,t,c){var r=c("d039"),a=c("b622"),n=c("2d00"),o=a("species");e.exports=function(e){return n>=51||!r((function(){var t=[],c=t.constructor={};return c[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4333:function(e,t,c){"use strict";c.r(t);var r=c("7a23"),a=Object(r["createTextVNode"])(" 這裡是 後台 產品列表 "),n={class:"table mt-4"},o=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",{width:"120"},"分類"),Object(r["createVNode"])("th",null,"產品名稱"),Object(r["createVNode"])("th",{width:"120"},"原價"),Object(r["createVNode"])("th",{width:"120"},"售價"),Object(r["createVNode"])("th",{width:"100"},"是否啟用")])],-1),i={class:"text-end"},s={class:"text-end"},l={key:0,class:"text-success"},u={key:1};function d(e,t,c,d,p,b){var g=Object(r["resolveComponent"])("pagination");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[a,Object(r["createVNode"])("table",n,[o,Object(r["createVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(p.products,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:e.id},[Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.unit),1),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.title),1),Object(r["createVNode"])("td",i,Object(r["toDisplayString"])(e.origin_price),1),Object(r["createVNode"])("td",s,Object(r["toDisplayString"])(e.price),1),Object(r["createVNode"])("td",null,[e.is_enabled?(Object(r["openBlock"])(),Object(r["createBlock"])("span",l,"啟用")):(Object(r["openBlock"])(),Object(r["createBlock"])("span",u,"未啟用"))])])})),128))])]),Object(r["createVNode"])(g,{pages:p.pages,onSwitchPage:b.getProducts},null,8,["pages","onSwitchPage"])])}var p=c("1da1"),b=(c("96cf"),c("99af"),c("d3b7"),c("4f03")),g={"aria-label":"Page navigation example"},f={class:"pagination"},h=Object(r["createVNode"])("span",{"aria-hidden":"true"},"«",-1),j=Object(r["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function O(e,t,c,a,n,o){return Object(r["openBlock"])(),Object(r["createBlock"])("nav",g,[Object(r["createVNode"])("ul",f,[Object(r["createVNode"])("li",{class:["page-item",{disabled:!c.pages["has_pre"]}]},[Object(r["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(){return o.prePage&&o.prePage.apply(o,arguments)}),["prevent"]))},[h])],2),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.pages["total_pages"],(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:["page-item",{active:c.pages["current_page"]===e}],key:e},[Object(r["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(r["withModifiers"])((function(t){return o.changePage(e)}),["prevent"])},Object(r["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(r["createVNode"])("li",{class:["page-item",{disabled:!c.pages["has_next"]}]},[Object(r["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(){return o.nextPage&&o.nextPage.apply(o,arguments)}),["prevent"]))},[j])],2)])])}var v={emits:["switchPage"],props:{pages:{type:Object,required:!0}},methods:{changePage:function(e){this.$emit("switchPage",e)},prePage:function(){var e=this.pages.current_page;this.$emit("switchPage",e-1)},nextPage:function(){var e=this.pages.current_page;this.$emit("switchPage",e+1)}}};v.render=O;var k=v,w={components:{pagination:k},data:function(){return{products:[],pages:{}}},methods:{getProducts:function(){var e=arguments,t=this;return Object(p["a"])(regeneratorRuntime.mark((function c(){var r,a,n,o;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:1,a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("sec-hexschool","/admin/products?page=").concat(r),c.prev=2,c.next=5,fetch(a,{headers:{Authorization:b["a"]}});case 5:return n=c.sent,c.next=8,n.json();case 8:o=c.sent,t.products=o.products,t.pages=o.pagination,c.next=16;break;case 13:c.prev=13,c.t0=c["catch"](2),alert(c.t0.message);case 16:case"end":return c.stop()}}),c,null,[[2,13]])})))()}},mounted:function(){this.getProducts()}};w.render=d;t["default"]=w},"65f0":function(e,t,c){var r=c("861d"),a=c("e8b5"),n=c("b622"),o=n("species");e.exports=function(e,t){var c;return a(e)&&(c=e.constructor,"function"!=typeof c||c!==Array&&!a(c.prototype)?r(c)&&(c=c[o],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===t?0:t)}},8418:function(e,t,c){"use strict";var r=c("c04e"),a=c("9bf2"),n=c("5c6c");e.exports=function(e,t,c){var o=r(t);o in e?a.f(e,o,n(0,c)):e[o]=c}},"99af":function(e,t,c){"use strict";var r=c("23e7"),a=c("d039"),n=c("e8b5"),o=c("861d"),i=c("7b0b"),s=c("50c4"),l=c("8418"),u=c("65f0"),d=c("1dde"),p=c("b622"),b=c("2d00"),g=p("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",j=b>=51||!a((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),O=d("concat"),v=function(e){if(!o(e))return!1;var t=e[g];return void 0!==t?!!t:n(e)},k=!j||!O;r({target:"Array",proto:!0,forced:k},{concat:function(e){var t,c,r,a,n,o=i(this),d=u(o,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(n=-1===t?o:arguments[t],v(n)){if(a=s(n.length),p+a>f)throw TypeError(h);for(c=0;c<a;c++,p++)c in n&&l(d,p,n[c])}else{if(p>=f)throw TypeError(h);l(d,p++,n)}return d.length=p,d}})},e8b5:function(e,t,c){var r=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}}}]);
//# sourceMappingURL=chunk-f81bf562.e5bd05c3.js.map