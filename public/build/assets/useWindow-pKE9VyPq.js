import{r}from"./app-BgVwgUXI.js";import{j as u}from"./listen-BbQaJNIh.js";function c(){return r.useState(null)}function i(){const e=r.useRef(!0),n=r.useRef(()=>e.current);return r.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),n.current}function a(e){const n=r.useRef(null);return r.useEffect(()=>{n.current=e}),n.current}function f(e,n){if(e.contains)return e.contains(n);if(e.compareDocumentPosition)return e===n||!!(e.compareDocumentPosition(n)&16)}const t=r.createContext(u?window:void 0);t.Provider;function m(){return r.useContext(t)}export{i as a,m as b,f as c,a as d,c as u};