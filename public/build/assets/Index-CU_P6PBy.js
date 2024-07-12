import{r,j as e,Y as y,a as d,y as T}from"./app-DQNkgWdZ.js";import{A as S}from"./AdminAuthenticated-CuIzPW4j.js";import{d as t}from"./index-DPGCi7OR.js";import{P as n}from"./PermissionAllow-ButaP9Fn.js";import{P as L}from"./Pagination-C0byUQ7O.js";import"./Dropdown-Bdmo2fZW.js";import"./AdminHeader-DXZo_Gnb.js";import"./Fade-C51PzYCI.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./BootstrapModalManager-BvIY6NEB.js";import"./index-DPs_KfQ3.js";import"./Anchor-CKIlv3KC.js";import"./extends-CCbyfPlC.js";import"./index-Z8pqiZco.js";import"./ToastNotification-CxpinE6B.js";import"./interopRequireDefault-BbjLfwJi.js";import"./extends-DM2IsgWP.js";import"./defineProperty-DpFVb8oi.js";import"./emotion-react.browser.esm-CWUohC2S.js";import"./hoist-non-react-statics.cjs-C-oITpAa.js";import"./objectWithoutPropertiesLoose-DN910g8V.js";function Z({cityList:o,auth:u,success:p=null,error:b=null}){const[l,m]=r.useState(1),[h,g]=r.useState(""),[N,f]=r.useState([]);r.useEffect(()=>{const i=new URLSearchParams(window.location.search).get("name")||"";x(i)},[]);const C=s=>{Swal.fire({title:"Are you sure you want to delete this country?",text:"Once deleted, it cannot be recovered.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, delete it!"}).then(i=>{i.isConfirmed&&T.delete(route("admin.city.destroy",s.id),{onSuccess:()=>{Swal.fire("Deleted!","City has been deleted.","success")}})})},v=(s,i)=>{m(i),window.scrollTo(0,0)},P=s=>{const i=s.target.value;x(i)},x=(s=null)=>{g(s);const i=o.data.filter(a=>a.name.toLowerCase().includes(s.toLowerCase()));f(i),m(1)},c=h.length>0?N:o.data,j=(l-1)*50,w=l*50;return e.jsxs(S,{user:u.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City"}),success:p,error:b,children:[e.jsx(y,{title:"City List"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:"Cities"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(d,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Cities"})]})})})]})}),e.jsx("div",{className:"col-lg-6",children:e.jsx("div",{className:"text-end",children:e.jsx(n,{permission:"City Create",children:e.jsxs(d,{className:"btn btn-info text-end",href:route("admin.city.create"),children:[e.jsx("i",{className:"bi bi-plus"})," Create"]})})})})]})}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{type:"text",className:"form-control",placeholder:"Search by name...",value:h,onChange:P})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs(n,{permission:"Cities Listing",message:"true",children:[e.jsx("div",{className:"table-responsive rounded card-table",children:e.jsxs(t.Table,{className:"table border-no",id:"example1",children:[e.jsx(t.Thead,{children:e.jsxs(t.Tr,{children:[e.jsx(t.Th,{children:"#"}),e.jsx(t.Th,{children:"Image"}),e.jsx(t.Th,{children:"Name"}),e.jsx(t.Th,{children:"Position"}),e.jsx(t.Th,{children:"Status"}),e.jsx(t.Th,{children:"Last Modified"}),e.jsx(t.Th,{})]})}),e.jsx(t.Tbody,{children:c.slice(j,w).map((s,i)=>e.jsxs(t.Tr,{className:"hover-primary",children:[e.jsx("td",{children:i+j+1}),e.jsxs("td",{children:[e.jsx("img",{src:s.image,className:"w-40 rounded-5 ",alt:`${s.image} icon`,onError:a=>{a.target.onerror=null,a.target.src="/assets/admin/images/noimage.webp"}}),e.jsx("span",{className:"ms-3",children:s.name})]}),e.jsx("td",{children:s.position}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.updated_at}),e.jsxs("td",{children:[e.jsx(n,{permission:"City Edit",children:e.jsx(d,{className:"btn btn-transparent",href:route("admin.city.edit",s.id),children:e.jsx("i",{className:"bi bi-pencil"})})}),e.jsx(n,{permission:"City Delete",children:e.jsx("button",{onClick:a=>C(s),className:"btn btn-transparent border-0",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},s.id))})]})}),c.length>50&&e.jsx("div",{className:"pagination-container float-end py-5",children:e.jsx(L,{count:Math.ceil(c.length/50),page:l,onChange:v})})]})})})})})})]})})]})}export{Z as default};
