import{j as e}from"./app-BI8CDGIC.js";import{M as t}from"./Modal-IAMgDekX.js";import"./listen-D97mMRrt.js";import"./useWindow-DRJARvWJ.js";import"./BootstrapModalManager-DjanPYZr.js";import"./Fade-DjR6nY0B.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-BEWa45jB.js";function N({deleteAction:s,deleteId:r,setShowDelete:o,handleClose:i,showDelete:n}){return e.jsx(e.Fragment,{children:e.jsxs(t,{show:n,onHide:i,centered:!0,animation:!1,children:[e.jsx(t.Header,{closeButton:!0,className:"border-0",children:e.jsx(t.Title,{className:"text-danger",children:"Hold on!"})}),e.jsx(t.Body,{className:"border-0 py-0",children:e.jsx("div",{className:"text-md",children:"Are you sure want to delete? this action is non reversible"})}),e.jsx(t.Footer,{className:"border-0",children:e.jsx("div",{className:"row g-5",children:e.jsxs("div",{className:"col-12 mt-0 text-end",children:[e.jsx("button",{onClick:l=>o(!1),type:"submit",className:"btn btn-light me-2",children:"No, cancel"}),e.jsx("button",{onClick:l=>s(r),type:"submit",className:"btn btn-danger",children:"Yes, continue"})]})})})]})})}export{N as default};