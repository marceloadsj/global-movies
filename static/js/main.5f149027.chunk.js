(this["webpackJsonpglobal-movies"]=this["webpackJsonpglobal-movies"]||[]).push([[0],{186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),s=a(8),o=a(19);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(92);var i=a(15),m=a(77),u=a(58),d=a(4),f=Object(d.a)(),g=a(10),v=a.n(g),x=a(14),p=a(13),b=a(78),h=a.n(b).a.create({baseURL:"https://api.themoviedb.org"});h.interceptors.request.use((function(e){return e.params=Object(x.a)({},e.params,{api_key:"fbc7835f2c75a30d0caeb9ea8673a863"}),e}));var E=h;var y=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;return e.filter((function(e){var t=e.type;return n.type===t})).reduce((function(e,t){return(0,t.reducer)(e,n)}),a)}}([{type:"GET_CONFIGURATION",reducer:function(e,t){return t.payload}}],null),N=Object(i.c)({router:Object(o.b)(f),configuration:y}),w=Object(u.a)(f),O=Object(i.a)(w,m.a),j=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d)(O),k=Object(i.e)(N,j),_=a(9),M=a(7),L=a.n(M),S=a(80),A=a.n(S);function C(e){var t=e.name,a=e.className;return r.a.createElement("span",{dangerouslySetInnerHTML:{__html:A.a.icons[t].toSvg({class:L()("inline stroke-current stroke-2",a),width:"1em",height:"1em"})}})}function G(){return r.a.createElement("section",{className:"flex items-center justify-center flex-1"},r.a.createElement(C,{name:"loader",className:"text-gray-500 text-6xl spin"}))}function I(e){var t=e.children;return r.a.createElement("section",{className:"flex items-center justify-center flex-1"},r.a.createElement("div",{className:"p-10 rounded border border-red-900 text-red-500 text-center max-w-xl"},r.a.createElement(C,{name:"alert-circle",className:"text-5xl"}),r.a.createElement("div",{className:"text-xl mt-10"},t)))}var T=a(3);function H(e){var t=e.className,a=e.vertical,n=e.light;return r.a.createElement("hr",{className:L()(t,n&&"border-gray-500",!n&&"border-gray-700",a&&"border-l h-full")})}function R(){return r.a.createElement("div",{className:"uppercase font-black text-white text-xl tracking-wide"},"G",r.a.createElement("span",{className:"hidden sm:inline"},"lobal")," M",r.a.createElement(C,{name:"film",className:"mb-1 text-orange-500"}),"vies")}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var U=r.a.createElement("defs",null,r.a.createElement("style",null,".cls-1{fill:url(#linear-gradient);}"),r.a.createElement("linearGradient",{id:"linear-gradient",y1:17.76,x2:273.42,y2:17.76,gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{offset:0,stopColor:"#90cea1"}),r.a.createElement("stop",{offset:.56,stopColor:"#3cbec9"}),r.a.createElement("stop",{offset:1,stopColor:"#00b3e5"}))),V=r.a.createElement("title",null,"Asset 3"),z=r.a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},r.a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},r.a.createElement("path",{className:"cls-1",d:"M191.85,35.37h63.9A17.67,17.67,0,0,0,273.42,17.7h0A17.67,17.67,0,0,0,255.75,0h-63.9A17.67,17.67,0,0,0,174.18,17.7h0A17.67,17.67,0,0,0,191.85,35.37ZM10.1,35.42h7.8V6.92H28V0H0v6.9H10.1Zm28.1,0H46V8.25h.1L55.05,35.4h6L70.3,8.25h.1V35.4h7.8V0H66.45l-8.2,23.1h-.1L50,0H38.2ZM89.14.12h11.7a33.56,33.56,0,0,1,8.08,1,18.52,18.52,0,0,1,6.67,3.08,15.09,15.09,0,0,1,4.53,5.52,18.5,18.5,0,0,1,1.67,8.25,16.91,16.91,0,0,1-1.62,7.58,16.3,16.3,0,0,1-4.38,5.5,19.24,19.24,0,0,1-6.35,3.37,24.53,24.53,0,0,1-7.55,1.15H89.14Zm7.8,28.2h4a21.66,21.66,0,0,0,5-.55A10.58,10.58,0,0,0,110,26a8.73,8.73,0,0,0,2.68-3.35,11.9,11.9,0,0,0,1-5.08,9.87,9.87,0,0,0-1-4.52,9.17,9.17,0,0,0-2.63-3.18A11.61,11.61,0,0,0,106.22,8a17.06,17.06,0,0,0-4.68-.63h-4.6ZM133.09.12h13.2a32.87,32.87,0,0,1,4.63.33,12.66,12.66,0,0,1,4.17,1.3,7.94,7.94,0,0,1,3,2.72,8.34,8.34,0,0,1,1.15,4.65,7.48,7.48,0,0,1-1.67,5,9.13,9.13,0,0,1-4.43,2.82V17a10.28,10.28,0,0,1,3.18,1,8.51,8.51,0,0,1,2.45,1.85,7.79,7.79,0,0,1,1.57,2.62,9.16,9.16,0,0,1,.55,3.2,8.52,8.52,0,0,1-1.2,4.68,9.32,9.32,0,0,1-3.1,3A13.38,13.38,0,0,1,152.32,35a22.5,22.5,0,0,1-4.73.5h-14.5Zm7.8,14.15h5.65a7.65,7.65,0,0,0,1.78-.2,4.78,4.78,0,0,0,1.57-.65,3.43,3.43,0,0,0,1.13-1.2,3.63,3.63,0,0,0,.42-1.8A3.3,3.3,0,0,0,151,8.6a3.42,3.42,0,0,0-1.23-1.13A6.07,6.07,0,0,0,148,6.9a9.9,9.9,0,0,0-1.85-.18h-5.3Zm0,14.65h7a8.27,8.27,0,0,0,1.83-.2,4.67,4.67,0,0,0,1.67-.7,3.93,3.93,0,0,0,1.23-1.3,3.8,3.8,0,0,0,.47-1.95,3.16,3.16,0,0,0-.62-2,4,4,0,0,0-1.58-1.18,8.23,8.23,0,0,0-2-.55,15.12,15.12,0,0,0-2.05-.15h-5.9Z"}))),Y=function(e){var t=e.svgRef,a=e.title,n=Z(e,["svgRef","title"]);return r.a.createElement("svg",F({viewBox:"0 0 273.42 35.52",ref:t},n),U,void 0===a?V:a?r.a.createElement("title",null,a):null,z)},P=r.a.forwardRef((function(e,t){return r.a.createElement(Y,F({svgRef:t},e))})),B=(a.p,a(11)),D=a(81),W=a.n(D);var J=Object.entries(W.a.theme.screens).reduce((function(e,t){var a=Object(B.a)(t,2),n=a[0],r=a[1],c=Number(r.replace("px",""));return e[n]=c,e}),{xs:0});function X(){var e=window.innerWidth;return Object.entries(J).reduce((function(t,a){var n=Object(B.a)(a,2),r=n[0],c=n[1];return t[r]=e>=c,t}),{width:e})}function q(){var e,t=Object(n.useState)((function(){return X()})),a=Object(B.a)(t,2),r=a[0],c=a[1],l=Object(n.useCallback)((function(){c(X())}),[]);return e=l,Object(n.useEffect)((function(){return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[e]),r}function $(e){var t=e.to,a=e.children,n=e.icon,c=Object(_.g)().pathname===t;return r.a.createElement(T.a,{to:t,className:L()("flex items-center px-5 md:px-3 lg:px-5 transition duration-150 hover:bg-gray-700 active:bg-gray-900 border-b-4",!c&&"text-gray-400 hover:text-gray-300 active:text-gray-500 border-transparent",c&&"text-white border-orange-500")},r.a.createElement(C,{name:n,className:"text-sm md:mr-3"}),r.a.createElement("span",{className:"hidden md:inline"},a))}function K(){return r.a.createElement("nav",{className:"flex h-full"},r.a.createElement($,{to:"/",icon:"home"},"Home"),r.a.createElement($,{to:"/genres",icon:"grid"},"Genres"),r.a.createElement($,{to:"/search",icon:"search"},"Search"))}function Q(){var e=q().sm;return r.a.createElement("header",{className:"h-16 bg-gray-800 flex items-center justify-between px-5 lg:px-10 shadow-md rounded z-10 mt-5 mx-5"},r.a.createElement("div",{className:"flex items-center h-full py-3"},r.a.createElement(T.a,{to:"/"},r.a.createElement(R,null)),e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{vertical:!0,className:"mx-5 lg:mx-10"}),r.a.createElement(P,{className:"w-32"}))),r.a.createElement(K,null))}function ee(){return r.a.createElement("footer",{className:"w-full h-16 flex items-center justify-between px-5 text-sm border-t border-gray-800"},r.a.createElement("div",{className:"text-gray-600"},"Created at ",r.a.createElement(C,{name:"home"})," with ",r.a.createElement(C,{name:"heart"})," and"," ",r.a.createElement(C,{name:"coffee"})),r.a.createElement("a",{href:"https://github.com/marceloadsj/global-movies",target:"_blank",rel:"noopener noreferrer",className:"text-gray-500"},"Marcelo Silva",r.a.createElement("span",{className:"hidden sm:inline"}," - Github")))}var te=a(31),ae=a.n(te),ne=a(82);function re(e){var t=e.className,a=e.isLink,n=e.icon,c=e.children,l=Object(ne.a)(e,["className","isLink","icon","children"]),s=a?T.a:"button";return r.a.createElement(s,Object.assign({},l,{className:L()("\n          bg-orange-600 hover:bg-orange-500 active:bg-orange-700\n          inline-flex text-white items-center justify-center px-8 py-2\n          rounded cursor-pointer focus:outline-none focus:shadow-outline\n        ",t)}),r.a.createElement(C,{name:n,className:"mr-2"})," ",c)}function ce(e){var t=e.className,a=e.bodyClassName,n=e.children;return r.a.createElement("div",{className:L()("p-5 xl:p-6 rounded border border-gray-800 overflow-hidden",t)},r.a.createElement("div",{className:a},n))}function le(e){var t=e.value;return r.a.createElement("div",{className:"bg-gray-900 rounded-full px-2 flex items-center text-gray-400"},r.a.createElement(C,{name:"star",className:"mr-1"})," ",t)}function se(){var e=Object(n.useState)({state:"loading"}),t=Object(B.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/3/movie/".concat("68726"));case 3:t=e.sent,c(Object(x.a)({state:"success"},t.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c({state:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var l=a.release_date,o=Object(n.useMemo)((function(){if(l)return ae()(l).format("YYYY")}),[l]),i=Object(s.e)((function(e){return e.configuration})).images,m=i.base_url,u=i.backdrop_sizes,d=u[u.length-1],f="".concat(m).concat(d).concat(a.backdrop_path),g="/movie/".concat(a.id);return"loading"===a.state||"error"===a.state?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:f,alt:"",className:"absolute top-0 opacity-25 mask-image-top-sm-bottom-lg mt-10"}),r.a.createElement("div",{className:"z-10 relative px-5 xl:px-20 pt-5 md:pt-12 lg:pt-20 pb-12"},r.a.createElement("div",{className:"flex flex-col sm:flex-row  items-end sm:items-center sm:h-5"},r.a.createElement("div",{className:"flex items-center -mx-1"},a.genres.map((function(e){return r.a.createElement(T.a,{key:e.id,to:"/genre/".concat(e.id),className:"rounded-full inline-block px-2 text-xs border border-orange-700 hover:border-orange-600 text-gray-200 hover:text-gray-100 mx-1 font-medium"},e.name)}))),r.a.createElement(H,{vertical:!0,variant:"light",className:"hidden sm:block mx-5"}),r.a.createElement("div",{className:"text-gray-400 flex items-center mt-2 sm:mt-0"},r.a.createElement(C,{name:"clock",className:"mr-2"})," ",a.runtime," minutes")),r.a.createElement("div",{className:"flex items-baseline font-bold mt-5 sm:mt-10"},r.a.createElement("h1",{className:"text-white text-4xl md:text-5xl border-b border-transparent hover:border-white leading-none"},r.a.createElement(T.a,{to:g},a.original_title)),r.a.createElement("span",{className:"ml-6 text-orange-500 text-lg md:text-xl flex items-center"},r.a.createElement(C,{name:"calendar",className:"mr-2"})," ",o)),r.a.createElement("h2",{className:"mt-5 inline-block text-gray-400 text-lg sm:text-2xl md:text-3xl border-b border-transparent hover:border-gray-400 leading-none"},r.a.createElement(T.a,{to:g},a.tagline)),r.a.createElement("div",{className:"xl:max-w-4xl mt-12"},r.a.createElement(ce,{className:"mt-10",bodyClassName:"h-32 md:h-48 xl:h-auto pb-5 xl:pb-0 overflow-y-scroll mask-image-bottom-sm xl:mask-image-none"},r.a.createElement("h5",{className:"text-white text-lg flex items-center"},r.a.createElement(C,{name:"align-left",className:"mr-2"}),"Overview"),r.a.createElement("p",{className:"text-gray-500 text-justify"},a.overview)),r.a.createElement("div",{className:"mt-3 flex items-center justify-between"},r.a.createElement("div",{className:"flex-shrink-0 flex items-center h-5"},r.a.createElement(le,{value:a.vote_average}),r.a.createElement(H,{vertical:!0,className:"mx-3"}),r.a.createElement("div",{className:"text-gray-500 text-xs"},a.vote_count," votes")),r.a.createElement("div",{className:"ml-5 text-xs -mx-1 md:-mx-2 text-gray-500 truncate"},a.production_companies.map((function(e){return r.a.createElement("span",{key:e.id,className:"mx-1 md:mx-2"},e.name)}))))),r.a.createElement(re,{icon:"info",isLink:!0,to:g,className:"mt-5"},"Check More Details")))}function oe(e){var t=e.genre,a=Object(_.h)().params.genreId,n=t.id===Number(a);return r.a.createElement(T.a,{to:"/genre/".concat(t.id),className:L()("block rounded px-3 py-2 hover:text-white hover:bg-gray-800",!n&&"text-gray-500",n&&"text-orange-500 bg-gray-800")},t.name)}function ie(){var e=Object(n.useState)({state:"loading"}),t=Object(B.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get("/3/genre/movie/list");case 3:t=e.sent,c({state:"success",data:t.data.genres}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c({state:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}c({state:"loading"}),function(){e.apply(this,arguments)}()}),[]);var l=q().lg,s=Object(_.f)();return"loading"===a.state||"error"===a.state?null:l?r.a.createElement("div",{className:"py-10 pr-5 sticky top-0 max-h-screen overflow-y-scroll w-64 xl:w-full xl:max-w-xs"},r.a.createElement(ce,null,r.a.createElement("h5",{className:"text-gray-300 text-xl mb-5"},"Genres"),a.data.map((function(e){return r.a.createElement(oe,{key:e.id,genre:e})})))):r.a.createElement("div",{className:"w-full"},r.a.createElement("select",{className:"px-3 py-2 rounded border border-gray-800 appearance-none bg-gray-900 text-white focus:outline-none focus:shadow-outline w-full",onChange:function(e){return e.target.value&&s.push("/genre/".concat(e.target.value))}},r.a.createElement("option",{value:""},"Genres"),a.data.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement(C,{name:"chevron-down",className:"text-white -ml-8"}))}var me=a(48);function ue(e){var t=e.movie,a=Object(s.e)((function(e){return e.configuration})).images,c=a.base_url,l=a.poster_sizes[3],o="".concat(c).concat(l).concat(t.poster_path),i=Object(n.useMemo)((function(){return ae()(t.release_date).format("MM/YY")}),[t.release_date]);return r.a.createElement(T.a,{to:"/movie/".concat(t.id),className:"bg-black group rounded overflow-hidden"},r.a.createElement("img",{src:o,title:t.original_title,alt:t.original_title,className:"group-hover:scale-105 transform transition duration-150 shadow cursor-pointer mask-image-bottom-sm"}),r.a.createElement("div",{className:"p-3 text-center"},r.a.createElement("div",{className:"text-sm text-white truncate"},t.original_title),r.a.createElement("div",{className:"flex justify-between text-xs mt-3"},r.a.createElement(le,{value:t.vote_average}),r.a.createElement("div",{className:"font-bold text-gray-500"},i))))}function de(){var e=Object(n.useState)(1),t=Object(B.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({state:"loading"}),s=Object(B.a)(l,2),o=s[0],i=s[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/3/trending/movie/week",{params:{page:a}});case 2:t=e.sent,i((function(e){var a=e.results||[];return Object(x.a)({},e,{},t.data,{state:"success",results:[].concat(Object(me.a)(a),Object(me.a)(t.data.results))})}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);var m=q(),u=m.xl,d=m.md,f=m.sm,g=(u?5:d&&4)||f&&3||2,b=o.results,h=o.total_results,y=Object(n.useMemo)((function(){if(b)return b.length===h?b:b.slice(0,b.length-b.length%g)}),[b,h,g]);return"loading"===o.state||"error"===o.state?null:r.a.createElement("div",{className:"lg:ml-5 mt-10 lg:mt-16 pb-10 flex-1"},r.a.createElement("h3",{className:"flex items-center text-xl text-white"},r.a.createElement(C,{name:"trending-up",className:"mr-3"})," Trending Movies"),r.a.createElement("div",{className:"mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5"},y.map((function(e){return r.a.createElement(ue,{key:e.id,movie:e})}))),a<o.total_pages&&r.a.createElement("div",{className:"text-center"},r.a.createElement(re,{className:"mt-10",icon:"plus-circle",onClick:function(){return c((function(e){return e+1}))}},"Load More...")))}function fe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null),r.a.createElement("section",{className:"p-5 md:p-10 flex flex-col lg:flex-row"},r.a.createElement(ie,null),r.a.createElement(de,null)))}function ge(){var e=Object(s.d)(),t=Object(s.e)((function(e){return null===e||void 0===e?void 0:e.configuration}));return Object(n.useEffect)((function(){t||e(function(){var e=Object(p.a)(v.a.mark((function e(t){var a,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_CONFIGURATION",payload:{state:"loading"}}),e.prev=1,e.next=4,E.get("/3/configuration");case 4:n=e.sent,a=Object(x.a)({state:"success"},n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a={state:"error",exception:e.t0,message:(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(c=r.data)||void 0===c?void 0:c.message)||"An unknown error happened, try again in a few minutes"};case 11:t({type:"GET_CONFIGURATION",payload:a});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t,e]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"flex-1 flex flex-col"},(!t||"loading"===(null===t||void 0===t?void 0:t.state))&&r.a.createElement(G,null),"error"===(null===t||void 0===t?void 0:t.state)&&r.a.createElement(I,null,t.message),"success"===(null===t||void 0===t?void 0:t.state)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",exact:!0},r.a.createElement(fe,null))))),r.a.createElement(ee,null))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:k},r.a.createElement(o.a,{history:f},r.a.createElement(ge,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a(186)},92:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.5f149027.chunk.js.map