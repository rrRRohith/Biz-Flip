import{W as S,r as d,j as e,Y as P,a as j}from"./app-B6HJ7lp1.js";import{A as k}from"./AdminAuthenticated-C-7bt9ji.js";import{I as t}from"./InputError-BVTbz1fw.js";import{T as f}from"./TextInput-BdvU3Fpo.js";import{I as n}from"./InputLabel-CWdytDne.js";import{S as D}from"./SelectOption-UvLEXa8P.js";import{R as v}from"./RadioButtonLabel-Bx4IACv4.js";import{D as N}from"./DynamicSelect-DA5k0t43.js";import"./Dropdown-BVFye-0k.js";import"./AdminSidebar-Be_FS12E.js";import"./listen-DHrJC07s.js";import"./useWindow-N7JEgl-N.js";import"./Anchor-CC1UpRJd.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-Cob9jMlK.js";import"./PermissionAllow-syxqwq8s.js";import"./ToastNotification-CeNNScY0.js";import"./ReactToastify-BzgMDz3e.js";import"./react-select.esm-CsBOjGLv.js";import"./useStateManager-7e1e8489.esm-DXn6taKC.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./inherits-CWsdyUoO.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-DKC7yndz.js";import"./extends-Ba-yMveS.js";import"./hoist-non-react-statics.cjs-DfIUY1G9.js";import"./react-select-creatable.esm-NS7G0Kig.js";function ce({city_item:a,queryParams:R=null,auth:x,countries:b}){console.log(a);const{data:r,setData:c,post:g,errors:o,reset:A}=S({image:"",name:a.name||"",status:(a.status=="published",1),position:a.position||"",_method:"PUT",remove_image:!1,country:a.country,province:a.province}),[h,m]=d.useState("");d.useEffect(()=>{a.image&&m(a.image),a.country&&p(a.country_id)},[a.image,a.country]);const w=s=>{const l=s.target.files[0];l&&(c("image",l),m(URL.createObjectURL(l)))},C=()=>{c("image",""),m(""),c("remove_image",!0)},y=s=>{s.preventDefault(),g(route("admin.city.update",a.id))},[E,u]=d.useState([]),p=async s=>{if(!s){u([]);return}try{const I=await(await fetch(`/admin/provinces/${s}`,{headers:{Authorization:`Bearer ${x.token}`}})).json();u(I)}catch(l){console.error("Error fetching provinces:",l)}},i=(s,l)=>{c(s,l),s==="country"&&p(l)};return e.jsxs(k,{user:x.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City/Edit"}),children:[e.jsx(P,{title:"City Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit City"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.city.index"),children:"City"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:y,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(f,{id:"name",type:"text",name:"name",className:"form-control",value:r.name,onChange:s=>i("name",s.target.value),autoComplete:"off"}),e.jsx(t,{message:o.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Country"}),e.jsx(N,{options:b,onChange:s=>i("country",s),defaultValue:r.country,value:r.country}),e.jsx(t,{message:o.country,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(N,{options:E,onChange:s=>i("province",s),defaultValue:r.province,value:r.province}),e.jsx(t,{message:o.province,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(D,{onChange:s=>i("position",s),value:r.position,defaultValue:r.position}),e.jsx(t,{message:o.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(v,{name:"status",onChange:s=>i("status",s),value:"1",checked:r.status===1,label:"Published"}),e.jsx(v,{name:"status",onChange:s=>i("status",s),value:"0",checked:r.status===0,label:"Draft"}),e.jsx(t,{message:o.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[h?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:h,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",role:"button",onClick:C})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(f,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:w})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-sm btn-neutral",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{ce as default};
