import{r as i,W as h,j as e,S as p,Y as j,a as l,b as u}from"./app-UYMcsozT.js";import"./Dropdown-DIrmF7KH.js";import"./index-B-VLWdQt.js";import{P as b}from"./PermissionAllow-Bap9htMY.js";import N from"./Wrapper-CZQFDUuy.js";import"./SuperResponsiveTableStyle-DLijpH_p.js";import"./SideBar-IR1x4nXo.js";import"./ProfileDropdown-BMc96DdS.js";import"./Header-CvmOz8AV.js";import"./ToastNotification-B2mN7jJt.js";import"./extends-JlqcTN98.js";import"./extends-B6xKY8K9.js";import"./inherits-CWsdyUoO.js";import"./defineProperty-DpFVb8oi.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DbEP-q8K.js";function T({auth:c,tickets:n}){const[d,t]=i.useState(!1),[a,o]=i.useState(n.data),{data:r,setData:m}=h({q:""}),x=async()=>{t(!0);const s=await u.get(route("seller.tickets.search",r));o(s.data),t(!1)};return e.jsxs(e.Fragment,{children:[d&&e.jsx(p,{}),e.jsx(j,{title:"Support tickets"}),e.jsx(N,{user:c.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"max-w-screen-lg vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Support tickets"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:r.q,onChange:s=>m("q",s.target.value),type:"search",placeholder:"Search by subject",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>x(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(b,{permission:"Support Ticket Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(l,{className:"btn btn-primary text-overflow",href:route("seller.tickets.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"Open ticket"})]})})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"ID"}),e.jsx("th",{scope:"col",children:"Subject"}),e.jsx("th",{scope:"col",children:"Date created"}),e.jsx("th",{scope:"col",children:"Priority"}),e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{scope:"col"})]})}),e.jsx("tbody",{children:a.length?e.jsx(e.Fragment,{children:a.map(s=>e.jsx(e.Fragment,{children:e.jsxs("tr",{children:[e.jsxs("td",{children:["#",s.id]}),e.jsx("td",{children:s.subject}),e.jsx("td",{children:s.date_text}),e.jsx("td",{children:e.jsx("div",{className:`btn btn-sm p-2 py-1 text-white small text-capitalize status-${s.priority}`,children:s.priority})}),e.jsx("td",{children:e.jsx("div",{className:`btn btn-sm p-2 py-1 text-white small text-capitalize status-${s.status}`,children:s.status})}),e.jsx("td",{children:e.jsx(l,{href:route("seller.tickets.show",s.id),className:"btn btn-sm btn-square btn-neutral",children:e.jsx("i",{className:"bi bi-eye"})})})]})}))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})})]})})})})]})}export{T as default};