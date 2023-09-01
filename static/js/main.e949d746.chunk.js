(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(27).concat([function(t,e,c){},,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},,,,,,,,,function(t,e,c){},,,function(t,e,c){},,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(14),a=c.n(n),s=c(6),r=c(3),i=(c(45),c(0)),o=function(){return Object(i.jsx)(s.b,{to:"/",className:"Logo",children:Object(i.jsx)("img",{className:"Logo__img",src:"../Logo.svg",alt:"logo"})})},u=c(1),l=c.n(u),d=c(9),j=c.n(d),b=(c(27),function(t){var e=t.isActive;return j()("NavButton",{"NavButton--selected":e})}),h=function(t){var e=t.name,c=t.path;return Object(i.jsx)(s.c,{to:{pathname:c},className:b,children:e})},m=[{name:"HOME",path:"/"},{name:"PHONES",path:"/phones"},{name:"TABLETS",path:"/tablets"},{name:"ACCESSORIES",path:"/accessories"}],O=function(){return Object(i.jsx)("nav",{className:"Nav",children:m.map((function(t){return Object(i.jsx)(h,{name:t.name,path:t.path},t.path)}))})},_=c(4),x=c(10),f=c(8),p=function(t,e){return t*((100-e)/100)},v=function(t){return"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1).toLowerCase())},g=function(t){return t.split("/")[1]},N=function(t,e){switch(e){case"discount":return t.sort((function(t,e){var c=t.price*(t.discount/100);return e.price*(e.discount/100)-c}));case"age":return t.sort((function(t,e){return t.age-e.age}));case"name":return t.sort((function(t,e){return t.name.localeCompare(e.name)}));case"price":return t.sort((function(t,e){return t.price-t.price*(t.discount/100)-(e.price-e.price*(e.discount/100))}));default:return t}},P=function(t,e){var c=JSON.parse(localStorage.getItem(t)||"[]"),n=Object(u.useState)(0===c.length?e:c),a=Object(_.a)(n,2);return[a[0],a[1]]},y=function(t,e,c){return function(n){var a,s=Object(f.a)(e),r=e.find((function(t){return t.id===n.id})),i=r?e.indexOf(r):-1,o=(null===r||void 0===r?void 0:r.quantity)!==n.quantity&&(null===n||void 0===n?void 0:n.quantity);if(o&&i>=0&&(s[i].quantity=n.quantity),r)a=s.filter((function(t){return!!o||t.id!==n.id}));else{var u="cart"===t?Object(x.a)(Object(x.a)({},n),{},{quantity:1}):Object(x.a)({},n);a=[].concat(Object(f.a)(e),[u])}c(a),localStorage.setItem(t,JSON.stringify(a))}},C=function(t){var e,c=t.type,n=t.id;switch(c){case"phone":e="phones";break;case"tablet":e="tablets";break;case"accessory":e="accessories";break;default:return"/"}return"/".concat(e,"/").concat(n)},S=l.a.createContext({favourites:[],changeFavItems:function(){}}),k=l.a.createContext({cartItems:[],changeCartItems:function(){}}),w=function(t){var e=t.children,c=P("cart",[]),n=Object(_.a)(c,2),a=n[0],s=n[1],r=P("favs",[]),o=Object(_.a)(r,2),u=o[0],l=o[1],d=y("cart",a,s),j=y("favs",u,l);return Object(i.jsx)(k.Provider,{value:{cartItems:a,changeCartItems:d},children:Object(i.jsx)(S.Provider,{value:{favourites:u,changeFavItems:j},children:e})})},D=(c(48),function(t){var e=t.type,c=function(t){switch(t){case"favs":return"/favourites";case"cart":return"/cart";default:return"/"}}(e),n=Object(u.useContext)(k).cartItems,a=Object(u.useContext)(S).favourites,r="cart"===e?n.length:a.length;return Object(i.jsx)("div",{className:"SavedProductsButton__container",children:Object(i.jsx)(s.c,{to:c,className:function(t){var c=t.isActive;return j()("SavedProductsButton","SavedProductsButton--".concat(e),{"SavedProductsButton--selected":c})},children:0!==r&&Object(i.jsx)("div",{className:"SavedProductsButton__amount",children:r},r)})})}),I=c(37),L=c.n(I),B=function(t){switch(t){case"/phones":case"/tablets":case"/accessories":case"/favourites":return"Search in ".concat(t.slice(1),"...");default:return"Search..."}},F=(c(59),function(){var t=Object(r.m)(),e=t.search,c=t.pathname,n=Object(r.o)(),a=new URLSearchParams(e),s=a.get("query")||"",o=Object(u.useState)(s),l=Object(_.a)(o,2),d=l[0],b=l[1],h=Object(u.useCallback)(L()((function(t,e,c){t?c.set("query",t):c.delete("query"),n({pathname:e,search:c.toString()})}),500),[]);Object(u.useEffect)((function(){""===s&&""!==d&&b("")}),[s]);var m=""!==d;return Object(i.jsxs)("div",{className:"SearchBar",children:[Object(i.jsx)("input",{type:"text",placeholder:B(c),value:d,className:j()("SearchBar__input",{"SearchBar__input--has-text":m}),onChange:function(t){var e=t.target.value.trimStart();e.length>=10||(b(e),h(e,c,a))}}),m&&Object(i.jsx)("button",{type:"button","data-cy":"searchDelete",className:"SearchBar__clear-button",onClick:function(){b(""),h("",c,a)},children:" "})]})}),E=(c(60),function(){var t=Object(r.m)().pathname,e=t.split("/").filter((function(t){return""!==t})).length,c="/"!==t&&"/cart"!==t&&1===e;return Object(i.jsx)("header",{className:"Header",children:Object(i.jsxs)("div",{className:"Header__content",children:[Object(i.jsxs)("div",{className:"Header__left-side",children:[Object(i.jsx)("div",{className:"Header__logo-container",children:Object(i.jsx)(o,{})}),Object(i.jsx)(O,{})]}),Object(i.jsxs)("div",{className:"Header__right-side",children:[c&&Object(i.jsx)(F,{}),Object(i.jsx)(D,{type:"favs"}),Object(i.jsx)(D,{type:"cart"})]})]})})}),q=(c(61),function(t){var e=t.linkTo;return Object(i.jsx)(s.b,{to:"https://github.com/kbekher",target:"_blank",className:"FooterLink",children:e})}),R=function(){var t=Object(u.useState)(!1),e=Object(_.a)(t,2),c=e[0],n=e[1],a=Object(r.m)().pathname;function s(){n(document.body.scrollHeight>window.innerHeight)}Object(u.useEffect)((function(){return s(),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s),window.removeEventListener("scroll",s)}}),[]),Object(u.useEffect)((function(){n(document.body.scrollHeight>window.innerHeight)}),[a]),window.addEventListener("scroll",s);return Object(i.jsx)("footer",{className:"Footer",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"Footer__content",children:[Object(i.jsx)("div",{className:"Footer__logo",children:Object(i.jsx)(o,{})}),Object(i.jsxs)("div",{className:"Footer__links",children:[Object(i.jsx)(q,{linkTo:"Github"}),Object(i.jsx)(q,{linkTo:"Contacts"}),Object(i.jsx)(q,{linkTo:"Rights"})]}),Object(i.jsx)("div",{className:"Footer__back-to-top back-to-top",children:c&&Object(i.jsxs)("label",{className:"back-to-top__label",htmlFor:"back-to-top__button",children:[Object(i.jsx)("span",{className:"back-to-top__text",children:"Back to top"}),Object(i.jsx)("button",{type:"button",className:"back-to-top__button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:" "})]})})]})})})},A=(c(62),function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(E,{}),Object(i.jsx)("main",{children:Object(i.jsx)(r.a,{})}),Object(i.jsx)(R,{})]})}),H=c(38),T=(c(64),c(65),["phones","tablets","accessories"]),U={prevArrow:Object(i.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--prev",children:" "}),nextArrow:Object(i.jsx)("button",{type:"button",className:"Carousel__button Carousel__button--next",children:" "})},V=function(){return Object(i.jsx)("div",{className:"Carousel",children:Object(i.jsxs)(H.a,Object(x.a)(Object(x.a)({},U),{},{indicators:!0,children:[Object(i.jsx)("div",{className:"each-slide-effect",children:Object(i.jsx)("div",{className:"Carousel__slide Carousel__slide--".concat(T[0])})}),Object(i.jsx)("div",{className:"each-slide-effect",children:Object(i.jsx)("div",{className:"Carousel__slide Carousel__slide--".concat(T[1])})}),Object(i.jsx)("div",{className:"each-slide-effect",children:Object(i.jsx)("div",{className:"Carousel__slide Carousel__slide--".concat(T[2])})})]}))})},M=(c(32),function(t){var e=t.type,c=t.amount,n="/".concat(e),a=v(e);return Object(i.jsxs)("div",{className:"CategoryLink",children:[Object(i.jsx)(s.c,{to:n,className:"CategoryLink__img CategoryLink__img--".concat(e),children:" "}),Object(i.jsx)(s.c,{to:n,className:"CategoryLink__title",children:a}),Object(i.jsx)("p",{className:"CategoryLink__amount",children:"".concat(c," model").concat(1!==c?"s":"")})]})}),G="https://mate-academy.github.io/react_phone-catalog/api";function J(){var t="".concat(G,"/products.json");return fetch(t).then((function(t){if(!t.ok)throw new Error("".concat(t.status," ").concat(t.statusText));return t.json()}))}function X(){return J().then((function(t){return t.filter((function(t){return"phone"===t.type}))}))}function z(){return J().then((function(t){return t.filter((function(t){return"tablet"===t.type}))}))}function W(){return J().then((function(t){return t.filter((function(t){return"accessory"===t.type}))}))}var Q=function(t){var e="".concat(G,"/products/").concat(t,".json");return fetch(e).then((function(t){if(t.ok)return t.json();throw new Error(t.statusText)}))};function Y(t){return J().then((function(e){return e.find((function(e){return e.id===t}))}))}var K,Z=function(){var t=Object(u.useState)(0),e=Object(_.a)(t,2),c=e[0],n=e[1],a=Object(u.useState)(0),s=Object(_.a)(a,2),r=s[0],o=s[1],l=Object(u.useState)(0),d=Object(_.a)(l,2),j=d[0],b=d[1];return Object(u.useEffect)((function(){X().then((function(t){return n(t.length)})),z().then((function(t){return o(t.length)})),W().then((function(t){return b(t.length)}))}),[]),Object(i.jsxs)("div",{className:"CategoryList",children:[Object(i.jsx)("h2",{className:"CategoryList__title",children:"Shop by category"}),Object(i.jsxs)("div",{className:"CategoryList__links","data-cy":"categoryLinksContainer",children:[Object(i.jsx)(M,{type:"phones",amount:c}),Object(i.jsx)(M,{type:"tablets",amount:r}),Object(i.jsx)(M,{type:"accessories",amount:j})]})]})};!function(t){t.PREV="prev",t.NEXT="next"}(K||(K={}));c(33);var $=function(t){var e=t.direction,c=t.handleClick,n=t.disabled,a=void 0!==n&&n;return Object(i.jsx)("button",{type:"button",className:"SliderButton SliderButton--".concat(e),onClick:function(){c(e)},disabled:a,children:" "})},tt=(c(66),function(t){return Object(i.jsx)("ul",{className:"FeatureList",children:Object.keys(t).map((function(e){return Object(i.jsxs)("li",{className:"FeatureList__item",children:[Object(i.jsx)("span",{className:"FeatureList__feature-name",children:v(e)}),Object(i.jsx)("span",{className:"FeatureList__value",children:t[e]||"Not specified"})]},e)}))})}),et=(c(67),function(t){var e=t.product,c=Object(u.useContext)(k),n=c.cartItems,a=c.changeCartItems,s=n.length>0&&n.find((function(t){return t.id===e.id})),r=Object(u.useContext)(S),o=r.favourites,l=r.changeFavItems,d=o.length>0&&o.find((function(t){return t.id===e.id}));return Object(i.jsxs)("div",{className:"ProductActions",children:[Object(i.jsx)("button",{type:"button",className:j()("ProductActions__cart-button",{"ProductActions__cart-button--in-cart ":s}),onClick:function(){a(e)},children:"".concat(s?"Added":"Add"," to cart")}),Object(i.jsx)("button",{type:"button","data-cy":"addToFavorite",className:j()("ProductActions__fav-button",{"ProductActions__fav-button--in-favs":d}),onClick:function(){l(e)},children:" "})]})}),ct=(c(68),function(t){var e=t.product,c=t.isRandom,n=void 0!==c&&c,a=e.imageUrl,r=e.name,o=e.price,u=e.discount,l=e.id,d=e.type,j=e.screen,b=e.capacity,h=e.ram,m=C({type:d,id:l}),O=p(o,u);return Object(i.jsxs)("div",{className:"ProductCard",children:[Object(i.jsx)("div",{className:"ProductCard__img-container",children:Object(i.jsx)(s.b,{to:m,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(i.jsx)("img",{src:n?"../".concat(a):a,alt:r,className:"ProductCard__img"})})}),Object(i.jsx)(s.b,{to:m,className:"ProductCard__name",children:r}),Object(i.jsxs)("div",{className:"ProductCard__price",children:[String.fromCodePoint(36),O,0!==u&&Object(i.jsxs)("div",{className:"ProductCard__initial-price",children:[String.fromCodePoint(36),o]})]}),Object(i.jsx)("div",{className:"ProductCard__features",children:Object(i.jsx)(tt,{screen:j,capacity:b,ram:h})}),Object(i.jsx)("div",{className:"ProductCard__actions",children:Object(i.jsx)(et,{product:e})})]})}),nt=272,at=16,st=4,rt=function(t){var e=t.title,c=t.filter,n=t.sortBy,a=nt,s=at,r=st,o=Object(u.useState)([]),l=Object(_.a)(o,2),d=l[0],j=l[1],b=Object(u.useState)(!0),h=Object(_.a)(b,2),m=h[0],O=h[1],x=Object(u.useState)(""),f=Object(_.a)(x,2),p=f[0],v=f[1],g="random"===c,P=Object(u.useState)(r),y=Object(_.a)(P,2),C=y[0],S=y[1],k=d.length,w={transform:"translateX(".concat(-(C-r)*(a+s),"px)"),transition:"transform 0.5s"};Object(u.useEffect)((function(){J().then((function(t){var e=function(t,e,c){var n=[];switch(t){case"discount":n=c.filter((function(t){return t.discount>0}));break;case"no-discount":n=c.filter((function(t){return 0===t.discount}));break;case"random":n=function(t){for(var e,c=t.map((function(){return arguments.length<=1?void 0:arguments[1]})),n=[],a=0;a<8;a+=1){var s=(e=c.length-1,Math.floor(Math.random()*(e+1))),r=c.splice(s,1)[0];n.push(r)}return n.map((function(e){return t[e]}))}(c);break;default:n=c}return N(n,e)}(c,n,t);j(e),O(!1)})).catch((function(t){return v(t)}))}),[]);var D=function(t){var e;t===K.NEXT?(e=C+r)>k&&(e=k):(e=C-r)<r&&(e=r),S(e)};return Object(i.jsxs)("div",{className:"ProductsSlider",children:[Object(i.jsxs)("div",{className:"ProductsSlider__top",children:[Object(i.jsx)("h2",{className:"ProductsSlider__title",children:e}),Object(i.jsxs)("div",{className:"ProductsSlider__buttons",children:[Object(i.jsx)($,{direction:K.PREV,handleClick:D,disabled:C===r}),Object(i.jsx)($,{direction:K.NEXT,handleClick:D,disabled:C===k})]})]}),p&&Object(i.jsx)("span",{children:"Something went wrong"}),!m&&Object(i.jsx)("div",{className:"ProductsSlider__products-container",children:Object(i.jsx)("div",{className:"ProductsSlider__products","data-cy":"cardsContainer",children:d.map((function(t){return Object(i.jsx)("div",{style:w,children:Object(i.jsx)(ct,{product:t,isRandom:g})},t.id)}))})})]})},it=(c(69),function(){return Object(i.jsx)("div",{className:"HomePage",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"HomePage__content",children:[Object(i.jsx)("div",{className:"HomePage__section",children:Object(i.jsx)(V,{})}),Object(i.jsx)("div",{className:"HomePage__section",children:Object(i.jsx)(rt,{title:"Hot prices",filter:"discount",sortBy:"discount"})}),Object(i.jsx)("div",{className:"HomePage__section",children:Object(i.jsx)(Z,{})}),Object(i.jsx)("div",{className:"HomePage__section",children:Object(i.jsx)(rt,{title:"Brand new models",filter:"no-discount",sortBy:"age"})})]})})})}),ot=(c(70),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),ut=[{name:"Newest",value:"age"},{name:"Alphabetically",value:"name"},{name:"Cheapest",value:"price"}],lt=[{name:"4",value:"4"},{name:"8",value:"8"},{name:"16",value:"16"},{name:"All",value:"all"}],dt=function(t,e){var c=parseInt(t,10);return Number.isNaN(c)?e:c},jt=function(t,e){var c=e.find((function(e){return e.value===t}));return c?c.name:""},bt=c(83),ht=(c(71),function(t){var e=t.title,c=t.selectedValue,n=t.options,a=t.setValue,s=t.isSmall,r=void 0!==s&&s,o=Object(u.useState)(!1),l=Object(_.a)(o,2),d=l[0],b=l[1],h=function(t){return function(){a(t.value),b(!1)}};return Object(i.jsxs)("div",{className:j()("Dropdown",{"Dropdown--small":r}),onBlur:function(){b(!1)},children:[Object(i.jsx)("span",{className:"Dropdown__title",children:e}),Object(i.jsx)("button",{type:"button",className:j()("Dropdown__button",{"Dropdown__button--selected":d}),onClick:function(){b(!d)},children:c}),Object(i.jsx)("div",{className:"Dropdown__options-container",children:Object(i.jsx)(bt.a,{in:d,classNames:"Dropdown__options",timeout:300,unmountOnExit:!0,addEndListener:function(t,e){t.addEventListener("transitionend",e,!1)},children:Object(i.jsx)("div",{className:"Dropdown__options",children:n.map((function(t){return Object(i.jsx)("button",{type:"button",className:"Dropdown__option",onMouseDown:h(t),children:t.name},t.name)}))})})})]})}),mt=(c(72),function(t){var e=t.page,c=t.setPage,n=t.totalProducts,a=t.perPage,s=Math.ceil(n/a),r=Array.from({length:s},(function(t,e){return e+1}));return Object(i.jsxs)("div",{className:"Pagination","data-cy":"pagination",children:[Object(i.jsx)("button",{type:"button","data-cy":"paginationLeft",className:"Pagination__button Pagination__button--prev",onClick:function(){return c("".concat(e-1))},disabled:e<=1,children:" "}),r.map((function(t){return Object(i.jsx)("button",{type:"button",className:j()("Pagination__page-button",{"Pagination__page-button--active":t===e}),onClick:(n=t,function(){c("".concat(n))}),children:t},t);var n})),Object(i.jsx)("button",{type:"button","data-cy":"paginationRight",className:"Pagination__button Pagination__button--next",onClick:function(){return c("".concat(e+1))},disabled:e>=s,children:" "})]})}),Ot=(c(73),function(){var t=Object(r.o)(),e=Object(r.m)(),c=e.search,n=e.pathname,a=new URLSearchParams(c);return Object(i.jsxs)("div",{className:"NoSearchResults",children:[Object(i.jsx)("h1",{className:"NoSearchResults__title",children:"Oops!"}),Object(i.jsx)("p",{className:"NoSearchResults__paragpraph",children:"Seems like we couldn't find any products matching your search."}),Object(i.jsx)("button",{type:"button",className:"NoSearchResults__button",onClick:function(){a.delete("query"),t({pathname:n,search:a.toString()})},children:"Reset your search"})]})}),_t=(c(74),function(t){var e,c,n=t.products,a=Object(r.o)(),s=Object(r.m)(),o=s.search,l=s.pathname,d=new URLSearchParams(o),j=d.get("query")||"",b=d.get("sort")||"",h=d.get("perPage")||"",m=d.get("page")||"",O=Object(u.useState)(j),x=Object(_.a)(O,2),f=x[0],p=x[1],v=Object(u.useState)(b),g=Object(_.a)(v,2),P=g[0],y=g[1],C=Object(u.useState)(h),S=Object(_.a)(C,2),k=S[0],w=S[1],D=Object(u.useState)(m),I=Object(_.a)(D,2),L=I[0],B=I[1],F=(e=k,c=n.length,dt(e,"all"===e?c:8)),E=dt(L,1),q=function(t,e){t?d.set(e,t):d.delete(e),a({pathname:l,search:d.toString()})},R=function(){B("1"),q("","page")},A=function(t,e){return function(c){t(c),q(c,e),"page"!==e&&"page"!==e&&R()}},H=Object(u.useRef)(!0);Object(u.useEffect)((function(){H.current?H.current=!1:(p(j),R())}),[j]);var T=function(t,e){if(!e)return t;var c=e.replace(/ /g,"").toUpperCase();return t.filter((function(t){return t.name.replace(/ /g,"").toUpperCase().includes(c)}))}(N(n,P),f),U=function(t,e,c){if(t.length/e<=1)return t;var n=e*(c-1),a=n+e-1;return t.filter((function(){var t=arguments.length<=1?void 0:arguments[1];return t>=n&&t<=a}))}(T,F,E),V=T.length/F<=1;return Object(i.jsxs)("div",{className:"ProductsList","data-cy":"productList",children:["favourites"!==l.split("/")[1]&&Object(i.jsxs)("div",{className:"ProductsList__dropdowns",children:[Object(i.jsx)(ht,{title:"Sort by",selectedValue:jt(P,ut)||"Newest",options:ut,setValue:A(y,"sort")}),Object(i.jsx)(ht,{title:"Items on page",selectedValue:jt(k,lt)||"8",options:lt,setValue:A(w,"perPage"),isSmall:!0})]}),0===T.length?Object(i.jsx)(Ot,{}):Object(i.jsx)("div",{className:"ProductsList__products",children:U.map((function(t){return Object(i.jsx)(ct,{product:t},t.id)}))}),!V&&Object(i.jsx)("div",{className:"ProductsList__pagination",children:Object(i.jsx)(mt,{page:E,setPage:A(B,"page"),totalProducts:T.length,perPage:F})})]})}),xt=(c(75),function(t){var e=t.category,c=void 0===e?"":e;return Object(i.jsxs)("div",{className:"NoResults",children:[Object(i.jsx)("h1",{className:"NoResults__title",children:"Oops!"}),Object(i.jsx)("p",{className:"NoResults__paragpraph",children:c?"Seems like we don't have any ".concat(c.toLowerCase()," right now."):"Seems like there are no products in this section right now."}),Object(i.jsx)(s.b,{to:"/",className:"NoResults__button",children:"Go to homepage"})]})}),ft=(c(76),function(t){var e=t.productName,c=void 0===e?"":e,n=Object(r.m)().pathname,a=v(g(n));return Object(i.jsxs)("div",{className:"Breadcrumbs","data-cy":"breadCrumbs",children:[Object(i.jsx)(s.b,{to:"/",className:"Breadcrumbs__link Breadcrumbs__link--home",children:" "}),Object(i.jsx)("div",{className:"Breadcrumbs__separator",children:" "}),c?Object(i.jsx)(s.b,{to:"/".concat(a),className:"Breadcrumbs__link",children:a}):Object(i.jsx)("p",{className:"Breadcrumbs__category",children:a}),c&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"Breadcrumbs__separator",children:" "}),Object(i.jsx)("p",{className:"Breadcrumbs__product-name",children:c})]})]})}),pt=(c(77),function(t){var e=t.category,c=t.fetchProducts,n=Object(u.useState)([]),a=Object(_.a)(n,2),s=a[0],r=a[1],o=Object(u.useState)(!0),l=Object(_.a)(o,2),d=l[0],j=l[1],b=Object(u.useState)(!1),h=Object(_.a)(b,2),m=h[0],O=h[1];return Object(u.useEffect)((function(){O(!1),c().then(r).catch((function(){return O(!0)})).finally((function(){return j(!1)}))}),[]),Object(i.jsx)("div",{className:"ProductsPage",children:Object(i.jsx)("div",{className:"container container--with-min-height ",children:Object(i.jsxs)("div",{className:"ProductsPage__content",children:[Object(i.jsx)("div",{className:"ProductsPage__section",children:Object(i.jsx)(ft,{})}),Object(i.jsxs)("div",{className:"ProductsPage__section",children:[Object(i.jsx)("h1",{className:"ProductsPage__title",children:e}),Object(i.jsx)("p",{className:"ProductsPage__amount",children:"".concat(s.length," model").concat(1!==s.length?"s":"")})]}),m?Object(i.jsx)("h2",{className:"ProductsPage__error-title",children:"Something went wrong"}):Object(i.jsxs)("div",{className:"ProductsPage__section",children:[d&&Object(i.jsx)(ot,{}),!d&&(0===s.length?Object(i.jsx)(xt,{category:e}):Object(i.jsx)(_t,{products:s}))]})]})})})}),vt=function(){return Object(i.jsx)(pt,{category:"Mobile Phones",fetchProducts:X})},gt=(c(78),function(){var t=Object(r.o)();return Object(i.jsx)("button",{type:"button","data-cy":"backButton",className:"BackButton",onClick:function(){t(-1)},children:"Back"})}),Nt=(c(34),function(t){var e=t.directory;return Object(i.jsxs)("div",{className:"ProductNotFound",children:[Object(i.jsx)("h1",{className:"ProductNotFound__title",children:"Oops!"}),Object(i.jsx)("h2",{className:"ProductNotFound__paragpraph",children:"Sorry, but we couldn't find this product."}),Object(i.jsx)(s.b,{type:"button",to:"/".concat(e),className:"ProductNotFound__button",children:"Go back to ".concat(e)})]})}),Pt=(c(35),function(t){var e=t.images,c=Object(u.useState)(1),n=Object(_.a)(c,2),a=n[0],s=n[1],r=Object(u.useState)(e[0]),o=Object(_.a)(r,2),l=o[0],d=o[1],b=e.length>5,h=b?Object(f.a)(e).slice(4*(a-1),4*a):e;Object(u.useEffect)((function(){d(e[0])}),[e[0]]);var m=function(t){return function(){return s(t)}},O=function(t){return function(){return d(t)}};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"ProductDetails__image-selection",children:[b&&2===a&&Object(i.jsx)("button",{type:"button",className:" ProductDetails__arrow-button ProductDetails__arrow-button--prev ProductDetails__image-button",onClick:m(1)}),h.map((function(t){var e=t===l;return Object(i.jsx)("button",{type:"button",className:j()("ProductDetails__image","ProductDetails__image-button",{"ProductDetails__image-button--selected":e}),style:{backgroundImage:"url(../".concat(t,")")},onClick:O(t)})})),b&&1===a&&Object(i.jsx)("button",{type:"button",className:" ProductDetails__arrow-button ProductDetails__arrow-button--next ProductDetails__image-button",onClick:m(2),children:" "})]}),Object(i.jsx)("div",{className:"ProductDetails__image ProductDetails__selected-image",style:{backgroundImage:"url(../".concat(l,")")},children:" "})]})}),yt=function(t){var e=t.details,c=e.name,n=e.images,a=e.price,s=e.discount,r=e.screen,o=e.display,u=e.hardware,l=e.ram,d=e.description,j=e.connectivity,b=e.camera,h=p(a,s);return Object(i.jsxs)("div",{className:"ProductDetails",children:[Object(i.jsx)("h1",{className:"ProductDetails__title",children:c}),Object(i.jsxs)("div",{className:"ProductDetails__main-details",children:[Object(i.jsx)(Pt,{images:n}),Object(i.jsxs)("div",{className:"ProductDetails__main-description",children:[Object(i.jsxs)("div",{className:"ProductDetails__price-section",children:[Object(i.jsx)("h2",{className:"ProductDetails__price",children:String.fromCodePoint(36)+h}),0!==s&&Object(i.jsx)("div",{className:"ProductDetails__initial-price",children:String.fromCodePoint(36)+a})]}),Object(i.jsx)("div",{className:"ProductDetails__actions",children:Object(i.jsx)(et,{product:e})}),Object(i.jsx)("div",{className:"ProductDetails__features",children:Object(i.jsx)(tt,{screen:r,resolution:o.screenResolution,processor:u.cpu,ram:l})})]})]}),Object(i.jsxs)("div",{className:"ProductDetails__additional-info",children:[Object(i.jsxs)("div",{className:"ProductDetails__about","data-cy":"productDescription",children:[Object(i.jsx)("h2",{className:"ProductDetails__subtitle",children:"About"}),Object(i.jsx)("p",{className:"ProductDetails__about-text",children:d})]}),Object(i.jsxs)("div",{className:"ProductDetails__tech-specs",children:[Object(i.jsx)("h2",{className:"ProductDetails__subtitle",children:"Tech specs"}),Object(i.jsx)(tt,{screen:r,resolution:o.screenResolution,processor:u.cpu,camera:b.primary,cell:j.cell,ram:l})]})]}),Object(i.jsx)("div",{className:"ProductDetails__suggestions",children:Object(i.jsx)(rt,{title:"You may also like",sortBy:"age",filter:"random"},c)})]})},Ct=function(){var t=Object(u.useState)(),e=Object(_.a)(t,2),c=e[0],n=e[1],a=Object(u.useState)(!0),s=Object(_.a)(a,2),o=s[0],l=s[1],d=Object(u.useState)(!1),j=Object(_.a)(d,2),b=j[0],h=j[1],m=Object(r.m)().pathname,O=Object(r.q)().productId,f=g(m);return Object(u.useEffect)((function(){(function(t){return Promise.all([Y(t),Q(t)]).then((function(t){var e=Object(_.a)(t,2),c=e[0],n=e[1];return Object(x.a)(Object(x.a)({},c),n)}))})(O||"").then(n).catch((function(){return h(!0)})).finally((function(){return l(!1)}))}),[O]),Object(i.jsx)("div",{className:"ProductDetailsPage",children:Object(i.jsx)("div",{className:"container container--with-min-height",children:Object(i.jsx)("div",{className:"ProductDetailsPage__content",children:b?Object(i.jsx)(Nt,{directory:f}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"ProductDetailsPage__breadcrumbs",children:Object(i.jsx)(ft,{productName:(null===c||void 0===c?void 0:c.name)||O})}),Object(i.jsx)("div",{className:"ProductDetailsPage__back-button",children:Object(i.jsx)(gt,{})}),o&&Object(i.jsx)(ot,{}),c&&Object(i.jsx)(yt,{details:c})]})})})})},St=function(){return Object(i.jsx)(pt,{category:"Accessories",fetchProducts:W})},kt=function(){return Object(i.jsx)(pt,{category:"Tablets",fetchProducts:z})},wt=(c(79),function(){var t=Object(u.useContext)(S).favourites;return Object(i.jsx)("div",{className:"FavouritesPage",children:Object(i.jsx)("div",{className:"container container--with-min-height",children:Object(i.jsxs)("div",{className:"FavouritesPage__content",children:[Object(i.jsx)("div",{className:"FavouritesPage__breadcrumbs",children:Object(i.jsx)(ft,{})}),Object(i.jsx)("h1",{className:"FavouritesPage__title",children:"Favourites"}),Object(i.jsx)("p",{className:"FavouritesPage__amount",children:"".concat(t.length," model").concat(1!==t.length?"s":"")}),t.length?Object(i.jsx)(_t,{products:t}):Object(i.jsx)(xt,{})]})})})}),Dt=(c(36),function(t){var e=t.product,c=e.price,n=e.discount,a=e.imageUrl,r=e.quantity,o=e.name,l=e.type,d=e.id,j=c*((100-n)/100),b=Object(u.useContext)(k).changeCartItems,h=C({type:l,id:d}),m=function(t){return function(){switch(t){case"remove":b(Object(x.a)(Object(x.a)({},e),{},{quantity:r&&r-1}));break;case"add":b(Object(x.a)(Object(x.a)({},e),{},{quantity:r&&r+1}))}}};return Object(i.jsxs)("div",{className:"CartItem",children:[Object(i.jsxs)("div",{className:"CartItem__section",children:[Object(i.jsx)("button",{type:"button","data-cy":"cartDeleteButton",className:"CartItem__remove-button",onClick:function(){b(e)},children:" "}),Object(i.jsx)(s.b,{to:h,className:"CartItem__product-img",style:{backgroundImage:"url(".concat(a,")")}}),Object(i.jsx)(s.b,{to:h,className:"CartItem__product-name",children:o})]}),Object(i.jsxs)("div",{className:"CartItem__section",children:[Object(i.jsxs)("div",{className:"CartItem__quantity-section",children:[Object(i.jsx)("button",{type:"button",className:" CartItem__quantity-button CartItem__quantity-button--remove ",onClick:m("remove"),disabled:!r||r<=1,children:" "}),Object(i.jsx)("div",{className:"CartItem__quantity","data-cy":"productQauntity",children:r}),Object(i.jsx)("button",{type:"button",className:" CartItem__quantity-button CartItem__quantity-button--add ",onClick:m("add"),children:" "})]}),Object(i.jsxs)("span",{className:"CartItem__price",children:[String.fromCodePoint(36),j*(r||1)]})]})]})}),It=function(){var t=Object(u.useContext)(k).cartItems,e=t.length?t.map((function(t){return p(t.price,t.discount)*(t.quantity||1)})).reduce((function(t,e){return t+e})):0,c=0;t.forEach((function(t){var e=t.quantity||1;c+=e}));var n=Object(u.useState)(""),a=Object(_.a)(n,2),s=a[0],r=a[1];return Object(i.jsx)("div",{className:"CartPage",children:Object(i.jsx)("div",{className:"container container--with-min-height",children:Object(i.jsxs)("div",{className:"CartPage__content",children:[Object(i.jsx)("div",{className:"CartPage__breadcrumbs",children:Object(i.jsx)(gt,{})}),Object(i.jsx)("h1",{className:"CartPage__title",children:"Cart"}),Object(i.jsx)("div",{className:"CartPage__products-container",children:t.length?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"CartPage__products",children:t.map((function(t){return Object(i.jsx)(Dt,{product:t},t.id)}))}),Object(i.jsxs)("div",{className:"CartPage__checkout",children:[Object(i.jsx)("h2",{className:"CartPage__amount",children:String.fromCodePoint(36)+e}),Object(i.jsx)("p",{className:"CartPage__paragraph",children:"Total for ".concat(c," item").concat(1!==c?"s":"")}),Object(i.jsx)("button",{type:"button",className:"CartPage__button",onClick:function(){r("We are sorry, but this feature is not implemented yet.")},children:"Checkout"}),s&&Object(i.jsx)("p",{className:"CartPage__error-message",children:s})]})]}):Object(i.jsx)("h2",{className:"CartPage__title--error",children:"Cart is empty"})})]})})})},Lt=(c(80),function(){return Object(i.jsx)("div",{className:"NotFoundPage",children:Object(i.jsx)("div",{className:"container container--with-min-height",children:Object(i.jsxs)("div",{className:"NotFoundPage__content",children:[Object(i.jsx)("h1",{className:"NotFoundPage__title",children:"Oops!"}),Object(i.jsx)("h2",{className:"NotFoundPage__subtitle",children:"404 - Page not found"}),Object(i.jsx)("p",{className:"NotFoundPage__paragpraph",children:"We can't seem to find the page you're looking for."}),Object(i.jsx)(s.b,{to:"/",className:"NotFoundPage__button",children:"Go to homepage"})]})})})}),Bt=function(){return Object(i.jsx)(r.d,{children:Object(i.jsxs)(r.b,{path:"/",element:Object(i.jsx)(A,{}),children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(it,{})}),Object(i.jsxs)(r.b,{path:"phones",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(vt,{})}),Object(i.jsx)(r.b,{path:":productId",element:Object(i.jsx)(Ct,{})})]}),Object(i.jsxs)(r.b,{path:"tablets",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(kt,{})}),Object(i.jsx)(r.b,{path:":productId",element:Object(i.jsx)(Ct,{})})]}),Object(i.jsxs)(r.b,{path:"accessories",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(St,{})}),Object(i.jsx)(r.b,{path:":productId",element:Object(i.jsx)(Ct,{})})]}),Object(i.jsx)(r.b,{path:"favourites",element:Object(i.jsx)(wt,{})}),Object(i.jsx)(r.b,{path:"cart",element:Object(i.jsx)(It,{})}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)(Lt,{})})]})})};a.a.render(Object(i.jsx)(w,{children:Object(i.jsx)(s.a,{children:Object(i.jsx)(Bt,{})})}),document.getElementById("root"))}]),[[81,1,2]]]);
//# sourceMappingURL=main.e949d746.chunk.js.map