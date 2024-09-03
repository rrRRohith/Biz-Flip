import{r as o,j as e,Y,a as M,y as z,b as H}from"./app-BDFA7kHC.js";import{A as O}from"./AdminAuthenticated-DeCUIuhN.js";import{P as u}from"./PermissionAllow-Hi-OFSiD.js";import{T as A}from"./Tab-BElqfYnw.js";import{T as R}from"./Tabs-o4Q9cske.js";import{M as $}from"./ModalPopup-DPsd-rDR.js";import q from"./ViewSeller-CB7J2AEw.js";import{d as t}from"./index-emYcDbpg.js";/* empty css                                  */import{S as G}from"./sweetalert2.all-Y1CzQ1Au.js";import{P as J}from"./Pagination-eOjXXgjp.js";import"./Dropdown-B5gfljLy.js";import"./AdminHeader-CUrIl9CH.js";import"./Dropdown-vPz9-q6F.js";import"./listen-B0dR9xdZ.js";import"./useWindow-D7q-0_CX.js";import"./Anchor-C7u-wxA0.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BuCu3wLy.js";import"./BootstrapModalManager-C1s8CXgk.js";import"./Fade-Bg678BVI.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-ByIaxJa0.js";import"./ToastNotification-5mUv22LG.js";import"./TabPane-MGgGF9M8.js";import"./ElementChildren-qeUXSXWv.js";import"./Modal-MccVJcVp.js";import"./slick-theme-S6mFoURQ.js";import"./StatusBtn-VvRBj3r0.js";import"./DynamicSelect-C9RUCt4p.js";import"./react-select.esm-B7lCv496.js";import"./Select-49a62830.esm-jUMKTUGN.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./extends-DM2IsgWP.js";import"./emotion-react.browser.esm-D1beDQ3w.js";import"./hoist-non-react-statics.cjs-Dc24XJvx.js";import"./interopRequireDefault-BbjLfwJi.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function Le({vendorsList:c,pendingVendorsList:d,suspendedVendorsList:p,auth:g}){const[m,h]=o.useState(1),[i,f]=o.useState(""),[S,s]=o.useState(c.data),[j,F]=o.useState(d.data),[I,K]=o.useState(p.data),[r,B]=o.useState("ApprovedSellers"),[L,b]=o.useState(!1),[D,V]=o.useState(null),N=a=>{G.fire({title:"Are you sure you want to delete the Seller?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(l=>{l.isConfirmed&&z.delete(route("admin.sellers.destroy",a.id))})},T=(a,l)=>{h(l),window.scrollTo(0,0)},C=a=>{const l=a.target.value;f(l);let n;r==="ApprovedSellers"?(n=c.data.filter(x=>x.full_name.toLowerCase().includes(l.toLowerCase())),s(n)):r==="PendingApproval"?(n=d.data.filter(x=>x.full_name.toLowerCase().includes(l.toLowerCase())),F(n)):r==="SuspendedSellers"&&(n=p.data.filter(x=>x.full_name.toLowerCase().includes(l.toLowerCase())),K(n)),h(1)},y=(()=>{if(i.length>0){if(r==="ApprovedSellers")return S;if(r==="PendingApproval")return j;if(r==="SuspendedSellers")return I}else{if(r==="ApprovedSellers")return c.data;if(r==="PendingApproval")return d.data;if(r==="SuspendedSellers")return p.data}})(),v=(m-1)*20,P=m*20,E=()=>b(!1),w=async a=>{try{const n=(await H.get(route("admin.sellers.show",a.id))).data;V(n),b(!0)}catch(l){console.error("Error fetching data",l)}},Q=()=>{b(!1)};return e.jsxs(O,{user:g.user,children:[e.jsx(Y,{title:"Sellers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Sellers Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(u,{permission:"Seller Create",children:e.jsxs(M,{className:"btn btn-info text-end",href:route("admin.sellers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsxs(R,{id:"uncontrolled-tab-example",activeKey:r,onSelect:a=>B(a),className:"",children:[e.jsx(A,{eventKey:"ApprovedSellers",title:"Approved Sellers",children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:i,handleSearch:C})}),e.jsx(A,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Approval"}),d.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:d.data.length})]}),children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:i,handleSearch:C})}),e.jsx(A,{eventKey:"SuspendedSellers",title:"Suspended Sellers",children:e.jsx(k,{displayList:y,startIdx:v,endIdx:P,deleteVendor:N,handlePageChange:T,currentPage:m,itemsPerPage:20,handleShow:w,searchQuery:i,handleSearch:C})})]})]})}),e.jsx($,{show:L,handleClose:E,size:"md",title:"Seller Details",children:D?e.jsx(q,{collection:D,handleClose:E,onSubmit:Q}):"Failed fetching data..."})]})}const k=({displayList:c,startIdx:d,endIdx:p,deleteVendor:g,handlePageChange:_,currentPage:m,itemsPerPage:h,handleShow:i,searchQuery:f,handleSearch:S})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(u,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:f,onChange:S})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Name"}),e.jsx(t.Th,{children:"Email"}),e.jsx(t.Th,{children:"Mobile Number"}),e.jsx(t.Th,{children:"Company Name"}),e.jsx(t.Th,{children:"Designation"}),e.jsx(t.Th,{className:"text-center",children:"Status"}),e.jsx(t.Th,{children:"Last Modified"}),e.jsx(t.Th,{className:"text-end"})]})}),e.jsx(t.Tbody,{children:c.slice(d,p).map(s=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx(t.Td,{valign:"middle",children:s.id}),e.jsxs(t.Td,{valign:"middle",onClick:()=>i(s),children:[e.jsx("img",{src:s.picture,className:"w-30 h-30 me-3 rounded-circle",alt:`${s.picture} icon`,onError:j=>{j.target.onerror=null,j.target.src="/assets/admin/images/noimage.webp"}})," ",e.jsx("span",{children:s.full_name})]}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.email}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.phone}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.company_name}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:s.designation}),e.jsx(t.Td,{onClick:()=>i(s),className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx(t.Td,{onClick:()=>i(s),valign:"middle",children:window.formatDateTime(s.updated_at)}),e.jsxs(t.Td,{className:"text-end",children:[e.jsx(u,{permission:"Seller Show",children:e.jsx("span",{onClick:()=>i(s),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx(M,{className:"btn btn-transparent",href:route("admin.sellers.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(u,{permission:"Seller Edit",children:e.jsx("button",{onClick:()=>g(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})}),c.length>h&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(J,{count:Math.ceil(c.length/h),page:m,onChange:_})})]})})})})})});export{Le as default};