(this["webpackJsonpcontentmunch-blog"]=this["webpackJsonpcontentmunch-blog"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},119:function(e,t,n){},147:function(e,t){},165:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),s=n.n(i),r=n(55),o=n.n(r),a=n(16),d=n(3),j=(n(67),n(12)),l=function(){return Object(c.jsxs)("main",{children:[Object(c.jsx)(j.a,{children:Object(c.jsx)("title",{children:"Resource Not Found"})}),Object(c.jsx)("section",{className:"section-align--center",children:Object(c.jsx)("h2",{children:"Uh-oh, this is a 404"})})]})},h=n(9),u=(n(100),n(13)),b=(n(101),function(){var e=Object(i.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],r=function(){console.log("search button clicked")};return Object(c.jsxs)("div",{className:"search-bar",children:[Object(c.jsx)(h.Input,{name:"query",placeholder:"Search articles",onKeyDown:function(e){"Enter"===e.key&&""!==n&&r()},onChange:function(e){s(e.target.value)},icon:"type"}),Object(c.jsx)(h.Button,{title:"Search",variant:"secondary",disabled:""===n,onClick:r,children:Object(c.jsx)(h.Icon,{name:"search"})})]})}),O=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("nav",{children:[Object(c.jsx)("a",{href:"https://www.contentmunch.com","data-title":"Contentmunch.com home",children:Object(c.jsx)(h.Icon,{name:"muncher",weight:1})}),Object(c.jsx)("div",{className:"header-search",children:Object(c.jsx)(b,{})})]})})})},x=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)("div",{className:"container",children:" Footer"})})},f=(n(61),n(58)),m=n.n(f).a.create({baseURL:"https://www.contentmunch.com/api/"}),v=function(e){for(var t,n,c=(new DOMParser).parseFromString("<div>"+e+"</div>","text/html"),i="",s=0;s<c.documentElement.childNodes.length;s++){var r=c.documentElement.childNodes[s];if(r.textContent&&""!==r.textContent){i=r.textContent;break}}return n||(n=150),(t=i).length>n?t.substring(0,n)+"...":t},p=(n(119),n(17)),g=n.n(p),w=function(e){var t=e.article;return Object(c.jsxs)("div",{className:"article-card",children:[Object(c.jsx)("h2",{children:Object(c.jsx)(a.b,{to:"/"+t.id,children:t.title})}),Object(c.jsx)("p",{children:v(t.content)}),Object(c.jsx)("div",{className:"article-card--footer",children:Object(c.jsxs)("p",{children:["Created ",g()(t.createdAt).endOf("day").fromNow()]})})]})},N=(n(40),function(){var e=Object(i.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1];return Object(i.useEffect)((function(){var e;(e=5,m.get("articles?projection=withId&sort=createdAt,desc&size="+e).then((function(e){return e.data._embedded.articles}))).then((function(e){s(e)}))}),[]),Object(c.jsx)("main",{children:Object(c.jsx)("section",{className:"section-home container",children:n.map((function(e){return Object(c.jsx)(w,{article:e},e.id)}))})})}),y=n(60),C=n.n(y),k=(n(165),function(e){var t=e.content;return Object(c.jsx)("div",{className:"article-content",children:t?C()(t):""})}),S=function(){var e=Object(i.useState)(),t=Object(u.a)(e,2),n=t[0],s=t[1],r=Object(d.g)(),o=Object(d.f)();return Object(i.useEffect)((function(){var e;(e=r.id,m.get("articles/"+e+"?projection=withId").then((function(e){return e.data}))).then((function(e){s(e)})).catch((function(){o.push(F+"/not-found")}))}),[r,o]),Object(c.jsxs)("main",{children:[Object(c.jsx)(j.a,{children:Object(c.jsx)("title",{children:null===n||void 0===n?void 0:n.title})}),Object(c.jsxs)("section",{className:"section-home container",children:[Object(c.jsx)("h2",{children:null===n||void 0===n?void 0:n.title}),Object(c.jsx)(k,{content:null===n||void 0===n?void 0:n.content}),Object(c.jsxs)("p",{children:["keywords: ",null===n||void 0===n?void 0:n.keywords]}),Object(c.jsxs)("p",{children:["status: ",null===n||void 0===n?void 0:n.status]}),Object(c.jsxs)("p",{children:["Created ",g()(null===n||void 0===n?void 0:n.createdAt).endOf("day").fromNow()]}),Object(c.jsxs)("p",{children:["LastModified ",g()(null===n||void 0===n?void 0:n.lastModifiedAt).endOf("day").fromNow()]})]})]})},F="/articles",I=function(){return Object(c.jsx)(j.b,{children:Object(c.jsxs)(a.a,{hashType:"noslash",children:[Object(c.jsx)(O,{}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",children:Object(c.jsx)(N,{})}),Object(c.jsx)(d.a,{path:"/:id",children:Object(c.jsx)(S,{})}),Object(c.jsx)(d.a,{path:"*",children:Object(c.jsx)(l,{})})]}),Object(c.jsx)(x,{})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,167)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root")),E()},40:function(e,t,n){},67:function(e,t,n){}},[[166,1,2]]]);
//# sourceMappingURL=main.4445a115.chunk.js.map