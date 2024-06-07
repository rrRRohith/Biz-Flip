import{W as y,r as h,j as e,Y as I,a as j}from"./app-BzHzbjUi.js";import{A as S}from"./AdminAuthenticated-BoOKwFnD.js";import{I as c}from"./InputError-DyfHzd9X.js";import{T as o}from"./TextInput-GwKOoAsn.js";import{I as n}from"./InputLabel-rbHdzVPQ.js";import{S as B}from"./SelectOption-iaRe8mOV.js";import{D}from"./DynamicSelect-CKcR9cpd.js";import{R as b}from"./RadioButtonLabel-CRqrDlJp.js";import{P as u}from"./PermissionAllow-r-u98lAn.js";import"./Dropdown-B8zNYMVj.js";import"./AdminSidebar-Cj8lN2XK.js";import"./useMergedRefs-p-XhYV3y.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BiAyyWDW.js";import"./ToastNotification-CNh4IScK.js";import"./react-select.esm-DBecoRB2.js";import"./Select-49a62830.esm-C2OInfWV.js";import"./inherits-CSJ0amQz.js";import"./toPropertyKey-DB3bi1z3.js";import"./setPrototypeOf-DgZC2w_0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./emotion-react.browser.esm-CEPjmQiE.js";import"./react-select-creatable.esm-BH6QLdHH.js";function ae({auth:g}){const{data:t,setData:i,post:N,errors:r,reset:P}=y({title:"",redirection:"",type:"",new_window:"",picture_desktop:"",picture_mobile:"",position:"",status:"1"}),f=s=>{s.preventDefault(),N(route("admin.banners.store"))},[m,d]=h.useState(""),[x,p]=h.useState(""),v=s=>{const a=s.target.files[0];a&&(i("picture_desktop",a),d(URL.createObjectURL(a)))},w=()=>{i("picture_desktop",""),d("")},C=s=>{const a=s.target.files[0];a&&(i("picture_mobile",a),p(URL.createObjectURL(a)))},_=()=>{i("picture_mobile",""),p("")},l=(s,a)=>{i(s,a)},k=[{value:"Banner Slider",label:"Banner Slider"},{value:"Home Tile",label:"Home Tile"},{value:"Page Top Tile",label:"Page Top Tile"}];return e.jsxs(S,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Banner/Create"}),children:[e.jsx(I,{title:"Banner Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Banner"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(j,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(u,{permission:"Banners Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(j,{href:route("admin.banners.index"),children:"Banner"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(u,{permission:"Banner Create",message:!0,children:e.jsxs("form",{onSubmit:f,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-6",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(o,{id:"title",type:"text",name:"title",className:"form-control",value:t.title,onChange:s=>l("title",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.title,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Redirection"}),e.jsx(o,{id:"redirection",type:"text",name:"redirection",className:"form-control",value:t.redirection,onChange:s=>l("redirection",s.target.value),autoComplete:"off"}),e.jsx(c,{message:r.redirection,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Type"}),e.jsx(D,{onChange:s=>l("type",s),value:t.type,options:k,name:"type"}),e.jsx(c,{message:r.type,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(n,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(B,{onChange:s=>l("position",s),value:t.position}),e.jsx(c,{message:r.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(b,{name:"status",onChange:s=>l("status",s),value:"1",checked:t.status==="1",label:"Published"}),e.jsx(b,{name:"status",onChange:s=>l("status",s),value:"0",checked:t.status==="0",label:"Draft"}),e.jsx(c,{message:r.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Desktop Image"}),e.jsxs("div",{className:"desktop-img",children:[m?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:m,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:w})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(o,{id:"project_image_path",type:"file",name:"picture_desktop",className:"d-none mt-1 block w-full upload",onChange:v})]})]})]})}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Mobile Image"}),e.jsxs("div",{className:"desktop-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:_})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(o,{id:"project_image_path2",type:"file",name:"picture_mobile",className:"d-none mt-1 block w-full upload",onChange:C})]})]})]})})]})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{ae as default};
