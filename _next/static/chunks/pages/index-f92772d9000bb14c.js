(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(1383)}])},1383:function(l,c,a){"use strict";a.r(c),a.d(c,{default:function(){return L}});var m=a(5893),d=a(7294),n=a(8790),o=a(949),p=a(5193),q=a(9876),r=function(a){var b,c,d;return(0,m.jsx)(n.M5,{py:6,children:(0,m.jsxs)(n.fG,{as:"article",maxW:"1000px",w:"full",bg:(0,o.ff)("white","gray.900"),boxShadow:"2xl",rounded:"md",p:6,overflow:"hidden",children:[(0,m.jsx)(n.Kq,{children:(0,m.jsx)(n.AB,{href:a.bookmark.url,isExternal:!0,children:(0,m.jsx)(n.X6,{color:(0,o.ff)("gray.700","white"),fontSize:"xl",fontFamily:"body",children:a.bookmark.title})})}),(0,m.jsx)(n.Kq,{mt:6,direction:"row",spacing:4,align:"center",children:(0,m.jsxs)(n.Kq,{direction:"column",spacing:2,fontSize:"sm",children:[(0,m.jsx)(n.rU,{href:a.bookmark.url,isExternal:!0,children:(b=a.bookmark.url,new URL(b).hostname)}),(0,m.jsx)(n.AB,{href:(c=a.bookmark.arweveTxId,"https://viewblock.io/arweave/tx/".concat(c)),isExternal:!0,children:(0,m.jsx)(p.zx,{rightIcon:(0,m.jsx)(q.h0,{}),children:(0,m.jsxs)(n.xv,{opacity:.5,children:["Arweave: ",d=a.bookmark.arweveTxId]})})})]})})]})})},s=a(3340),t=a(7349),e=a(2846),b=a(9703),u=a(5393);function v(){return(v=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}var w=b.jU?d.useLayoutEffect:d.useEffect;function x(a,c){void 0===c&&(c={});var f=c,g=f.ssr,k=void 0===g||g,e=f.fallback,l=(0,u.O)(),m=Array.isArray(a)?a:[a],h=Array.isArray(e)?e:[e];h=h.filter(function(a){return null!=a});var i=(0,d.useState)(function(){return m.map(function(a,b){return{media:a,matches:k?!!h[b]:l.window.matchMedia(a).matches}})}),j=i[0],n=i[1];return w(function(){k&&n(m.map(function(a){return{media:a,matches:l.window.matchMedia(a).matches}}));var a=m.map(function(a){return l.window.matchMedia(a)}),c=function(a){n(function(b){return b.slice().map(function(b){return b.media===a.media?v({},b,{matches:a.matches}):b})})};return a.forEach(function(a){(0,b.mf)(a.addListener)?a.addListener(c):a.addEventListener("change",c)}),function(){a.forEach(function(a){(0,b.mf)(a.removeListener)?a.removeListener(c):a.removeEventListener("change",c)})}},[]),j.map(function(a){return a.matches})}var y=function(a){var c=a.breakpoint,d=a.hide,e=a.children,f=a.ssr,g=x(c,{ssr:f}),b=g[0];return(d?!b:b)?e:null},g=function(a){var b=a.children,c=a.ssr,e=A(a);return d.createElement(y,{breakpoint:e,hide:!0,ssr:c},b)};b.Ts&&(g.displayName="Hide");var h=function(a){var b=a.children,c=a.ssr,e=A(a);return d.createElement(y,{breakpoint:e,ssr:c},b)};b.Ts&&(h.displayName="Show");var z=function(c,a){return(0,b.Wf)(c,"breakpoints."+a,a)};function A(a){var c=a.breakpoint,h=a.below,i=a.above,d=(0,e.Fg)(),f=z(d,h),g=z(d,i),b=void 0===c?"":c;return f?b="(max-width: "+f+")":g&&(b="(min-width: "+g+")"),b}var i=a(917),B=a(7375);function C(){return(C=Object.assign?Object.assign.bind():function(d){for(var a=1;a<arguments.length;a++){var b=arguments[a];for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(d[c]=b[c])}return d}).apply(this,arguments)}function D(c,f){if(null==c)return{};var a,b,d={},e=Object.keys(c);for(b=0;b<e.length;b++)a=e[b],f.indexOf(a)>=0||(d[a]=c[a]);return d}var E=["startColor","endColor","isLoaded","fadeDuration","speed","className"],F=["noOfLines","spacing","skeletonHeight","className","startColor","endColor","isLoaded","fadeDuration","speed","children"],G=["size"],H=(0,e.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),I=(0,i.F4)({from:{opacity:0},to:{opacity:1}}),J=function(){var a=d.useRef(!0);return d.useEffect(function(){a.current=!1},[]),a.current},f=(0,e.Gp)(function(c,f){var j=(0,e.mq)("Skeleton",c),k=J(),a=(0,e.Lr)(c);a.startColor,a.endColor;var g=a.isLoaded,l=a.fadeDuration;a.speed;var m=a.className,h=D(a,E),n=(0,B.D9)(g),i=(0,b.cx)("chakra-skeleton",m);if(g){var o=k||n?"none":I+" "+l+"s";return d.createElement(e.m$.div,C({ref:f,className:i,__css:{animation:o}},h))}return d.createElement(H,C({ref:f,className:i},h,{__css:j}))});f.defaultProps={fadeDuration:.4,speed:.8},b.Ts&&(f.displayName="Skeleton");var j=function(a){var j,g=a.noOfLines,c=void 0===g?3:g,h=a.spacing,p=void 0===h?"0.5rem":h,i=a.skeletonHeight,q=void 0===i?"0.5rem":i,k=a.className,r=a.startColor,s=a.endColor,t=a.isLoaded,u=a.fadeDuration,v=a.speed,w=a.children,l=D(a,F),m=function(f,c){var h,a,i,j,g,d,k,l,m,n=(a=(0,b.Kn)(c)?c:{fallback:null!=c?c:"base"},g=(0,b.Kn)(a)?a:{fallback:null!=a?a:"base"},d=(0,e.Fg)().__breakpoints.details.map(function(a){var b=a.minMaxQuery,c=a.breakpoint;return{breakpoint:c,query:b.replace("@media screen and ","")}}),k=d.map(function(a){return a.breakpoint===g.fallback}),l=x(d.map(function(a){return a.query}),{fallback:k,ssr:g.ssr}),m=l.findIndex(function(a){return!0==a}),null!=(i=null==(j=d[m])?void 0:j.breakpoint)?i:g.fallback),p=(0,e.Fg)();if(n){var o=Array.from((null==(h=p.__breakpoints)?void 0:h.keys)||[]);return function(c,f,a){void 0===a&&(a=b.AV);var d=Object.keys(c).indexOf(f);if(-1!==d)return c[f];for(var e=a.indexOf(f);e>=0;){if(null!=c[a[e]]){d=e;break}e-=1}if(-1!==d)return c[a[d]]}((0,b.kJ)(f)?(0,b.sq)(Object.entries((0,b.Yq)(f,o)).map(function(a){var b=a[0],c=a[1];return[b,c]})):f,n,o)}}("number"==typeof c?[c]:c)||3,n=Array(j=m).fill(1).map(function(b,a){return a+1}),o=(0,b.cx)("chakra-skeleton__group",k);return d.createElement(e.m$.div,C({className:o},l),n.map(function(a,b){if(t&&b>0)return null;var c,e=t?null:{mb:a===n.length?"0":p,width:(c=a,m>1&&c===n.length?"80%":"100%"),height:q};return d.createElement(f,C({key:n.length.toString()+a,startColor:r,endColor:s,isLoaded:t,fadeDuration:u,speed:v},e),0===b?w:void 0)}))};b.Ts&&(j.displayName="SkeletonText");var k=function(a){var b=a.size,c=D(a,G);return d.createElement(f,C({borderRadius:"full",boxSize:void 0===b?"2rem":b},c))};b.Ts&&(k.displayName="SkeletonCircle");var K=function(){return(0,m.jsxs)(n.Kq,{children:[(0,m.jsx)(f,{height:"20px"}),(0,m.jsx)(f,{height:"20px"}),(0,m.jsx)(f,{height:"20px"})]})},L=function(){var c=(0,s.T)(),a=(0,s.C)(function(a){return a.bookmark.bookmarks}),b=(0,s.C)(function(a){return a.bookmark.gettingBookmarks});return((0,d.useEffect)(function(){c((0,t.oE)())},[]),b)?(0,m.jsx)(K,{}):(0,m.jsx)(m.Fragment,{children:a.map(function(a,b){return(0,m.jsx)(r,{bookmark:a},b)})})}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8312)}),_N_E=a.O()}])