import{r as n,j as e,y as o}from"./app-96-ETbjc.js";import u from"./LeadStatusBtn-Bj6fAKku.js";import"./server.browser-A5vdDrF0.js";import{M as s}from"./Modal-CbKQkVhD.js";import b from"./Lead-CCbAduM7.js";import{P as r}from"./PermissionAllow-Y5bVv8C0.js";import"./listen-B9FOW-Dn.js";import"./useWindow-DfpURWEg.js";import"./Fade-CK5pYl47.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./inheritsLoose-1HkgTRWY.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DZN8NTON.js";import"./index-Chjiymov.js";import"./TransitionGroupContext-B1P8tJmz.js";function M({leads:d}){const[c,i]=n.useState(!1),[h,x]=n.useState(null);n.useState("Lead details");const m=()=>i(!1),l=async t=>{x(t),i(!0)},j=t=>{i(!1),o.put(route("seller.leads.update",t.id))},p=t=>{window.confirm("Are you sure you want to delete the lead?")&&o.delete(route("seller.leads.destroy",t.id))};return e.jsxs(e.Fragment,{children:[e.jsxs(s,{show:c,onHide:m,centered:!0,children:[e.jsx(s.Header,{closeButton:!0,children:e.jsx(s.Title,{children:"Lead Details"})}),e.jsx(s.Body,{children:e.jsx(b,{lead:h,attendLead:j})})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-hover table-nowrap",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Client"}),e.jsx("th",{scope:"col",children:"Ad"}),e.jsx("th",{scope:"col",children:"Date"}),e.jsx(r,{permission:"Ad Lead Show",children:e.jsx("th",{scope:"col",children:"Message"})}),e.jsx("th",{scope:"col",children:"Contact details"}),e.jsx("th",{scope:"col",children:"Status"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:d.length?e.jsx(e.Fragment,{children:d.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{children:[t.firstname," ",t.lastname]})}),e.jsxs("td",{children:[e.jsx("div",{children:t.ad.title}),e.jsx("div",{className:"small text-muted",children:t.ad.city})]}),e.jsx("td",{children:t.date_text}),e.jsx(r,{permission:"Ad Lead Show",children:e.jsx("td",{children:e.jsx("div",{onClick:a=>l(t),role:"button",className:"text-primary text-decoration-underline",children:"Read message"})})}),e.jsxs("td",{children:[e.jsx("div",{children:t.email}),e.jsx("div",{className:"small text-muted",children:t.phone})]}),e.jsx("td",{children:e.jsx(u,{status:t.status})}),e.jsxs("td",{children:[e.jsx(r,{permission:"Ad Lead Show",children:e.jsx("button",{onClick:a=>l(t),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover me-2",children:e.jsx("i",{className:"bi bi-search"})})}),e.jsx(r,{permission:"Ad Lead Edit",children:e.jsx("button",{onClick:a=>p(t),type:"button",className:"btn btn-sm btn-square btn-neutral text-danger-hover",children:e.jsx("i",{className:"bi bi-trash"})})})]})]},t.id))}):e.jsx(e.Fragment,{children:e.jsx("tr",{children:e.jsx("td",{className:"text-center",colSpan:"100",children:"No records found.."})})})})]})})]})}export{M as default};
