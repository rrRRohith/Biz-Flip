import{r as i,W as B,j as e,Y as S,a as h,y as E,b as A}from"./app-D82t0zYb.js";import{A as T}from"./AdminAuthenticated-Co3WPScJ.js";import{P as d}from"./PermissionAllow-BYDhFGYP.js";import{Q as $,B as k}from"./ToastNotification-B_Nbzspg.js";import{S as O}from"./sweetalert2.all-DVU5DynI.js";import{D as L,C as M,P as Q}from"./react-beautiful-dnd.esm-Cnn1ImxT.js";import{P as R}from"./Pagination-CxGs5ZJ1.js";import"./Dropdown-n_-zBzZ1.js";import"./AdminSidebar-CQ8Wy-h3.js";import"./listen-BW-l1QEO.js";import"./useWindow-Cc9i1myS.js";import"./Anchor-DZItBogB.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BpboWu1s.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./hoist-non-react-statics.cjs-Dq3mWWjD.js";import"./tiny-invariant.esm-CCoILDQG.js";import"./interopRequireDefault-BbjLfwJi.js";import"./emotion-react.browser.esm-D3si1N0f.js";import"./extends-Ba-yMveS.js";import"./TransitionGroupContext-BR_efkoE.js";function ge({categoryList:n,auth:g}){const[l,b]=i.useState(1),[f,H]=i.useState(""),[N,p]=i.useState(n.data),{data:Y,setData:C,post:W,errors:q,reset:z}=B({orderedIds:[]}),P=t=>{O.fire({title:"Are you sure you want to delete this category?",text:" Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&E.delete(route("admin.business-category.destroy",t.id))})},v=(t,s)=>{b(s),window.scrollTo(0,0)};i.useEffect(()=>{p(n.data)},[n]);const c=f.length>0?N:n.data,w=(l-1)*20,y=l*20,m=c.slice(w,y);i.useEffect(()=>{j(m)},[m]);const[u,j]=i.useState(m),I=async t=>{if(!t.destination)return;const s=Array.from(u),[x]=s.splice(t.source.index,1);s.splice(t.destination.index,0,x);const r=s.map((a,D)=>({...a,position:D+1}));j(r),p(r);const o=r.map(a=>a.id);C("orderedIds",o);try{const a=await A.post(route("admin.business-category.position-update"),{orderedIds:o});k.success(a.data,{position:"top-right",autoClose:5e3,closeOnClick:!0})}catch(a){console.error("Error posting data:",a)}};return e.jsxs(T,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Business Categories"}),children:[e.jsx(S,{title:"Business Category List"}),e.jsx($,{position:"top-right",autoClose:1e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,draggable:!1}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Business Categories"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(h,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Business Categories"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(d,{permission:"Category Create",children:e.jsxs(h,{className:"btn btn-info text-end",href:route("admin.business-category.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(d,{permission:"Categories Listing",message:"true",children:[e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsx(L,{onDragEnd:I,children:e.jsx(M,{droppableId:"categories",children:t=>e.jsxs("table",{className:"table border-no",id:"example1",...t.droppableProps,ref:t.innerRef,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx("th",{children:"Name"}),e.jsx("th",{className:"text-center",children:"Status"}),e.jsx("th",{className:"text-center",children:"Last Modified"}),e.jsx("th",{})]})}),e.jsxs("tbody",{children:[u.map((s,x)=>e.jsx(Q,{draggableId:`${s.id}-${s.name}`,index:x,children:(r,o)=>e.jsxs("tr",{ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,className:` ${o.isDragging?"dragging":""}`,children:[e.jsx("td",{children:e.jsx("i",{className:"bi bi-arrows-move me-3 fw-bold"})}),e.jsx("td",{children:s.name}),e.jsx("td",{className:"text-center",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:window.statusIcon(s.status)}})}),e.jsx("td",{className:"text-center",children:window.formatDateTime(s.updated_at)}),e.jsxs("td",{align:"right",children:[e.jsx(d,{permission:"Category Edit",children:e.jsx(h,{className:"btn btn-transparent",href:route("admin.business-category.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(d,{permission:"Category Delete",children:e.jsx("button",{onClick:()=>P(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]})},`${s.id}-${s.name}`)),t.placeholder]})]})})})}),c.length>20&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(R,{count:Math.ceil(c.length/20),page:l,onChange:v})})]})})})})})})]})})]})}export{ge as default};