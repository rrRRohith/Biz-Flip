<<<<<<< HEAD:public/build/assets/Index-E0NKPr3s.js
import{j as e,Y as m,a as r,y as h}from"./app-DHgmYT40.js";import{A as x}from"./AdminAuthenticated-CmmW8Z63.js";import{S as d}from"./sweetalert2.all-CPECBzv7.js";import{P as i}from"./PermissionAllow-qp5NfsS8.js";import"./Dropdown-BZb0d06d.js";import"./AdminHeader-CRuQSHr8.js";import"./Dropdown-RDq-nJkg.js";import"./listen-lwz9WOw0.js";import"./useWindow-D-j940nD.js";import"./Anchor-g_rNmnFv.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CptKUhxA.js";import"./BootstrapModalManager-A8h4H9US.js";import"./Fade-D9pTdBlW.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CV7qmBJB.js";import"./ToastNotification-BRkbIYB2.js";import"./ReactToastify-BAV5k0S6.js";function Y({subscribersList:l,auth:n,success:a=null,error:c=null}){const o=s=>{d.fire({title:"Are you sure you want to delete this subscriber?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&h.delete(route("admin.subscribers.destroy",s.id),{onSuccess:()=>{d.fire("Deleted!","Subscriber has been deleted.","success")}})})};return e.jsxs(x,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Subscriber"}),success:a,error:c,children:[e.jsx(m,{title:"Subscribers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Subscribers List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(i,{permission:"Subscriber Create",children:e.jsxs(r,{className:"btn btn-info text-end",href:route("admin.subscribers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(i,{permission:"Subscribers Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Full Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Type of Needed"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:l.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsxs("td",{children:[s.firstname," ",s.lastname]}),e.jsx("td",{children:s.email_id}),e.jsx("td",{children:s.type_of_needed}),e.jsx("td",{children:s.status_text}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(i,{permission:"Subscriber Edit",children:e.jsx(r,{className:"btn btn-transparent",href:route("admin.subscribers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(i,{permission:"Subscriber Delete",children:e.jsx("button",{onClick:t=>o(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{Y as default};
=======
import{j as e,Y as m,a as r,y as h}from"./app-B3lS64dG.js";import{A as x}from"./AdminAuthenticated-4dk0wFJR.js";import{S as d}from"./sweetalert2.all-DyXzMVcH.js";import{P as i}from"./PermissionAllow-wxFNq2kt.js";import"./Dropdown-ChjA9zgO.js";import"./AdminHeader-D0A5jEzG.js";import"./Dropdown-BuIg32jC.js";import"./listen-B_F_1ACR.js";import"./useWindow-DgLGm7_F.js";import"./Anchor-BTx_t2Do.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D9o93I7c.js";import"./BootstrapModalManager-CaKnmYyO.js";import"./Fade-HZCctfIx.js";import"./inheritsLoose-DbZSpFkk.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ToastNotification-mdO7JHOe.js";import"./ReactToastify-_GpyaRek.js";function Y({subscribersList:l,auth:n,success:a=null,error:c=null}){const o=s=>{d.fire({title:"Are you sure you want to delete this subscriber?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(t=>{t.isConfirmed&&h.delete(route("admin.subscribers.destroy",s.id),{onSuccess:()=>{d.fire("Deleted!","Subscriber has been deleted.","success")}})})};return e.jsxs(x,{user:n.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Subscriber"}),success:a,error:c,children:[e.jsx(m,{title:"Subscribers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Subscribers List"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(i,{permission:"Subscriber Create",children:e.jsxs(r,{className:"btn btn-info text-end",href:route("admin.subscribers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx(i,{permission:"Subscribers Listing",message:"true",children:e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs("table",{className:"table border-no",id:"example1",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"#"}),e.jsx("th",{children:"Full Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Type of Needed"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Last Modified"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:l.data.map(s=>e.jsxs("tr",{className:"hover-primary",children:[e.jsx("td",{children:s.id}),e.jsxs("td",{children:[s.firstname," ",s.lastname]}),e.jsx("td",{children:s.email_id}),e.jsx("td",{children:s.type_of_needed}),e.jsx("td",{children:s.status_text}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(i,{permission:"Subscriber Edit",children:e.jsx(r,{className:"btn btn-transparent",href:route("admin.subscribers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(i,{permission:"Subscriber Delete",children:e.jsx("button",{onClick:t=>o(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})})})})})})})})]})})]})}export{Y as default};
>>>>>>> c94f848a75a5107ef7180eb58f9076e4e7e00291:public/build/assets/Index-Bqy76CjC.js
