<<<<<<< HEAD:public/build/assets/Index-BjphKYxk.js
import{r as o,j as e,Y,a as M,y as z,b as H}from"./app-DHgmYT40.js";import{A as O}from"./AdminAuthenticated-CmmW8Z63.js";import{P as u}from"./PermissionAllow-qp5NfsS8.js";import{T as A}from"./Tab-DEwanMQi.js";import{T as R}from"./Tabs-DU622mlu.js";import{M as $}from"./ModalPopup-CyVha97D.js";import q from"./ViewSeller-Bceu5k0n.js";import{d as t}from"./index-BeDZiw8V.js";/* empty css                                  */import{S as G}from"./sweetalert2.all-CPECBzv7.js";import{P as J}from"./Pagination-Cm76-io6.js";import"./Dropdown-BZb0d06d.js";import"./AdminHeader-CRuQSHr8.js";import"./Dropdown-RDq-nJkg.js";import"./listen-lwz9WOw0.js";import"./useWindow-D-j940nD.js";import"./Anchor-g_rNmnFv.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-CptKUhxA.js";import"./BootstrapModalManager-A8h4H9US.js";import"./Fade-D9pTdBlW.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-CV7qmBJB.js";import"./ToastNotification-BRkbIYB2.js";import"./ReactToastify-BAV5k0S6.js";import"./TabPane-BGVSdEst.js";import"./ElementChildren-Bf8k8YQO.js";import"./Modal-D8FmMj5b.js";import"./slick-theme-2IypuRtf.js";import"./StatusBtn-DkGexPSR.js";import"./DynamicSelect-Q4oqGFab.js";import"./react-select.esm-ngE3Ri5O.js";import"./Select-49a62830.esm-Bpp_zKiG.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-BnZbyPuT.js";import"./hoist-non-react-statics.cjs-DT5OmTFk.js";import"./interopRequireDefault-BbjLfwJi.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function Ve({vendorsList:c,pendingVendorsList:d,suspendedVendorsList:p,auth:g}){const[m,h]=o.useState(1),[i,f]=o.useState(""),[S,s]=o.useState(c.data),[j,F]=o.useState(d.data),[I,K]=o.useState(p.data),[r,B]=o.useState("ApprovedSellers"),[L,b]=o.useState(!1),[D,V]=o.useState(null),N=a=>{G.fire({title:"Are you sure you want to delete the Seller?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(l=>{l.isConfirmed&&z.delete(route("admin.sellers.destroy",a.id))})},T=(a,l)=>{h(l),window.scrollTo(0,0)},C=a=>{const l=a.target.value;f(l);let n;r==="ApprovedSellers"?(n=c.data.filter(x=>x.full_name.toLowerCase().includes(l.toLowerCase())),s(n)):r==="PendingApproval"?(n=d.data.filter(x=>x.full_name.toLowerCase().includes(l.toLowerCase())),F(n)):r==="SuspendedSellers"&&(n=p.data.filter(x=>x.full_name.toLowerCase().includes(l.toLowerCase())),K(n)),h(1)},y=(()=>{if(i.length>0){if(r==="ApprovedSellers")return S;if(r==="PendingApproval")return j;if(r==="SuspendedSellers")return I}else{if(r==="ApprovedSellers")return c.data;if(r==="PendingApproval")return d.data;if(r==="SuspendedSellers")return p.data}})(),v=(m-1)*20,P=m*20,E=()=>b(!1),w=async a=>{try{const n=(await H.get(route("admin.sellers.show",a.id))).data;V(n),b(!0)}catch(l){console.error("Error fetching data",l)}},Q=()=>{b(!1)};return e.jsxs(O,{user:g.user,children:[e.jsx(Y,{title:"Sellers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Sellers Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(u,{permission:"Seller Create",children:e.jsxs(M,{className:"btn btn-info text-end",href:route("admin.sellers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsxs(R,{id:"uncontrolled-tab-example",activeKey:r,onSelect:a=>B(a),className:"",children:[e.jsx(A,{eventKey:"ApprovedSellers",title:"Approved Sellers",children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:i,handleSearch:C})}),e.jsx(A,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Approval"}),d.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:d.data.length})]}),children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:i,handleSearch:C})}),e.jsx(A,{eventKey:"SuspendedSellers",title:"Suspended Sellers",children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:i,handleSearch:C})})]})]})}),e.jsx($,{show:L,handleClose:E,size:"md",title:"Seller Details",children:D?e.jsx(q,{collection:D,handleClose:E,onSubmit:Q}):"Failed fetching data..."})]})}const k=({displayList:c,startIdx:d,endIdx:p,deleteVendor:g,handlePageChange:_,currentPage:m,itemsPerPage:h,handleShow:i,searchQuery:f,handleSearch:S})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(u,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:f,onChange:S})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Name"}),e.jsx(t.Th,{children:"Email"}),e.jsx(t.Th,{children:"Mobile Number"}),e.jsx(t.Th,{children:"Company Name"}),e.jsx(t.Th,{children:"Designation"}),e.jsx(t.Th,{className:"text-center",children:"Status"}),e.jsx(t.Th,{children:"Last Modified"}),e.jsx(t.Th,{className:"text-end"})]})}),e.jsx(t.Tbody,{children:c.slice(d,p).map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx(t.Td,{valign:"middle",children:s.id}),e.jsxs(t.Td,{valign:"middle",onClick:()=>i(s),children:[e.jsx("img",{src:s.picture,className:"w-30 h-30 me-3 rounded-circle",alt:`${s.picture} icon`,onError:j=>{j.target.onerror=null,j.target.src="/assets/admin/images/noimage.webp"}})," ",e.jsx("span",{children:s.full_name})]}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.email}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.phone}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.company_name}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.designation}),e.jsx(t.Td,{onClick:()=>i(s),className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:window.formatDateTime(s.updated_at)}),e.jsxs(t.Td,{className:"text-end",children:[e.jsx(u,{permission:"Seller Show",children:e.jsx("span",{onClick:()=>i(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx(M,{className:"btn btn-transparent",href:route("admin.sellers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx("button",{onClick:()=>g(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})}),c.length>h&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(J,{count:Math.ceil(c.length/h),page:m,onChange:_})})]})})})})})});export{Ve as default};
=======
import{r as o,j as e,Y,a as M,y as z,b as H}from"./app-B3lS64dG.js";import{A as O}from"./AdminAuthenticated-4dk0wFJR.js";import{P as u}from"./PermissionAllow-wxFNq2kt.js";import{T as A}from"./Tab-CDO-X8uC.js";import{T as R}from"./Tabs-BGyGh-bm.js";import{M as $}from"./ModalPopup-DEtVT-5g.js";import q from"./ViewSeller-Bh097C3p.js";import{d as t}from"./index-CsJGmNAv.js";/* empty css                                  */import{S as G}from"./sweetalert2.all-DyXzMVcH.js";import{P as J}from"./Pagination-Sy9ZUscP.js";import"./Dropdown-ChjA9zgO.js";import"./AdminHeader-D0A5jEzG.js";import"./Dropdown-BuIg32jC.js";import"./listen-B_F_1ACR.js";import"./useWindow-DgLGm7_F.js";import"./Anchor-BTx_t2Do.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-D9o93I7c.js";import"./BootstrapModalManager-CaKnmYyO.js";import"./Fade-HZCctfIx.js";import"./inheritsLoose-DbZSpFkk.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ToastNotification-mdO7JHOe.js";import"./ReactToastify-_GpyaRek.js";import"./TabPane-CHHGYJq3.js";import"./ElementChildren-D1FaaYAx.js";import"./Modal-BkNZUDXF.js";import"./slick-theme-BErfMsUZ.js";import"./StatusBtn-CkClRXKO.js";import"./DynamicSelect-BKXhiq5r.js";import"./react-select.esm-Q33XHUIR.js";import"./Select-49a62830.esm-qpeq2c33.js";import"./objectSpread2-fZMFotU9.js";import"./defineProperty-C77ibxUe.js";import"./extends-CJoT7KlQ.js";import"./emotion-react.browser.esm-CclaArDC.js";import"./hoist-non-react-statics.cjs-DA1IKqmT.js";import"./interopRequireDefault-BbjLfwJi.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function Ve({vendorsList:c,pendingVendorsList:d,suspendedVendorsList:p,auth:g}){const[m,h]=o.useState(1),[i,f]=o.useState(""),[S,s]=o.useState(c.data),[j,F]=o.useState(d.data),[I,K]=o.useState(p.data),[r,B]=o.useState("ApprovedSellers"),[L,b]=o.useState(!1),[D,V]=o.useState(null),N=a=>{G.fire({title:"Are you sure you want to delete the Seller?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(l=>{l.isConfirmed&&z.delete(route("admin.sellers.destroy",a.id))})},T=(a,l)=>{h(l),window.scrollTo(0,0)},C=a=>{const l=a.target.value;f(l);let n;r==="ApprovedSellers"?(n=c.data.filter(x=>x.full_name.toLowerCase().includes(l.toLowerCase())),s(n)):r==="PendingApproval"?(n=d.data.filter(x=>x.full_name.toLowerCase().includes(l.toLowerCase())),F(n)):r==="SuspendedSellers"&&(n=p.data.filter(x=>x.full_name.toLowerCase().includes(l.toLowerCase())),K(n)),h(1)},y=(()=>{if(i.length>0){if(r==="ApprovedSellers")return S;if(r==="PendingApproval")return j;if(r==="SuspendedSellers")return I}else{if(r==="ApprovedSellers")return c.data;if(r==="PendingApproval")return d.data;if(r==="SuspendedSellers")return p.data}})(),v=(m-1)*20,P=m*20,E=()=>b(!1),w=async a=>{try{const n=(await H.get(route("admin.sellers.show",a.id))).data;V(n),b(!0)}catch(l){console.error("Error fetching data",l)}},Q=()=>{b(!1)};return e.jsxs(O,{user:g.user,children:[e.jsx(Y,{title:"Sellers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Sellers Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(u,{permission:"Seller Create",children:e.jsxs(M,{className:"btn btn-info text-end",href:route("admin.sellers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsxs(R,{id:"uncontrolled-tab-example",activeKey:r,onSelect:a=>B(a),className:"",children:[e.jsx(A,{eventKey:"ApprovedSellers",title:"Approved Sellers",children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:i,handleSearch:C})}),e.jsx(A,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Approval"}),d.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:d.data.length})]}),children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:i,handleSearch:C})}),e.jsx(A,{eventKey:"SuspendedSellers",title:"Suspended Sellers",children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:i,handleSearch:C})})]})]})}),e.jsx($,{show:L,handleClose:E,size:"md",title:"Seller Details",children:D?e.jsx(q,{collection:D,handleClose:E,onSubmit:Q}):"Failed fetching data..."})]})}const k=({displayList:c,startIdx:d,endIdx:p,deleteVendor:g,handlePageChange:_,currentPage:m,itemsPerPage:h,handleShow:i,searchQuery:f,handleSearch:S})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(u,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:f,onChange:S})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Name"}),e.jsx(t.Th,{children:"Email"}),e.jsx(t.Th,{children:"Mobile Number"}),e.jsx(t.Th,{children:"Company Name"}),e.jsx(t.Th,{children:"Designation"}),e.jsx(t.Th,{className:"text-center",children:"Status"}),e.jsx(t.Th,{children:"Last Modified"}),e.jsx(t.Th,{className:"text-end"})]})}),e.jsx(t.Tbody,{children:c.slice(d,p).map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx(t.Td,{valign:"middle",children:s.id}),e.jsxs(t.Td,{valign:"middle",onClick:()=>i(s),children:[e.jsx("img",{src:s.picture,className:"w-30 h-30 me-3 rounded-circle",alt:`${s.picture} icon`,onError:j=>{j.target.onerror=null,j.target.src="/assets/admin/images/noimage.webp"}})," ",e.jsx("span",{children:s.full_name})]}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.email}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.phone}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.company_name}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.designation}),e.jsx(t.Td,{onClick:()=>i(s),className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:window.formatDateTime(s.updated_at)}),e.jsxs(t.Td,{className:"text-end",children:[e.jsx(u,{permission:"Seller Show",children:e.jsx("span",{onClick:()=>i(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx(M,{className:"btn btn-transparent",href:route("admin.sellers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx("button",{onClick:()=>g(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})}),c.length>h&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(J,{count:Math.ceil(c.length/h),page:m,onChange:_})})]})})})})})});export{Ve as default};
>>>>>>> c94f848a75a5107ef7180eb58f9076e4e7e00291:public/build/assets/Index-BNLXquQP.js
