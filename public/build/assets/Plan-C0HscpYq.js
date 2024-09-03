import{W as _,j as e,Y as w,a as P}from"./app-Bf-6bzmR.js";import"./Dropdown-BsfNxr2r.js";import"./index-CkER-8N1.js";import"./PermissionAllow-DcNQnnGM.js";import V from"./Wrapper-DjTZ9vxL.js";import{S as D}from"./react-select.esm-BL0KiKBC.js";import{I as t}from"./InputError-BPQqK5NZ.js";import"./SideBar-gQclwU0z.js";import"./ProfileDropdown-BkLn1oO2.js";import"./Header-B9OmgKZr.js";import"./Dropdown-5W8RJOZQ.js";import"./listen-D8yN62rw.js";import"./useWindow-C0AXGrjy.js";import"./Anchor-DkY9dI_7.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-BYRUuGGv.js";import"./Select-49a62830.esm-D_yjJMAl.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./extends-DM2IsgWP.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BNGZ2AcF.js";import"./hoist-non-react-statics.cjs-BKQ1xvJS.js";function ee({auth:m,plan:c,error:x,success:h,province_options:p,address:o}){const j=a=>{let s=a.replace(/\D/g,"");return s.length>16&&(s=s.slice(0,16)),s},u=a=>a.replace(/[^A-Za-z\s]/g,""),v=a=>{let s=a.replace(/\D/g,""),i=s.slice(0,2);parseInt(i)>12&&(i="12");let C=s.slice(2,4);return s.length>2&&(s=i+"/"+C),s},g=a=>{const s=a.target.value,i=j(s);d("card_number",i)},N=a=>{const s=a.target.value,i=u(s);d("card_name",i)},b=a=>{const s=a.target.value,i=v(s);d("card_date",i)},{data:l,setData:d,post:f,errors:r,reset:E}=_({firstname:o.firstname,lastname:o.lastname,email:o.email,phone:o.phone,address:o.address,city:o.city,province:o.province,postalcode:o.postalcode,card_name:"",card_date:"",card_cvv:"",card_number:"",_method:"PUT"}),y=async a=>{a.preventDefault(),await f(route("seller.plans.update",c.id),{preserveScroll:!0})},n=(a,s)=>{d(a,s)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{title:c.name}),e.jsx(V,{user:m.user,success:h,error:x,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsx("div",{className:"vstack gap-6 m-auto",children:e.jsxs("div",{className:"container max-w-screen-lg vstack gap-6 m-auto",children:[e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"text-xl font-bold",children:"Purchase new plan"}),e.jsx("div",{className:"ms-auto",children:e.jsxs(P,{href:route("seller.plans.index"),className:"btn btn-neutral",children:[e.jsx("i",{className:"bi bi-arrow-left"})," Go back"]})})]}),e.jsx("form",{onSubmit:y,children:e.jsxs("div",{className:"row justify-content-center",children:[e.jsxs("div",{className:"col-sm-7 col-12",children:[e.jsx("div",{className:"mb-5",children:e.jsx("h4",{children:"Billing information"})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"First name"}),e.jsx("input",{value:l.firstname,onChange:a=>n("firstname",a.target.value),type:"text",placeholder:"First name",className:"form-control"}),e.jsx(t,{message:r.firstname})]})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Last name"}),e.jsx("input",{value:l.lastname,onChange:a=>n("lastname",a.target.value),type:"text",placeholder:"Last name",className:"form-control"}),e.jsx(t,{message:r.lastname})]})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Phone"}),e.jsx("input",{value:l.phone,onChange:a=>n("phone",a.target.value),type:"text",placeholder:"Phone",className:"form-control"}),e.jsx(t,{message:r.phone})]})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Email"}),e.jsx("input",{value:l.email,onChange:a=>n("email",a.target.value),type:"email",placeholder:"Email",className:"form-control"}),e.jsx(t,{message:r.email})]})}),e.jsx("div",{className:"col-12",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Address"}),e.jsx("input",{value:l.address,onChange:a=>n("address",a.target.value),placeholder:"Address",className:"form-control"}),e.jsx(t,{message:r.address})]})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"City"}),e.jsx("input",{value:l.city,onChange:a=>n("city",a.target.value),placeholder:"City",className:"form-control"}),e.jsx(t,{message:r.city})]})}),e.jsx("div",{className:"col-md-6 col-12",children:e.jsxs("div",{children:[e.jsx("label",{children:"Province"}),e.jsx(D,{defaultValue:{value:l.province,label:l.province?l.province:"Select..."},onChange:a=>{n("province",a.value)},options:p}),e.jsx(t,{message:r.province})]})}),e.jsx("div",{className:"col-sm-6 col-12",children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Postalcode"}),e.jsx("input",{value:l.postalcode,onChange:a=>n("postalcode",a.target.value),placeholder:"Postalcode",className:"form-control"}),e.jsx(t,{message:r.postalcode})]})})]}),e.jsx("div",{className:"text-muted text-gray-500",children:"Note: Buying a new plan will invalidate all your existing plans and any unused ad listing benefits. Please make sure to utilize any remaining listings or benefits from your current plan before you purchase a new one."})]}),e.jsxs("div",{className:"col-sm-5 col-12",children:[e.jsx("div",{class:"card rounded-3 py-4 mb-5",children:e.jsxs("div",{class:"card-body text-center",children:[e.jsx("h5",{class:"card-title font-bolder",children:c.name}),e.jsx("div",{class:"text-primary mb-3",children:e.jsxs("h4",{class:"card-title text-primary",children:["$",c.price," ",e.jsxs("small",{children:["/ ",c.duration," month"]})," "]})}),e.jsx("p",{class:"card-text mb-3",children:c.description})]})}),e.jsx("div",{className:"mb-5",children:e.jsxs("div",{className:"text-end",children:[e.jsxs("div",{children:["Sub total. ",e.jsxs("span",{className:"font-bolder",children:["$",c.price]})]}),e.jsxs("div",{children:["Tax. ",e.jsxs("span",{className:"font-bolder",children:["$",c.tax_amount]})]}),e.jsxs("div",{children:["Grand total. ",e.jsxs("span",{className:"font-bolder",children:["$",c.total_amount]})]})]})}),e.jsxs("div",{className:"mb-5",children:[e.jsx("div",{className:"mb-3",children:e.jsx("img",{className:"w-full",src:"https://res.cloudinary.com/rr6/image/upload/v1725361095/cards_jokpdn.png",alt:""})}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Name on card"}),e.jsx("input",{value:l.card_name,onChange:N,type:"text",placeholder:"Name on card",className:"form-control"}),e.jsx(t,{message:r.card_name})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{children:"Card number"}),e.jsx("input",{value:l.card_number,onChange:g,type:"text",placeholder:"Card number",className:"form-control"}),e.jsx(t,{message:r.card_number})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6 ",children:e.jsxs("div",{children:[e.jsx("label",{children:"Exp date"}),e.jsx("input",{value:l.card_date,onChange:b,type:"text",placeholder:"Exp date",className:"form-control"}),e.jsx(t,{message:r.card_date})]})}),e.jsx("div",{className:"col-6",children:e.jsxs("div",{children:[e.jsx("label",{children:"CVV"}),e.jsx("input",{value:l.card_cvv,maxLength:4,onChange:a=>n("card_cvv",a.target.value),type:"text",placeholder:"CVV",className:"form-control"}),e.jsx(t,{message:r.card_cvv})]})})]})]}),e.jsxs("button",{type:"submit",class:"btn d-block btn-primary w-full",children:["Pay ",e.jsxs("span",{className:"font-bolder",children:["$",c.total_amount]})," "]})]}),e.jsx("div",{className:"col-sm-6 col-12"})]})})]})})})})})]})}export{ee as default};
