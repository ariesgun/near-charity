(this["webpackJsonpnear-charity"]=this["webpackJsonpnear-charity"]||[]).push([[0],{160:function(e,t){},170:function(e,t){},218:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(36),s=n.n(r),o=n(24),i=n(7),l=n(8),j=n.n(l),u=n(234),d=n(238),b=Object({NODE_ENV:"production",PUBLIC_URL:"/near-charity",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"charitycontract.arome.testnet";var h=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:b,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:b,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},x=n(50),O=n(60),p=h("testnet");function m(){return(m=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.connect)(Object.assign({deps:{keyStore:new x.keyStores.BrowserLocalStorageKeyStore}},p));case 2:t=e.sent,window.walletConnection=new x.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new x.Contract(window.walletConnection.account(),p.contractName,{viewMethods:["getCharity","getCharities"],changeMethods:["donateToCharity","setCharity"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){window.walletConnection.requestSignIn(p.contractName)}function v(){window.walletConnection.signOut(),window.location.reload()}var y=n(236),C=n(231),N=n(241),k=n(1),S=function(e){var t=e.address,n=e.amount,a=e.symbol,c=e.destroy;return t?Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(y.a,{children:[Object(k.jsx)(y.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(k.jsxs)(k.Fragment,{children:[n," ",Object(k.jsxs)("span",{className:"ms-1",children:[" ",a]})]}):Object(k.jsx)(C.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(k.jsxs)(y.a.Menu,{className:"shadow-lg border-0",children:[Object(k.jsx)(y.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(k.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(k.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(k.jsx)("span",{className:"font-monospace",children:t})]})}),Object(k.jsx)(y.a.Divider,{}),Object(k.jsxs)(y.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){c()},children:[Object(k.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},I=n(39),T=(n(217),function(){return Object(k.jsx)(I.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),F=function(e){var t=e.text;return Object(k.jsxs)("div",{children:[Object(k.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(k.jsx)("span",{className:"text-secondary mx-1",children:t})]})},P=function(e){var t=e.text;return Object(k.jsxs)("div",{children:[Object(k.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(k.jsx)("span",{className:"text-secondary mx-1",children:t})]})},D={text:""};F.defaultProps=D,P.defaultProps=D;var E=n(2),A=n(144),U=n(235),L=n(237),B=n(146),H=function(e){var t=e.save,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),j=l[0],u=l[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),h=b[0],x=b[1],O=Object(a.useState)(""),p=Object(i.a)(O,2),m=p[0],f=p[1],g=Object(a.useState)(0),w=Object(i.a)(g,2),v=w[0],y=w[1],C=Object(a.useState)(!1),N=Object(i.a)(C,2),S=N[0],I=N[1],T=function(){return I(!1)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(A.a,{onClick:function(){return I(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(k.jsx)("i",{class:"bi bi-plus"})}),Object(k.jsxs)(U.a,{show:S,onHide:T,centered:!0,children:[Object(k.jsx)(U.a.Header,{closeButton:!0,children:Object(k.jsx)(U.a.Title,{children:"New Charity Project"})}),Object(k.jsx)(L.a,{children:Object(k.jsxs)(U.a.Body,{children:[Object(k.jsx)(B.a,{controlId:"inputName",label:"Charity name",className:"mb-3",children:Object(k.jsx)(L.a.Control,{type:"text",onChange:function(e){s(e.target.value)},placeholder:"Enter name of Charity Project"})}),Object(k.jsx)(B.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(k.jsx)(L.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){u(e.target.value)}})}),Object(k.jsx)(B.a,{controlId:"inputPurpose",label:"Purpose",className:"mb-3",children:Object(k.jsx)(L.a.Control,{as:"textarea",placeholder:"purpose",style:{height:"80px"},onChange:function(e){x(e.target.value)}})}),Object(k.jsx)(B.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(k.jsx)(L.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)}})}),Object(k.jsx)(B.a,{controlId:"inputGoal",label:"Goal",className:"mb-3",children:Object(k.jsx)(L.a.Control,{type:"text",placeholder:"Goal",onChange:function(e){y(e.target.value)}})})]})}),Object(k.jsxs)(U.a.Footer,{children:[Object(k.jsx)(A.a,{variant:"outline-secondary",onClick:T,children:"Close"}),Object(k.jsx)(A.a,{variant:"dark",disabled:!(r&&j&&h&&m&&v),onClick:function(){t({name:r,image:j,purpose:h,location:m,goal:v}),T()},children:"Save Charity"})]})]})]})},_=function(e){var t=e.save,n=e.id;console.log(n);var c=Object(a.useState)(0),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(a.useState)(!1),j=Object(i.a)(l,2),u=j[0],d=j[1],b=function(){return d(!1)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(A.a,{onClick:function(){return d(!0)},variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(k.jsx)("i",{class:"bi bi-plus"})}),Object(k.jsxs)(U.a,{show:u,onHide:b,centered:!0,children:[Object(k.jsx)(U.a.Header,{closeButton:!0,children:Object(k.jsx)(U.a.Title,{children:"Donate to Charity Project"})}),Object(k.jsx)(L.a,{children:Object(k.jsx)(U.a.Body,{children:Object(k.jsx)(B.a,{controlId:"inputDonation",label:"Donation",className:"mb-3",children:Object(k.jsx)(L.a.Control,{type:"text",placeholder:"Donation",onChange:function(e){o(e.target.value)}})})})}),Object(k.jsxs)(U.a.Footer,{children:[Object(k.jsx)(A.a,{variant:"outline-secondary",onClick:b,children:"Close"}),Object(k.jsx)(A.a,{variant:"dark",disabled:!s,onClick:function(){t({id:n,donation:s}),b()},children:"Donate to Charity"})]})]})]})},R=n(145),M=n(240),W=n(232),G=n(239),K=1e14;function z(){return window.contract.getCharities()}function J(e){return q.apply(this,arguments)}function q(){return(q=Object(o.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,a=t.donation,Object(O.parseNearAmount)(a+""),e.next=4,window.contract.donateToCharity({charityId:n},K,a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(e){var t=e.charity,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=(c[0],c[1]),s=Object(a.useState)(!1),l=Object(i.a)(s,2),u=(l[0],l[1]),d=Object(a.useCallback)(Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.t0=r,e.next=5,z();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),b=t.id,h=t.goal,O=t.name,p=t.purpose,m=t.raised,f=t.location,g=t.image,w=t.owner,v=t.donations,y=t.highest,C=t.donors,S=function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.id,t.amount),e.prev=1,u(!0),e.next=5,J({id:t.id,donation:t.donation}).then((function(e){return d()}));case 5:Object(I.b)(Object(k.jsx)(F,{text:"Charity Project created successfully."})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log({error:e.t0}),Object(I.b)(Object(k.jsx)(P,{text:"Failed to create a charity project."}));case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsx)(R.a,{children:Object(k.jsxs)(M.a,{className:" h-100",children:[Object(k.jsx)(M.a.Header,{children:Object(k.jsxs)(N.a,{direction:"horizontal",gap:2,children:[Object(k.jsx)("span",{className:"font-monospace text-secondary",children:w}),Object(k.jsxs)(W.a,{bg:"secondary",className:"ms-auto",children:["Goal: ",x.utils.format.formatNearAmount(h)," Near | Raised: ",x.utils.format.formatNearAmount(m)," Near"]})]})}),Object(k.jsx)("div",{className:" ratio ratio-4x3",children:Object(k.jsx)("img",{src:g,alt:O,style:{objectFit:"cover"}})}),Object(k.jsxs)(M.a.Body,{className:"d-flex  flex-column text-center",children:[Object(k.jsx)(M.a.Title,{children:O}),Object(k.jsxs)(M.a.Subtitle,{className:"mb-2 text-muted",children:[v," Donation(s) | Highest Donation: ",x.utils.format.formatNearAmount(y)," Near"]}),Object(k.jsxs)(M.a.Text,{children:["Last Donor: ",C[C.length-1]]}),Object(k.jsx)(M.a.Text,{className:"flex-grow-1 ",children:p}),Object(k.jsx)(M.a.Text,{className:"text-secondary",children:Object(k.jsx)("span",{children:f})}),Object(k.jsxs)(A.a,{variant:"outline-dark",className:"w-100 py-3",children:["Make Donation ",Object(k.jsx)(_,{save:S,id:b})]})]})]})},b)},Q=function(){return Object(k.jsx)("div",{className:"d-flex justify-content-center",children:Object(k.jsx)(C.a,{animation:"border",role:"status",className:"opacity-25",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},X=n(233),Y=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),l=s[0],u=s[1],d=Object(a.useCallback)(Object(o.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.t0=c,e.next=5,z();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),b=function(){var e=Object(o.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{u(!0),(n=t,n.id=Object(G.a)(),n.price=Object(O.parseNearAmount)(n.price+""),window.contract.setCharity({charity:n})).then((function(e){d()})),Object(I.b)(Object(k.jsx)(F,{text:"Charity Project created successfully."}))}catch(a){console.log({error:a}),Object(I.b)(Object(k.jsx)(P,{text:"Failed to create a charity project."}))}finally{u(!1)}case 1:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J({id:t,price:n}).then((function(e){return d()}));case 3:Object(I.b)(Object(k.jsx)(F,{text:"Donation successfully made to Charity Project."})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(I.b)(Object(k.jsx)(P,{text:"Failed to make donation."}));case 9:return e.prev=9,u(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){d()}),[]),Object(k.jsx)(k.Fragment,{children:l?Object(k.jsx)(Q,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(k.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Near Charity(Donations)"}),Object(k.jsx)(H,{save:b})]}),Object(k.jsx)(X.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((function(e){return Object(k.jsx)(V,{charity:Object(E.a)({},e),donate:h})}))})]})})},Z=function(e){var t=e.name,n=e.login,a=e.coverImg;return a?Object(k.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(k.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(k.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(k.jsx)("img",{src:a,alt:""})}),Object(k.jsx)("h1",{children:t}),Object(k.jsx)("p",{children:"Please connect your wallet to continue."}),Object(k.jsx)(A.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(k.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};Z.defaultProps={name:""};var $=Z,ee=n.p+"static/media/donations.1178971e.jpg",te=(n(218),function(){var e=window.walletConnection.account(),t=Object(a.useState)("0"),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useCallback)(Object(o.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=r,t.next=4,f();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return Object(a.useEffect)((function(){s()}),[s]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(T,{}),e.accountId?Object(k.jsxs)(u.a,{fluid:"md",children:[Object(k.jsx)(d.a,{className:"justify-content-end pt-3 pb-5",children:Object(k.jsx)(d.a.Item,{children:Object(k.jsx)(S,{address:e.accountId,amount:c,symbol:"NEAR",destroy:v})})}),Object(k.jsx)("main",{children:Object(k.jsx)(Y,{})})]}):Object(k.jsx)($,{name:"Near Charity",login:w,coverImg:ee})]})}),ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,242)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(224),n(221),n(222);window.nearInitPromise=function(){return m.apply(this,arguments)}().then((function(){s.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(te,{})}),document.getElementById("root"))})).catch(console.error),ne()}},[[223,1,2]]]);
//# sourceMappingURL=main.b56b172b.chunk.js.map