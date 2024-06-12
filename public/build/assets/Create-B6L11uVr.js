import{W as b,r as v,j as e,Y as C,a as x}from"./app-CjewbWUq.js";import{A as w}from"./AdminAuthenticated-B6RdVAZp.js";import{I as m}from"./InputError-DqsPzRm2.js";import{T as r}from"./TextInput-NDa9nm39.js";import{I as o}from"./InputLabel-DsaABNIQ.js";import{S as _}from"./SelectOption-BjmQ70Pn.js";import{R as h}from"./RadioButtonLabel-DzknY1tF.js";import{P as j}from"./PermissionAllow-CRcCMSN3.js";import"./Dropdown-CJ6RRfHE.js";import"./AdminSidebar-BByzt6BP.js";import"./listen-wp56gr8a.js";import"./useWindow-Cm-iF9fr.js";import"./Anchor-C1shSEEN.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-DXXuAbUi.js";import"./ToastNotification-Chxa-umb.js";import"./react-select.esm-Dx1wqq-N.js";import"./useStateManager-7e1e8489.esm-D8xHEF_V.js";import"./inherits-DuN3otLB.js";import"./toPropertyKey-PLuKRk1e.js";import"./setPrototypeOf-DgZC2w_0.js";import"./assertThisInitialized-B9jnkVVz.js";import"./emotion-react.browser.esm-0eDStj_R.js";function V({auth:p}){const{data:a,setData:n,post:g,errors:i,reset:y}=b({image:"",name:"",company_name:"",designation:"",message:"",status:"1",position:""}),u=s=>{s.preventDefault(),g(route("admin.testimonial.store"))},[c,d]=v.useState(""),N=s=>{const t=s.target.files[0];t&&(n("image",t),d(URL.createObjectURL(t)))},f=()=>{n("image",""),d("")},l=(s,t)=>{n(s,t)};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Testimonial/Create"}),children:[e.jsx(C,{title:"Testimonial Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Testimonial"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(x,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx(j,{permission:"Testimonials Listing",children:e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(x,{href:route("admin.testimonial.index"),children:"Testimonial"})})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(j,{permission:"Testimonial Create",message:!0,children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"form-body",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Name"}),e.jsx(r,{id:"name",type:"text",name:"name",className:"form-control",value:a.name,onChange:s=>l("name",s.target.value),autoComplete:"off"}),e.jsx(m,{message:i.name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(r,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:a.company_name,onChange:s=>l("company_name",s.target.value),autoComplete:"off"}),e.jsx(m,{message:i.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-4 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Designation"}),e.jsx(r,{id:"designation",type:"text",name:"designation",className:"form-control",value:a.designation,onChange:s=>l("designation",s.target.value),autoComplete:"off"}),e.jsx(m,{message:i.designation,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Message"}),e.jsx("textarea",{id:"message",type:"text",name:"message",className:"form-control",value:a.message,onChange:s=>l("message",s.target.value),autoComplete:"off",rows:4,cols:40}),e.jsx(m,{message:i.message,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(o,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(_,{onChange:s=>l("position",s),value:a.position}),e.jsx(m,{message:i.position,className:"mt-2 col-12"})]})})]}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(h,{name:"status",onChange:s=>l("status",s),value:"1",checked:a.status==="1",label:"Published"}),e.jsx(h,{name:"status",onChange:s=>l("status",s),value:"0",checked:a.status==="0",label:"Draft"}),e.jsx(m,{message:i.status,className:"mt-2 col-12"})]})]})})})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[c?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:c,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:f})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"},className:"mb-15 text-center"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-neutral",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(r,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:N})]})]})]})})})})]})}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{V as default};