(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){e.exports=a(73)},45:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(19),i=a.n(c),u=(a(45),a(22)),o=a(2),s=a(24),l=a(16),m=a(14);a(32),a(48);var d=function(){return r.a.createElement("div",{className:"tabbar stick-bottom"},r.a.createElement(u.b,{to:"/friend-list",className:"tabbutton"},"Online"),r.a.createElement(u.b,{to:"/chat",className:"tabbutton"},"\u0e2b\u0e49\u0e2d\u0e07\u0e23\u0e30\u0e1a\u0e32\u0e22\u0e23\u0e27\u0e21"),r.a.createElement(u.b,{to:"/profile",className:"tabbutton"},"Profile"))};var f=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content"},e.children),r.a.createElement(d,null))};a(50);var h=function(e){return r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:"https://avatars.dicebear.com/api/big-ears-neutral/".concat(e.name,".svg"),alt:e.name}))};a(33);var v=function(e){var t=e.text,a=Object(n.useState)(t),c=Object(m.a)(a,2),i=c[0],o=c[1];return Object(n.useEffect)(function(){!function(e){if(e.startsWith("/link"))o(r.a.createElement(u.b,{to:e},e));else if(e.startsWith("/embed")){var t=e.split(" ").slice(1).join(" ");o(r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))}else if(e.startsWith("/age")){var a=e.split(" "),n=Object(m.a)(a,2)[1];fetch("https://api.agify.io/?name="+n).then(function(e){return e.json()}).then(function(e){return o(e.age)})}else if(e.startsWith("/gender")){var c=e.split(" "),i=Object(m.a)(c,2)[1];fetch("https://api.genderize.io/?name="+i).then(function(e){return e.json()}).then(function(e){return o(e.gender)})}else if(e.startsWith("/randomfact"))fetch("https://uselessfacts.jsph.pl/random.json?language=en").then(function(e){return e.json()}).then(function(e){return o(e.text+" source:"+e.source)});else if(e.startsWith("/nationalize")){var s=e.split(" "),l=Object(m.a)(s,2)[1];fetch("https://api.nationalize.io/?name="+l).then(function(e){return e.json()}).then(function(e){return o(e.country)})}else e.startsWith("/randomdog")?fetch("https://dog.ceo/api/breeds/image/random").then(function(e){return e.json()}).then(function(e){return o(e.message)}):e.startsWith("/whatdo")&&fetch("https://www.boredapi.com/api/activity").then(function(e){return e.json()}).then(function(e){return o("You should "+e.activity)})}(t)},[]),i};var p=function(e){var t=e.data,a=Object(n.useRef)(null);return Object(n.useEffect)(function(){a.current&&a.current.scrollIntoView()},[t]),r.a.createElement("div",{className:"chatbox"},t.map(function(e,t){return r.a.createElement("div",{ref:a,key:"".concat(e.key,"-").concat(t),className:"chatbox-item ".concat(e.position)},r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"chatbox-item-text"},r.a.createElement(h,{name:e.displayName}),r.a.createElement("div",null,e.displayName,":"),r.a.createElement(v,{text:e.msg}))))}))};a(53);var E=function(e){var t=e.value;return r.a.createElement("div",{className:"titlebar"},t)};a(55);var b=function(e){var t=Object(n.useState)(e.value||""),a=Object(m.a)(t,2),c=a[0],i=a[1];return r.a.createElement("div",{className:"inputbox"},r.a.createElement("label",{className:"label1",htmlFor:"inputmsg"},e.label),r.a.createElement("input",{id:"inputmsg",type:"text",className:"text",value:c,autoComplete:"off",onChange:function(t){i(t.target.value),e.onChange&&e.onChange(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&""!==c&&(e.onEnter(c),i(""))}}),r.a.createElement("input",{type:"button",value:"Send",onClick:function(){e.onEnter(c),i("")},className:"button"}))},g=(a(34),a(29),a(35),a(11));g.a.initializeApp({apiKey:"AIzaSyC3v8XpqrkVbwYfOzOWXrNEHd-FnXpFV-4",authDomain:"headachsat.firebaseapp.com",projectId:"headachsat",storageBucket:"headachsat.appspot.com",messagingSenderId:"628143028098",appId:"1:628143028098:web:d93338d821254def5a419b",databaseURL:"https://headachsat-default-rtdb.asia-southeast1.firebasedatabase.app/"});var N=g.a,O=function(e){return e.split("").reduce(function(e,t){return(e<<5)-e+t.charCodeAt(0)|0},0)},j=Object(n.createContext)({userList:[],chatroomList:[]});function y(e){var t=e.children,a=e.self,c=N.database().ref("users"),i=N.database().ref("chatrooms"),u=Object(n.useState)([]),o=Object(m.a)(u,2),d=o[0],f=o[1],h=Object(n.useState)([]),v=Object(m.a)(h,2),p=v[0],E=(v[1],function(e){return{msg:e,user:a.uid,timestamp:N.database.ServerValue.TIMESTAMP}});Object(n.useEffect)(function(){c.on("child_added",function(e){var t=function(e){return e.key!==a.uid};f(function(a){return[].concat(Object(l.a)(a.filter(t)),[Object(s.a)({},e.val(),{key:e.key})])})}),c.on("child_removed",function(e){var t=e.key,a=function(e){return e.key!==t};f(function(e){return e.filter(a)})}),console.log("self checkin to firebase",a);var e=c.child(a.uid);return e.set({displayName:a.displayName}),e.onDisconnect().remove(),function(){c.off("child_added"),c.off("child_removed")}},[]);return r.a.createElement(j.Provider,{value:{userList:d,chatroomList:p,getUserProfile:function(e){return c.child(e).once("value").then(function(e){return e.val()})},getPrivateChat:function(e){var t="1-1-".concat(O(a.uid)+O(e));return i.child("".concat(t)).once("value").then(function(e){return e.val()})},listenToPrivateChat:function(e,t){var n="1-1-".concat(O(a.uid)+O(e));return i.child("".concat(n,"/chat")).on("child_added",function(e){e&&t(e.val())})},sendPrivateMsg:function(e,t){var n="1-1-".concat(O(a.uid)+O(t));i.child("".concat(n,"/chat")).push(E(e))},getChatroom:function(e){return i.child("".concat(e)).once("value").then(function(e){return e.val()})},listenToChatroom:function(e,t){console.log("self checkin to roomId",e);var n=i.child("".concat(e,"/users/").concat(a.uid));return n.set({displayName:a.displayName}),n.onDisconnect().remove(),i.child("".concat(e,"/chat")).on("child_added",function(e){e&&t(e.val())})},listenToUserInChatroom:function(e,t){var a=i.child("".concat(e,"/users"));return a.on("child_added",function(e){e&&t("JOINED",e.key,e.val())}),a.on("child_removed",function(e){e&&t("LEFT",e.key,e.val())}),function(){a.off("child_added"),a.off("child_removed")}},sendMsg:function(e,t){i.child("".concat(t,"/chat")).push(E(e))}}},t)}var C=function(){return Object(n.useContext)(j)},k=a(37),I=a.n(k),S="AUTHENTICATION_LOADING",T="AUTHENTICATED",w="UNAUTHENTICATED",A=Object(n.createContext)({user:{},state:S});function P(e){var t=e.children,a=Object(n.useState)({user:void 0,state:S}),c=Object(m.a)(a,2),i=c[0],u=c[1];Object(n.useEffect)(function(){var e=N.auth().onAuthStateChanged(function(e){u({user:e,state:e?T:w})});return function(){return e()}},[]);return r.a.createElement(A.Provider,{value:{authState:i,signOut:function(){return N.auth().signOut()},signUpWithEmailAndPassword:function(e,t,a,n,r){N.auth().signUpWithEmailAndPassword(e,t,a,u,n,function(e){u(i),r&&r(e)})},signInWithEmailAndPassword:function(e,t,a,n){N.auth().signInWithEmailAndPassword(e,t,u,a,function(e){u(i),n&&n(e)})},updateDisplayName:function(e){return i.user.updateProfile({displayName:e,photoURL:i.user.photoURL})},updateEmailAddress:function(e){i.user.updateEmail(e)},sendPasswordResetEmail:function(e,t,a){return N.auth().sendPasswordResetEmail(e,t,a)},sendEmailVerification:function(e,t){return N.auth().sendEmailVerification(e,t)},userHasOnlyEmailProvider:function(){return N.auth().userHasOnlyEmailProvider()}}},t)}var x=function(){return Object(n.useContext)(A)},L={signInFlow:"popup",signInSuccessUrl:"/profile",signInOptions:[N.auth.EmailAuthProvider.PROVIDER_ID]},D=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"head"},"HeadAchChat Login"),r.a.createElement(I.a,{uiConfig:L,firebaseAuth:N.auth()}))};var W=function(){var e=C(),t=e.userList,a=e.sendMsg,c=e.listenToChatroom,i=x().authState,u=Object(n.useState)([]),o=Object(m.a)(u,2),d=o[0],h=o[1],v=Object(n.useState)({}),g=Object(m.a)(v,2),N=g[0],O=g[1];function j(e){h(function(t){return[e].concat(Object(l.a)(t))})}return Object(n.useEffect)(function(){var e=function(e){return e.reduce(function(e,t){return e[t.key]=t,e},{})}(t);O(function(t){return e})},[t]),Object(n.useEffect)(function(){var e=c("mainhall",j);return function(){e()}},[]),r.a.createElement(f,null,r.a.createElement("div",{className:"chat"},r.a.createElement(E,{value:"Chat"}),r.a.createElement(p,{data:d.map(function(e){var t="This Person offline";return e.user in N&&N[e.user].displayName?t=N[e.user].displayName:e.user===i.user.uid&&(t=i.user.displayName),Object(s.a)({},e,{key:e.timestamp||Date.now(),displayName:t,position:e.user===i.user.uid?"right":"left"})}).sort(function(e,t){return e.timestamp-t.timestamp})}),r.a.createElement(b,{onEnter:function(e){return a(e,"mainhall")}})))};var U=function(e){var t=e.data,a=Object(n.useRef)(null);return Object(n.useEffect)(function(){a.current&&a.current.scrollIntoView()},[t]),r.a.createElement("div",{className:"privatechatbox"},t.map(function(e,t){return r.a.createElement("div",{ref:a,key:"".concat(e.key,"-").concat(t),className:"chatbox-item ".concat(e.position)},r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"chatbox-item-text"},r.a.createElement(h,{name:e.displayName}),r.a.createElement("div",null,e.displayName,":"),r.a.createElement(v,{text:e.msg}))))}))};var _=function(){var e=Object(o.g)().uid,t=C(),a=t.getUserProfile,c=t.sendPrivateMsg,i=t.listenToPrivateChat,u=Object(n.useState)(""),d=Object(m.a)(u,2),h=d[0],v=d[1],p=Object(n.useState)([]),g=Object(m.a)(p,2),N=g[0],O=g[1],j=function(t){var a=Object(s.a)({},t,{key:t.timestamp||Date.now(),displayName:h,position:t.user===e?"left":"right"});O(function(e){return[a].concat(Object(l.a)(e))})};return Object(n.useEffect)(function(){a(e).then(function(e){return e&&v(e.displayName),e});var t=i(e,j);return function(){t()}},[e]),Object(n.useEffect)(function(){window.scrollTo(0,0)},[]),r.a.createElement(f,null,r.a.createElement("div",{className:"chat friend-list-text-align"},r.a.createElement(E,{value:h}),r.a.createElement(U,{data:N}),r.a.createElement(b,{onEnter:function(t){return c(t,e)}})))};a(69);var F=function(){var e=x(),t=e.authState,a=e.updateDisplayName,c=e.signOut,i=Object(n.useState)(t.user.displayName),u=Object(m.a)(i,2),o=u[0],s=u[1],l=Object(n.useState)("\u0e01\u0e33\u0e25\u0e31\u0e07\u0e43\u0e08\u0e44\u0e2b\u0e21\u0e04\u0e30?"),d=Object(m.a)(l,2),h=d[0],v=d[1];return r.a.createElement(f,null,r.a.createElement("div",{className:"Profile"},r.a.createElement("img",{src:"logo512.png",width:"192",height:"192"}),r.a.createElement("label",{className:"label1",htmlFor:"displayname"}),r.a.createElement("input",{id:"displayname",type:"text",className:"text",placeholder:"Name",value:o,onChange:function(e){return s(e.target.value)}}),r.a.createElement("div",{className:"quote"},h),r.a.createElement("input",{className:"button",type:"button",value:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e43\u0e08",onClick:function(){"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e43\u0e08\u0e44\u0e2b\u0e21\u0e04\u0e30?"===h&&v("\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e21\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e2a\u0e34\u0e48\u0e07\u0e14\u0e35\u0e46 \u0e41\u0e25\u0e49\u0e27\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e08\u0e30\u0e41\u0e2e\u0e1b\u0e1b\u0e35\u0e49"),"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e21\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e2a\u0e34\u0e48\u0e07\u0e14\u0e35\u0e46 \u0e41\u0e25\u0e49\u0e27\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e08\u0e30\u0e41\u0e2e\u0e1b\u0e1b\u0e35\u0e49"===h&&v("\u0e21\u0e31\u0e19\u0e01\u0e47\u0e40\u0e1b\u0e47\u0e19\u0e41\u0e04\u0e48\u0e27\u0e31\u0e19\u0e41\u0e22\u0e48\u0e46 \u0e41\u0e15\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e17\u0e31\u0e49\u0e07\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2b\u0e23\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e41\u0e22\u0e48"),"\u0e21\u0e31\u0e19\u0e01\u0e47\u0e40\u0e1b\u0e47\u0e19\u0e41\u0e04\u0e48\u0e27\u0e31\u0e19\u0e41\u0e22\u0e48\u0e46 \u0e41\u0e15\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e17\u0e31\u0e49\u0e07\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2b\u0e23\u0e2d\u0e01\u0e17\u0e35\u0e48\u0e41\u0e22\u0e48"===h&&v("\u0e2b\u0e21\u0e37\u0e48\u0e19\u0e17\u0e32\u0e07\u0e15\u0e31\u0e19 \u0e22\u0e31\u0e07\u0e21\u0e35\u0e17\u0e32\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e43\u0e2b\u0e49\u0e2d\u0e2d\u0e01\u0e40\u0e2a\u0e21\u0e2d"),"\u0e2b\u0e21\u0e37\u0e48\u0e19\u0e17\u0e32\u0e07\u0e15\u0e31\u0e19 \u0e22\u0e31\u0e07\u0e21\u0e35\u0e17\u0e32\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e43\u0e2b\u0e49\u0e2d\u0e2d\u0e01\u0e40\u0e2a\u0e21\u0e2d"===h&&v("\u0e15\u0e23\u0e32\u0e1a\u0e43\u0e14\u0e17\u0e35\u0e48\u0e22\u0e31\u0e07\u0e21\u0e35\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2d\u0e22\u0e39\u0e48 \u0e22\u0e31\u0e07\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e27\u0e31\u0e07\u0e40\u0e2a\u0e21\u0e2d"),"\u0e15\u0e23\u0e32\u0e1a\u0e43\u0e14\u0e17\u0e35\u0e48\u0e22\u0e31\u0e07\u0e21\u0e35\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2d\u0e22\u0e39\u0e48 \u0e22\u0e31\u0e07\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2b\u0e27\u0e31\u0e07\u0e40\u0e2a\u0e21\u0e2d"===h&&v("\u0e01\u0e33\u0e25\u0e31\u0e07\u0e43\u0e08\u0e44\u0e2b\u0e21\u0e04\u0e30?")}}),r.a.createElement("input",{className:"button",type:"button",value:"Save",onClick:function(){a(o).then(function(e){t.user.reload()})}}),r.a.createElement("input",{className:"button signout",type:"button",onClick:function(){return c()},value:"Sign out"})))};a(71);var H=function(){var e=C().userList;return r.a.createElement(f,null,r.a.createElement("div",{className:"friend-list"},r.a.createElement("div",{className:"friendhead"},"Friends"),e.map(function(e){return r.a.createElement(u.b,{to:"/privatechat/".concat(e.key),key:e.key},r.a.createElement("div",{className:"friend-list-item ".concat(e.position)},r.a.createElement(h,{className:"friendavartar",name:e.displayName}),r.a.createElement("div",{className:"friendname"},e.displayName)))})))};var R=function(){var e=x().authState;return e&&"AUTHENTICATION_LOADING"===e.state?r.a.createElement("div",null,"Loading..."):e&&"AUTHENTICATED"===e.state?r.a.createElement(y,{self:e.user},r.a.createElement(u.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/chat",element:r.a.createElement(W,null)}),r.a.createElement(o.a,{path:"/privatechat/:uid",element:r.a.createElement(_,null)}),r.a.createElement(o.a,{path:"/profile",element:r.a.createElement(F,null)}),r.a.createElement(o.a,{path:"/friend-list",element:r.a.createElement(H,null)}),r.a.createElement(o.a,{path:"/",element:r.a.createElement(F,null)})))):r.a.createElement(D,null)},M=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,74)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)})};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null,r.a.createElement(R,null))),document.getElementById("root")),M(),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(function(e){console.log("SW registered: ",e)})}},[[40,3,2]]]);
//# sourceMappingURL=main.3b51249b.chunk.js.map