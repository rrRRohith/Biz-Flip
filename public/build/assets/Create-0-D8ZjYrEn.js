<<<<<<< HEAD:public/build/assets/Create-0-DwQ91T2q.js
import{W as _,j as e,Y as y,a as b}from"./app-DHgmYT40.js";import{A as M}from"./AdminAuthenticated-CmmW8Z63.js";import{I as v}from"./InputError-DeFmK2mn.js";import{T as f}from"./TextInput-b9MTVA1L.js";import{I as j}from"./InputLabel-bDkID7Ue.js";import{D as U}from"./DynamicSelect-Q4oqGFab.js";import{v as N}from"./v4-DvF23Exx.js";import"./Dropdown-BZb0d06d.js";import"./AdminHeader-CRuQSHr8.js";import"./PermissionAllow-qp5NfsS8.js";import"./Dropdown-RDq-nJkg.js";import"./listen-lwz9WOw0.js";import"./useWindow-D-j940nD.js";import"./Anchor-g_rNmnFv.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CptKUhxA.js";import"./BootstrapModalManager-A8h4H9US.js";import"./Fade-D9pTdBlW.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CV7qmBJB.js";import"./ToastNotification-BRkbIYB2.js";import"./ReactToastify-BAV5k0S6.js";import"./react-select.esm-ngE3Ri5O.js";import"./Select-49a62830.esm-Bpp_zKiG.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-BnZbyPuT.js";import"./hoist-non-react-statics.cjs-DT5OmTFk.js";const ie=({auth:s})=>{const{data:r,setData:i,post:h,errors:d,reset:o}=_({menuItems:[{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}),p=n=>{n.preventDefault(),h(route("admin.navigation-menu.store"),{onSuccess:()=>{o()}})},x=(n,a,u)=>{const c=I=>I.map(m=>m.id===n?{...m,[a]:u}:m.children.length>0?{...m,children:c(m.children)}:m),t=c(r.menuItems);i("menuItems",t)},l=()=>{i("menuItems",[...r.menuItems,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}])},g=n=>{const a=c=>c.filter(t=>t.id!==n).map(t=>t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)},C=n=>{const a=c=>c.map(t=>t.id===n?{...t,children:[...t.children,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}:t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)};return e.jsxs(M,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(y,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(b,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(b,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsxs("form",{onSubmit:p,children:[r.menuItems.map(n=>e.jsx(k,{node:n,handleChange:x,handleRemovePart:g,handleAddChild:C,errors:d},n.id)),e.jsx("div",{className:"mt-1",children:e.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:l,children:"Add Part"})}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-success",children:"Save Menu"})})]})})]})})]})},k=({node:s,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:d})=>{const o=(l,g)=>{r(s.id,l,g)},p=()=>{h(s.id)},x=()=>{i(s.id)};return e.jsx("div",{className:"tree-node ",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`title-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(f,{id:`title-${s.id}`,className:"form-control",value:s.title,onChange:l=>o("title",l.target.value)}),e.jsx(v,{error:d.title})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`landingpageUrl-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(U,{id:`landingpageUrl-${s.id}`,className:"form-control",value:s.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:l=>o("landingpageUrl",l)})]})}),e.jsx("div",{className:"col-lg-3 ",children:s.landingpageUrl==="custom-link"&&e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`custom_link-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(f,{id:`custom_link-${s.id}`,className:"form-control",value:s.custom_link,onChange:l=>o("custom_link",l.target.value)}),e.jsx(v,{error:d.custom_link})]})}),e.jsx("div",{className:"col-lg-3  text-end",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:x,children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary ms-2",onClick:p,children:"Add Child"})]})}),s.children&&s.children.map(l=>e.jsx(k,{node:l,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:d},l.id))]})})})};export{ie as default};
=======
import{W as _,j as e,Y as y,a as b}from"./app-B3lS64dG.js";import{A as M}from"./AdminAuthenticated-4dk0wFJR.js";import{I as v}from"./InputError-D08Aep0b.js";import{T as f}from"./TextInput-BanJiQi-.js";import{I as j}from"./InputLabel-CFVXsCF7.js";import{D as U}from"./DynamicSelect-BKXhiq5r.js";import{v as N}from"./v4-DvF23Exx.js";import"./Dropdown-ChjA9zgO.js";import"./AdminHeader-D0A5jEzG.js";import"./PermissionAllow-wxFNq2kt.js";import"./Dropdown-BuIg32jC.js";import"./listen-B_F_1ACR.js";import"./useWindow-DgLGm7_F.js";import"./Anchor-BTx_t2Do.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D9o93I7c.js";import"./BootstrapModalManager-CaKnmYyO.js";import"./Fade-HZCctfIx.js";import"./inheritsLoose-DbZSpFkk.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ToastNotification-mdO7JHOe.js";import"./ReactToastify-_GpyaRek.js";import"./react-select.esm-Q33XHUIR.js";import"./Select-49a62830.esm-qpeq2c33.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-CclaArDC.js";import"./hoist-non-react-statics.cjs-DA1IKqmT.js";const ie=({auth:s})=>{const{data:r,setData:i,post:h,errors:d,reset:o}=_({menuItems:[{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}),p=n=>{n.preventDefault(),h(route("admin.navigation-menu.store"),{onSuccess:()=>{o()}})},x=(n,a,u)=>{const c=I=>I.map(m=>m.id===n?{...m,[a]:u}:m.children.length>0?{...m,children:c(m.children)}:m),t=c(r.menuItems);i("menuItems",t)},l=()=>{i("menuItems",[...r.menuItems,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}])},g=n=>{const a=c=>c.filter(t=>t.id!==n).map(t=>t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)},C=n=>{const a=c=>c.map(t=>t.id===n?{...t,children:[...t.children,{id:N(),title:"",landingpageUrl:"",custom_link:"",children:[]}]}:t.children.length>0?{...t,children:a(t.children)}:t),u=a(r.menuItems);i("menuItems",u)};return e.jsxs(M,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Navigation Menu/Create"}),children:[e.jsx(y,{title:"Navigation Menu Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Navigation Menu"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(b,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item",children:e.jsx(b,{href:route("admin.navigation-menu.index"),children:"Navigation Menu"})}),e.jsx("li",{className:"breadcrumb-item active",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsxs("form",{onSubmit:p,children:[r.menuItems.map(n=>e.jsx(k,{node:n,handleChange:x,handleRemovePart:g,handleAddChild:C,errors:d},n.id)),e.jsx("div",{className:"mt-1",children:e.jsx("button",{type:"button",className:"btn btn-sm btn-dark",onClick:l,children:"Add Part"})}),e.jsx("div",{className:"mt-3",children:e.jsx("button",{type:"submit",className:"btn btn-success",children:"Save Menu"})})]})})]})})]})},k=({node:s,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:d})=>{const o=(l,g)=>{r(s.id,l,g)},p=()=>{h(s.id)},x=()=>{i(s.id)};return e.jsx("div",{className:"tree-node ",children:e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`title-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Title"}),e.jsx(f,{id:`title-${s.id}`,className:"form-control",value:s.title,onChange:l=>o("title",l.target.value)}),e.jsx(v,{error:d.title})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`landingpageUrl-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Link Type"}),e.jsx(U,{id:`landingpageUrl-${s.id}`,className:"form-control",value:s.landingpageUrl,options:[{value:"page-link",label:"Page Link"},{value:"custom-link",label:"Custom Link"}],onChange:l=>o("landingpageUrl",l)})]})}),e.jsx("div",{className:"col-lg-3 ",children:s.landingpageUrl==="custom-link"&&e.jsxs("div",{className:"form-group",children:[e.jsx(j,{htmlFor:`custom_link-${s.id}`,className:"fw-700 fs-16 form-label form-group__label",children:"Custom Link"}),e.jsx(f,{id:`custom_link-${s.id}`,className:"form-control",value:s.custom_link,onChange:l=>o("custom_link",l.target.value)}),e.jsx(v,{error:d.custom_link})]})}),e.jsx("div",{className:"col-lg-3  text-end",children:e.jsxs("div",{className:"mt-1",children:[e.jsx("button",{type:"button",className:"btn btn-sm btn-danger",onClick:x,children:"Remove"}),e.jsx("button",{type:"button",className:"btn btn-sm btn-primary ms-2",onClick:p,children:"Add Child"})]})}),s.children&&s.children.map(l=>e.jsx(k,{node:l,handleChange:r,handleRemovePart:i,handleAddChild:h,errors:d},l.id))]})})})};export{ie as default};
>>>>>>> c94f848a75a5107ef7180eb58f9076e4e7e00291:public/build/assets/Create-0-D8ZjYrEn.js
