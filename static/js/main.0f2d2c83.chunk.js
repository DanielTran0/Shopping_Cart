(this.webpackJsonpshopping_cart=this.webpackJsonpshopping_cart||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),r=c(21),n=c.n(r),i=c(5),j=c(8),d=c(9),o=c(2),l=c(0);var u=function(e){return Object(l.jsxs)("div",{className:"Nav",children:[Object(l.jsx)(d.b,{to:"/",children:Object(l.jsxs)("div",{className:"storeName",children:[Object(l.jsx)("i",{className:"fas fa-dice"}),Object(l.jsx)("p",{children:"Dice Roll"})]})}),Object(l.jsxs)("div",{className:"navRight",children:[Object(l.jsx)(d.b,{to:"/shop",children:"Shop"}),Object(l.jsxs)(d.b,{to:"/cart",children:[Object(l.jsx)("i",{className:"fas fa-shopping-bag fa-lg"}),Object(l.jsx)("span",{className:"cartNumber",children:e.cart.length?e.cart.length:null})]})]})]})};var b=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"homeTitle",children:[Object(l.jsx)("i",{className:"fas fa-dice fa-3x"}),Object(l.jsx)("h1",{children:"Dice Roll"})]}),Object(l.jsx)("p",{className:"slogan",children:"Random Products at Random Prices"}),Object(l.jsx)(d.b,{to:"/shop",children:Object(l.jsx)("button",{className:"homeButton",type:"text",children:"Shop Now"})}),Object(l.jsx)("p",{children:"Free Shipping on Orders Over $50"})]})})},m=c(18),O=c.n(m),h=c(23),p=function(){var e=Object(h.a)(O.a.mark((function e(t,c,a){var s,r,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"?apikey=lPsf7LyUUJYx",e.next=3,fetch("".concat(t).concat("?apikey=lPsf7LyUUJYx"));case 3:return s=e.sent,e.next=6,s.json();case 6:r=e.sent,n=r.data,"departments"===a?n=n.sort((function(e,t){return e.department_id>t.department_id?1:-1})):"items"===a&&(n=n.sort((function(e,t){return e.product_name>t.product_name?1:-1}))),c(n);case 10:case"end":return e.stop()}}),e)})));return function(t,c,a){return e.apply(this,arguments)}}(),x=function(e){for(var t=[],c=1;c<=5;c++)c<=e?t.push(Object(l.jsx)("i",{className:"fas fa-star"},c)):t.push(Object(l.jsx)("i",{className:"far fa-star"},c));return t},v=function(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})},f=function(e){localStorage.setItem("cartItems",JSON.stringify(e))};var N=function(e){return Object(l.jsx)("div",{className:"ItemsDisplay",children:e.items.map((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsxs)(d.b,{to:"/shop/".concat(e._id),children:[Object(l.jsx)("img",{src:e.product_image_md,alt:e.product_name}),Object(l.jsx)("p",{className:"displayName",children:e.product_name}),Object(l.jsx)("p",{children:v(e.product_price)}),Object(l.jsx)("div",{className:"itemDisplayRating",children:x(e.product_ratings)})]}),Object(l.jsx)("hr",{})]},e._id)}))})};var g=function(){var e="https://dummyproducts-api.herokuapp.com/api/v1/departments",t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1],n=Object(a.useState)([]),i=Object(j.a)(n,2),d=i[0],o=i[1];return Object(a.useEffect)((function(){p("".concat(e),r,"departments"),p("".concat(e,"/accessories"),o,"items")}),[]),Object(l.jsx)("div",{className:"Shop",children:Object(l.jsxs)("div",{className:"shopOverview",children:[Object(l.jsxs)("div",{className:"departments",children:[Object(l.jsx)("h2",{children:"Categories"}),s.map((function(t){return Object(l.jsx)("div",{className:"department",children:Object(l.jsx)("p",{onClick:function(){return p("".concat(e,"/").concat(t.department_id),o,"items")},children:t.department_name})},t.department_id)}))]}),Object(l.jsxs)("div",{className:"shopItems",children:[Object(l.jsx)("h1",{children:d[0]&&d[0].product_department}),Object(l.jsx)(N,{items:d})]})]})})},_=c(19);var y=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],r=c[1],n=Object(a.useState)(1),d=Object(j.a)(n,2),o=d[0],u=d[1],b=Object(a.useState)(),m=Object(j.a)(b,2),O=m[0],h=m[1];return Object(a.useEffect)((function(){p("https://dummyproducts-api.herokuapp.com/api/v1/products/".concat(e.match.params.id),r)}),[e.match.params.id]),Object(l.jsxs)("div",{className:"ItemPage",children:[Object(l.jsx)("img",{src:s.product_image_lg,alt:"item"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"itemPageRight",children:[Object(l.jsxs)("div",{className:"itemDetails",children:[Object(l.jsx)("h1",{children:s.product_name}),Object(l.jsx)("p",{children:s.product_department}),Object(l.jsxs)("div",{className:"itemPageRating",children:[" ",x(s.product_ratings)]}),Object(l.jsx)("p",{className:"itemPageDes",children:s.product_description})]}),Object(l.jsxs)("div",{className:"itemPageCart",children:[Object(l.jsxs)("p",{className:"itemPagePrice",children:["CAD ",v(s.product_price)]}),Object(l.jsxs)("p",{className:"itemPageStock",children:["Left in Stock: ",s.product_stock]}),Object(l.jsxs)("div",{className:"itemPageButtons",children:[Object(l.jsx)("input",{className:"itemPageQuantity",type:"number",min:"1",max:s.product_stock,value:o,onChange:function(e){var t=e.target,c=t.value,a=t.max,s=t.min;c<Number(s)||c>Number(a)?h("Outside of Stock Range"):(h(""),u(Number(c)))}}),Object(l.jsx)("button",{className:"itemPageAdd",type:"button",onClick:function(){if(null!==e.cart.cartItems){var t,c=e.cart.cartItems.map((function(e){return e.id===s._id?(t=!0,e.quantity+o>s.product_stock?(h("Max Stock Already in Cart"),Object(i.a)(Object(i.a)({},e),{},{quantity:s.product_stock})):(h("".concat(o," Added to Cart | ").concat(e.quantity+o," in Cart")),Object(i.a)(Object(i.a)({},e),{},{quantity:e.quantity+o}))):e}));e.cart.setCartItems(c),f(c),!0!==t&&(h("".concat(o," Added to Cart")),e.cart.setCartItems([].concat(Object(_.a)(e.cart.cartItems),[{id:s._id,quantity:o,data:s}])),f([].concat(Object(_.a)(e.cart.cartItems),[{id:s._id,quantity:o,data:s}])))}},children:"Add to Cart"}),Object(l.jsx)("p",{className:"itemPageError",children:O&&O})]})]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"reviews",children:[Object(l.jsx)("h2",{children:"Product Reviews"}),Object(l.jsx)("h3",{children:"Recent Reviews"}),Object(l.jsx)("div",{children:function(){if(void 0!==s.product_reviews)return s.product_reviews.map((function(e,t){return Object(l.jsxs)("div",{className:"singleReview",children:[Object(l.jsxs)("div",{className:"reviewHeader",children:[Object(l.jsx)("i",{className:"fas fa-user"}),Object(l.jsx)("p",{children:"Anonymous"})]}),Object(l.jsx)("div",{className:"reviewRating",children:x(e.review_rating)}),Object(l.jsx)("p",{children:e.review_details})]},t)}))}()})]})})]})]})};var S=function(e){var t=e.cart,c=t.cartItems,s=t.setCartItems,r=Object(a.useState)(),n=Object(j.a)(r,2),d=n[0],o=n[1],u=function(e){if(null!==c){var t=c.reduce((function(e,t){return e+t.quantity*t.data.product_price}),0),a=.13*t,s=t/100>=50||0===t?0:1500;return"sub"===e?v(t):"tax"===e?v(a):"ship"===e?1500===s?v(s):"Free":v(t+a+s)}};return Object(l.jsxs)("div",{className:"Cart",children:[Object(l.jsx)("h1",{children:"Cart"}),Object(l.jsxs)("div",{className:"cartOverview",children:[Object(l.jsx)("div",{className:"cartItems",children:function(){if(null!==c)return c.map((function(e){return Object(l.jsxs)("div",{className:"checkoutItem",children:[Object(l.jsx)("img",{src:e.data.product_image_sm,alt:e}),Object(l.jsx)("p",{children:e.data.product_name}),Object(l.jsx)("input",{className:"checkoutQuantity",type:"number",min:"1",max:e.data.product_stock,value:e.quantity,onChange:function(t){return function(e,t){if(null!==c){var a=t.target,r=a.value,n=a.max,j=a.min,d=[Number(r),Number(n),Number(j)];r=d[0],n=d[1],j=d[2],o("");var l=c.map((function(t){return t.id!==e||r>n||r<j?t:Object(i.a)(Object(i.a)({},t),{},{quantity:r})}));s(l),f(l)}}(e.id,t)}}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Single:"})," ",v(e.data.product_price)]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Total:"})," ",v(e.data.product_price*e.quantity)]}),Object(l.jsx)("div",{className:"checkoutRating",children:x(e.data.product_ratings)}),Object(l.jsx)("button",{type:"button",onClick:function(){return function(e){if(null!==c){var t=c.filter((function(t){return t.id!==e}));s(t),o(""),f(t)}}(e.id)},children:"Remove from Cart"}),Object(l.jsx)("hr",{})]},e.id)}))}()}),Object(l.jsxs)("div",{className:"total",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Subtotal:"})," ",u("sub")]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Tax (13%):"})," ",u("tax")]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Shipping:"})," ",u("ship")]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Total:"})," ",u()]}),Object(l.jsx)("button",{className:"checkOut",type:"button",onClick:function(){o("Thanks for Shopping!")},children:"Check Out"}),Object(l.jsx)("div",{className:"checkOutMessage",children:d&&d})]})]})]})};c(35);var k=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];s(e)}()}),[]),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(d.a,{children:[Object(l.jsx)(u,{cart:c}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(o.a,{exact:!0,path:"/shop",component:g}),Object(l.jsx)(o.a,{path:"/shop/:id",render:function(e){return Object(l.jsx)(y,Object(i.a)(Object(i.a)({},e),{},{cart:{cartItems:c,setCartItems:s}}))}}),Object(l.jsx)(o.a,{exact:!0,path:"/cart",render:function(e){return Object(l.jsx)(S,Object(i.a)(Object(i.a)({},e),{},{cart:{cartItems:c,setCartItems:s}}))}})]})]})})};n.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.0f2d2c83.chunk.js.map