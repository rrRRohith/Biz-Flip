<<<<<<< HEAD:public/build/assets/Form-B8u3qaGL.js
import{W as v,j as e,Y as g,a as m}from"./app-DHgmYT40.js";import"./Dropdown-BZb0d06d.js";import"./index-CptKUhxA.js";import"./PermissionAllow-qp5NfsS8.js";import N from"./Wrapper-BVDau-_a.js";import{S as w}from"./react-select.esm-ngE3Ri5O.js";import{I as n}from"./InputError-DeFmK2mn.js";import"./SideBar-CJ3I-g8p.js";import"./ProfileDropdown-BDU_mUZg.js";import"./Header-VVmi70sl.js";import"./Dropdown-RDq-nJkg.js";import"./listen-lwz9WOw0.js";import"./useWindow-D-j940nD.js";import"./Anchor-g_rNmnFv.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-BRkbIYB2.js";import"./ReactToastify-BAV5k0S6.js";import"./Select-49a62830.esm-Bpp_zKiG.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BnZbyPuT.js";import"./hoist-non-react-statics.cjs-DT5OmTFk.js";function H({staff:s,permissions:b,auth:d,success:c,error:p,roles:h}){const{data:r,setData:t,post:x,errors:l,reset:f}=v({firstname:s?s.firstname:null,lastname:s?s.lastname:null,email:s?s.email:null,phone:s?s.phone:null,role_id:s?s.role_id:null,role_name:s?s.role_name:"Select an option",_method:s?"PUT":"POST"}),i=(a,o)=>{t(a,o)},j=(a,o)=>{t(a,o.value)},u=async a=>{a.preventDefault(),await x(route(s?"seller.staffs.update":"seller.staffs.store",{staff:s?s.id:null}),{preserveScroll:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:s?"Edit staff":"Create new staff"}),e.jsx(N,{user:d.user,success:c,error:p,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3 px-lg-6",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"text-xl font-bold",children:s?"Edit staff":"Create new staff"}),e.jsx("div",{className:"ms-auto",children:e.jsxs(m,{href:route("seller.staffs.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsx("div",{children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"})," ",e.jsx("input",{value:r.firstname,onChange:a=>i("firstname",a.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(n,{message:l.firstname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:r.lastname,onChange:a=>i("lastname",a.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(n,{message:l.lastname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"})," ",e.jsx("input",{value:r.email,onChange:a=>i("email",a.target.value),placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(n,{message:l.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("input",{value:r.phone,type:"tel",onChange:a=>i("phone",a.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(n,{message:l.phone})]})]}),e.jsx("div",{className:"mb-5 mt-5",children:e.jsx("h4",{children:"Roles and responsibility"})}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Role"}),e.jsx(w,{defaultValue:{value:r.role_id,label:r.role_name},onChange:a=>{j("role_id",a)},name:"role_id",options:h}),e.jsx(n,{message:l.role_id})]})}),e.jsx("div",{className:"mb-5 mt-5",children:e.jsx("h4",{children:s?e.jsx(e.Fragment,{children:"Change password"}):e.jsx(e.Fragment,{children:"Set password"})})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"New password"})," ",e.jsx("input",{type:"password",value:r.password,onChange:a=>i("password",a.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),e.jsx(n,{message:l.password})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Conform new password"})," ",e.jsx("input",{type:"password",value:r.confirm_password,onChange:a=>i("confirm_password",a.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),e.jsx(n,{message:l.confirm_password})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx(m,{href:route("seller.staffs.index"),className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})]})]})})]})})})})]})}export{H as default};
=======
import{W as v,j as e,Y as g,a as m}from"./app-B3lS64dG.js";import"./Dropdown-ChjA9zgO.js";import"./index-D9o93I7c.js";import"./PermissionAllow-wxFNq2kt.js";import N from"./Wrapper-C3MHkMtH.js";import{S as w}from"./react-select.esm-Q33XHUIR.js";import{I as n}from"./InputError-D08Aep0b.js";import"./SideBar-C1g_VcrJ.js";import"./ProfileDropdown-t4BOFJM5.js";import"./Header-DHY0YYio.js";import"./Dropdown-BuIg32jC.js";import"./listen-B_F_1ACR.js";import"./useWindow-DgLGm7_F.js";import"./Anchor-BTx_t2Do.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-mdO7JHOe.js";import"./ReactToastify-_GpyaRek.js";import"./Select-49a62830.esm-qpeq2c33.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-CclaArDC.js";import"./hoist-non-react-statics.cjs-DA1IKqmT.js";function H({staff:s,permissions:b,auth:d,success:c,error:p,roles:h}){const{data:r,setData:t,post:x,errors:l,reset:f}=v({firstname:s?s.firstname:null,lastname:s?s.lastname:null,email:s?s.email:null,phone:s?s.phone:null,role_id:s?s.role_id:null,role_name:s?s.role_name:"Select an option",_method:s?"PUT":"POST"}),i=(a,o)=>{t(a,o)},j=(a,o)=>{t(a,o.value)},u=async a=>{a.preventDefault(),await x(route(s?"seller.staffs.update":"seller.staffs.store",{staff:s?s.id:null}),{preserveScroll:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:s?"Edit staff":"Create new staff"}),e.jsx(N,{user:d.user,success:c,error:p,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container px-3 px-lg-6",children:e.jsxs("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"text-xl font-bold",children:s?"Edit staff":"Create new staff"}),e.jsx("div",{className:"ms-auto",children:e.jsxs(m,{href:route("seller.staffs.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsx("div",{children:e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Contact Information"})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"First name"})," ",e.jsx("input",{value:r.firstname,onChange:a=>i("firstname",a.target.value),type:"text",placeholder:"Your first name",className:"form-control",id:"first_name"})]}),e.jsx(n,{message:l.firstname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:r.lastname,onChange:a=>i("lastname",a.target.value),type:"text",placeholder:"Your last name",className:"form-control"})]}),e.jsx(n,{message:l.lastname})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",children:"Email"})," ",e.jsx("input",{value:r.email,onChange:a=>i("email",a.target.value),placeholder:"Your email address",type:"email",className:"form-control"})]}),e.jsx(n,{message:l.email})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Phone number"})," ",e.jsx("input",{value:r.phone,type:"tel",onChange:a=>i("phone",a.target.value),placeholder:"Your phone number",className:"form-control"})]}),e.jsx(n,{message:l.phone})]})]}),e.jsx("div",{className:"mb-5 mt-5",children:e.jsx("h4",{children:"Roles and responsibility"})}),e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-md-6",children:[e.jsx("label",{children:"Role"}),e.jsx(w,{defaultValue:{value:r.role_id,label:r.role_name},onChange:a=>{j("role_id",a)},name:"role_id",options:h}),e.jsx(n,{message:l.role_id})]})}),e.jsx("div",{className:"mb-5 mt-5",children:e.jsx("h4",{children:s?e.jsx(e.Fragment,{children:"Change password"}):e.jsx(e.Fragment,{children:"Set password"})})}),e.jsxs("div",{className:"row g-5",children:[e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"New password"})," ",e.jsx("input",{type:"password",value:r.password,onChange:a=>i("password",a.target.value),name:"password",id:"password",placeholder:"Your new secret password",className:"form-control"})]}),e.jsx(n,{message:l.password})]}),e.jsxs("div",{className:"col-md-6",children:[e.jsxs("div",{children:[e.jsx("label",{children:"Conform new password"})," ",e.jsx("input",{type:"password",value:r.confirm_password,onChange:a=>i("confirm_password",a.target.value),name:"confirm_password",id:"confirm_password",placeholder:"Confirm your secret password",className:"form-control"})]}),e.jsx(n,{message:l.confirm_password})]}),e.jsxs("div",{className:"col-12 text-end",children:[e.jsx(m,{href:route("seller.staffs.index"),className:"btn btn-neutral me-2",children:"Cancel"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Save changes"})]})]})]})})]})})})})]})}export{H as default};
>>>>>>> c94f848a75a5107ef7180eb58f9076e4e7e00291:public/build/assets/Form-DQFChXZw.js
