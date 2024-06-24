import{j as e,W as p,r as x,Y as g,a as h}from"./app-D82t0zYb.js";import{G as j}from"./GuestLayout-yEILx2ZO.js";import{I as m}from"./InputError-WXlVQFTR.js";import{P as f}from"./PrimaryButton-B4wsMpZx.js";import{T as i}from"./TextInput-BbAkaH0r.js";import"./index-BpboWu1s.js";function N({className:r="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function I({status:r,canResetPassword:a}){const{data:t,setData:o,post:c,processing:l,errors:n,reset:d}=p({email:"",password:"",remember:!1});x.useEffect(()=>()=>{d("password")},[]);const u=s=>{s.preventDefault(),c(route("login"))};return e.jsxs(j,{children:[e.jsx(g,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{action:"",method:"post",onSubmit:u,children:[e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-text bg-transparent",children:e.jsx("i",{className:"ti-user"})}),e.jsx(i,{id:"email",type:"email",name:"email",value:t.email,className:" form-control ps-15 bg-transparent",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value),autoFocus:!0}),e.jsx(m,{message:n.email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"form-group",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("span",{className:"input-group-text  bg-transparent",children:e.jsx("i",{className:"ti-lock"})}),e.jsx(i,{id:"password",type:"password",name:"password",value:t.password,className:" form-control ps-15 bg-transparent",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e.jsx(m,{message:n.password,className:"mt-2 col-12"})]})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsxs("div",{className:"checkbox",children:[e.jsx(N,{name:"remember",checked:t.remember,onChange:s=>o("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"col-lg-12 text-end",children:[a&&e.jsx(h,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx("div",{className:"col-12 text-center",children:e.jsx(f,{className:"btn btn-danger mt-10",disabled:l,children:"SIGN IN"})})]})]})]})]})}export{I as default};