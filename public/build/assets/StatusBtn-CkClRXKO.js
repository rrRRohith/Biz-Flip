import{r as d,j as e}from"./app-B3lS64dG.js";import{N as r,T as p,a as m}from"./TabPane-CHHGYJq3.js";import{P as n}from"./inheritsLoose-DbZSpFkk.js";function o({options:s}){const[i,l]=d.useState("0"),c=t=>{l(t)};return e.jsxs(e.Fragment,{children:[e.jsx(r,{justify:!0,variant:"tabs",defaultActiveKey:i,onSelect:c,children:s.map((t,a)=>e.jsx(r.Item,{children:e.jsx(r.Link,{eventKey:a.toString(),children:t.title})},a))}),e.jsx(p,{children:s.map((t,a)=>e.jsx(m,{eventKey:a.toString(),active:i===a.toString(),children:e.jsx("div",{className:"p-20",dangerouslySetInnerHTML:{__html:t.content}})},a))})]})}o.propTypes={options:n.arrayOf(n.shape({title:n.string.isRequired})).isRequired};function j({status:s}){return s==-1?e.jsx("div",{className:"badge  p-2 py-1 bg-danger small",children:"Suspended"}):s==0?e.jsx("div",{className:"badge  p-2 py-1 bg-warning small",children:"Pending"}):s==1?e.jsx("div",{className:"badge  p-2 py-1 bg-success small",children:"Active"}):s==2?e.jsx("div",{className:"badge  p-2 py-1 bg-info small",children:"Completed"}):e.jsx("div",{className:"badge  p-2 py-1 bg-danger small",children:"Inactive"})}export{j as S,o as T};
