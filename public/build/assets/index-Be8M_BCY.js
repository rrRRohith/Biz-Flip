<<<<<<< HEAD:public/build/assets/index-D0t_XM3D.js
import{W as N,r as m,j as e,Y as b,a as g}from"./app-DHgmYT40.js";import"./Dropdown-BZb0d06d.js";import"./index-CptKUhxA.js";import{P as w}from"./PermissionAllow-qp5NfsS8.js";import{A as y}from"./AdminAuthenticated-CmmW8Z63.js";import"./TextInput-b9MTVA1L.js";import{I as l}from"./InputError-DeFmK2mn.js";import"./AdminHeader-CRuQSHr8.js";import"./Dropdown-RDq-nJkg.js";import"./listen-lwz9WOw0.js";import"./useWindow-D-j940nD.js";import"./Anchor-g_rNmnFv.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./BootstrapModalManager-A8h4H9US.js";import"./Fade-D9pTdBlW.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CV7qmBJB.js";import"./ToastNotification-BRkbIYB2.js";import"./ReactToastify-BAV5k0S6.js";function K({user:a,queryParams:C=null,auth:d,success:h,error:x}){const{data:i,setData:c,post:p,errors:r,reset:j}=N({picture:"",firstname:a.firstname,lastname:a.lastname,email:a.email,phone:a.phone,password:"",confirm_password:""}),[u,o]=m.useState("");m.useEffect(()=>{a.picture&&o(a.picture)},[a.picture]);const v=s=>{const t=s.target.files[0];t&&(c("picture",t),o(URL.createObjectURL(t)))},n=(s,t)=>{c(s,t)},f=async s=>{s.preventDefault(),await p(route("admin.profile.store"),{preserveScroll:!0,onSuccess:()=>{j("confirm_password","password")}})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Profile"}),e.jsx(y,{success:h,error:x,user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Your profile settings"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(g,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Profile"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:e.jsx(w,{permission:"Profile Edit",message:"true",children:e.jsx("form",{onSubmit:f,children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsx("div",{className:"mb-30",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"})," ",e.jsx("input",{value:i.firstname,onChange:s=>n("firstname",s.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(l,{message:r.firstname})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:i.lastname,onChange:s=>n("lastname",s.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(l,{message:r.lastname})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"})," ",e.jsx("input",{value:i.email,onChange:s=>n("email",s.target.value),placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(l,{message:r.email})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("input",{value:i.phone,type:"tel",onChange:s=>n("phone",s.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(l,{message:r.phone})]})]}),e.jsx("div",{className:"mb-30 mt-30",children:e.jsx("h4",{children:"Change password"})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"New password"})," ",e.jsx("input",{type:"password",value:i.password,onChange:s=>n("password",s.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),e.jsx(l,{message:r.password})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Conform new password"})," ",e.jsx("input",{type:"password",value:i.confirm_password,onChange:s=>n("confirm_password",s.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),e.jsx(l,{message:r.confirm_password})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-neutral",children:"Save changes"})]})]})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"card rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:" text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("a",{href:"#",className:" border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:u,className:"rounded30",onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"}})})}),e.jsx(l,{message:r.picture})]}),e.jsx("input",{onChange:v,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"}),e.jsx("div",{className:"ms-auto",children:e.jsx("label",{htmlFor:"avatar",type:"button",className:"btn btn-sm btn-neutral",children:"Upload"})})]})})})})]})})})})})})})})})]})})})]})}export{K as default};
=======
import{W as N,r as m,j as e,Y as b,a as g}from"./app-B3lS64dG.js";import"./Dropdown-ChjA9zgO.js";import"./index-D9o93I7c.js";import{P as w}from"./PermissionAllow-wxFNq2kt.js";import{A as y}from"./AdminAuthenticated-4dk0wFJR.js";import"./TextInput-BanJiQi-.js";import{I as l}from"./InputError-D08Aep0b.js";import"./AdminHeader-D0A5jEzG.js";import"./Dropdown-BuIg32jC.js";import"./listen-B_F_1ACR.js";import"./useWindow-DgLGm7_F.js";import"./Anchor-BTx_t2Do.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./BootstrapModalManager-CaKnmYyO.js";import"./Fade-HZCctfIx.js";import"./inheritsLoose-DbZSpFkk.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ToastNotification-mdO7JHOe.js";import"./ReactToastify-_GpyaRek.js";function K({user:a,queryParams:C=null,auth:d,success:h,error:x}){const{data:i,setData:c,post:p,errors:r,reset:j}=N({picture:"",firstname:a.firstname,lastname:a.lastname,email:a.email,phone:a.phone,password:"",confirm_password:""}),[u,o]=m.useState("");m.useEffect(()=>{a.picture&&o(a.picture)},[a.picture]);const v=s=>{const t=s.target.files[0];t&&(c("picture",t),o(URL.createObjectURL(t)))},n=(s,t)=>{c(s,t)},f=async s=>{s.preventDefault(),await p(route("admin.profile.store"),{preserveScroll:!0,onSuccess:()=>{j("confirm_password","password")}})};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:"Profile"}),e.jsx(y,{success:h,error:x,user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Your profile settings"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(g,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Profile"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:e.jsx(w,{permission:"Profile Edit",message:"true",children:e.jsx("form",{onSubmit:f,children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsx("div",{className:"mb-30",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"})," ",e.jsx("input",{value:i.firstname,onChange:s=>n("firstname",s.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(l,{message:r.firstname})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:i.lastname,onChange:s=>n("lastname",s.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(l,{message:r.lastname})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"})," ",e.jsx("input",{value:i.email,onChange:s=>n("email",s.target.value),placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(l,{message:r.email})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("input",{value:i.phone,type:"tel",onChange:s=>n("phone",s.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(l,{message:r.phone})]})]}),e.jsx("div",{className:"mb-30 mt-30",children:e.jsx("h4",{children:"Change password"})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"New password"})," ",e.jsx("input",{type:"password",value:i.password,onChange:s=>n("password",s.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),e.jsx(l,{message:r.password})]}),e.jsxs("div",{className:"col-md-6 mb-3",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Conform new password"})," ",e.jsx("input",{type:"password",value:i.confirm_password,onChange:s=>n("confirm_password",s.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),e.jsx(l,{message:r.confirm_password})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx("button",{type:"button",className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-sm btn-neutral",children:"Save changes"})]})]})]}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"card rounded-input",children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:" text-center",children:[e.jsxs("div",{children:[e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("a",{href:"#",className:" border-2 border-gray rounded-circle text-white",children:e.jsx("img",{alt:"...",src:u,className:"rounded30",onError:s=>{s.target.onerror=null,s.target.src="/assets/admin/images/noimage.webp"}})})}),e.jsx(l,{message:r.picture})]}),e.jsx("input",{onChange:v,type:"file",id:"avatar",className:"d-none",hidden:!0,accept:"image/*"}),e.jsx("div",{className:"ms-auto",children:e.jsx("label",{htmlFor:"avatar",type:"button",className:"btn btn-sm btn-neutral",children:"Upload"})})]})})})})]})})})})})})})})})]})})})]})}export{K as default};
>>>>>>> c94f848a75a5107ef7180eb58f9076e4e7e00291:public/build/assets/index-Be8M_BCY.js
