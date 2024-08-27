import{r as d,W as U,j as e,Y as O,a as N}from"./app-B5wC7NxF.js";import{A as W}from"./AdminAuthenticated-viJZTu_l.js";import{I as c}from"./InputError-DVO8QF5D.js";import{T as i}from"./TextInput-pIbZTwZ7.js";import{I as t}from"./InputLabel-tUot0W4-.js";import"./SelectOption-BbZOLmsL.js";import{D as h}from"./DynamicSelect-DOENev3Y.js";import{S as v}from"./react-select.esm-Dn9Rsez6.js";import{F as g}from"./Form-DDq8L6ZQ.js";import"./PermissionAllow-BD9t1_7_.js";import{I as _}from"./InputGroup-BwVCi59c.js";import"./Dropdown-8O5GOMrM.js";import"./AdminHeader-DrcSMZX6.js";import"./Dropdown-i65IHXYb.js";import"./listen-CE2jlpW0.js";import"./useWindow-BF4Teau8.js";import"./Anchor-J76Ltj_P.js";import"./extends-CCbyfPlC.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./index-BVfm5v4q.js";import"./BootstrapModalManager-DrkeXUZW.js";import"./Fade-BnNH027k.js";import"./inheritsLoose-BUMXnXOz.js";import"./index-Chjiymov.js";import"./setPrototypeOf-DgZC2w_0.js";import"./ToastNotification-WLy0EpOh.js";import"./inherits-BiHf3OJn.js";import"./objectSpread2-BZX5QY3a.js";import"./defineProperty-DpFVb8oi.js";import"./emotion-react.browser.esm-B_iajOiE.js";import"./inherits-DEw0FBPK.js";import"./hoist-non-react-statics.cjs-B3z-8DS4.js";import"./ElementChildren-Dkq248ee.js";import"./Col-LandNkQe.js";function we({auth:y,seller:s,cities:w,provinces:C,featureLabel:k}){const[x,D]=d.useState(!1),{data:l,setData:n,post:S,errors:m,reset:$}=U({firstname:s.firstname||"",lastname:s.lastname||"",email:s.email||"",phone:s.phone||"",address:s.address||"",postalcode:s.postalcode||"",password:"",city:s.city||"",province:s.province||"",featureLabel:s.feature_label_id||"",featureLabelName:s.featureLabelName||"",picture:"",short_description:s.short_description||"",description:s.description||"",logo:"",company_name:s.company_name||"",full_address:s.full_address||"",alt_emails:s.alt_emails||"",alt_phone:s.alt_phone||"",lat:s.lat||"",long:s.long||"",employee:s.employee||"",website:s.website||"",designation:s.designation||"",public_profile_on:s.public_profile_on==1?1:0,company_email:s.company_email||"",company_phone:s.company_phone||"",position:s.position||"",business_type:"",status:s.status=="active"?1:(s.status=="suspended"?-1:0)||1,days:s.availableDays||{},_method:"PUT",remove_picture:!1,remove_logo:!1}),[b,f]=d.useState(""),[j,u]=d.useState("");d.useEffect(()=>{s.picture&&f(s.picture)},[s.picture]),d.useEffect(()=>{s.logo&&u(s.logo)},[s.logo]);const L=[{id:"mon",label:"Monday"},{id:"tue",label:"Tuesday"},{id:"wed",label:"Wednesday"},{id:"thu",label:"Thursday"},{id:"fri",label:"Friday"},{id:"sat",label:"Saturday"},{id:"sun",label:"Sunday"}],[p,I]=d.useState({mon:s.availableDays&&s.availableDays.mon||!1,tue:s.availableDays&&s.availableDays.tue||!1,wed:s.availableDays&&s.availableDays.wed||!1,thu:s.availableDays&&s.availableDays.thu||!1,fri:s.availableDays&&s.availableDays.fri||!1,sat:s.availableDays&&s.availableDays.sat||!1,sun:s.availableDays&&s.availableDays.sun||!1}),P=()=>{D(!x)},E=a=>{const r={...p,[a]:!p[a]};I(r),n("days",r)},A=[{label:"Select an option",value:"Select an option"},{label:"Less than 10",value:"Less than 10"},{label:"10 to 25",value:"10 to 25"},{label:"25 to 50",value:"25 to 50"},{label:"50 to 100",value:"50 to 100"},{label:"More than 100",value:"More than 100"}],R=[{id:"Agency",label:"Agency"},{id:"Mortgage Brokerage",label:"Mortgage Brokerage"},{id:"Residential Real Estate Agent",label:"Residential Real Estate Agent"},{id:"Commercial Property Broker",label:"Commercial Property Broker"},{id:"Other",label:"Other"}],T=a=>{const r=a.target.files[0];r&&(n("picture",r),f(URL.createObjectURL(r)))},B=()=>{n("picture",""),f(""),n("remove_picture",!0)},F=a=>{const r=a.target.files[0];r&&(n("logo",r),u(URL.createObjectURL(r)))},M=()=>{n("logo",""),u(""),n("remove_logo",!0)},o=(a,r)=>{n(a,r)},V=async a=>{a.preventDefault(),await S(route("admin.sellers.update",s.user_id),{preserveScroll:!0,onSuccess:()=>{}})};return e.jsxs(W,{user:y.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Seller/Edit"}),children:[e.jsx(O,{title:"Seller Edit"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Edit Seller"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(N,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(N,{href:route("admin.sellers.index"),children:"Sellers"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsx("form",{onSubmit:V,children:e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-lg-9",children:[e.jsx("h4",{className:"col-lg-12 pb-30",children:e.jsx("u",{children:"Contact Person "})}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(i,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:l.firstname,onChange:a=>o("firstname",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(i,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:l.lastname,onChange:a=>o("lastname",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Email"}),e.jsx(i,{id:"email",type:"text",name:"email",className:"form-control",value:l.email,onChange:a=>o("email",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Phone No"}),e.jsx(i,{id:"phone",type:"text",name:"phone",className:"form-control",value:l.phone,onChange:a=>o("phone",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Designation"}),e.jsx(i,{id:"designation",type:"text",name:"designation",className:"form-control",value:l.designation,onChange:a=>o("designation",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.designation,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Password"}),e.jsxs(_,{className:"mb-3",children:[e.jsx(i,{id:"password",type:x?"text":"password",name:"password",className:"form-control",autoComplete:"new-password",value:l.password,onChange:a=>o("password",a.target.value)}),e.jsx(_.Text,{id:"inputGroup-sizing-sm",children:e.jsx("i",{role:"button",className:`bi ${x?"bi-eye":"bi-eye-slash"}`,onClick:P})})]}),e.jsx(c,{message:m.password,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Address"}),e.jsx(i,{id:"address",type:"text",name:"address",className:"form-control",value:l.address,onChange:a=>o("address",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Postal Code"}),e.jsx(i,{id:"postalcode",type:"text",name:"postalcode",className:"form-control",value:l.postalcode,onChange:a=>o("postalcode",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.postalcode,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"City"}),e.jsx(h,{onChange:a=>o("city",a),value:l.city,options:w,name:"city",defaultValue:l.city}),e.jsx(c,{message:m.city,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(h,{onChange:a=>o("province",a),value:l.province,options:C,name:"province",defaultValue:l.province}),e.jsx(c,{message:m.province,className:"mt-2 col-12"})]})})]})]}),e.jsx("div",{className:"col-lg-3 d-flex align-items-center",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border  bg-gray-100 rounded10 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[b?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:b,alt:"Selected",className:"avatar-xxxl rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:B})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 avatar-xxxl text-center rounded-circle "}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-nature btn-sm",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(i,{id:"project_image_path",type:"file",name:"picture",className:"d-none mt-1 block w-full upload",onChange:T})]})]})]})})})]})}),e.jsxs("div",{className:"col-lg-12",children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("h4",{className:"col-lg-12 pb-30",children:e.jsx("u",{children:"Company Information"})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(i,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:l.company_name,onChange:a=>o("company_name",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx("textarea",{id:"description",type:"text",name:"description",className:"form-control",rows:5,value:l.description,onChange:a=>o("description",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Full Address"}),e.jsx(i,{id:"full_address",type:"text",name:"full_address",className:"form-control",value:l.full_address,onChange:a=>o("full_address",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.full_address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Latitude"}),e.jsx(i,{id:"lat",type:"text",name:"lat",className:"form-control",value:l.lat,onChange:a=>o("lat",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.lat,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Longtitude"}),e.jsx(i,{id:"long",type:"text",name:"long",className:"form-control",value:l.long,onChange:a=>o("long",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.long,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Email"}),e.jsx(i,{id:"company_email",type:"text",name:"company_email",className:"form-control",value:l.company_email,onChange:a=>o("company_email",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.company_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Phone No"}),e.jsx(i,{id:"company_phone",type:"text",name:"company_phone",className:"form-control",value:l.company_phone,onChange:a=>o("company_phone",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.company_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Emails"}),e.jsx(i,{id:"alt_email",type:"text",name:"alt_email",className:"form-control",value:l.alt_email,onChange:a=>o("alt_email",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.alt_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Phone No`s"}),e.jsx(i,{id:"alt_phone",type:"text",name:"alt_phone",className:"form-control",value:l.alt_phone,onChange:a=>o("alt_phone",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.alt_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Website"}),e.jsx(i,{id:"website",type:"text",name:"website",className:"form-control",value:l.website,onChange:a=>o("website",a.target.value),autoComplete:"off"}),e.jsx(c,{message:m.website,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"No Employees"}),e.jsx(v,{onChange:a=>{o("employee",a)},defaultValue:{value:l.employee,label:l.employee},name:"employee",options:A}),e.jsx(c,{message:m.employee,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Business Type"}),e.jsx(v,{onChange:a=>{o("business_type",a.value)},defaultValue:{value:l.business_type,label:l.business_type},name:"business_type",options:R.map(a=>({value:a.id,label:a.label}))}),e.jsx(c,{message:m.business_type,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(t,{className:"fw-700 fs-16 form-label form-group__label",children:"Feature Label"}),e.jsx(h,{onChange:a=>o("featureLabel",a),value:l.featureLabel,options:k,name:"featureLabel",defaultValue:l.featureLabelName})]})})]})}),e.jsx("div",{className:"col-lg-3 ",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"border bg-gray-100 rounded10 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Logo"}),e.jsxs("div",{className:"product-img",children:[j?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:j,alt:"Selected",className:"avatar-xxxl text-center rounded-circle"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:M})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center avatar-xxxl rounded-circle"}),e.jsxs("div",{className:" mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-nature btn-sm",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(i,{id:"project_image_path2",type:"file",name:"logo",className:"d-none mt-1 block w-full upload",onChange:F})]})]})]})}),e.jsxs("div",{className:"col-md-12 mb-3",children:[e.jsxs("div",{className:"form-group px-20",children:[e.jsx(t,{className:"fw-700  form-label small",children:"Available Days"}),e.jsx("div",{className:"row pt-5",children:L.map(a=>e.jsx("div",{className:"col-12",children:e.jsx(g.Check,{type:"checkbox",id:`default-checkbox-${a.id}`,name:a.id,label:e.jsxs(e.Fragment,{children:[a.label,p[a.id]?e.jsx("span",{className:"text-success",children:" (opened)"}):e.jsx("span",{className:"text-danger",children:" (closed)"})]}),checked:p[a.id],onChange:()=>E(a.id)})},a.id))})]}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsx("div",{className:"form-group px-30",children:e.jsx(g.Check,{type:"switch",id:"custom-switch",name:"public_profile_on",checked:l.public_profile_on===1,onChange:a=>o("public_profile_on",a.target.checked?1:0),label:"Public Profile Show"})})})]})]})})]}),e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group px-10",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(g.Check,{type:"switch",id:"custom-switch-status",name:"status",label:"Active",checked:l.status===1,role:"button",onChange:a=>o("status",a.target.checked?1:0)}),e.jsx(c,{message:m.status,className:"mt-2 col-12"})]})]})})]}),e.jsx("div",{className:"form-actions mt-10 col-lg-12 text-left",children:e.jsxs("button",{type:"submit",className:"btn btn-success",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})})]})})]})}export{we as default};
