(this.webpackJsonpheygo1=this.webpackJsonpheygo1||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),a=n.n(r),i=(n(9),n(3)),o=(n(10),n(0));var l=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),l=a[0],h=a[1];return Object(c.useEffect)((function(){l&&l.length>1?fetch("/locations?q="+l).then((function(e){return e.ok?e.json():[]})).then((function(e){s(e)})).catch((function(e){s([])})):s([])}),[l]),Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)("div",{className:"search",children:Object(o.jsx)("input",{name:"text",type:"text",placeholder:"Search for location (min 2 chars)",value:l,onChange:function(e){return h(e.target.value)}})}),n.length>0?Object(o.jsxs)("p",{children:["Found: ",n.length]}):"",Object(o.jsx)("div",{className:"scrollable",children:Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:e.substring(0,l.length)}),e.substr(l.length)]})}))})})]})};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.6c0d45fd.chunk.js.map