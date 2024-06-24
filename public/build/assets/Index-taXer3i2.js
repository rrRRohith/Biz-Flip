import{j as e,r as x,Y as H,a as M,y as R,b as U}from"./app-D82t0zYb.js";import{A as Y}from"./AdminAuthenticated-Co3WPScJ.js";import{P as S}from"./PermissionAllow-BYDhFGYP.js";import{a as q,T as K}from"./Tab-BQ1c4WXf.js";import{a as B}from"./Anchor-DZItBogB.js";import{g as G,N as J,T as W,a as X,d as Z,e as ee}from"./TabPane-KnXu-S3f.js";import{m as I,f as se}from"./ElementChildren-osMS18Nq.js";import{M as te}from"./ModalPopup-8dChtsla.js";import ae from"./ViewSeller-9ibxSohF.js";import{d as s}from"./SuperResponsiveTableStyle-BlurmdV_.js";import{P as le}from"./Pagination-CxGs5ZJ1.js";import"./Dropdown-n_-zBzZ1.js";import"./AdminSidebar-CQ8Wy-h3.js";import"./listen-BW-l1QEO.js";import"./useWindow-Cc9i1myS.js";import"./index-BpboWu1s.js";import"./ToastNotification-B_Nbzspg.js";import"./index-BG_QnUIL.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./Fade-CjSTNB-b.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./TransitionGroupContext-BR_efkoE.js";import"./Modal-2ZQXsdHS.js";import"./slick-theme-CNeQ_L3X.js";import"./StatusBtn-DCUzlNkB.js";import"./DynamicSelect-CNP2hKx5.js";import"./react-select-creatable.esm-DdZLfR7f.js";import"./useStateManager-7e1e8489.esm-ZDthZhp5.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./inherits-CWsdyUoO.js";import"./emotion-react.browser.esm-D3si1N0f.js";import"./extends-Ba-yMveS.js";import"./hoist-non-react-statics.cjs-Dq3mWWjD.js";import"./interopRequireDefault-BbjLfwJi.js";function re(l){let a;return se(l,r=>{a==null&&(a=r.props.eventKey)}),a}function ie(l){const{title:a,eventKey:r,disabled:u,tabClassName:j,tabAttrs:i,id:c}=l.props;return a==null?null:e.jsx(Z,{as:"li",role:"presentation",children:e.jsx(ee,{as:"button",type:"button",eventKey:r,disabled:u,id:c,className:j,...i,children:a})})}const F=l=>{const{id:a,onSelect:r,transition:u,mountOnEnter:j=!1,unmountOnExit:i=!1,variant:c="tabs",children:n,activeKey:f=re(n),...g}=B(l,{activeKey:"onSelect"});return e.jsxs(q,{id:a,activeKey:f,onSelect:r,transition:G(u),mountOnEnter:j,unmountOnExit:i,children:[e.jsx(J,{id:a,...g,role:"tablist",as:"ul",variant:c,children:I(n,ie)}),e.jsx(W,{children:I(n,t=>{const d={...t.props};return delete d.title,delete d.disabled,delete d.tabClassName,delete d.tabAttrs,e.jsx(X,{...d})})})]})};F.displayName="Tabs";function Ue({vendorsList:l,pendingVendorsList:a,suspendedVendorsList:r,auth:u}){const[i,c]=x.useState(1),[n,f]=x.useState(""),[g,t]=x.useState(l.data),[d,L]=x.useState(a.data),[k,O]=x.useState(r.data),[o,V]=x.useState("ApprovedSellers"),[Q,N]=x.useState(!1),[D,$]=x.useState(null),v=p=>{window.confirm("Are you sure you want to delete the Seller?")&&R.delete(route("admin.sellers.destroy",p.id))},T=(p,m)=>{c(m),window.scrollTo(0,0)},y=p=>{const m=p.target.value;f(m);let h;o==="ApprovedSellers"?(h=l.data.filter(b=>b.full_name.toLowerCase().includes(m.toLowerCase())),t(h)):o==="PendingApproval"?(h=a.data.filter(b=>b.full_name.toLowerCase().includes(m.toLowerCase())),L(h)):o==="SuspendedSellers"&&(h=r.data.filter(b=>b.full_name.toLowerCase().includes(m.toLowerCase())),O(h)),c(1)},w=(()=>{if(n.length>0){if(o==="ApprovedSellers")return g;if(o==="PendingApproval")return d;if(o==="SuspendedSellers")return k}else{if(o==="ApprovedSellers")return l.data;if(o==="PendingApproval")return a.data;if(o==="SuspendedSellers")return r.data}})(),P=(i-1)*20,C=i*20,_=()=>N(!1),A=async p=>{try{const h=(await U.get(route("admin.sellers.show",p.id))).data;$(h),N(!0)}catch(m){console.error("Error fetching data",m)}},z=()=>{N(!1)};return e.jsxs(Y,{user:u.user,children:[e.jsx(H,{title:"Sellers List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"me-auto",children:e.jsx("h4",{className:"page-title",children:"Sellers Listing"})})})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(S,{permission:"Seller Create",children:e.jsxs(M,{className:"btn btn-info text-end",href:route("admin.sellers.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsxs(F,{id:"uncontrolled-tab-example",activeKey:o,onSelect:p=>V(p),className:"",children:[e.jsx(K,{eventKey:"ApprovedSellers",title:"Approved Sellers",children:e.jsx(E,{displayList:w,startIdx:P,endIdx:C,deleteVendor:v,handlePageChange:T,currentPage:i,itemsPerPage:20,handleShow:A,searchQuery:n,handleSearch:y})}),e.jsx(K,{eventKey:"PendingApproval",title:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Pending Approval"}),a.data.length>0&&e.jsx("span",{className:"pending-approval-count",children:a.data.length})]}),children:e.jsx(E,{displayList:w,startIdx:P,endIdx:C,deleteVendor:v,handlePageChange:T,currentPage:i,itemsPerPage:20,handleShow:A,searchQuery:n,handleSearch:y})}),e.jsx(K,{eventKey:"SuspendedSellers",title:"Suspended Sellers",children:e.jsx(E,{displayList:w,startIdx:P,endIdx:C,deleteVendor:v,handlePageChange:T,currentPage:i,itemsPerPage:20,handleShow:A,searchQuery:n,handleSearch:y})})]})]})}),e.jsx(te,{show:Q,handleClose:_,size:"md",title:"Seller Details",children:D?e.jsx(ae,{collection:D,handleClose:_,onSubmit:z}):"Failed fetching data..."})]})}const E=({displayList:l,startIdx:a,endIdx:r,deleteVendor:u,handlePageChange:j,currentPage:i,itemsPerPage:c,handleShow:n,searchQuery:f,handleSearch:g})=>e.jsx("section",{className:"content2",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(S,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"mb-3 col-lg-4",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:f,onChange:g})}),e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(s.Table,{className:"table border-no",id:"example1",children:[e.jsx(s.Thead,{children:e.jsxs(s.Tr,{children:[e.jsx(s.Th,{children:"#"}),e.jsx(s.Th,{children:"Name"}),e.jsx(s.Th,{children:"Email"}),e.jsx(s.Th,{children:"Mobile Number"}),e.jsx(s.Th,{children:"Company Name"}),e.jsx(s.Th,{children:"Designation"}),e.jsx(s.Th,{className:"text-center",children:"Status"}),e.jsx(s.Th,{children:"Last Modified"}),e.jsx(s.Th,{className:"text-end"})]})}),e.jsx(s.Tbody,{children:l.slice(a,r).map(t=>e.jsxs(s.Tr,{className:"hover-primary",children:[e.jsx(s.Td,{valign:"middle",children:t.id}),e.jsxs(s.Td,{valign:"middle",children:[e.jsx("img",{src:t.picture,className:"w-30 h-30 me-3 rounded-circle",alt:`${t.picture} icon`,onError:d=>{d.target.onerror=null,d.target.src="/assets/admin/images/noimage.webp"}})," ",e.jsx("span",{children:t.full_name})]}),e.jsx(s.Td,{valign:"middle",children:t.email}),e.jsx(s.Td,{valign:"middle",children:t.phone}),e.jsx(s.Td,{valign:"middle",children:t.company_name}),e.jsx(s.Td,{valign:"middle",children:t.designation}),e.jsx(s.Td,{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(t.status)}})}),e.jsx(s.Td,{valign:"middle",children:window.formatDateTime(t.updated_at)}),e.jsxs(s.Td,{className:"text-end",children:[e.jsx(S,{permission:"Seller Show",children:e.jsx("span",{onClick:()=>n(t),className:"btn btn-transparent",children:e.jsx("i",{className:"bi bi-eye"})})}),e.jsx(S,{permission:"Seller Edit",children:e.jsx(M,{className:"btn btn-transparent",href:route("admin.sellers.edit",t.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(S,{permission:"Seller Edit",children:e.jsx("button",{onClick:()=>u(t),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},t.id))})]})}),l.length>c&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(le,{count:Math.ceil(l.length/c),page:i,onChange:j})})]})})})})})});export{Ue as default};
