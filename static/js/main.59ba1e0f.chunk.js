(this.webpackJsonpnoveauriche=this.webpackJsonpnoveauriche||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(6),a=c.n(n),s=c(35),r=c.n(s),i=(c(53),c(16)),o=c(17),l=(c(54),c(13)),j=(c(43),c(55),c(4)),d=function(){return Object(j.jsx)("section",{className:"about-us",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"top-content",children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h2",{children:"About Nouveauriche Fashion"}),Object(j.jsx)("p",{children:"We at Nouveauriche Fashion are dedicated to sharing the latest trends in fashion and design with the community. Here you can find all the trending brands for clothes, bags, shoes and more (even some gossip)."})]}),Object(j.jsx)("img",{src:"noveauriche/images/about-us-img.avif",alt:"about us"})]}),Object(j.jsx)("p",{className:"quote",children:'"What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language." \u2014Miuccia Prada'})]})})},b=c(28),u=c(11),h=c(12),O=c(45),m=c(19),p=Object(O.a)({apiKey:"AIzaSyADhLXNKQHCkFjnvCbgI-rFtswVFGWJb8Y",authDomain:"react-project-28407.firebaseapp.com",projectId:"react-project-28407",storageBucket:"react-project-28407.appspot.com",messagingSenderId:"736205818410",appId:"1:736205818410:web:814f23e35722ca9dd79153"}),x=(Object(m.b)(p),Object(h.e)()),g=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=Object(h.a)(x,"articles"),t=Object(h.i)(e,Object(h.h)("lastUpdate","desc"),Object(h.f)(3));return Object(h.g)(t,(function(e){return a(e.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})})))}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("section",{className:"latest-posts",children:Object(j.jsx)("div",{className:"wrapper",children:c.map((function(e){return Object(j.jsxs)(i.b,{to:"single-post/".concat(e.id),className:"blog-card",category:e.category,id:e.id,children:[Object(j.jsx)("div",{className:"img-wrap",children:Object(j.jsx)("img",{src:e.imageURL,alt:"about us"})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("span",{className:"category",children:e.category}),Object(j.jsx)("h4",{children:e.title}),Object(j.jsx)("p",{children:e.description}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"authorWrap",children:["By ",Object(j.jsx)("span",{className:"author",children:e.author})]})]})]},e.id)}))})}),Object(j.jsx)("style",{jsx:"true",children:"\n            .latest-posts {\n                width: 100%;\n                padding: 40px 0px;\n            }\n            .latest-posts .wrapper {\n                width: 100%;\n                max-width: 1480px;\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: space-between;\n                padding: 20px;\n                margin: 0 auto;\n            }\n\n        "})]})},f=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"main-image-wrapper",children:[Object(j.jsx)("div",{className:"main-image",style:{backgroundImage:'url("noveauriche/images/home-img.avif")'}}),Object(j.jsx)(i.b,{to:"/blog",children:"Blog"})]}),Object(j.jsx)("style",{jsx:"true",children:"\n            .main-image-wrapper {\n                width: 100%;\n                margin: 0 auto;\n                position: relative;\n            }\n\n            .main-image-wrapper a {\n                width: fit-content;\n                position: absolute;\n                bottom: 20%;\n                left: 0;\n                right: 0;\n                margin: 0 auto;\n                padding: 15px 30px;\n                border-radius: 10px;\n                background-color: #FFF;\n                color: #000;\n                text-decoration: none;\n                font-weight: 600;\n                letter-spacing: 0.5px;\n            }\n\n            .main-image-wrapper .main-image {\n                width: 100%;\n                height: 80vh;\n                margin: 0 auto;\n                background-size: cover;\n                background-repeat: no-repeat;\n                background-attachment: fixed;\n                padding: 20px;\n            }\n\n            .main-image-wrapper .main-image img {\n                width: 100%\n            }\n        "}),Object(j.jsx)(g,{}),Object(j.jsx)(d,{}),Object(j.jsx)(g,{})]})},v=Object(m.b)(),y=a.a.createContext(),N=function(e){var t=e.children,c=Object(n.useState)(null),a=Object(u.a)(c,2),s=a[0],r=a[1];Object(n.useEffect)((function(){Object(m.c)(v,(function(e){r(e),e?localStorage.setItem("currentUserUID",e.uid):localStorage.removeItem("currentUserUID")}))}),[]);var i={isAuthenticated:Boolean(s),email:null===s||void 0===s?void 0:s.email,uid:null===s||void 0===s?void 0:s.uid};return Object(j.jsx)(y.Provider,{value:{currentUser:s,authInfo:i},children:t})},w=c(73),S=(c(66),function(e){var t=e.history,c=Object(n.useContext)(y).currentUser,a=window.location.pathname.split("/").pop(),s=Object(n.useState)(""),r=Object(u.a)(s,2),o=r[0],d=r[1],O=Object(n.useState)(""),m=Object(u.a)(O,2),p=m[0],g=m[1],f=Object(n.useState)([]),v=Object(u.a)(f,2),N=v[0],S=v[1],C=Object(h.a)(x,"comments");Object(h.g)(Object(h.c)(x,"articles",a),(function(e){d(e.data())}));function L(e){var t=e.target.id;e.target.parentNode.style.display="none",Object(h.b)(Object(h.c)(x,"comments",t))}return Object(n.useEffect)((function(){var e=Object(h.i)(C,Object(h.h)("createdAt","desc"),Object(h.m)("forPost","==",a));Object(h.g)(e,(function(e){return S(e.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})})))}))}),[]),Object(j.jsx)("section",{className:"single-post",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"main-content",children:[Object(j.jsx)("span",{className:"category",children:o.category}),Object(j.jsxs)("span",{className:"dateAdded",children:["Published ",Object(j.jsx)("i",{children:o.dateAdded})]}),Object(j.jsx)("h2",{className:"title",children:o.title}),Object(j.jsx)("hr",{className:"top-line"}),Object(j.jsxs)("div",{className:"author-wrapper",children:["By ",Object(j.jsx)("span",{className:"author",children:o.author?o.author:o.authorEmail})]}),Object(j.jsx)("img",{className:"post-image",src:o.imageURL,alt:"post"}),Object(j.jsx)("p",{className:"description",children:o.description})]}),Object(j.jsxs)("div",{className:"comments",children:[Object(j.jsx)("h3",{children:"Comments"}),N.map((function(e){return Object(j.jsxs)("div",{className:"comment-box",children:[Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h5",{children:e.author?e.author:e.authorEmail}),Object(j.jsx)("span",{children:e.dateAdded})]}),Object(j.jsx)("p",{children:e.content}),(null===c||void 0===c?void 0:c.uid)===e.owner?Object(j.jsx)("span",{className:"delete-comment",id:e.id,onClick:L,children:"Delete comment"}):""]},e.id)})),Object(j.jsx)("div",{className:"add-comment-wrapper",children:Object(j.jsxs)("form",{className:"comment-form",onSubmit:function(e){e.preventDefault();var t=c?c.uid:"unknown",n=c?c.displayName:c.email,s=c?c.email:"",r=a,i="Commented on "+(new Date).toLocaleDateString()+" at "+(new Date).toLocaleTimeString(),o={content:p,id:Object(w.a)(),owner:t,author:n,authorEmail:s,forPost:r,dateAdded:i,createdAt:Object(h.j)()};Object(h.k)(Object(h.c)(x,"comments",o.id),o).then((function(){document.getElementById("commentTextarea").innerHTML="",document.getElementById("commentTextarea").value="",g("")})).catch((function(e){l.c.error(e.code)}))},children:[Object(j.jsx)("textarea",{id:"commentTextarea",rows:"6",required:!0,type:"text",value:p,placeholder:"Comment:",onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("button",{children:"Add comment"})]})})]}),(null===c||void 0===c?void 0:c.uid)===o.owner?Object(j.jsxs)("div",{className:"owner-content",children:[Object(j.jsx)("span",{className:"delete-btn",onClick:function(){t.push("/blog"),Object(h.b)(Object(h.c)(x,"articles",a)).then((function(){l.c.success("The article has been deleted!")})).catch((function(e){l.c.error(e.code)}))},children:"Delete"}),Object(j.jsx)(i.b,{to:"/edit/".concat(o.id),children:"Edit"})]}):""]})})}),C=(c(67),Object(m.b)(),function(){var e=Object(n.useContext)(y).currentUser;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("header",{children:Object(j.jsxs)("nav",{className:"header-container",children:[Object(j.jsx)(i.b,{to:"/",className:"logo-nav",children:Object(j.jsx)("img",{src:"noveauriche/images/logo.png",alt:"logo"})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"list-items",children:[Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{exact:!0,to:"/",children:"Home"})}),Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"/about",children:"About"})}),e?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"/blog",children:"Blog"})}),Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"/my-posts",children:"My Posts"})}),Object(j.jsx)("div",{children:Object(j.jsxs)(i.b,{to:"/create",children:[Object(j.jsx)("i",{className:"fas fa-sign-out-alt"}),"Create"]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(i.b,{to:"/logout",children:[Object(j.jsx)("i",{className:"fas fa-sign-out-alt"}),"Logout"]})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"/login",children:"Login"})}),Object(j.jsx)("div",{children:Object(j.jsx)(i.b,{to:"/register",children:"Register"})})]})]}),e?Object(j.jsxs)("div",{className:"welcome-msg",children:["Welcome, ",Object(j.jsx)("span",{children:e.email}),"!"]}):Object(j.jsxs)("div",{className:"welcome-msg",children:["Welcome, ",Object(j.jsx)("span",{children:"Guest"})]})]})]})})})}),L=(c(68),function(){return Object(j.jsx)("footer",{children:Object(j.jsx)("div",{className:"footer-container",children:Object(j.jsx)("p",{children:" All rights reserved NoveauRiche 2021 \xa9 "})})})}),E=c(0),I=c.n(E),P=c(2),F=(c(69),Object(m.b)()),U=function(e){var t=e.history,c=Object(n.useState)(""),a=Object(u.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),d=o[0],b=o[1],O=Object(n.useState)(""),p=Object(u.a)(O,2),g=p[0],f=p[1],v=function(){var e=Object(P.a)(I.a.mark((function e(c,n,a){var s,r,i;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c&&n&&a)){e.next=11;break}return e.next=4,Object(m.a)(F,n,a);case 4:return s=e.sent,r=s.user,i={uid:r.uid,name:c,email:n},e.next=9,Object(m.f)(F.currentUser,{displayName:c});case 9:return e.next=11,Object(h.k)(Object(h.c)(x,"users",i.uid),i).then((function(){l.c.success("Successful Registration!",{position:l.c.POSITION.TOP_CENTER}),Object(m.e)(F).then((function(){t.push("/login")}))}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),l.c.error(e.t0.code);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,c,n){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"login-register-page",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("h2",{children:"Register User"}),Object(j.jsx)("input",{type:"text",name:"name",value:g,onChange:function(e){return f(e.target.value)},id:"name",placeholder:"Name:"}),Object(j.jsx)("input",{type:"text",name:"email",value:s,onChange:function(e){return r(e.target.value)},id:"email",placeholder:"Email:"}),Object(j.jsx)("input",{type:"password",name:"password",value:d,onChange:function(e){return b(e.target.value)},id:"password",placeholder:"Password:"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),g?s?d||l.c.warn("Please enter your password !",{}):l.c.warn("Please enter your email !",{}):l.c.warn("Please enter your name !",{}),v(g,s,d)},children:"Create"})]})})},k=Object(m.b)(),D=function(e){var t=e.history;return Object(j.jsx)("div",{className:"login-register-page",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=e.target.email.value,n=e.target.password.value;c?n||l.c.warn("Please enter your password !",{}):l.c.warn("Please enter your email !",{}),c&&n&&Object(m.d)(k,c,n).then((function(e){l.c.success("Successfully Logged In!",{position:l.c.POSITION.TOP_CENTER}),t.push("/")})).catch((function(e){l.c.error(e.code)}))},children:[Object(j.jsx)("h2",{children:"Login"}),Object(j.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"Email:"}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"password:"}),Object(j.jsx)("button",{children:"Login"})]})})},A=(c(70),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(h.d)(Object(h.a)(x,"articles"));function r(e,t){var c=document.querySelectorAll(".blog-card"),n=document.querySelectorAll(".blog .wrapper .categories span");console.log(n),c.forEach((function(c){c.classList.remove("hidden"),c.getAttribute("category")!==e&&"all"!==e?(c.classList.add("hidden"),n.forEach((function(e){e.classList.remove("active")})),t.classList.toggle("active")):"all"===e&&(c.classList.remove("hidden"),n.forEach((function(e){e.classList.remove("active")})),t.classList.toggle("active"))}))}Object(n.useEffect)((function(){s.then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),a(t)}))}),[]);var o=[];c.map((function(e){o.push(e.category)}));var l=o.filter((function(e,t){return o.indexOf(e)===t}));return Object(j.jsx)("section",{className:"blog",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"categories",children:[Object(j.jsx)("span",{className:"category active",category:"all",onClick:function(e){return r(e.target.getAttribute("category"),e.target)},children:"All"}),l.map((function(e){return e?Object(j.jsx)("span",{className:"category",category:e,onClick:function(t){return r(e,t.target)},children:e},e):""}))]}),Object(j.jsx)("div",{className:"blog-posts",children:c.map((function(e){return Object(j.jsxs)(i.b,{to:"single-post/".concat(e.id),className:"blog-card",category:e.category,id:e.id,children:[Object(j.jsx)("div",{className:"img-wrap",children:Object(j.jsx)("img",{src:e.imageURL,alt:"article"})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("span",{className:"category",children:e.category}),Object(j.jsx)("h4",{children:e.title}),Object(j.jsx)("p",{children:e.description}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"authorWrap",children:["By ",Object(j.jsx)("span",{className:"author",children:e.author?e.author:e.authorEmail})]})]})]},e.id)}))})]})})}),T=c(20),R=(c(71),function(e){var t=e.history,c=Object(n.useContext)(y).currentUser,a=Object(n.useState)([]),s=Object(u.a)(a,2),r=(s[0],s[1]),i=Object(n.useState)(""),o=Object(u.a)(i,2),d=o[0],b=o[1],O=Object(n.useState)(""),m=Object(u.a)(O,2),p=m[0],g=m[1],f=Object(n.useState)(""),v=Object(u.a)(f,2),N=v[0],S=v[1],C=Object(n.useState)(""),L=Object(u.a)(C,2),E=L[0],I=L[1],P=Object(h.d)(Object(h.a)(x,"articles"));Object(n.useEffect)((function(){P.then((function(e){e.forEach((function(e){var t=e.data();r((function(e){return[].concat(Object(T.a)(e),[t])}))}))}))}),[]);return Object(j.jsx)("section",{className:"create-edit-post",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Create Post "}),Object(j.jsx)("h5",{children:"Please fill all the fields before submitting!"}),Object(j.jsxs)("div",{className:"boxes",children:[Object(j.jsxs)("form",{className:"create-edit-post-form",onSubmit:function(e){e.preventDefault();var n=c?c.uid:"unknown",a=c?c.displayName:c.email,s=(new Date).toLocaleDateString(),r=c.email,i={title:d,description:p,imageURL:N,category:E,dateAdded:s,id:Object(w.a)(),owner:n,author:a,authorEmail:r,createdAt:Object(h.j)(),lastUpdate:Object(h.j)()};Object(h.k)(Object(h.c)(x,"articles",i.id),i).then((function(){l.c.success("Your article is published!",{position:l.c.POSITION.TOP_CENTER}),t.push("/blog")})).catch((function(e){l.c.error(e.code)}))},children:[Object(j.jsx)("input",{required:!0,type:"text",value:d,placeholder:"Title:",onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("textarea",{rows:"6",required:!0,value:p,placeholder:"Description:",onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("input",{required:!0,type:"text",value:N,placeholder:"Image URL:",onChange:function(e){return S(e.target.value)}}),Object(j.jsxs)("select",{required:!0,placeholder:"Category:",value:E,onChange:function(e){return I(e.target.value)},children:[Object(j.jsx)("option",{disabled:!0}),Object(j.jsx)("option",{value:"Fashion",children:"Fashion"}),Object(j.jsx)("option",{value:"Lifestyle",children:"Lifestyle"}),Object(j.jsx)("option",{value:"Designers",children:"Designers"})]}),Object(j.jsx)("button",{children:"Create"})]}),Object(j.jsx)("div",{className:"image-box",children:Object(j.jsx)("img",{src:"noveauriche/images/balenciaga-bag.jpg",alt:"create"})})]})]})})}),q=function(e){var t=e.history,c=window.location.pathname.split("/").pop(),a=Object(n.useState)(""),s=Object(u.a)(a,2),r=s[0],i=s[1],o=Object(n.useState)(""),d=Object(u.a)(o,2),b=d[0],O=d[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),g=p[0],f=p[1],v=Object(n.useState)(""),y=Object(u.a)(v,2),N=y[0],w=y[1],S=Object(n.useState)(""),C=Object(u.a)(S,2),L=C[0],E=C[1],I=Object(h.c)(x,"articles",c),P=Object(h.g)(Object(h.c)(x,"articles",c),(function(e){E(e.data())}));return Object(j.jsx)("section",{className:"create-edit-post",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Edit Post "}),Object(j.jsx)("h5",{children:"Please fill all the fields before submitting!"}),Object(j.jsxs)("div",{className:"boxes",children:[Object(j.jsxs)("form",{className:"create-edit-post-form",onSubmit:function(e){e.preventDefault(),Object(h.l)(I,{title:r,description:b,imageURL:g,category:N,lastUpdate:Object(h.j)()}).then((function(){l.c.success("Your article is updated!",{position:l.c.POSITION.TOP_CENTER})})).catch((function(e){l.c.error(e.code)})),t.push("/blog"),P()},children:[Object(j.jsx)("input",{required:!0,type:"text",value:r,placeholder:L.title,name:"title",onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("textarea",{required:!0,rows:"6",value:b,placeholder:L.description,name:"description",onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("input",{required:!0,type:"text",value:g,placeholder:L.imageURL,name:"imageURL",onChange:function(e){return f(e.target.value)}}),Object(j.jsxs)("select",{required:!0,value:N,onChange:function(e){return w(e.target.value)},children:[Object(j.jsx)("option",{disabled:!0}),Object(j.jsx)("option",{value:"Fashion",children:"Fashion"}),Object(j.jsx)("option",{value:"Lifestyle",children:"Lifestyle"}),Object(j.jsx)("option",{value:"Designers",children:"Designers"})]}),Object(j.jsx)("button",{children:"Edit"})]}),Object(j.jsx)("div",{className:"image-box",children:Object(j.jsx)("img",{src:"noveauriche/images/balenciaga-bag.jpg",alt:"edit"})})]})]})})},B=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(h.a)(x,"articles");return Object(n.useEffect)((function(){var e=localStorage.getItem("currentUserUID"),t=Object(h.i)(s,Object(h.m)("owner","==",e));Object(h.g)(t,(function(e){return a(e.docs.map((function(e){return Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id})})))}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("section",{className:"latest-posts my-posts",children:Object(j.jsx)("div",{className:"wrapper",children:c.length>0?Object(j.jsx)(j.Fragment,{children:c.map((function(e){return Object(j.jsxs)(i.b,{to:"single-post/".concat(e.id),className:"blog-card blog-card-mypost",category:e.category,id:e.id,children:[Object(j.jsx)("div",{className:"img-wrap",children:Object(j.jsx)("img",{src:e.imageURL,alt:"about us"})}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("span",{className:"category",children:e.category}),Object(j.jsx)("h4",{children:e.title}),Object(j.jsx)("p",{children:e.description}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"authorWrap",children:["By ",Object(j.jsx)("span",{className:"author",children:e.author})]})]})]},e.id)}))}):Object(j.jsx)("h3",{style:{margin:"0 auto"},children:"You have not created any posts."})})}),Object(j.jsx)("style",{jsx:"true",children:"\n            .latest-posts {\n                width: 100%;\n                padding: 40px 0px;\n            }\n\n            .latest-posts .wrapper {\n                width: 100%;\n                max-width: 1480px;\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: space-between;\n                padding: 20px;\n                margin: 0 auto;\n            }\n\n            .latest-posts.my-posts .wrapper {\n                justify-content: flex-start;\n            }\n\n            .latest-posts.my-posts .blog-card-mypost {\n                max-width: 380px;\n                width: 100%;\n                flex: auto;\n            }\n\n        "})]})},W=Object(m.b)();var H=function(){return Object(j.jsx)(N,{children:Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(C,{}),Object(j.jsx)(l.a,{transition:l.b,autoClose:2e3}),Object(j.jsx)(o.b,{exact:!0,path:"/",component:f}),Object(j.jsx)(o.b,{path:"/about",component:d}),Object(j.jsx)(o.b,{path:"/blog",component:A}),Object(j.jsx)(o.b,{path:"/my-posts",component:B}),Object(j.jsx)(o.b,{path:"/create",component:R}),Object(j.jsx)(o.b,{path:"/edit",component:q}),Object(j.jsx)(o.b,{path:"/single-post",component:S}),Object(j.jsx)(o.b,{path:"/register",component:U}),Object(j.jsx)(o.b,{path:"/login",component:D}),Object(j.jsx)(o.b,{path:"/logout",render:function(){return W.signOut(),l.c.success("Logged out!",{}),Object(j.jsx)(o.a,{to:"/login"})}}),Object(j.jsx)(L,{})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,74)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(H,{})}),document.getElementById("root")),M()}},[[72,1,2]]]);
//# sourceMappingURL=main.59ba1e0f.chunk.js.map