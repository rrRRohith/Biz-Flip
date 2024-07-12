import{r as l,j as e,Y as f,a as o,y as v,b as T}from"./app-DQNkgWdZ.js";import{A as w}from"./AdminAuthenticated-CuIzPW4j.js";import{S as d}from"./sweetalert2.all-_SoHaOpb.js";import{d as s}from"./index-DPGCi7OR.js";/* empty css                                  */import{M as g}from"./ModalPopup-BV_7fpbH.js";import y from"./ViewRole-BSuAE4M-.js";import"./PermissionAllow-ButaP9Fn.js";import"./Dropdown-Bdmo2fZW.js";import"./AdminHeader-DXZo_Gnb.js";import"./Fade-C51PzYCI.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./BootstrapModalManager-BvIY6NEB.js";import"./index-DPs_KfQ3.js";import"./Anchor-CKIlv3KC.js";import"./extends-CCbyfPlC.js";import"./index-Z8pqiZco.js";import"./ToastNotification-CxpinE6B.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-DM2IsgWP.js";import"./defineProperty-DpFVb8oi.js";import"./Modal-Ddbl7SYz.js";function U({roleList:c,auth:m,success:h=null,error:x=null}){const[p,a]=l.useState(!1),[r,j]=l.useState(null),b=i=>{d.fire({title:"Are you sure you want to delete this role?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&v.delete(route("admin.role-responsibilities.destroy",i.id),{onSuccess:()=>{d.fire("Deleted!","role has been deleted.","success")}})})},n=()=>a(!1),u=async i=>{try{const N=(await T.get(route("admin.role-responsibilities.show",i.id))).data;j(N),a(!0)}catch(t){console.error("Error fetching data",t)}};return e.jsxs(w,{user:m.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Role & Responsibilities"}),success:h,error:x,children:[e.jsx(f,{title:"Role & Responsibilities"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Role & Responsibilities"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsxs(o,{className:"btn btn-info text-end",href:route("admin.role-responsibilities.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"No of Permissions"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:c.data.map(i=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:i.id}),e.jsx(s.Td,{children:i.name}),e.jsx(s.Td,{children:Object.keys(i.permissions).length}),e.jsx(s.Td,{children:window.formatDateTime(i.updated_at)}),e.jsxs(s.Td,{children:[e.jsx("span",{title:"Show",onClick:()=>u(i),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx(o,{title:"Edit",className:"btn btn-transparent",href:route("admin.role-responsibilities.edit",i.id),children:e.jsx("i",{className:"bi bi-pencil"})}),i.name!=="admin"&&i.name!=="seller"&&e.jsx("button",{title:"Delete",onClick:t=>b(i),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})]})]},i.id))})]})})})})})})})]})}),e.jsx(g,{show:p,handleClose:n,size:"lg",title:"Role Details",children:r?e.jsx(y,{collection:r,handleClose:n}):"Failed fetching data..."})]})}export{U as default};
