import{r as l,j as e,Y as g,a as d,b as v,y as T}from"./app-DQNkgWdZ.js";import{A as C}from"./AdminAuthenticated-CuIzPW4j.js";import{P as n}from"./PermissionAllow-ButaP9Fn.js";import{S as c}from"./sweetalert2.all-_SoHaOpb.js";import{d as s}from"./index-DPGCi7OR.js";/* empty css                                  */import{M as w}from"./ModalPopup-BV_7fpbH.js";import P from"./PageView-B-bKmsc3.js";import"./Dropdown-Bdmo2fZW.js";import"./AdminHeader-DXZo_Gnb.js";import"./Fade-C51PzYCI.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./BootstrapModalManager-BvIY6NEB.js";import"./index-DPs_KfQ3.js";import"./Anchor-CKIlv3KC.js";import"./extends-CCbyfPlC.js";import"./index-Z8pqiZco.js";import"./ToastNotification-CxpinE6B.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-DM2IsgWP.js";import"./defineProperty-DpFVb8oi.js";import"./Modal-Ddbl7SYz.js";function W({pageList:m,auth:h,success:x=null,error:j=null}){const[p,a]=l.useState(!1),[r,u]=l.useState(null),o=()=>a(!1),b=async t=>{try{const f=(await v.get(route("admin.content-page.show",t.id))).data;u(f),a(!0)}catch(i){console.error("Error fetching data",i)}},N=t=>{c.fire({title:"Are you sure you want to delete this page?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(i=>{i.isConfirmed&&T.delete(route("admin.content-page.destroy",t.id),{onSuccess:()=>{c.fire("Deleted!","page has been deleted.","success")}})})};return e.jsxs(C,{user:h.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Content Page"}),success:x,error:j,children:[e.jsx(g,{title:"Content Page List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Content Page"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(n,{permission:"Content Page Create",children:e.jsxs(d,{className:"btn btn-info text-end",href:route("admin.content-page.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(n,{permission:"Content Pages Listing",message:!0,children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Title"}),e.jsx(s.Th,{children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{})]})}),e.jsx(s.Tbody,{children:m.data.map(t=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{children:t.id}),e.jsx(s.Td,{children:t.title}),e.jsx(s.Td,{children:t.status}),e.jsx(s.Td,{children:t.updated_at}),e.jsxs(s.Td,{children:[e.jsx("span",{onClick:()=>b(t),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})}),e.jsx(n,{permission:"Content Page Edit",children:e.jsx(d,{className:"btn btn-transparent",href:route("admin.content-page.edit",t.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(n,{permission:"Content Page Delete",children:e.jsx("button",{onClick:i=>N(t),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},t.id))})]})})})})})})})})]})}),e.jsx(w,{show:p,handleClose:o,size:"lg",title:"Page Show",children:r?e.jsx(P,{collection:r,handleClose:o}):"Failed fetching data..."})]})}export{W as default};
