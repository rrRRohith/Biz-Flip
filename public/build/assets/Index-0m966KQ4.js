import{r,W as d,j as e,S as x,Y as u,a as h,b as j}from"./app-B5wC7NxF.js";import"./Dropdown-8O5GOMrM.js";import"./index-BVfm5v4q.js";import{P as b}from"./PermissionAllow-BD9t1_7_.js";import f from"./Wrapper-CAiR-MIk.js";import"./index-CNhWtyu-.js";/* empty css                                  */import N from"./Tickets-CfKTauQW.js";import"./SideBar-D5BBOLPs.js";import"./ProfileDropdown-DTRLhgXH.js";import"./Header-DzkIH-Yi.js";import"./Dropdown-i65IHXYb.js";import"./listen-CE2jlpW0.js";import"./useWindow-BF4Teau8.js";import"./Anchor-J76Ltj_P.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./ToastNotification-WLy0EpOh.js";import"./interopRequireDefault-BbjLfwJi.js";import"./inherits-DEw0FBPK.js";import"./index-Chjiymov.js";import"./defineProperty-DpFVb8oi.js";function B({auth:i,tickets:o}){const[c,t]=r.useState(!1),[l,n]=r.useState(o.data),{data:a,setData:m}=d({q:""}),p=async()=>{t(!0);const s=await j.get(route("seller.tickets.search",a));n(s.data),t(!1)};return e.jsxs(e.Fragment,{children:[c&&e.jsx(x,{}),e.jsx(u,{title:"Support tickets"}),e.jsx(f,{user:i.user,children:e.jsx("main",{className:"py-6",children:e.jsx("div",{className:"container-fluid px-3 px-lg-6",children:e.jsxs("div",{className:"vstack gap-6 m-auto",children:[e.jsx("div",{className:"text-xl font-bold",children:"Support tickets"}),e.jsx("div",{children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header border-bottom",children:e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("div",{className:"me-2",children:e.jsx("input",{defaultValue:a.q,onChange:s=>m("q",s.target.value),type:"search",placeholder:"Search by subject",className:"text-overflow form-control"})}),e.jsx("div",{className:"ms-2",children:e.jsx("button",{onClick:s=>p(),type:"button",className:"btn btn-neutral me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(b,{permission:"Support Ticket Create",children:e.jsx("div",{className:"ms-auto",children:e.jsxs(h,{className:"btn btn-primary text-overflow",href:route("seller.tickets.create"),children:[e.jsx("i",{className:"bi bi-plus text-md"}),e.jsx("span",{className:"d-none d-md-inline",children:"Open ticket"})]})})})]})}),e.jsx(N,{ticketData:l})]})})]})})})})]})}export{B as default};
