(this["webpackJsonpwobble-transition"]=this["webpackJsonpwobble-transition"]||[]).push([[0],{50:function(e,t,a){},76:function(e,t,a){e.exports=a(98)},98:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(32),l=a.n(r),c=a(53),i=a(17),s=a(8);a(50);function m(){var e=Object(i.f)();return o.a.createElement("header",null,o.a.createElement("div",{className:"header-inner"},o.a.createElement("button",{onClick:function(){return e.push("/")}},"SEIFERT."),o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){return e.push("/MyStuff")}},"My Stuff")),o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){return e.push("/MyResume")}},"My Resume")),o.a.createElement("li",null,o.a.createElement("button",{onClick:function(){return e.push("/MyContact")}},"My Contact"))))))}var u=a(72),d=a(9),p=a(61),b=a.n(p),f={sections:3,pages:2,zoom:1.1,top:Object(n.createRef)()},h=Object(n.createContext)(0);function E(e){var t=e.children,a=e.offset,r=e.factor,l=Object(u.a)(e,["children","offset","factor"]),c=function(){var e=f.sections,t=f.pages,a=f.zoom,o=Object(d.g)(),r=o.size,l=o.viewport,c=Object(n.useContext)(h),i=l.width,s=l.height,m=i/a,u=s/a,p=r.width<700,b=m*(p?.2:.1),E=m*(p?.8:.6),g=u*((t-1)/(e-1));return{aspect:r.height/s,viewport:l,offset:c,viewportWidth:i,viewportHeight:s,canvasWidth:m,canvasHeight:u,mobile:p,margin:b,contentMaxWidth:E,sectionHeight:g}}(),i=c.offset,s=c.sectionHeight,m=c.aspect,p=Object(n.useRef)();return a=void 0!==a?a:i,Object(d.e)((function(){var e=p.current.position.y,t=f.top.current/m;p.current.position.y=b()(e,t/f.zoom*r,.1)})),o.a.createElement(h.Provider,{value:a},o.a.createElement("group",Object.assign({},l,{position:[0,-s*a*r,0]}),o.a.createElement("group",{ref:p},t)))}var g=a(24),y=a(19),v=a(33);function C(e){var t=e.url,a=Object(g.b)(t,!0);return o.a.createElement("primitive",{object:a.scene,dispose:null})}var j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ambientLight",{intensity:.3}),o.a.createElement("directionalLight",{position:[10,10,5],intensity:1}),o.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),o.a.createElement("spotLight",{intensity:1,position:[1e3,0,0],castShadow:!0}))},O=function(e){var t=e.domContent,a=e.children,r=e.bgColor,l=e.modelPath,c=e.position,i=Object(n.useRef)();Object(d.e)((function(){return i.current.rotation.y+=.01}));var m=Object(v.a)({threshold:0}),u=Object(s.a)(m,2),p=u[0],b=u[1];return Object(n.useEffect)((function(){b&&(document.body.style.background=r)}),[b]),o.a.createElement(E,{factor:1.5,offset:1},o.a.createElement("group",{position:[0,c,0]},o.a.createElement("mesh",{ref:i,position:[0,-35,0]},o.a.createElement(C,{url:l})),o.a.createElement(g.a,{fullscreen:!0,portal:t},o.a.createElement("div",{ref:p,className:"container"},o.a.createElement("h1",{className:"title"},a)))))};function w(){var e=Object(g.c)(),t=e.active,a=e.progress;return Object(y.useTransition)(t,{from:{opacity:1,progress:0},leave:{opacity:0},update:{progress:a}})((function(e,t){var a=e.progress,n=e.opacity;return t&&o.a.createElement(y.a.div,{className:"loading",style:{opacity:n}},o.a.createElement("div",{className:"loading-bar-container"},o.a.createElement(y.a.div,{className:"loading-bar",style:{width:a}})))}))}function z(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=(t[1],Object(n.useRef)()),l=Object(n.useRef)(),c=function(e){return f.top.current=e.target.scrollTop};return Object(n.useEffect)((function(){c({target:l.current})}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement(d.a,{concurrent:!0,colorManagement:!0,camera:{position:[0,0,130],fov:60}},o.a.createElement(j,null),o.a.createElement(n.Suspense,{fallback:null},o.a.createElement(O,{domContent:r,bgColor:"#00b5ef",modelPath:"/ship.glb",position:100},o.a.createElement("span",null,"Timothy"),o.a.createElement("span",null," Seifert")),o.a.createElement(O,{domContent:r,bgColor:"#00a6dc",modelPath:"/case.glb",position:-50},o.a.createElement("span",null,"Case and point")),o.a.createElement(O,{domContent:r,bgColor:"#004d66",modelPath:"/moonearth.glb",position:-300},o.a.createElement("span",null,"I make cool things")))),o.a.createElement(w,null),o.a.createElement("div",Object.assign({className:"scrollArea",ref:l,onScroll:c},a),o.a.createElement("div",{style:{position:"sticky",top:0},ref:r}),o.a.createElement("div",{style:{height:"".concat(100*f.pages,"vh")}})))}function S(e){var t=e.url,a=Object(g.b)(t,!0);return o.a.createElement("primitive",{object:a.scene,dispose:null})}var x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ambientLight",{intensity:.3}),o.a.createElement("directionalLight",{position:[10,10,5],intensity:1}),o.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),o.a.createElement("spotLight",{intensity:1,position:[1e3,0,0],castShadow:!0}))},P=function(e){var t=e.domContent,a=e.children,r=e.bgColor,l=e.modelPath,c=e.position,i=e.x,m=e.y,u=e.z,d=Object(n.useRef)(),p=Object(v.a)({threshold:0}),b=Object(s.a)(p,2),f=b[0],h=b[1];return Object(n.useEffect)((function(){h&&(document.body.style.background=r)}),[h]),o.a.createElement(E,{factor:1.5,offset:1},o.a.createElement("group",{position:[0,c,0]},o.a.createElement("mesh",{ref:d,position:[i,m,u]},o.a.createElement(S,{url:l})),o.a.createElement(g.a,{fullscreen:!0,portal:t},o.a.createElement("div",{ref:f,className:"container"},o.a.createElement("h1",{className:"title"},a)))))};function k(){var e=Object(g.c)(),t=e.active,a=e.progress;return Object(y.useTransition)(t,{from:{opacity:1,progress:0},leave:{opacity:0},update:{progress:a}})((function(e,t){var a=e.progress,n=e.opacity;return t&&o.a.createElement(y.a.div,{className:"loading",style:{opacity:n}},o.a.createElement("div",{className:"loading-bar-container"},o.a.createElement(y.a.div,{className:"loading-bar",style:{width:a}})))}))}function N(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=(t[1],Object(n.useRef)()),l=Object(n.useRef)(),c=function(e){return f.top.current=e.target.scrollTop};return Object(n.useEffect)((function(){c({target:l.current})}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement(d.a,{concurrent:!0,colorManagement:!0,camera:{position:[0,0,130],fov:60}},o.a.createElement(x,null),o.a.createElement(n.Suspense,{fallback:null},o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/ship.glb",position:100,x:50,y:-35,z:0},o.a.createElement("span",null,"Open Burp Seas"),o.a.createElement("span",null," 2020")),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/case.glb",position:65,x:70,y:-35,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/barrell.glb",position:100,x:-60,y:-15,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/compass.glb",position:100,x:-65,y:25,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/TeamLogo.glb",position:100,x:-15,y:30,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/T.V.glb",position:-20,x:-15,y:35,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/blenderlogo.glb",position:-150,x:-15,y:35,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/UnityLogo.glb",position:-185,x:0,y:0,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/rockstar.glb",position:-260,x:-50,y:35,z:0},o.a.createElement("span",null,"RhythmEvader")),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/rockstar2.glb",position:-270,x:40,y:35,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/shelf.glb",position:-260,x:0,y:35,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/T.V copy.glb",position:-340,x:0,y:35,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/T.V5.glb",position:-600,x:-110,y:35,z:0},o.a.createElement("span",null,"Websites")),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/T.V4.glb",position:-700,x:110,y:35,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/T.V2.glb",position:-800,x:-39,y:35,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/reactmodel.glb",position:-800,x:0,y:35,z:0}),o.a.createElement(P,{domContent:r,bgColor:"#00b5ef",modelPath:"/Tufts.glb",position:-1e3,x:0,y:35,z:0},o.a.createElement("span",null,"Education")))),o.a.createElement(k,null),o.a.createElement("div",Object.assign({className:"scrollArea",ref:l,onScroll:c},a),o.a.createElement("div",{style:{position:"sticky",top:0},ref:r}),o.a.createElement("div",{style:{height:"".concat(100*f.pages,"vh")}})))}function R(e){var t=e.url,a=Object(g.b)(t,!0);return o.a.createElement("primitive",{object:a.scene,dispose:null})}var T=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ambientLight",{intensity:.3}),o.a.createElement("directionalLight",{position:[10,10,5],intensity:1}),o.a.createElement("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),o.a.createElement("spotLight",{intensity:1,position:[1e3,0,0],castShadow:!0}))},L=function(e){var t=e.domContent,a=e.children,r=e.bgColor,l=e.modelPath,c=e.position,i=e.x,m=e.y,u=e.z,d=Object(n.useRef)(),p=Object(v.a)({threshold:0}),b=Object(s.a)(p,2),f=b[0],h=b[1];return Object(n.useEffect)((function(){h&&(document.body.style.background=r)}),[h]),o.a.createElement(E,{factor:1.5,offset:1},o.a.createElement("group",{position:[0,c,0]},o.a.createElement("mesh",{ref:d,position:[i,m,u]},o.a.createElement(R,{url:l})),o.a.createElement(g.a,{fullscreen:!0,portal:t},o.a.createElement("div",{ref:f,className:"container"},o.a.createElement("h1",{className:"title"},a)))))};function M(){var e=Object(g.c)(),t=e.active,a=e.progress;return Object(y.useTransition)(t,{from:{opacity:1,progress:0},leave:{opacity:0},update:{progress:a}})((function(e,t){var a=e.progress,n=e.opacity;return t&&o.a.createElement(y.a.div,{className:"loading",style:{opacity:n}},o.a.createElement("div",{className:"loading-bar-container"},o.a.createElement(y.a.div,{className:"loading-bar",style:{width:a}})))}))}function F(){var e=Object(n.useState)(),t=Object(s.a)(e,2),a=t[0],r=(t[1],Object(n.useRef)()),l=Object(n.useRef)(),c=function(e){return f.top.current=e.target.scrollTop};return Object(n.useEffect)((function(){c({target:l.current})}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null),o.a.createElement(d.a,{concurrent:!0,colorManagement:!0,camera:{position:[0,0,130],fov:60}},o.a.createElement(T,null),o.a.createElement(n.Suspense,{fallback:null},o.a.createElement(L,{domContent:r,bgColor:"#00b5ef",modelPath:"/painting.glb",position:100,x:50,y:-35,z:0},o.a.createElement("span",null,"The Gallery"),o.a.createElement("span",null,"My Life")),o.a.createElement(L,{domContent:r,bgColor:"#00b5ef",modelPath:"/painting2.glb",position:80,x:-40,y:-35,z:0}))),o.a.createElement(M,null),o.a.createElement("div",Object.assign({className:"scrollArea",ref:l,onScroll:c},a),o.a.createElement("div",{style:{position:"sticky",top:0},ref:r}),o.a.createElement("div",{style:{height:"".concat(100*f.pages,"vh")}})))}function W(){return o.a.createElement(m,null)}function V(){return o.a.createElement(c.a,{basename:""},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/"},o.a.createElement(z,null)),o.a.createElement(i.a,{path:"/MyStuff"},o.a.createElement(N,null)),o.a.createElement(i.a,{path:"/MyResume"},o.a.createElement(F,null)),o.a.createElement(i.a,{path:"/MyContact"},o.a.createElement(W,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.1fcd30f0.chunk.js.map