(this["webpackJsonpimage-gallery"]=this["webpackJsonpimage-gallery"]||[]).push([[0],{12:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s.n(c),n=s(6),a=s.n(n),i=(s(12),s(4)),l=s.n(i),o=s(7),d=s(2),j=s(5),b=s(0);var p=function(e){var t=e.image,s=t.tags.split(",");return Object(b.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg mt-2",children:[Object(b.jsx)("img",{src:t.webformatURL,alt:"random",className:"w-full"}),Object(b.jsxs)("div",{className:"px-6 py-4",children:[Object(b.jsxs)("div",{className:"font-bold text-purple-500 text-xl md-2",children:["Photo by ",t.user]}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Views:"}),t.views]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Downloads:"}),t.downloads]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Likes:"}),t.likes]})]})]}),Object(b.jsx)("div",{className:"px-6 py-4",children:s.map((function(e,t){return Object(b.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2",children:["#",e]},t)}))})]})};var x=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],r=t[1],n=Object(c.useState)(!0),a=Object(d.a)(n,2),i=(a[0],a[1],Object(c.useState)("")),x=Object(d.a)(i,2);return x[0],x[1],Object(c.useEffect)(Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j.ApiUrl,"/?key=").concat(j.apiKey,"&q=yellow+flowers&image_type=photo&pretty=true"));case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,r(s.hits),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),[]),Object(b.jsx)("div",{className:"container-2xl px-2 ",children:Object(b.jsx)("div",{className:"grid grid-cols-4 gap-10",children:s.map((function(e){return Object(b.jsx)(p,{image:e},e.id)}))})})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))},5:function(e,t){e.exports={ApiUrl:"https://pixabay.com/api",apiKey:"24148596-ead360d6d977058c8d43b94f3"}}},[[15,1,2]]]);
//# sourceMappingURL=main.ab0bf0a2.chunk.js.map