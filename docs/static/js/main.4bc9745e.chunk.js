(this.webpackJsonpcrowdfund=this.webpackJsonpcrowdfund||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),o=n.n(s),i=(n(9),n(2)),l=(n(10),n(11),n(0)),r=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsx)("div",{className:"Header",children:Object(l.jsxs)("div",{className:"filter",children:[Object(l.jsxs)("div",{className:"navigation-bar",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("a",{href:"/",children:"crowdfund"})}),Object(l.jsxs)("nav",{children:[Object(l.jsx)("a",{href:"/",children:"About"}),Object(l.jsx)("a",{href:"/",children:"Discover"}),Object(l.jsx)("a",{href:"/",children:"Get Started"})]}),Object(l.jsx)("div",{className:"hamburger"+(n?" close":""),onClick:function(){c(!n)}})]}),n&&Object(l.jsx)("div",{className:"mobile-filter"}),n&&Object(l.jsxs)("div",{className:"mobile-menu",children:[Object(l.jsx)("a",{href:"/",children:"About"}),Object(l.jsx)("a",{href:"/",children:"Discover"}),Object(l.jsx)("a",{href:"/",children:"Get Sarted"})]})]})})},d=(n(13),n(14),n(15),function(e){var t=e.openPopup,n=e.isOpen,c=e.minimumAmount,s=Object(a.useState)(""),o=Object(i.a)(s,2),r=o[0],d=o[1],u=parseInt(r);return Object(l.jsx)("div",{className:"PledgeForm",children:Object(l.jsx)("div",{className:n?"enter-pledge open":"enter-pledge",id:"enter-pledge",children:Object(l.jsxs)("div",{className:"enter-pledge-content",children:[Object(l.jsx)("div",{className:"enter-your-pledge",children:"Enter your pledge"}),Object(l.jsxs)("div",{className:"pledge-continue",children:[Object(l.jsxs)("div",{className:"change-pledge-amount",children:[Object(l.jsx)("div",{className:"dollar-sign",children:"$"}),Object(l.jsx)("input",{className:"dollar-amount"+(u<c-1?" error":""),value:r,onInput:function(e){var t=e.target.value;/^[0-9]{0,4}$/.exec(t)&&d(t)},type:"text"})]}),Object(l.jsx)("button",{className:"cyan-button",onClick:function(){isNaN(u)||u>c-1&&t("thanks")},children:"Continue"})]})]})})})}),u=function(e){var t=e.pledge,n=e.setCurrentlyOpen,a=e.isOpen;return Object(l.jsxs)("div",{className:"ModalPledge"+(0===t.amountLeft?" out-of-stock":""),children:[Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("input",{className:"pledge-select",name:"pledge-select",type:"radio",checked:a,id:t.name,value:t.name,onChange:function(){return n(t.name)}}),Object(l.jsxs)("div",{className:"pledge-name-amount",children:[Object(l.jsx)("label",{htmlFor:t.name,children:t.title}),t.reward&&Object(l.jsx)("div",{className:"pledge-item",children:Object(l.jsxs)("div",{className:"pledge-amount",children:["Pledge $",t.minimumAmount," or more"]})})]})]})}),Object(l.jsx)("p",{className:"pledge-info",children:t.info}),t.reward&&Object(l.jsxs)("div",{className:"amount-left",children:[Object(l.jsx)("div",{className:"amount",children:t.amountLeft}),Object(l.jsx)("div",{className:"left",children:"left"})]}),Object(l.jsx)(d,{openPopup:e.openPopup,isOpen:a,minimumAmount:t.minimumAmount})]})},m=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),c=n[0],s=n[1],o=e.closePopup;return Object(l.jsx)("div",{className:"ModalPledges",children:Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsx)("div",{className:"close-button",onClick:o}),Object(l.jsx)("h2",{children:"Back this project"}),Object(l.jsx)("p",{className:"project-info",children:"Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"}),[{name:"no-reward",title:"Pledge with no reward",minimumAmount:1,reward:!1,info:"Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."},{name:"bamboo-stand",title:"Bamboo Stand",minimumAmount:25,amountLeft:101,reward:!0,info:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."},{name:"black-edition",title:"Black Edition Stand",minimumAmount:75,amountLeft:64,reward:!0,info:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."},{name:"special-edition",title:"Mahogany Special Edition",minimumAmount:200,amountLeft:0,reward:!0,info:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included."}].map((function(t){return Object(l.jsx)(u,{openPopup:e.openPopup,pledge:t,setCurrentlyOpen:s,isOpen:c===t.name},t.name)}))]})})},j=(n(16),function(e){var t=e.closePopup;return Object(l.jsx)("div",{className:"ModalThanks",children:Object(l.jsxs)("div",{className:"modal-thanks-content",children:[Object(l.jsx)("div",{className:"checkmark"}),Object(l.jsxs)("div",{className:"modal-thanks-text",children:[Object(l.jsx)("h2",{children:"Thanks for your support!"}),Object(l.jsx)("p",{children:"Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."})]}),Object(l.jsx)("button",{className:"cyan-button got-it",onClick:t,children:"Got it!"})]})})}),b=(n(17),n(18),function(e){var t=e.product,n=e.openPopup;return Object(l.jsxs)("div",{className:"Product"+(0===t.amountLeft?" out-of-stock":""),children:[Object(l.jsxs)("div",{className:"product-title",children:[Object(l.jsx)("h3",{children:t.name}),Object(l.jsxs)("div",{className:"pledge",children:["Pledge $",t.amount," or more"]})]}),Object(l.jsx)("p",{children:t.summary}),Object(l.jsxs)("div",{className:"amount-select",children:[Object(l.jsxs)("div",{className:"amount-left",children:[Object(l.jsx)("div",{className:"amount",children:t.amountLeft}),Object(l.jsx)("div",{className:"total",children:"left"})]}),Object(l.jsxs)("button",{className:"cyan-button"+("0"===t.amountLeft?" out-of-stock-button":""),onClick:function(){return n("modal")},children:["0"!==t.amountLeft?"Select Reward":"Out of Stock"," "]})]})]})}),p=function(e){var t=e.openPopup;return Object(l.jsxs)("div",{className:"About",children:[Object(l.jsx)("h3",{children:"About this project"}),Object(l.jsx)("p",{children:"The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand."}),Object(l.jsx)("p",{children:"Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand."}),[{name:"Bamboo Stand",amount:25,summary:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",amountLeft:101},{name:"Black Edition Stand",amount:75,summary:"You get a Black Special Edition computer stand and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",amountLeft:64},{name:"Mahogany Special Edition",amount:200,summary:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You\u2019ll be added to our Backer member list. Shipping is included.",amountLeft:0}].map((function(e){return Object(l.jsx)(b,{product:e,openPopup:t},e.name)}))]})},h=(n(19),n(20),function(){return Object(l.jsxs)("div",{className:"ProjectData",children:[Object(l.jsxs)("div",{className:"data-holder",children:[Object(l.jsxs)("div",{className:"data-column line",children:[Object(l.jsx)("div",{className:"amount",children:"$89,914"}),Object(l.jsx)("div",{className:"total",children:"of $100,000 backed"}),Object(l.jsx)("div",{className:"mobile-line"})]}),Object(l.jsxs)("div",{className:"data-column line",children:[Object(l.jsx)("div",{className:"amount",children:"5,007"}),Object(l.jsx)("div",{className:"total",children:"total backers"}),Object(l.jsx)("div",{className:"mobile-line"})]}),Object(l.jsxs)("div",{className:"data-column",children:[Object(l.jsx)("div",{className:"amount",children:"56"}),Object(l.jsx)("div",{className:"total",children:"days left"})]})]}),Object(l.jsx)("div",{className:"progress-holder",children:Object(l.jsx)("progress",{max:"100000",value:"89914"})})]})}),O=(n(21),function(e){var t=e.openPopup,n=Object(a.useState)(!1),c=Object(i.a)(n,2),s=c[0],o=c[1];return Object(l.jsxs)("div",{className:"ProjectInfo",children:[Object(l.jsx)("div",{className:"mastercraft-logo"}),Object(l.jsx)("h1",{children:"Mastercraft Bamboo Monitor Riser"}),Object(l.jsx)("h3",{children:"A beautiful & handcrafted monitor stand to reduce neck and eye strain."}),s,Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{className:"cyan-button",onClick:function(){return t("modal")},children:"Back this project"}),Object(l.jsxs)("button",{className:"bookmark-button"+(s?" active":""),onClick:function(){o(!s)},children:[Object(l.jsx)("div",{className:"bookmark-icon",children:Object(l.jsx)("svg",{width:"56",height:"56",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(l.jsx)("circle",{fill:s?"var(--dark-cyan)":"#2F2F2F",cx:"28",cy:"28",r:"28"}),Object(l.jsx)("path",{fill:s?"white":"#B1B1B1",d:"M23 19v18l5-5.058L33 37V19z"})]})})}),Object(l.jsx)("span",{children:s?"Bookmarked":"Bookmark"})]})]})]})}),x=function(e){var t=e.openPopup;return Object(l.jsxs)("div",{className:"Project",children:[Object(l.jsx)(O,{openPopup:t}),Object(l.jsx)(h,{}),Object(l.jsx)(p,{openPopup:e.openPopup})]})};var f=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],s=function(){c(null)},o=function(e){c(e)};return Object(l.jsxs)("div",{className:"App"+(null!==n?" no-scroll":""),children:[Object(l.jsx)(r,{}),Object(l.jsx)(x,{openPopup:o}),"modal"===n&&Object(l.jsx)(m,{openPopup:o,closePopup:s}),"thanks"===n&&Object(l.jsx)(j,{closePopup:s})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),v()}],[[22,1,2]]]);
//# sourceMappingURL=main.4bc9745e.chunk.js.map