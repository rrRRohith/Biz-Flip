import{r as m,j as e,Y as c,a as d}from"./app-BSaojbtm.js";import{A as p}from"./AdminAuthenticated-CHR6UyJT.js";import{T as x}from"./Tabs-C5A6fycO.js";import{T as i}from"./Tab-BA6Snl74.js";import h from"./SubscriptionPlansTable-BwRYwZDx.js";import b from"./SubscribedAgentsTable-Cb09_Zvy.js";import"./index-CDqlcZRm.js";import j from"./InvoicesTable-CCZc4cjp.js";import"./Dropdown-G1a4HqaD.js";import"./AdminHeader-Ca0U8u3o.js";import"./PermissionAllow-B41Jt6_p.js";import"./Dropdown-C4uOLq_Q.js";import"./listen-CejIQfaa.js";import"./useWindow-Co8DwMws.js";import"./Anchor-CXn0Lz-u.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CXZWBtcP.js";import"./BootstrapModalManager-yL3mrz2B.js";import"./Fade-D65TqjLf.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-eDr43yLW.js";import"./ToastNotification-BzR31p_Z.js";import"./ReactToastify-Balu2BoV.js";import"./TabPane-DDgG9Asc.js";import"./ElementChildren-DJdU-U87.js";import"./ModalPopup-C1RmQyhD.js";import"./Modal-CX1XS4un.js";import"./InputError-DObtdChr.js";import"./TextInput-pVxFRAad.js";import"./InputLabel-B2n_5c1_.js";/* empty css                                  */import"./Form-NxD53lUI.js";import"./Col-C0WXpdnB.js";import"./SelectOption-_MBfWOQU.js";import"./react-select.esm-VkEWP3gr.js";import"./Select-49a62830.esm-BbctSirk.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-DLcLLPdI.js";import"./hoist-non-react-statics.cjs-BcdvTPyb.js";import"./DynamicSelect-Bl9PipOj.js";import"./sweetalert2.all-CK-EsSXQ.js";import"./interopRequireDefault-BbjLfwJi.js";import"./Invoice-E2ebmOy0.js";function de({plans:s,subscribedAgents:t,freePlanAgents:u,invoices:r,auth:a}){const[o,l]=m.useState("SubscriptionPlans");return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Subscription Plans"}),e.jsx(p,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Subscription Plans"}),children:e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Subscription Plans"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(d,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Subscription Plans"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("button",{onClick:()=>handleModelShow("create"),className:"btn btn-info btn-sm float-end mb-4",children:"Create New Plan"})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("div",{className:"max-w-screen-md vstack gap-6 m-auto",children:e.jsxs(x,{id:"subscription-plans-tabs",activeKey:o,onSelect:n=>l(n),className:"mb-3",children:[e.jsx(i,{eventKey:"SubscriptionPlans",title:`Subscription Plans (${s.data.length})`,children:e.jsx(h,{plans:s})}),e.jsx(i,{eventKey:"SubscribedAgents",title:`Subscribed Agents (${t.data.length})`,children:e.jsx(b,{users:t})}),e.jsx(i,{eventKey:"Invoices",title:`Invoices (${r.data.length})`,children:e.jsx(j,{invoices:r})})]})})})})})})})]})})})]})}export{de as default};