import{r as t,W as I,j as e,Y as E,a as d,S as F,b as m,y as _}from"./app-DQNkgWdZ.js";import"./Dropdown-Bdmo2fZW.js";import"./index-Z8pqiZco.js";import{P as l}from"./PermissionAllow-ButaP9Fn.js";import A from"./Wrapper-BvpcVikg.js";import"./index-DPGCi7OR.js";/* empty css                                  */import{M as L}from"./ModalPopup-BV_7fpbH.js";import M from"./Permissions-uNxM9sTg.js";import{s as T}from"./server.browser-PJnajG3d.js";import W from"./Delete-BgjaMxbo.js";import"./SideBar-xWg4lip3.js";import"./ProfileDropdown-DkqgGXiK.js";import"./Header-QfgZUVtE.js";import"./ToastNotification-CxpinE6B.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-DM2IsgWP.js";import"./defineProperty-DpFVb8oi.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DPs_KfQ3.js";import"./Modal-Ddbl7SYz.js";import"./Fade-C51PzYCI.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./BootstrapModalManager-BvIY6NEB.js";function me({auth:h,roles:x}){const[n,p]=t.useState(x.data),{data:o,setData:j}=I({q:""}),u=async()=>{a(!0);const s=await m.get(route("seller.roles.search",o));p(s.data),a(!1)},[b,c]=t.useState(!1),[f,N]=t.useState(null),[v,g]=t.useState(null),[S,a]=t.useState(!1),w=()=>c(!1),y=async function(s){g(`Permissions of ${s.name}`),a(!0);const i=await m.get(route("seller.roles.show",s.id));N(T.renderToString(e.jsx(M,{permissions:i.data.permissions}))),a(!1),c(!0)},[D,r]=t.useState(!1),[C,R]=t.useState(null),P=function(s){r(!1),_.delete(route("seller.roles.destroy",s))},q=s=>{R(s),r(!0)},k=()=>r(!1);return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Staff roles"}),e.jsx(W,{showDelete:D,handleClose:k,deleteAction:P,deleteId:C,setShowDelete:r}),e.jsxs(A,{user:h.user,children:[e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Staff roles"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:o.q,onChange:s=>j("q",s.target.value),type:"search",placeholder:"Search by name",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>u(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(l,{permission:"Role and Responsibilities Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(d,{className:"btn btn-primary text-overflow",href:route("seller.roles.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"New role"})]})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"ID"}),e.jsx("th",{scope:"col",children:"Name"}),e.jsx("th",{scope:"col",children:"Permissions"}),e.jsx("th",{scope:"col",children:"Last updated"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:n.length?e.jsx(e.Fragment,{children:n.map(s=>e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.id]}),e.jsx("td",{children:s.name}),e.jsx("td",{children:e.jsxs("div",{role:"button",onClick:i=>y(s),className:"text-primary text-decoration-none",children:[s.total_permissions," permissions"]})}),e.jsx("td",{children:s.updated_text}),e.jsxs("td",{children:[e.jsx(l,{permission:"Role and Responsibilities Edit",children:e.jsx(d,{href:route("seller.roles.edit",s.id),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-pen"})})}),e.jsx(l,{permission:"Role and Responsibilities Delete",children:e.jsx("button",{onClick:i=>q(s.id),className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})})]})})}),S&&e.jsx(F,{}),e.jsx(L,{animation:!1,centered:!0,show:b,handleClose:w,data:f,title:v})]})]})}export{me as default};
