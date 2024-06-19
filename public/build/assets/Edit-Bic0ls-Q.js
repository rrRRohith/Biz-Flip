import{W as w,r as h,j as e,Y as y,a as u}from"./app-B6HJ7lp1.js";import{A as C}from"./AdminAuthenticated-C-7bt9ji.js";import{I as m}from"./InputError-BVTbz1fw.js";import{T as d}from"./TextInput-BdvU3Fpo.js";import{I as c}from"./InputLabel-CWdytDne.js";import{S as I}from"./SelectOption-UvLEXa8P.js";import{R as j}from"./RadioButtonLabel-Bx4IACv4.js";import{D as E}from"./DynamicSelect-DA5k0t43.js";import"./Dropdown-BVFye-0k.js";import"./AdminSidebar-Be_FS12E.js";import"./listen-DHrJC07s.js";import"./useWindow-N7JEgl-N.js";import"./Anchor-CC1UpRJd.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Cob9jMlK.js";import"./PermissionAllow-syxqwq8s.js";import"./ToastNotification-CeNNScY0.js";import"./ReactToastify-BzgMDz3e.js";import"./react-select.esm-CsBOjGLv.js";import"./useStateManager-7e1e8489.esm-DXn6taKC.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./inherits-CWsdyUoO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DKC7yndz.js";import"./extends-Ba-yMveS.js";import"./hoist-non-react-statics.cjs-DfIUY1G9.js";import"./react-select-creatable.esm-NS7G0Kig.js";function te({province_item:a,queryParams:P=null,auth:p,countries:N}){const{data:l,setData:o,post:b,errors:i,reset:S}=w({image:"",name:a.name||"",code:a.code||"",status:a.status=1,position:a.position||"",_method:"PUT",remove_image:!1,country:a.country_name}),[x,n]=h.useState("");h.useEffect(()=>{a.image&&n(a.image)},[a.image]);const f=s=>{const r=s.target.files[0];r&&(o("image",r),n(URL.createObjectURL(r)))},g=()=>{o("image",""),n(""),o("remove_image",!0)},v=s=>{s.preventDefault(),b(route("admin.province.update",a.id))},t=(s,r)=>{o(s,r)};return e.jsxs(C,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Province/Edit"}),children:[e.jsx(y,{title:"Province Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Province"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(u,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(u,{href:route("admin.province.index"),children:"Province"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:v,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(d,{id:"name",type:"text",name:"name",className:"form-control",value:l.name,onChange:s=>t("name",s.target.value),autoComplete:"off"}),e.jsx(m,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Code"}),e.jsx(d,{id:"province-code",type:"text",name:"code",className:"form-control",value:l.code,onChange:s=>t("code",s.target.value),autoComplete:"off"}),e.jsx(m,{message:i.code,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Country"}),e.jsx(E,{options:N,onChange:s=>t("country",s),value:l.country,defaultValue:l.country}),e.jsx(m,{message:i.country,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(I,{onChange:s=>t("position",s),value:l.position,defaultValue:l.position}),e.jsx(m,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(j,{name:"status",onChange:s=>t("status",s),value:"1",checked:l.status===1,label:"Published"}),e.jsx(j,{name:"status",onChange:s=>t("status",s),value:"0",checked:l.status===0,label:"Draft"}),e.jsx(m,{message:i.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:g})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(d,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:f})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-sm btn-neutral",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{te as default};
