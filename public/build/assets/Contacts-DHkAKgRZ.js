<<<<<<< HEAD:public/build/assets/Contacts-BxuHMTFY.js
import{j as e,a as o}from"./app-DHgmYT40.js";function d({chats:s,user:l}){const t=(a,n)=>new RegExp(`^${n.replace(/\*/g,".*")}$`).test(a),r=window.location.pathname;return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"navbar contacts show border-end navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0",id:"navbarVertical",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("button",{className:"navbar-toggler ms-n2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#contactCollapse","aria-controls":"contactCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx("div",{className:"px-lg-4 px-0 font-bold text-md mb-0 mb-lg-3",children:"Messages"}),e.jsx("div",{className:"collapse navbar-collapse position-relative",id:"contactCollapse",children:e.jsx("ul",{className:"navbar-nav p-0",children:s.length?e.jsx(e.Fragment,{children:s.map(a=>e.jsx("li",{className:`nav-item rounded-0 mb-2 ${t(r,l.type=="customer"?"/customer/chats/":"/seller/chats/"+a.id)?"bg-gray-100":""}`,children:e.jsx(o,{href:route(l.type=="customer"?"customer.chats.show":"seller.chats.show",a.id),className:"nav-link text-md rounded-0",children:e.jsxs("div",{className:"d-flex align-items-center w-full",children:[e.jsx("div",{className:"me-2",children:e.jsx("img",{alt:"Image Placeholder",src:a.contact_image,class:"avatar avatar- rounded-circle"})}),e.jsx("div",{className:"w-full text-overflow",children:e.jsxs("div",{className:"w-full text-overflow",children:[e.jsxs("div",{className:"d-flex align-items-center w-full text-overflow",children:[e.jsx("div",{className:"fw-bold font-bold me-3 flex-1 text-overflow",children:a.contact_name}),e.jsx("div",{className:"small ms-auto text-overflow",children:a.last_message_time})]}),e.jsx("div",{className:"small text-overflow",children:a.last_message})]})})]})})}))}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"noresults position-absolute font-bold",children:"No contacts"})})})})]})})})}export{d as default};
=======
import{j as e,a as o}from"./app-B3lS64dG.js";function d({chats:s,user:l}){const t=(a,n)=>new RegExp(`^${n.replace(/\*/g,".*")}$`).test(a),r=window.location.pathname;return e.jsx(e.Fragment,{children:e.jsx("nav",{className:"navbar contacts show border-end navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0",id:"navbarVertical",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("button",{className:"navbar-toggler ms-n2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#contactCollapse","aria-controls":"contactCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx("div",{className:"px-lg-4 px-0 font-bold text-md mb-0 mb-lg-3",children:"Messages"}),e.jsx("div",{className:"collapse navbar-collapse position-relative",id:"contactCollapse",children:e.jsx("ul",{className:"navbar-nav p-0",children:s.length?e.jsx(e.Fragment,{children:s.map(a=>e.jsx("li",{className:`nav-item rounded-0 mb-2 ${t(r,l.type=="customer"?"/customer/chats/":"/seller/chats/"+a.id)?"bg-gray-100":""}`,children:e.jsx(o,{href:route(l.type=="customer"?"customer.chats.show":"seller.chats.show",a.id),className:"nav-link text-md rounded-0",children:e.jsxs("div",{className:"d-flex align-items-center w-full",children:[e.jsx("div",{className:"me-2",children:e.jsx("img",{alt:"Image Placeholder",src:a.contact_image,class:"avatar avatar- rounded-circle"})}),e.jsx("div",{className:"w-full text-overflow",children:e.jsxs("div",{className:"w-full text-overflow",children:[e.jsxs("div",{className:"d-flex align-items-center w-full text-overflow",children:[e.jsx("div",{className:"fw-bold font-bold me-3 flex-1 text-overflow",children:a.contact_name}),e.jsx("div",{className:"small ms-auto text-overflow",children:a.last_message_time})]}),e.jsx("div",{className:"small text-overflow",children:a.last_message})]})})]})})}))}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"noresults position-absolute font-bold",children:"No contacts"})})})})]})})})}export{d as default};
>>>>>>> c94f848a75a5107ef7180eb58f9076e4e7e00291:public/build/assets/Contacts-DHkAKgRZ.js
