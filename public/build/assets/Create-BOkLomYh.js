import{W as f,j as e,Y as j,a as c}from"./app-D82t0zYb.js";import{A as p}from"./AdminAuthenticated-Co3WPScJ.js";import{I as i}from"./InputError-WXlVQFTR.js";import{T as t}from"./TextInput-BbAkaH0r.js";import{I as m}from"./InputLabel-Cs9q_KAT.js";import{D as N}from"./DynamicMultiSelect-DBhWOG43.js";import{R as o}from"./RadioButtonLabel-CrtMQTIz.js";import"./Dropdown-n_-zBzZ1.js";import"./AdminSidebar-CQ8Wy-h3.js";import"./listen-BW-l1QEO.js";import"./useWindow-Cc9i1myS.js";import"./Anchor-DZItBogB.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BpboWu1s.js";import"./PermissionAllow-BYDhFGYP.js";import"./ToastNotification-B_Nbzspg.js";import"./react-select-creatable.esm-DdZLfR7f.js";import"./useStateManager-7e1e8489.esm-ZDthZhp5.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./inherits-CWsdyUoO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-D3si1N0f.js";import"./extends-Ba-yMveS.js";import"./hoist-non-react-statics.cjs-Dq3mWWjD.js";function K({auth:n}){const{data:a,setData:d,post:u,errors:r,reset:v}=f({firstname:"",lastname:"",email_id:"",type_of_needed:[],status:"1"}),x=s=>{s.preventDefault(),u(route("admin.subscribers.store"))},l=(s,b)=>{d(s,b),console.log("Data to be submitted:",a)},h=[{value:"Business",label:"Business"},{value:"Franchise",label:"Franchise"},{value:"Commrecial Real Estate",label:"Commrecial Real Estate"},{value:"Preconstruction",label:"Preconstruction"},{value:"Business Services",label:"Business Services"}];return e.jsxs(p,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"News Subscriber/Create"}),children:[e.jsx(j,{title:"News Subscriber Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create News Subscriber"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(c,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(c,{href:route("admin.subscribers.index"),children:"News Subscriber"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:x,children:[e.jsx("div",{className:"form-body",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(t,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:a.firstname,onChange:s=>l("firstname",s.target.value),autoComplete:"off"}),e.jsx(i,{message:r.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(t,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:a.lastname,onChange:s=>l("lastname",s.target.value),autoComplete:"off"}),e.jsx(i,{message:r.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Email Id"}),e.jsx(t,{id:"email_id",type:"email",name:"email_id",className:"form-control",value:a.email_id,onChange:s=>l("email_id",s.target.value),autoComplete:"off"}),e.jsx(i,{message:r.email_id,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(m,{className:"fw-700 fs-16 form-label form-group__label",children:"Type of Needed"}),e.jsx(N,{onChange:s=>l("type_of_needed",s),value:a.type_of_needed,options:h,name:"type_of_needed"}),e.jsx(i,{message:r.type_of_needed,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(o,{name:"status",onChange:s=>l("status",s),value:"1",checked:a.status==="1",label:"Subscribed"}),e.jsx(o,{name:"status",onChange:s=>l("status",s),value:"0",checked:a.status==="0",label:"Unsubscribed"}),e.jsx(i,{message:r.status,className:"mt-2 col-12"})]})]})})]})})})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-sm btn-neutral",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{K as default};
