(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),a=c.n(i),n=(c(15),c(10)),s=c(2),r=c(1),l=c.n(r),o=(c(16),c(17),c(18),c(0)),d=l.a.memo((function(e){var t=e.movie,c=t.title,i=t.description,a=t.imdbUrl,n=t.imgUrl;return Object(o.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{"data-cy":"moviePoster",src:n,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:c})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:a,"data-cy":"movieURL",children:"IMDB"})]})]})]})})),j=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})},m=c(8),b=c(6),u=c.n(b),v=c(9),h=c.n(v),O="http://www.omdbapi.com/?apikey=".concat("98ec4eff");function x(e){return fetch("".concat(O,"&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}c(21);var p=function(e){var t=e.addMovie,c=Object(r.useState)(null),i=Object(s.a)(c,2),a=i[0],n=i[1],l=Object(r.useState)(""),j=Object(s.a)(l,2),b=j[0],v=j[1],O=Object(r.useState)(!1),p=Object(s.a)(O,2),f=p[0],N=p[1],g=Object(r.useState)(!1),y=Object(s.a)(g,2),w=y[0],k=y[1],I=function(){var e=Object(m.a)(u.a.mark((function e(t){var c,i,a,s,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!0),e.prev=2,e.next=5,x(b);case 5:if(!("Error"in(c=e.sent))){e.next=10;break}return k(!0),N(!1),e.abrupt("return");case 10:a=(i=c).Poster,s=i.Title,r=i.Plot,l=i.imdbID,n({title:s,description:r,imgUrl:"N/A"===a?"https://via.placeholder.com/360x270.png?text=no%20preview":a,imdbUrl:"https://www.imdb.com/title/".concat(l),imdbId:l}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),k(!0);case 17:return e.prev=17,N(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:b,onChange:function(e){return function(e){k(!1),v(e.target.value)}(e)}})}),w&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[b&&Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"searchButton",type:"submit",className:h()("button is-light",{"is-loading":f}),onClick:function(e){return I(e)},children:a?"Search again":"Find a movie"})}),a&&Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){a&&t(a),v(""),n(null)},children:"Add to the list"})})]})]}),Object(o.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),a&&Object(o.jsx)(d,{movie:a})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(j,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(p,{addMovie:function(e){c.every((function(t){return t.imdbId!==e.imdbId}))&&i((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};a.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.892bdd83.chunk.js.map