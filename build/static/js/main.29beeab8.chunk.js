(this["webpackJsonpbatch-of-photos"]=this["webpackJsonpbatch-of-photos"]||[]).push([[0],{65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(8),r=a.n(c),s=a(28),i=a(3),u=a(13),o=a.n(u),l=a(24),d=a(4),b=a(25),j=a.n(b),m=a(29);function f(e,t){return e.number>t.number?-1:e.number<t.number?1:0}var g=Object(d.c)({name:"tags",initialState:[],reducers:{addTags:function(e,t){t.payload.forEach((function(t){t.tags.split(" ").forEach((function(t){var a=e.find((function(e){return e.name===t}));a?a.number+=1:e.push({name:t,number:1})}))}))}}}),p=g.reducer,h=g.actions.addTags,O=function(e){var t=Object(m.a)(e.tags);return t.sort(f),t.slice(0,10)},x=Object(d.b)("images/fetchImages",function(){var e=Object(l.a)(o.a.mark((function e(t,a){var n,c,r,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.tag,c=a.dispatch,r=a.getState,e.next=4,j.a.get("http://52.214.226.126:3006/?query=lang-en-us&format=json&tags=".concat(n));case 4:return s=e.sent,e.next=7,s.data.items;case 7:return i=e.sent,"idle"!==r().images.status&&c(h(i)),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),v=Object(d.c)({name:"images",initialState:{images:[],status:"idle",error:null},reducers:{cancelFetch:function(e,t){e.status="idle"}},extraReducers:function(e){e.addCase(x.pending,(function(e,t){e.status="loading"})).addCase(x.fulfilled,(function(e,t){"idle"!==e.status&&(e.images=t.payload,e.status="idle")})).addCase(x.rejected,(function(e,t){e.status="failed",e.error=t.error.message}))}}),y=v.reducer,N=v.actions.cancelFetch,T=function(e){return e.images.images},C=function(e){return e.images.status},k=a(1);var w=function(e){var t=e.tag,a=Object(i.b)(),n=Object(i.c)(C);return Object(k.jsxs)("div",{className:"col-auto",children:[Object(k.jsx)("button",{onClick:function(e){"idle"===n&&t&&a(x({tag:t})),e.preventDefault()},type:"submit",className:"btn btn-primary",disabled:"idle"!==n,children:"Search"})," ",Object(k.jsx)("button",{onClick:function(e){"loading"===n&&a(N()),e.preventDefault()},className:"btn btn-danger",disabled:"loading"!==n,children:"Cancel"})]})};var S=function(e){var t=e.tag,a=e.setTag;return Object(k.jsxs)("div",{className:"col-auto",children:[Object(k.jsx)("label",{className:"visually-hidden",children:"Tag"}),Object(k.jsx)("input",{value:t,onChange:function(e){a(e.target.value)},type:"text",className:"form-control",placeholder:"Tag"})]})};var E=function(e){var t=e.setTag,a=Object(i.c)(O);return Object(k.jsx)("div",{className:"btn-group btn-group-sm flex-wrap",role:"group","aria-label":"Third group",children:a.map((function(e,a){return Object(k.jsx)("button",{onClick:function(){t(e.name)},type:"button",className:"btn btn-secondary m-1",children:e.name},a)}))})};var I=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(k.jsxs)("form",{className:"mt-4 row g-3 justify-content-center",children:[Object(k.jsx)(S,{tag:a,setTag:c}),Object(k.jsx)(w,{tag:a}),Object(k.jsx)(E,{setTag:c})]})},D=a(26);var F=function(e){var t=e.source,a=e.published;return Object(k.jsx)("div",{className:"flex-fill bg-light m-2 p-1 d-flex align-items-center justify-content-center",height:"200",children:Object(k.jsx)("span",{className:"d-inline-block",tabIndex:"0","data-toggle":"tooltip",title:Object(D.format)(a),children:Object(k.jsx)("img",{src:t,alt:""})})})};var J=function(){var e=Object(i.c)(T);return Object(k.jsx)("div",{className:"d-flex flex-wrap",children:e.map((function(e,t){return Object(k.jsx)(F,{source:e.media.m,published:e.published},t)}))})};var q=function(){return Object(k.jsxs)("div",{className:"container-sm",children:[Object(k.jsx)(I,{}),Object(k.jsx)(J,{})]})},B=a(27);Object(B.a)();var R=Object(d.a)({reducer:{images:y,tags:p}});r.a.render(Object(k.jsx)(i.a,{store:R,children:Object(k.jsx)(q,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.29beeab8.chunk.js.map