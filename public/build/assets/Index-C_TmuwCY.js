import{r as o,j as e,Y,a as M,y as z,b as H}from"./app-DqEs7Bkv.js";import{A as O}from"./AdminAuthenticated-8TtlGUvq.js";import{P as u}from"./PermissionAllow-De5fAs-K.js";import{T as A}from"./Tab-CDnI8ZGU.js";import{T as R}from"./Tabs-C5RA9-03.js";import{M as $}from"./ModalPopup-COviqR99.js";import q from"./ViewSeller-D6jgIBMT.js";import{d as t}from"./index-ql_5Okc_.js";/* empty css                                  */import{S as G}from"./sweetalert2.all-DRMkO0QO.js";import{P as J}from"./Pagination-D-jRusxh.js";import"./Dropdown-Cwj8fRAz.js";import"./AdminHeader-CSzeGw1p.js";import"./Fade-QJ9PgHvc.js";import"./setPrototypeOf-D424jnZp.js";import"./inheritsLoose-B1A_Czny.js";import"./index-Chjiymov.js";import"./BootstrapModalManager-BA0wmFhZ.js";import"./Anchor-_9jvPewj.js";import"./extends-CCbyfPlC.js";import"./index-BLVl2hsD.js";import"./ToastNotification-p7KpGbX9.js";import"./TabPane-CF__rGOj.js";import"./ElementChildren-CjWpnGCx.js";import"./Modal-DOEIdxLy.js";import"./slick-theme-C-o3FmXP.js";import"./StatusBtn-Hy8i-pkq.js";import"./DynamicSelect-C6qYJtHS.js";import"./react-select-creatable.esm-6Dbc75pq.js";import"./inherits-BIvzEtgb.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./emotion-react.browser.esm-CFsy6mXa.js";import"./inherits-DEw0FBPK.js";import"./hoist-non-react-statics.cjs-CYd8FKoI.js";import"./interopRequireDefault-BbjLfwJi.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function Fe({vendorsList:c,pendingVendorsList:d,suspendedVendorsList:p,auth:g}){const[m,h]=o.useState(1),[l,f]=o.useState(""),[S,s]=o.useState(c.data),[j,F]=o.useState(d.data),[I,K]=o.useState(p.data),[r,B]=o.useState("ApprovedSellers"),[L,b]=o.useState(!1),[D,V]=o.useState(null),N=a=>{G.fire({title:"Are you sure you want to delete the Seller?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(i=>{i.isConfirmed&&z.delete(route("admin.sellers.destroy",a.id))})},T=(a,i)=>{h(i),window.scrollTo(0,0)},C=a=>{const i=a.target.value;f(i);let n;r==="ApprovedSellers"?(n=c.data.filter(x=>x.full_name.toLowerCase().includes(i.toLowerCase())),s(n)):r==="PendingApproval"?(n=d.data.filter(x=>x.full_name.toLowerCase().includes(i.toLowerCase())),F(n)):r==="SuspendedSellers"&&(n=p.data.filter(x=>x.full_name.toLowerCase().includes(i.toLowerCase())),K(n)),h(1)},y=(()=>{if(l.length>0){if(r==="ApprovedSellers")return S;if(r==="PendingApproval")return j;if(r==="SuspendedSellers")return I}else{if(r==="ApprovedSellers")return c.data;if(r==="PendingApproval")return d.data;if(r==="SuspendedSellers")return p.data}})(),v=(m-1)*20,P=m*20,E=()=>b(!1),w=async a=>{try{const n=(await H.get(route("admin.sellers.show",a.id))).data;V(n),b(!0)}catch(i){console.error("Error fetching data",i)}},Q=()=>{b(!1)};return e.jsxs(O,{user:g.user,children:[e.jsx(Y,{title:"Sellers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Sellers Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(u,{permission:"Seller Create",children:e.jsxs(M,{className:"btn btn-info text-end",href:route("admin.sellers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsxs(R,{id:"uncontrolled-tab-example",activeKey:r,onSelect:a=>B(a),className:"",children:[e.jsx(A,{eventKey:"ApprovedSellers",title:"Approved Sellers",children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:l,handleSearch:C})}),e.jsx(A,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Approval"}),d.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:d.data.length})]}),children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:l,handleSearch:C})}),e.jsx(A,{eventKey:"SuspendedSellers",title:"Suspended Sellers",children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:l,handleSearch:C})})]})]})}),e.jsx($,{show:L,handleClose:E,size:"md",title:"Seller Details",children:D?e.jsx(q,{collection:D,handleClose:E,onSubmit:Q}):"Failed fetching data..."})]})}const k=({displayList:c,startIdx:d,endIdx:p,deleteVendor:g,handlePageChange:_,currentPage:m,itemsPerPage:h,handleShow:l,searchQuery:f,handleSearch:S})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(u,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:f,onChange:S})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Name"}),e.jsx(t.Th,{children:"Email"}),e.jsx(t.Th,{children:"Mobile Number"}),e.jsx(t.Th,{children:"Company Name"}),e.jsx(t.Th,{children:"Designation"}),e.jsx(t.Th,{className:"text-center",children:"Status"}),e.jsx(t.Th,{children:"Last Modified"}),e.jsx(t.Th,{className:"text-end"})]})}),e.jsx(t.Tbody,{children:c.slice(d,p).map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx(t.Td,{valign:"middle",children:s.id}),e.jsxs(t.Td,{valign:"middle",onClick:()=>l(s),children:[e.jsx("img",{src:s.picture,className:"w-30 h-30 me-3 rounded-circle",alt:`${s.picture} icon`,onError:j=>{j.target.onerror=null,j.target.src="/assets/admin/images/noimage.webp"}})," ",e.jsx("span",{children:s.full_name})]}),e.jsx(t.Td,{onClick:()=>l(s),valign:"middle",children:s.email}),e.jsx(t.Td,{onClick:()=>l(s),valign:"middle",children:s.phone}),e.jsx(t.Td,{onClick:()=>l(s),valign:"middle",children:s.company_name}),e.jsx(t.Td,{onClick:()=>l(s),valign:"middle",children:s.designation}),e.jsx(t.Td,{onClick:()=>l(s),className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx(t.Td,{onClick:()=>l(s),valign:"middle",children:window.formatDateTime(s.updated_at)}),e.jsxs(t.Td,{className:"text-end",children:[e.jsx(u,{permission:"Seller Show",children:e.jsx("span",{onClick:()=>l(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx(M,{className:"btn btn-transparent",href:route("admin.sellers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx("button",{onClick:()=>g(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})}),c.length>h&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(J,{count:Math.ceil(c.length/h),page:m,onChange:_})})]})})})})})});export{Fe as default};