import{j as n}from"./app-DPLo5d41.js";function a({lead:s,sold:t,attendLead:d}){return n.jsxs("div",{className:"dropdown",children:[s.status==1&&n.jsx("div",{className:"btn btn-sm p-2 py-1 btn-success small dropdown-toggle","data-bs-toggle":"dropdown",children:"Responded"}),s.status==2&&n.jsx("div",{className:"btn btn-sm p-2 py-1 btn-primary small",children:"Sold"}),s.status==0&&n.jsx("div",{className:"btn btn-sm p-2 py-1 btn-warning small dropdown-toggle","data-bs-toggle":"dropdown",children:"Pending"}),(s.status==0||s.status==1)&&n.jsxs("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[s.status==1&&n.jsx("li",{children:n.jsx("a",{onClick:o=>t(s),className:"dropdown-item",href:"#",children:"Sold"})}),s.status==0&&n.jsx("li",{children:n.jsx("a",{onClick:o=>d(s),className:"dropdown-item",href:"#",children:"Responded"})})]})]})}export{a as default};
