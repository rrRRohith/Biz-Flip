import{r as i,W as x,j as e,S as h,Y as u,b as j}from"./app-D6Sd9B5k.js";import"./Dropdown-BqkvRmFR.js";import"./index-kKGF5m3D.js";import"./PermissionAllow-Bz6giM87.js";import v from"./Wrapper-BnulUZI3.js";import b from"./LeadsTable-BaX64tko.js";import{S as f}from"./react-select.esm-B6L-4yDz.js";import"./SideBar-vaziL8R_.js";import"./ProfileDropdown-CTfasq-h.js";import"./Header-D5t2Gcbf.js";import"./ToastNotification-Vn82Nl06.js";import"./LeadStatusBtn-CfKMRJJ2.js";import"./server.browser-QacEbX0Q.js";import"./Modal-CGdGAB4E.js";import"./listen-BKFQpVTe.js";import"./useWindow-BL_8lxMa.js";import"./Fade-gQdSWnLQ.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./TransitionGroupContext-BlztnDVr.js";import"./index-CTUAnpqy.js";import"./Lead-C70mDtpn.js";import"./useStateManager-7e1e8489.esm-DCwUItwu.js";import"./extends-CCbyfPlC.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./inherits-Ds6J14_q.js";import"./emotion-react.browser.esm-CVAkBKNs.js";import"./extends-Ba-yMveS.js";import"./hoist-non-react-statics.cjs-CjqPhzwV.js";function U({auth:o,leads:l,ads:m}){const[d,s]=i.useState(!1),[n,c]=i.useState(l.data),{data:t,setData:r}=x({ad:"",ad_title:"All ads",q:""}),p=async()=>{s(!0);const a=await j.get(route("seller.leads.search",t));c(a.data),s(!1)};return e.jsxs(e.Fragment,{children:[d&&e.jsx(h,{}),e.jsx(u,{title:"Leads"}),e.jsx(v,{user:o.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-screen-xl vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Leads"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:t.q,onChange:a=>r("q",a.target.value),type:"search",placeholder:"Search by name, phone etc",className:"text-overflow form-control"})}),e.jsx("div",{className:"",children:e.jsx(f,{defaultValue:{value:t.ad,label:t.ad_title},onChange:a=>r("ad",a.value),options:[{label:"All ads",value:""},...m]})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:a=>p(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})})]})}),e.jsx(b,{leads:n})]})})]})})})})]})}export{U as default};