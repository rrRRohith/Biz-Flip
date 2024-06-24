import{W as f,j as e,Y as N,a as m}from"./app-D6Sd9B5k.js";import{A as b}from"./AdminAuthenticated-DQiZEF6X.js";import{I as t}from"./InputError-BQMCFBbg.js";import{T as c}from"./TextInput-70agebQA.js";import{I as o}from"./InputLabel-Ba-DYfBS.js";import{S as v}from"./SelectOption-10f0SW5P.js";import{R as n}from"./RadioButtonLabel-B_NuGFMH.js";import{P as d}from"./PermissionAllow-Bz6giM87.js";import"./Dropdown-BqkvRmFR.js";import"./AdminSidebar-Bv5jEERs.js";import"./listen-BKFQpVTe.js";import"./useWindow-BL_8lxMa.js";import"./Anchor-BKbuGxYG.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-kKGF5m3D.js";import"./ToastNotification-Vn82Nl06.js";import"./react-select.esm-B6L-4yDz.js";import"./useStateManager-7e1e8489.esm-DCwUItwu.js";import"./objectSpread2-Cb9oE9w6.js";import"./defineProperty-D_iN_pGO.js";import"./inherits-Ds6J14_q.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-CVAkBKNs.js";import"./extends-Ba-yMveS.js";import"./hoist-non-react-statics.cjs-CjqPhzwV.js";function M({label_item:r,queryParams:g=null,auth:x}){const{data:a,setData:u,post:h,errors:i,reset:y}=f({color:r.color||"",name:r.name||"",status:r.status=1,priority:r.priority||"",_method:"PUT"}),j=s=>{s.preventDefault(),h(route("admin.feature-label.update",r.id))},l=(s,p)=>{u(s,p)};return e.jsxs(b,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label/Edit"}),children:[e.jsx(N,{title:"Feature Label Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Feature Label"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(d,{permission:"Feature Label Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(m,{href:route("admin.feature-label.index"),children:"Feature Label"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(d,{permission:"Feature Label Edit",message:!0,children:e.jsxs("form",{onSubmit:j,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(c,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>l("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Color"}),e.jsx(c,{id:"color",type:"color",name:"color",className:"form-control",value:a.color,onChange:s=>l("color",s.target.value),autoComplete:"off"}),e.jsx(t,{message:i.color,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Priority"}),e.jsx(v,{onChange:s=>l("priority",s),value:a.priority,defaultValue:a.priority}),e.jsx(t,{message:i.priority,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(n,{name:"status",onChange:s=>l("status",s),value:"1",checked:a.status===1,label:"Published"}),e.jsx(n,{name:"status",onChange:s=>l("status",s),value:"0",checked:a.status===0,label:"Draft"}),e.jsx(t,{message:i.status,className:"mt-2 col-12"})]})]})})})]})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-sm btn-neutral",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{M as default};