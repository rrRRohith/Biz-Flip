import{r as i,R as S,j as d}from"./app-BzHzbjUi.js";import"./Dropdown-B8zNYMVj.js";import{A as x,a as w}from"./AdminSidebar-Cj8lN2XK.js";import{T as C}from"./ToastNotification-CNh4IScK.js";var t={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},h=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],v=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],g=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],r=typeof window<"u"&&typeof window.document<"u"?window.document:{},u="fullscreenEnabled"in r&&Object.keys(t)||h[0]in r&&h||v[0]in r&&v||g[0]in r&&g||[],a={requestFullscreen:function(e){return e[u[t.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[u[t.requestFullscreen]]},get exitFullscreen(){return r[u[t.exitFullscreen]].bind(r)},get fullscreenPseudoClass(){return":"+u[t.fullscreen]},addEventListener:function(e,l,n){return r.addEventListener(u[t[e]],l,n)},removeEventListener:function(e,l,n){return r.removeEventListener(u[t[e]],l,n)},get fullscreenEnabled(){return!!r[u[t.fullscreenEnabled]]},set fullscreenEnabled(e){},get fullscreenElement(){return r[u[t.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return r[("on"+u[t.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return r[("on"+u[t.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return r[("on"+u[t.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return r[("on"+u[t.fullscreenerror]).toLowerCase()]=e}};function p(){var e=i.useState(!1),l=e[0],n=e[1],s=i.useRef(null);i.useEffect(function(){var c=function(){n(a.fullscreenElement===s.current)};return a.addEventListener("fullscreenchange",c),function(){return a.removeEventListener("fullscreenchange",c)}},[]);var f=i.useCallback(function(){if(a.fullscreenElement)return a.exitFullscreen().then(function(){return a.requestFullscreen(s.current)});if(s.current)return a.requestFullscreen(s.current)},[]),o=i.useCallback(function(){return a.fullscreenElement===s.current?a.exitFullscreen():Promise.resolve()},[]);return i.useMemo(function(){return{active:l,enter:f,exit:o,node:s}},[l,f,o])}var k=function(l){var n=l.handle,s=l.onChange,f=l.children,o=l.className,c=[];return o&&c.push(o),c.push("fullscreen"),n.active&&c.push("fullscreen-enabled"),i.useEffect(function(){s&&s(n.active,n)},[n.active]),S.createElement("div",{className:c.join(" "),ref:n.node,style:n.active?{height:"100%",width:"100%"}:void 0},f)};function z({user:e,header:l,children:n}){const[s,f]=i.useState(!1),o=p(),[c,m]=i.useState(!1),F=b=>{m(b)},E=()=>{f(!s)};return d.jsx(k,{handle:o,onChange:F,className:"bg-gray-100",children:d.jsxs("div",{className:`hold-transition bg-gray-100 light-skin sidebar-mini theme-primary fixed ${s?"sidebar-collapse":""}`,children:[d.jsx(x,{user:e,header:l,onSidebarToggle:E,handle:o,isFullScreen:c}),d.jsx(w,{isCollapsed:s}),d.jsx("main",{className:"bg-gray-100",children:n}),d.jsx(C,{})]})})}export{z as A};