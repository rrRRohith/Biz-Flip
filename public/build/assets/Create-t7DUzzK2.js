import{W as p,j as e,Y as b,a as m}from"./app-D82t0zYb.js";import{A as f}from"./AdminAuthenticated-Co3WPScJ.js";import{I as i}from"./InputError-WXlVQFTR.js";import{T as o}from"./TextInput-BbAkaH0r.js";import{I as t}from"./InputLabel-Cs9q_KAT.js";import{S as N}from"./SelectOption-C_b25C88.js";import{R as c}from"./RadioButtonLabel-CrtMQTIz.js";import{P as n}from"./PermissionAllow-BYDhFGYP.js";import"./Dropdown-n_-zBzZ1.js";import"./AdminSidebar-CQ8Wy-h3.js";import"./listen-BW-l1QEO.js";import"./useWindow-Cc9i1myS.js";import"./Anchor-DZItBogB.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BpboWu1s.js";import"./ToastNotification-B_Nbzspg.js";import"./react-select.esm-DbCJbCdV.js";import"./useStateManager-7e1e8489.esm-ZDthZhp5.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./inherits-CWsdyUoO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-D3si1N0f.js";import"./extends-Ba-yMveS.js";import"./hoist-non-react-statics.cjs-Dq3mWWjD.js";function M({auth:d}){const{data:a,setData:x,post:h,errors:l,reset:v}=p({color:"",name:"",status:"1",priority:""}),u=s=>{s.preventDefault(),h(route("admin.feature-label.store"))},r=(s,j)=>{x(s,j)};return e.jsxs(f,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Feature Label/Create"}),children:[e.jsx(b,{title:"Feature Label Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Feature Label"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(m,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(n,{permission:"Feature Label Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(m,{href:route("admin.feature-label.index"),children:"Feature Label"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(n,{permission:"Feature Label Create",message:!0,children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(o,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>r("name",s.target.value),autoComplete:"off"}),e.jsx(i,{message:l.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Color"}),e.jsx(o,{id:"color",type:"color",name:"color",className:"form-control",value:a.color,onChange:s=>r("color",s.target.value),autoComplete:"off"}),e.jsx(i,{message:l.color,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Priority"}),e.jsx(N,{onChange:s=>r("priority",s),value:a.priority}),e.jsx(i,{message:l.priority,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(c,{name:"status",onChange:s=>r("status",s),value:"1",checked:a.status==="1",label:"Published"}),e.jsx(c,{name:"status",onChange:s=>r("status",s),value:"0",checked:a.status==="0",label:"Draft"}),e.jsx(i,{message:l.status,className:"mt-2 col-12"})]})]})})]})})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-sm btn-neutral",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{M as default};
