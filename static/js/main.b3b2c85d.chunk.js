(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(27).concat([function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,function(e,t,c){},,,function(e,t,c){},,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(14),a=c.n(n),s=c(6),r=c(3),i=(c(45),c(0)),o=function(){return Object(i.jsx)(s.b,{to:"/",className:"Logo",children:Object(i.jsx)("img",{className:"Logo__img",src:"./Logo.svg",alt:"logo"})})},u=c(1),l=c.n(u),d=c(9),j=c.n(d),b=(c(27),function(e){var t=e.isActive;return j()("NavButton",{"NavButton--selected":t})}),h=function(e){var t=e.name,c=e.path;return Object(i.jsx)(s.c,{to:{pathname:c},className:b,children:t})},m=[{name:"HOME",path:"/"},{name:"PHONES",path:"/phones"},{name:"TABLETS",path:"/tablets"},{name:"ACCESSORIES",path:"/accessories"}],O=function(){return Object(i.jsx)("nav",{className:"Nav",children:m.map((function(e){return Object(i.jsx)(h,{name:e.name,path:e.path},e.path)}))})},_=c(4),x=c(10),f=c(8),p=function(e,t){return e*((100-t)/100)},v=function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1).toLowerCase())},g=function(e){return e.split("/")[1]},N=function(e,t){switch(t){case"discount":return e.sort((function(e,t){var c=e.price*(e.discount/100);return t.price*(t.discount/100)-c}));case"age":return e.sort((function(e,t){return e.age-t.age}));case"name":return e.sort((function(e,t){return e.name.localeCompare(t.name)}));case"price":return e.sort((function(e,t){return e.price-e.price*(e.discount/100)-(t.price-t.price*(t.discount/100))}));default:return e}},P=function(e,t){var c=JSON.parse(localStorage.getItem(e)||"[]"),n=Object(u.useState)(0===c.length?t:c),a=Object(_.a)(n,2);return[a[0],a[1]]},y=function(e,t,c){return function(n){var a,s=Object(f.a)(t),r=t.find((function(e){return e.id===n.id})),i=r?t.indexOf(r):-1,o=(null===r||void 0===r?void 0:r.quantity)!==n.quantity&&(null===n||void 0===n?void 0:n.quantity);if(o&&i>=0&&(s[i].quantity=n.quantity),r)a=s.filter((function(e){return!!o||e.id!==n.id}));else{var u="cart"===e?Object(x.a)(Object(x.a)({},n),{},{quantity:1}):Object(x.a)({},n);a=[].concat(Object(f.a)(t),[u])}c(a),localStorage.setItem(e,JSON.stringify(a))}},C=function(e){var t,c=e.type,n=e.id;switch(c){case"phone":t="phones";break;case"tablet":t="tablets";break;case"accessory":t="accessories";break;default:return"/"}return"/".concat(t,"/").concat(n)},S=l.a.createContext({favourites:[],changeFavItems:function(){}}),k=l.a.createContext({cartItems:[],changeCartItems:function(){}}),w=function(e){var t=e.children,c=P("cart",[]),n=Object(_.a)(c,2),a=n[0],s=n[1],r=P("favs",[]),o=Object(_.a)(r,2),u=o[0],l=o[1],d=y("cart",a,s),j=y("favs",u,l);return Object(i.jsx)(k.Provider,{value:{cartItems:a,changeCartItems:d},children:Object(i.jsx)(S.Provider,{value:{favourites:u,changeFavItems:j},children:t})})},D=(c(48),function(e){var t=e.type,c=function(e){switch(e){case"favs":return"/favourites";case"cart":return"/cart";default:return"/"}}(t),n=Object(u.useContext)(k).cartItems,a=Object(u.useContext)(S).favourites,r="cart"===t?n.length:a.length;return Object(i.jsx)("div",{className:"SavedProductsButton__container",children:Object(i.jsx)(s.c,{to:c,className:function(e){var c=e.isActive;return j()("SavedProductsButton","SavedProductsButton--".concat(t),{"SavedProductsButton--selected":c})},children:0!==r&&Object(i.jsx)("div",{className:"SavedProductsButton__amount",children:r},r)})})}),I=c(37),L=c.n(I),B=function(e){switch(e){case"/phones":case"/tablets":case"/accessories":case"/favourites":return"Search in ".concat(e.slice(1),"...");default:return"Search..."}},F=(c(59),function(){var e=Object(r.m)(),t=e.search,c=e.pathname,n=Object(r.o)(),a=new URLSearchParams(t),s=a.get("query")||"",o=Object(u.useState)(s),l=Object(_.a)(o,2),d=l[0],b=l[1],h=Object(u.useCallback)(L()((function(e,t,c){e?c.set("query",e):c.delete("query"),n({pathname:t,search:c.toString()})}),500),[]);Object(u.useEffect)((function(){""===s&&""!==d&&b("")}),[s]);var m=""!==d;return Object(i.jsxs)("div",{className:"SearchBar",children:[Object(i.jsx)("input",{type:"text",placeholder:B(c),value:d,className:j()("SearchBar__input",{"SearchBar__input--has-text":m}),onChange:function(e){var t=e.target.value.trimStart();b(t),h(t,c,a)}}),m&&Object(i.jsx)("button",{type:"button","data-cy":"searchDelete",className:"SearchBar__clear-button",onClick:function(){b(""),h("",c,a)},children:" "})]})}),E=(c(60),function(){var e=Object(r.m)().pathname,t=e.split("/").filter((function(e){return""!==e})).length,c="/"!==e&&"/cart"!==e&&"/menu"!==e&&1===t,n=Object(r.o)();return Object(i.jsx)("header",{className:"Header",children:Object(i.jsxs)("div",{className:"Header__content",children:[Object(i.jsxs)("div",{className:"Header__left-side",children:[Object(i.jsx)(s.c,{to:"/menu",className:"Header__menu-button",onClick:function(){"/menu"===e&&n(-1)},children:" "}),Object(i.jsx)("div",{className:"Header__logo-container",children:Object(i.jsx)(o,{})}),Object(i.jsx)("div",{className:"Header__nav-container",children:Object(i.jsx)(O,{})})]}),Object(i.jsxs)("div",{className:"Header__right-side",children:[c&&Object(i.jsx)(F,{}),Object(i.jsx)(D,{type:"favs"}),Object(i.jsx)(D,{type:"cart"})]})]})})}),q=(c(61),function(e){var t=e.linkTo;return Object(i.jsx)(s.b,{to:"https://github.com/kbekher",target:"_blank",className:"FooterLink",children:t})}),A=function(){var e=Object(u.useState)(!1),t=Object(_.a)(e,2),c=t[0],n=t[1],a=Object(r.m)().pathname;function s(){n(document.body.scrollHeight>window.innerHeight)}Object(u.useEffect)((function(){return s(),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s),window.removeEventListener("scroll",s)}}),[]),Object(u.useEffect)((function(){n(document.body.scrollHeight>window.innerHeight)}),[a]),window.addEventListener("scroll",s);return Object(i.jsx)("footer",{className:"Footer",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"Footer__content",children:[Object(i.jsx)("div",{className:"Footer__logo",children:Object(i.jsx)(o,{})}),Object(i.jsxs)("div",{className:"Footer__links",children:[Object(i.jsx)(q,{linkTo:"Github"}),Object(i.jsx)(q,{linkTo:"Contacts"}),Object(i.jsx)(q,{linkTo:"Rights"})]}),Object(i.jsx)("div",{className:"Footer__back-to-top back-to-top",children:c&&Object(i.jsxs)("label",{className:"back-to-top__label",htmlFor:"back-to-top__button",children:[Object(i.jsx)("span",{className:"back-to-top__text",children:"Back to top"}),Object(i.jsx)("button",{type:"button",className:"back-to-top__button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:" "})]})})]})})})},H=(c(62),function(){return Object(i.jsxs)("div",{className:"App",id:"App",children:[Object(i.jsx)(E,{}),Object(i.jsx)("main",{children:Object(i.jsx)(r.a,{})}),Object(i.jsx)(A,{})]})}),R=c(38),T=(c(64),c(65),["phones","tablets","accessories"]),M={prevArrow:Object(i.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--prev",children:" "}),nextArrow:Object(i.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--next",children:" "})},U=function(){return Object(i.jsx)("div",{className:"Carousel",children:Object(i.jsxs)(R.a,Object(x.a)(Object(x.a)({},M),{},{indicators:!0,children:[Object(i.jsx)("div",{className:"each-slide-effect",children:Object(i.jsx)("div",{className:"Carousel__slide Carousel__slide--".concat(T[0])})}),Object(i.jsx)("div",{className:"each-slide-effect",children:Object(i.jsx)("div",{className:"Carousel__slide Carousel__slide--".concat(T[1])})}),Object(i.jsx)("div",{className:"each-slide-effect",children:Object(i.jsx)("div",{className:"Carousel__slide Carousel__slide--".concat(T[2])})})]}))})},V=(c(32),function(e){var t=e.type,c=e.amount,n="/".concat(t),a=v(t);return Object(i.jsxs)("div",{className:"CategoryLink",children:[Object(i.jsx)(s.c,{to:n,className:"CategoryLink__img CategoryLink__img--".concat(t),children:" "}),Object(i.jsxs)("div",{className:"CategoryLink__text",children:[Object(i.jsx)(s.c,{to:n,className:"CategoryLink__title",children:a}),Object(i.jsx)("p",{className:"CategoryLink__amount",children:"".concat(c," model").concat(1!==c?"s":"")})]})]})}),G="https://mate-academy.github.io/react_phone-catalog/api";function J(){var e="".concat(G,"/products.json");return fetch(e).then((function(e){if(!e.ok)throw new Error("".concat(e.status," ").concat(e.statusText));return e.json()}))}function W(){return J().then((function(e){return e.filter((function(e){return"phone"===e.type}))}))}function X(){return J().then((function(e){return e.filter((function(e){return"tablet"===e.type}))}))}function z(){return J().then((function(e){return e.filter((function(e){return"accessory"===e.type}))}))}var Q=function(e){var t="".concat(G,"/products/").concat(e,".json");return fetch(t).then((function(e){if(e.ok)return e.json();throw new Error(e.statusText)}))};function Y(e){return J().then((function(t){return t.find((function(t){return t.id===e}))}))}var K,Z=function(){var e=Object(u.useState)(0),t=Object(_.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(0),s=Object(_.a)(a,2),r=s[0],o=s[1],l=Object(u.useState)(0),d=Object(_.a)(l,2),j=d[0],b=d[1];return Object(u.useEffect)((function(){W().then((function(e){return n(e.length)})),X().then((function(e){return o(e.length)})),z().then((function(e){return b(e.length)}))}),[]),Object(i.jsxs)("div",{className:"CategoryList",children:[Object(i.jsx)("h2",{className:"CategoryList__title",children:"Shop by category"}),Object(i.jsxs)("div",{className:"CategoryList__links","data-cy":"categoryLinksContainer",children:[Object(i.jsx)(V,{type:"phones",amount:c}),Object(i.jsx)(V,{type:"tablets",amount:r}),Object(i.jsx)(V,{type:"accessories",amount:j})]})]})};!function(e){e.PREV="prev",e.NEXT="next"}(K||(K={}));c(33);var $=function(e){var t=e.direction,c=e.handleClick,n=e.disabled,a=void 0!==n&&n;return Object(i.jsx)("button",{type:"button",className:"SliderButton SliderButton--".concat(t),onClick:function(){c(t)},disabled:a,children:" "})},ee=(c(66),function(e){return Object(i.jsx)("ul",{className:"FeatureList",children:Object.keys(e).map((function(t){return Object(i.jsxs)("li",{className:"FeatureList__item",children:[Object(i.jsx)("span",{className:"FeatureList__feature-name",children:v(t)}),Object(i.jsx)("span",{className:"FeatureList__value",children:e[t]||"Not specified"})]},t)}))})}),te=(c(67),function(e){var t=e.product,c=Object(u.useContext)(k),n=c.cartItems,a=c.changeCartItems,s=n.length>0&&n.find((function(e){return e.id===t.id})),r=Object(u.useContext)(S),o=r.favourites,l=r.changeFavItems,d=o.length>0&&o.find((function(e){return e.id===t.id}));return Object(i.jsxs)("div",{className:"ProductActions",children:[Object(i.jsx)("button",{type:"button",className:j()("ProductActions__cart-button",{"ProductActions__cart-button--in-cart ":s}),onClick:function(){a(t)},children:"".concat(s?"Added":"Add"," to cart")}),Object(i.jsx)("button",{type:"button","data-cy":"addToFavorite",className:j()("ProductActions__fav-button",{"ProductActions__fav-button--in-favs":d}),onClick:function(){l(t)},children:" "})]})}),ce=(c(68),function(e){var t=e.product,c=t.imageUrl,n=t.name,a=t.price,r=t.discount,o=t.id,u=t.type,l=t.screen,d=t.capacity,j=t.ram,b=C({type:u,id:o}),h=p(a,r);return Object(i.jsxs)("div",{className:"ProductCard",children:[Object(i.jsx)("div",{className:"ProductCard__img-container",children:Object(i.jsx)(s.b,{to:b,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(i.jsx)("img",{src:c,alt:n,className:"ProductCard__img"})})}),Object(i.jsx)(s.b,{to:b,className:"ProductCard__name",children:n}),Object(i.jsxs)("div",{className:"ProductCard__price",children:[String.fromCodePoint(36),h,0!==r&&Object(i.jsxs)("div",{className:"ProductCard__initial-price",children:[String.fromCodePoint(36),a]})]}),Object(i.jsx)("div",{className:"ProductCard__features",children:Object(i.jsx)(ee,{screen:l,capacity:d,ram:j})}),Object(i.jsx)("div",{className:"ProductCard__actions",children:Object(i.jsx)(te,{product:t})})]})}),ne=272,ae=16,se=4,re=function(e){var t=e.title,c=e.filter,n=e.sortBy,a=ne,s=ae,r=se;window.innerWidth<600?r=1:window.innerWidth<884?r=2:window.innerHeight<1120&&(r=3);var o=Object(u.useState)([]),l=Object(_.a)(o,2),d=l[0],j=l[1],b=Object(u.useState)(!0),h=Object(_.a)(b,2),m=h[0],O=h[1],x=Object(u.useState)(""),f=Object(_.a)(x,2),p=f[0],v=f[1],g=Object(u.useState)(r),P=Object(_.a)(g,2),y=P[0],C=P[1],S=d.length,k={transform:"translateX(".concat(-(y-r)*(a+s),"px)"),transition:"transform 0.5s"};Object(u.useEffect)((function(){J().then((function(e){var t=function(e,t,c){var n=[];switch(e){case"discount":n=c.filter((function(e){return e.discount>0}));break;case"no-discount":n=c.filter((function(e){return 0===e.discount}));break;case"random":n=function(e){for(var t,c=e.map((function(){return arguments.length<=1?void 0:arguments[1]})),n=[],a=0;a<8;a+=1){var s=(t=c.length-1,Math.floor(Math.random()*(t+1))),r=c.splice(s,1)[0];n.push(r)}return n.map((function(t){return e[t]}))}(c);break;default:n=c}return N(n,t)}(c,n,e);j(t),O(!1)})).catch((function(e){return v(e)}))}),[]);var w=function(e){var t;e===K.NEXT?(t=y+r)>S&&(t=S):(t=y-r)<r&&(t=r),C(t)};return Object(i.jsxs)("div",{className:"ProductsSlider",children:[Object(i.jsxs)("div",{className:"ProductsSlider__top",children:[Object(i.jsx)("h2",{className:"ProductsSlider__title",children:t}),Object(i.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(i.jsx)($,{direction:K.PREV,handleClick:w,disabled:y===r}),Object(i.jsx)($,{direction:K.NEXT,handleClick:w,disabled:y===S})]})]}),p&&Object(i.jsx)("span",{children:"Something went wrong"}),!m&&Object(i.jsx)("div",{className:"ProductsSlider__products-container",children:Object(i.jsx)("div",{className:"ProductsSlider__products","data-cy":"cardsContainer",children:d.map((function(e){return Object(i.jsx)("div",{style:k,children:Object(i.jsx)(ce,{product:e})},e.id)}))})})]})},ie=(c(69),function(){return Object(i.jsx)("div",{className:"HomePage",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"HomePage__content",children:[Object(i.jsx)("div",{className:"HomePage__section",children:Object(i.jsx)(U,{})}),Object(i.jsx)("div",{className:"HomePage__section",children:Object(i.jsx)(re,{title:"Hot prices",filter:"discount",sortBy:"discount"})}),Object(i.jsx)("div",{className:"HomePage__section",children:Object(i.jsx)(Z,{})}),Object(i.jsx)("div",{className:"HomePage__section",children:Object(i.jsx)(re,{title:"Brand new models",filter:"no-discount",sortBy:"age"})})]})})})}),oe=(c(70),function(){return Object(i.jsx)("div",{className:"Menu",id:"Menu",children:Object(i.jsx)("div",{className:"container container--with-min-height",children:Object(i.jsx)("div",{className:"Menu__content",children:Object(i.jsx)(O,{})})})})}),ue=(c(71),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),le=[{name:"Newest",value:"age"},{name:"Alphabetically",value:"name"},{name:"Cheapest",value:"price"}],de=[{name:"4",value:"4"},{name:"8",value:"8"},{name:"16",value:"16"},{name:"All",value:"all"}],je=function(e,t){var c=parseInt(e,10);return Number.isNaN(c)?t:c},be=function(e,t){var c=t.find((function(t){return t.value===e}));return c?c.name:""},he=c(84),me=(c(72),function(e){var t=e.title,c=e.selectedValue,n=e.options,a=e.setValue,s=e.isSmall,r=void 0!==s&&s,o=Object(u.useState)(!1),l=Object(_.a)(o,2),d=l[0],b=l[1],h=function(e){return function(){a(e.value),b(!1)}};return Object(i.jsxs)("div",{className:j()("Dropdown",{"Dropdown--small":r}),onBlur:function(){b(!1)},children:[Object(i.jsx)("span",{className:"Dropdown__title",children:t}),Object(i.jsx)("button",{type:"button",className:j()("Dropdown__button",{"Dropdown__button--selected":d}),onClick:function(){b(!d)},children:c}),Object(i.jsx)("div",{className:"Dropdown__options-container",children:Object(i.jsx)(he.a,{in:d,classNames:"Dropdown__options",timeout:300,unmountOnExit:!0,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},children:Object(i.jsx)("div",{className:"Dropdown__options",children:n.map((function(e){return Object(i.jsx)("button",{type:"button",className:"Dropdown__option",onMouseDown:h(e),children:e.name},e.name)}))})})})]})}),Oe=(c(73),function(e){var t=e.page,c=e.setPage,n=e.totalProducts,a=e.perPage,s=Math.ceil(n/a),r=Array.from({length:s},(function(e,t){return t+1}));return Object(i.jsxs)("div",{className:"Pagination","data-cy":"pagination",children:[Object(i.jsx)("button",{type:"button","data-cy":"paginationLeft",className:"Pagination__button Pagination__button--prev",onClick:function(){return c("".concat(t-1))},disabled:t<=1,children:" "}),r.map((function(e){return Object(i.jsx)("button",{type:"button",className:j()("Pagination__page-button",{"Pagination__page-button--active":e===t}),onClick:(n=e,function(){c("".concat(n))}),children:e},e);var n})),Object(i.jsx)("button",{type:"button","data-cy":"paginationRight",className:"Pagination__button Pagination__button--next",onClick:function(){return c("".concat(t+1))},disabled:t>=s,children:" "})]})}),_e=(c(74),function(){var e=Object(r.o)(),t=Object(r.m)(),c=t.search,n=t.pathname,a=new URLSearchParams(c);return Object(i.jsxs)("div",{className:"NoSearchResults",children:[Object(i.jsx)("h1",{className:"NoSearchResults__title",children:"Oops!"}),Object(i.jsx)("p",{className:"NoSearchResults__paragpraph",children:"Seems like we couldn't find any products matching your search."}),Object(i.jsx)("button",{type:"button",className:"NoSearchResults__button",onClick:function(){a.delete("query"),e({pathname:n,search:a.toString()})},children:"Reset your search"})]})}),xe=(c(75),function(e){var t,c,n=e.products,a=Object(r.o)(),s=Object(r.m)(),o=s.search,l=s.pathname,d=new URLSearchParams(o),j=d.get("query")||"",b=d.get("sort")||"",h=d.get("perPage")||"",m=d.get("page")||"",O=Object(u.useState)(j),x=Object(_.a)(O,2),f=x[0],p=x[1],v=Object(u.useState)(b),g=Object(_.a)(v,2),P=g[0],y=g[1],C=Object(u.useState)(h),S=Object(_.a)(C,2),k=S[0],w=S[1],D=Object(u.useState)(m),I=Object(_.a)(D,2),L=I[0],B=I[1],F=(t=k,c=n.length,je(t,"all"===t?c:8)),E=je(L,1),q=function(e,t){e?d.set(t,e):d.delete(t),a({pathname:l,search:d.toString()})},A=function(){B("1"),q("","page")},H=function(e,t){return function(c){e(c),q(c,t),"page"!==t&&"page"!==t&&A()}},R=Object(u.useRef)(!0);Object(u.useEffect)((function(){R.current?R.current=!1:(p(j),A())}),[j]);var T=function(e,t){if(!t)return e;var c=t.replace(/ /g,"").toUpperCase();return e.filter((function(e){return e.name.replace(/ /g,"").toUpperCase().includes(c)}))}(N(n,P),f),M=function(e,t,c){if(e.length/t<=1)return e;var n=t*(c-1),a=n+t-1;return e.filter((function(){var e=arguments.length<=1?void 0:arguments[1];return e>=n&&e<=a}))}(T,F,E),U=T.length/F<=1;return Object(i.jsxs)("div",{className:"ProductsList","data-cy":"productList",children:["favourites"!==l.split("/")[1]&&Object(i.jsxs)("div",{className:"ProductsList__dropdowns",children:[Object(i.jsx)(me,{title:"Sort by",selectedValue:be(P,le)||"Newest",options:le,setValue:H(y,"sort")}),Object(i.jsx)(me,{title:"Items on page",selectedValue:be(k,de)||"8",options:de,setValue:H(w,"perPage"),isSmall:!0})]}),0===T.length?Object(i.jsx)(_e,{}):Object(i.jsx)("div",{className:"ProductsList__products",children:M.map((function(e){return Object(i.jsx)(ce,{product:e},e.id)}))}),!U&&Object(i.jsx)("div",{className:"ProductsList__pagination",children:Object(i.jsx)(Oe,{page:E,setPage:H(B,"page"),totalProducts:T.length,perPage:F})})]})}),fe=(c(76),function(e){var t=e.category,c=void 0===t?"":t;return Object(i.jsxs)("div",{className:"NoResults",children:[Object(i.jsx)("h1",{className:"NoResults__title",children:"Oops!"}),Object(i.jsx)("p",{className:"NoResults__paragpraph",children:c?"Seems like we don't have any ".concat(c.toLowerCase()," right now."):"Seems like there are no products in this section right now."}),Object(i.jsx)(s.b,{to:"/",className:"NoResults__button",children:"Go to homepage"})]})}),pe=(c(77),function(e){var t=e.productName,c=void 0===t?"":t,n=Object(r.m)().pathname,a=v(g(n));return Object(i.jsxs)("div",{className:"Breadcrumbs","data-cy":"breadCrumbs",children:[Object(i.jsx)(s.b,{to:"/",className:"Breadcrumbs__link Breadcrumbs__link--home",children:" "}),Object(i.jsx)("div",{className:"Breadcrumbs__separator",children:" "}),c?Object(i.jsx)(s.b,{to:"/".concat(a),className:"Breadcrumbs__link",children:a}):Object(i.jsx)("p",{className:"Breadcrumbs__category",children:a}),c&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"Breadcrumbs__separator",children:" "}),Object(i.jsx)("p",{className:"Breadcrumbs__product-name",children:c})]})]})}),ve=(c(78),function(e){var t=e.category,c=e.fetchProducts,n=Object(u.useState)([]),a=Object(_.a)(n,2),s=a[0],r=a[1],o=Object(u.useState)(!0),l=Object(_.a)(o,2),d=l[0],j=l[1],b=Object(u.useState)(!1),h=Object(_.a)(b,2),m=h[0],O=h[1];return Object(u.useEffect)((function(){O(!1),c().then(r).catch((function(){return O(!0)})).finally((function(){return j(!1)}))}),[]),Object(i.jsx)("div",{className:"ProductsPage",children:Object(i.jsx)("div",{className:"container container--with-min-height ",children:Object(i.jsxs)("div",{className:"ProductsPage__content",children:[Object(i.jsx)("div",{className:"ProductsPage__section",children:Object(i.jsx)(pe,{})}),Object(i.jsxs)("div",{className:"ProductsPage__section",children:[Object(i.jsx)("h1",{className:"ProductsPage__title",children:t}),Object(i.jsx)("p",{className:"ProductsPage__amount",children:"".concat(s.length," model").concat(1!==s.length?"s":"")})]}),m?Object(i.jsx)("h2",{className:"ProductsPage__error-title",children:"Something went wrong"}):Object(i.jsxs)("div",{className:"ProductsPage__section",children:[d&&Object(i.jsx)(ue,{}),!d&&(0===s.length?Object(i.jsx)(fe,{category:t}):Object(i.jsx)(xe,{products:s}))]})]})})})}),ge=function(){return Object(i.jsx)(ve,{category:"Mobile Phones",fetchProducts:W})},Ne=(c(79),function(){var e=Object(r.o)();return Object(i.jsx)("button",{type:"button","data-cy":"backButton",className:"BackButton",onClick:function(){e(-1)},children:"Back"})}),Pe=(c(34),function(e){var t=e.directory;return Object(i.jsxs)("div",{className:"ProductNotFound",children:[Object(i.jsx)("h1",{className:"ProductNotFound__title",children:"Oops!"}),Object(i.jsx)("h2",{className:"ProductNotFound__paragpraph",children:"Sorry, but we couldn't find this product."}),Object(i.jsx)(s.b,{type:"button",to:"/".concat(t),className:"ProductNotFound__button",children:"Go back to ".concat(t)})]})}),ye=(c(35),function(e){var t=e.images,c=Object(u.useState)(1),n=Object(_.a)(c,2),a=n[0],s=n[1],r=Object(u.useState)(t[0]),o=Object(_.a)(r,2),l=o[0],d=o[1],b=t.length>5,h=b?Object(f.a)(t).slice(4*(a-1),4*a):t;Object(u.useEffect)((function(){d(t[0])}),[t[0]]);var m=function(e){return function(){return s(e)}},O=function(e){return function(){return d(e)}};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"ProductDetails__image-selection",children:[b&&2===a&&Object(i.jsx)("button",{type:"button",className:" ProductDetails__arrow-button ProductDetails__arrow-button--prev ProductDetails__image-button",onClick:m(1),children:" "}),h.map((function(e){var t=e===l;return Object(i.jsx)("button",{type:"button",className:j()("ProductDetails__image","ProductDetails__image-button",{"ProductDetails__image-button--selected":t}),style:{backgroundImage:"url(".concat(e,")")},onClick:O(e),children:" "},e)})),b&&1===a&&Object(i.jsx)("button",{type:"button",className:" ProductDetails__arrow-button ProductDetails__arrow-button--next ProductDetails__image-button",onClick:m(2),children:" "})]}),Object(i.jsx)("div",{className:"ProductDetails__image ProductDetails__selected-image",style:{backgroundImage:"url(".concat(l,")")},children:" "})]})}),Ce=function(e){var t=e.details,c=t.name,n=t.images,a=t.price,s=t.discount,r=t.screen,o=t.display,u=t.hardware,l=t.ram,d=t.description,j=t.connectivity,b=t.camera,h=p(a,s);return Object(i.jsxs)("div",{className:"ProductDetails",children:[Object(i.jsx)("h1",{className:"ProductDetails__title",children:c}),Object(i.jsxs)("div",{className:"ProductDetails__main-details",children:[Object(i.jsx)(ye,{images:n}),Object(i.jsxs)("div",{className:"ProductDetails__main-description",children:[Object(i.jsxs)("div",{className:"ProductDetails__price-section",children:[Object(i.jsx)("h2",{className:"ProductDetails__price",children:String.fromCodePoint(36)+h}),0!==s&&Object(i.jsx)("div",{className:"ProductDetails__initial-price",children:String.fromCodePoint(36)+a})]}),Object(i.jsx)("div",{className:"ProductDetails__actions",children:Object(i.jsx)(te,{product:t})}),Object(i.jsx)("div",{className:"ProductDetails__features",children:Object(i.jsx)(ee,{screen:r,resolution:o.screenResolution,processor:u.cpu,ram:l})})]})]}),Object(i.jsxs)("div",{className:"ProductDetails__additional-info",children:[Object(i.jsxs)("div",{className:"ProductDetails__about","data-cy":"productDescription",children:[Object(i.jsx)("h2",{className:"ProductDetails__subtitle",children:"About"}),Object(i.jsx)("p",{className:"ProductDetails__about-text",children:d})]}),Object(i.jsxs)("div",{className:"ProductDetails__tech-specs",children:[Object(i.jsx)("h2",{className:"ProductDetails__subtitle",children:"Tech specs"}),Object(i.jsx)(ee,{screen:r,resolution:o.screenResolution,processor:u.cpu,camera:b.primary,cell:j.cell,ram:l})]})]}),Object(i.jsx)("div",{className:"ProductDetails__suggestions",children:Object(i.jsx)(re,{title:"You may also like",sortBy:"age",filter:"random"},c)})]})},Se=function(){var e=Object(u.useState)(),t=Object(_.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(!0),s=Object(_.a)(a,2),o=s[0],l=s[1],d=Object(u.useState)(!1),j=Object(_.a)(d,2),b=j[0],h=j[1],m=Object(r.m)().pathname,O=Object(r.q)().productId,f=g(m);return Object(u.useEffect)((function(){(function(e){return Promise.all([Y(e),Q(e)]).then((function(e){var t=Object(_.a)(e,2),c=t[0],n=t[1];return Object(x.a)(Object(x.a)({},c),n)}))})(O||"").then(n).catch((function(){return h(!0)})).finally((function(){return l(!1)}))}),[O]),Object(i.jsx)("div",{className:"ProductDetailsPage",children:Object(i.jsx)("div",{className:"container container--with-min-height",children:Object(i.jsx)("div",{className:"ProductDetailsPage__content",children:b?Object(i.jsx)(Pe,{directory:f}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"ProductDetailsPage__breadcrumbs",children:Object(i.jsx)(pe,{productName:(null===c||void 0===c?void 0:c.name)||O})}),Object(i.jsx)("div",{className:"ProductDetailsPage__back-button",children:Object(i.jsx)(Ne,{})}),o&&Object(i.jsx)(ue,{}),c&&Object(i.jsx)(Ce,{details:c})]})})})})},ke=function(){return Object(i.jsx)(ve,{category:"Accessories",fetchProducts:z})},we=function(){return Object(i.jsx)(ve,{category:"Tablets",fetchProducts:X})},De=(c(80),function(){var e=Object(u.useContext)(S).favourites;return Object(i.jsx)("div",{className:"FavouritesPage",children:Object(i.jsx)("div",{className:"container container--with-min-height",children:Object(i.jsxs)("div",{className:"FavouritesPage__content",children:[Object(i.jsx)("div",{className:"FavouritesPage__breadcrumbs",children:Object(i.jsx)(pe,{})}),Object(i.jsx)("h1",{className:"FavouritesPage__title",children:"Favourites"}),Object(i.jsx)("p",{className:"FavouritesPage__amount",children:"".concat(e.length," model").concat(1!==e.length?"s":"")}),e.length?Object(i.jsx)(xe,{products:e}):Object(i.jsx)(fe,{})]})})})}),Ie=(c(36),function(e){var t=e.product,c=t.price,n=t.discount,a=t.imageUrl,r=t.quantity,o=t.name,l=t.type,d=t.id,j=c*((100-n)/100),b=Object(u.useContext)(k).changeCartItems,h=C({type:l,id:d}),m=function(e){return function(){switch(e){case"remove":b(Object(x.a)(Object(x.a)({},t),{},{quantity:r&&r-1}));break;case"add":b(Object(x.a)(Object(x.a)({},t),{},{quantity:r&&r+1}))}}};return Object(i.jsxs)("div",{className:"CartItem",children:[Object(i.jsxs)("div",{className:"CartItem__section",children:[Object(i.jsx)("button",{type:"button","data-cy":"cartDeleteButton",className:"CartItem__remove-button",onClick:function(){b(t)},children:" "}),Object(i.jsx)(s.b,{to:h,className:"CartItem__product-img",style:{backgroundImage:"url(".concat(a,")")}}),Object(i.jsx)(s.b,{to:h,className:"CartItem__product-name",children:o})]}),Object(i.jsxs)("div",{className:"CartItem__section",children:[Object(i.jsxs)("div",{className:"CartItem__quantity-section",children:[Object(i.jsx)("button",{type:"button",className:" CartItem__quantity-button CartItem__quantity-button--remove ",onClick:m("remove"),disabled:!r||r<=1,children:" "}),Object(i.jsx)("div",{className:"CartItem__quantity","data-cy":"productQauntity",children:r}),Object(i.jsx)("button",{type:"button",className:" CartItem__quantity-button CartItem__quantity-button--add ",onClick:m("add"),children:" "})]}),Object(i.jsxs)("span",{className:"CartItem__price",children:[String.fromCodePoint(36),j*(r||1)]})]})]})}),Le=function(){var e=Object(u.useContext)(k).cartItems,t=e.length?e.map((function(e){return p(e.price,e.discount)*(e.quantity||1)})).reduce((function(e,t){return e+t})):0,c=0;e.forEach((function(e){var t=e.quantity||1;c+=t}));var n=Object(u.useState)(""),a=Object(_.a)(n,2),s=a[0],r=a[1];return Object(i.jsx)("div",{className:"CartPage",children:Object(i.jsx)("div",{className:"container container--with-min-height",children:Object(i.jsxs)("div",{className:"CartPage__content",children:[Object(i.jsx)("div",{className:"CartPage__breadcrumbs",children:Object(i.jsx)(Ne,{})}),Object(i.jsx)("h1",{className:"CartPage__title",children:"Cart"}),Object(i.jsx)("div",{className:"CartPage__products-container",children:e.length?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"CartPage__products",children:e.map((function(e){return Object(i.jsx)(Ie,{product:e},e.id)}))}),Object(i.jsxs)("div",{className:"CartPage__checkout",children:[Object(i.jsx)("h2",{className:"CartPage__amount",children:String.fromCodePoint(36)+t}),Object(i.jsx)("p",{className:"CartPage__paragraph",children:"Total for ".concat(c," item").concat(1!==c?"s":"")}),Object(i.jsx)("button",{type:"button",className:"CartPage__button",onClick:function(){r("We are sorry, but this feature is not implemented yet.")},children:"Checkout"}),s&&Object(i.jsx)("p",{className:"CartPage__error-message",children:s})]})]}):Object(i.jsx)("h2",{className:"CartPage__title--error",children:"Cart is empty"})})]})})})},Be=(c(81),function(){return Object(i.jsx)("div",{className:"NotFoundPage",children:Object(i.jsx)("div",{className:"container container--with-min-height",children:Object(i.jsxs)("div",{className:"NotFoundPage__content",children:[Object(i.jsx)("h1",{className:"NotFoundPage__title",children:"Oops!"}),Object(i.jsx)("h2",{className:"NotFoundPage__subtitle",children:"404 - Page not found"}),Object(i.jsx)("p",{className:"NotFoundPage__paragpraph",children:"We can't seem to find the page you're looking for."}),Object(i.jsx)(s.b,{to:"/",className:"NotFoundPage__button",children:"Go to homepage"})]})})})}),Fe=function(){return Object(i.jsx)(r.d,{children:Object(i.jsxs)(r.b,{path:"/",element:Object(i.jsx)(H,{}),children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(ie,{})}),Object(i.jsxs)(r.b,{path:"phones",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(ge,{})}),Object(i.jsx)(r.b,{path:":productId",element:Object(i.jsx)(Se,{})})]}),Object(i.jsxs)(r.b,{path:"tablets",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(we,{})}),Object(i.jsx)(r.b,{path:":productId",element:Object(i.jsx)(Se,{})})]}),Object(i.jsxs)(r.b,{path:"accessories",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(ke,{})}),Object(i.jsx)(r.b,{path:":productId",element:Object(i.jsx)(Se,{})})]}),Object(i.jsx)(r.b,{path:"favourites",element:Object(i.jsx)(De,{})}),Object(i.jsx)(r.b,{path:"cart",element:Object(i.jsx)(Le,{})}),Object(i.jsx)(r.b,{path:"/menu",element:Object(i.jsx)(oe,{})}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(Be,{})})]})})};a.a.render(Object(i.jsx)(w,{children:Object(i.jsx)(s.a,{children:Object(i.jsx)(Fe,{})})}),document.getElementById("root"))}]),[[82,1,2]]]);
//# sourceMappingURL=main.b3b2c85d.chunk.js.map