import{W as k,r as h,j as e,Y as w,a as u}from"./app-CJ8gtaWK.js";import{A as I}from"./AdminAuthenticated-VedlVE-1.js";import{I as m}from"./InputError-CXZmLGzP.js";import{T as t}from"./TextInput-BkMZLaX2.js";import{I as c}from"./InputLabel-L28_G93Y.js";import{S as L}from"./SelectOption-M1bIkM26.js";import{R as j}from"./RadioButtonLabel-uD2ao7s4.js";import{F as n}from"./Form-Cg3pJFre.js";import"./PermissionAllow-8aMWW39F.js";import"./AdminSidebar-k5u8Y9Pb.js";import"./objectWithoutPropertiesLoose-mTU-Rj-z.js";import"./ToastNotification-GiQwRqxR.js";import"./react-select.esm-C-Qzknou.js";import"./Select-49a62830.esm-CrE4LB8d.js";import"./inherits-Da4sx5rs.js";import"./extends-Lqyj1dvn.js";import"./setPrototypeOf-DgZC2w_0.js";import"./emotion-react.browser.esm-BDHRj7Tc.js";import"./index-CM2cCItZ.js";function Q({auth:g}){const{data:s,setData:i,post:N,errors:o,reset:S}=k({short_bio:"",description:"",logo:"",company_name:"",address:"",map_code:"",lat:"",long:"",no_employee:"",no_locations:"",website:"",type_person:"",feature_label:"",business_type:"",public_profile_on:"",facebook_link:"",instagram_link:"",linkedin_link:"",youtube_link:"",twitter_link:"",company_email:"",company_phone:"",alt_email:"",alt_phone:"",mon:"",tue:"",wed:"",thu:"",fri:"",sat:"",sun:"",position:"",firstname:"",lastname:"",email:"",alt_emails:"",phone:"",alt_phone:"",address:"",postal_code:"",city:"",province:"",country:"",dob:"",avatar:"",status:"1"}),b=a=>{a.preventDefault(),N(route("admin.testimonial.store"))},[d,f]=h.useState(""),[x,p]=h.useState(""),v=a=>{const r=a.target.files[0];r&&(i("avatar",r),f(URL.createObjectURL(r)))},_=()=>{i("avatar",""),f("")},y=a=>{const r=a.target.files[0];r&&(i("logo",r),p(URL.createObjectURL(r)))},C=()=>{i("logo",""),p("")},l=(a,r)=>{i(a,r)};return e.jsxs(I,{user:g.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Seller/Create"}),children:[e.jsx(w,{title:"Seller Create"}),e.jsx("div",{className:"content-wrapper me-4",children:e.jsxs("div",{className:"container-full",children:[e.jsx("div",{className:"content-header",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-6",children:e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx("h4",{className:"page-title",children:" Create Seller"}),e.jsx("div",{className:"d-inline-block align-items-center mt-2",children:e.jsx("nav",{children:e.jsxs("ol",{className:"breadcrumb",children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(u,{href:route("admin.index"),children:[e.jsx("i",{className:"bi bi-house"})," Dashboard"]})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(u,{href:route("admin.sellers.index"),children:"Sellers"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]})})})]})}),e.jsx("div",{className:"col-lg-6"})]})}),e.jsx("section",{className:"content",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"box",children:e.jsx("div",{className:"box-body",children:e.jsxs("form",{onSubmit:b,children:[e.jsxs("div",{className:"form-body",children:[e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("h2",{className:"col-lg-12 pb-5",children:e.jsx("u",{children:"Personal Information"})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"First Name"}),e.jsx(t,{id:"firstname",type:"text",name:"firstname",className:"form-control",value:s.firstname,onChange:a=>l("firstname",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.firstname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Last Name"}),e.jsx(t,{id:"lastname",type:"text",name:"lastname",className:"form-control",value:s.lastname,onChange:a=>l("lastname",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.lastname,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Email"}),e.jsx(t,{id:"email",type:"text",name:"email",className:"form-control",value:s.email,onChange:a=>l("email",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Phone No"}),e.jsx(t,{id:"phone",type:"text",name:"phone",className:"form-control",value:s.phone,onChange:a=>l("phone",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Alterative Emails"}),e.jsx(t,{id:"alt_emails",type:"text",name:"alt_emails",className:"form-control",value:s.alt_emails,onChange:a=>l("alt_emails",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.alt_emails,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Phone No`s"}),e.jsx(t,{id:"alt_phone",type:"text",name:"alt_phone",className:"form-control",value:s.alt_phone,onChange:a=>l("alt_phone",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.alt_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Date of Birth"}),e.jsx(t,{id:"dob",type:"text",name:"dob",className:"form-control",value:s.dob,onChange:a=>l("dob",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.dob,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Address"}),e.jsx(t,{id:"address",type:"text",name:"address",className:"form-control",value:s.address,onChange:a=>l("address",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Postal Code"}),e.jsx(t,{id:"postal_code",type:"text",name:"postal_code",className:"form-control",value:s.postal_code,onChange:a=>l("postal_code",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.postal_code,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Counrty"}),e.jsx(t,{id:"country",type:"text",name:"country",className:"form-control",value:s.country,onChange:a=>l("country",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.country,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Province"}),e.jsx(t,{id:"province",type:"text",name:"province",className:"form-control",value:s.province,onChange:a=>l("province",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.province,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"City"}),e.jsx(t,{id:"city",type:"text",name:"city",className:"form-control",value:s.city,onChange:a=>l("city",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.city,className:"mt-2 col-12"})]})})]})}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Image"}),e.jsxs("div",{className:"product-img",children:[d?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:d,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:_})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>document.getElementById("project_image_path").click(),children:"Choose Image"}),e.jsx(t,{id:"project_image_path",type:"file",name:"image",className:"d-none mt-1 block w-full upload",onChange:v})]})]})]})})})})]})}),e.jsx("div",{className:"col-lg-12",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-lg-9",children:e.jsxs("div",{className:"row",children:[e.jsx("h2",{className:"col-lg-12 pb-5",children:e.jsx("u",{children:"Company Information"})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Name"}),e.jsx(t,{id:"company_name",type:"text",name:"company_name",className:"form-control",value:s.company_name,onChange:a=>l("company_name",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.company_name,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Short Bio"}),e.jsx(t,{id:"short_bio",type:"text",name:"short_bio",className:"form-control",value:s.short_bio,onChange:a=>l("short_bio",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.short_bio,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Description"}),e.jsx(t,{id:"description",type:"text",name:"description",className:"form-control",value:s.description,onChange:a=>l("description",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.description,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Address"}),e.jsx(t,{id:"address",type:"text",name:"address",className:"form-control",value:s.address,onChange:a=>l("address",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.address,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Contact Person Designation"}),e.jsx(t,{id:"type_person",type:"text",name:"type_person",className:"form-control",value:s.type_person,onChange:a=>l("type_person",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.type_person,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Map Code"}),e.jsx(t,{id:"map_code",type:"text",name:"map_code",className:"form-control",value:s.map_code,onChange:a=>l("map_code",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.map_code,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Latitude"}),e.jsx(t,{id:"lat",type:"text",name:"lat",className:"form-control",value:s.lat,onChange:a=>l("lat",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.lat,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Longtitude"}),e.jsx(t,{id:"long",type:"text",name:"long",className:"form-control",value:s.long,onChange:a=>l("long",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.long,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"No Employees"}),e.jsx(t,{id:"no_employee",type:"text",name:"no_employee",className:"form-control",value:s.no_employee,onChange:a=>l("no_employee",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.no_employee,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"No of Office locations"}),e.jsx(t,{id:"no_locations",type:"text",name:"no_locations",className:"form-control",value:s.no_locations,onChange:a=>l("no_locations",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.no_locations,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Website"}),e.jsx(t,{id:"website",type:"text",name:"website",className:"form-control",value:s.website,onChange:a=>l("website",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.website,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Feature Label"}),e.jsx(t,{id:"feature_label",type:"text",name:"feature_label",className:"form-control",value:s.feature_label,onChange:a=>l("feature_label",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.feature_label,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-3 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Business Type"}),e.jsx(t,{id:"business_type",type:"text",name:"business_type",className:"form-control",value:s.business_type,onChange:a=>l("business_type",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.business_type,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Facebook Link"}),e.jsx(t,{id:"facebook_link",type:"text",name:"facebook_link",className:"form-control",value:s.facebook_link,onChange:a=>l("facebook_link",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.facebook_link,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Instagram Link"}),e.jsx(t,{id:"instagram_link",type:"text",name:"instagram_link",className:"form-control",value:s.instagram_link,onChange:a=>l("instagram_link",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.instagram_link,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Linkedin Link"}),e.jsx(t,{id:"linkedin_link",type:"text",name:"linkedin_link",className:"form-control",value:s.linkedin_link,onChange:a=>l("linkedin_link",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.linkedin_link,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Twitter Link"}),e.jsx(t,{id:"twitter_link",type:"text",name:"twitter_link",className:"form-control",value:s.twitter_link,onChange:a=>l("twitter_link",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.twitter_link,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Email"}),e.jsx(t,{id:"company_email",type:"text",name:"company_email",className:"form-control",value:s.company_email,onChange:a=>l("company_email",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.company_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Company Phone No"}),e.jsx(t,{id:"company_phone",type:"text",name:"company_phone",className:"form-control",value:s.company_phone,onChange:a=>l("company_phone",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.company_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Emails"}),e.jsx(t,{id:"alt_email",type:"text",name:"alt_email",className:"form-control",value:s.alt_email,onChange:a=>l("alt_email",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.alt_email,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-6 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Alternative Phone No`s"}),e.jsx(t,{id:"alt_phone",type:"text",name:"alt_phone",className:"form-control",value:s.alt_phone,onChange:a=>l("alt_phone",a.target.value),autoComplete:"off"}),e.jsx(m,{message:o.alt_phone,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700  form-label small",children:"Available Days"}),e.jsxs("div",{className:"d-flex gap-3 pt-5 ",children:[e.jsx(n.Check,{type:"checkbox",id:"default-checkbox-mon",name:"mon",label:"Monday"}),e.jsx(n.Check,{type:"checkbox",id:"default-checkbox-tue",label:"Tuesday",name:"tue"}),e.jsx(n.Check,{type:"checkbox",id:"default-checkbox-wed",label:"Wednesday",name:"wed"}),e.jsx(n.Check,{type:"checkbox",id:"default-checkbox-thu",label:"Thusday",name:"thu"}),e.jsx(n.Check,{type:"checkbox",id:"default-checkbox-fri",label:"Friday",name:"fri"}),e.jsx(n.Check,{type:"checkbox",id:"default-checkbox-sat",label:"Saturday",name:"sat"}),e.jsx(n.Check,{type:"checkbox",id:"default-checkbox-sun",label:"Sunday",name:"sun"})]})]})})]})}),e.jsx("div",{className:"col-lg-3",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"border rounded-4 p-3  text-center",children:[e.jsx("h4",{className:"box-title text-center",children:"Logo"}),e.jsxs("div",{className:"product-img",children:[x?e.jsxs("div",{className:"mb-15 text-center position-relative",children:[e.jsx("img",{src:x,alt:"Selected",className:"w-100 rounded-5"}),e.jsx("i",{role:"button",className:"bi bi-x-lg fw-bold position-absolute text-danger top-0",onClick:C})]}):e.jsx("img",{src:"/assets/admin/images/noimage.webp",alt:"No Image",className:"mb-15 text-center"}),e.jsxs("div",{className:"btn mb-20",children:[e.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:()=>document.getElementById("project_image_path2").click(),children:"Choose Image"}),e.jsx(t,{id:"project_image_path2",type:"file",name:"logo",className:"d-none mt-1 block w-full upload",onChange:y})]})]})]})})})})]})}),e.jsxs("div",{className:"col-md-9 mb-3",children:[e.jsx("div",{className:"col-md-12 mb-3",children:e.jsxs("div",{className:"form-group",children:[e.jsx(c,{className:"fw-700 fs-16 form-label form-group__label",children:"Position"}),e.jsx(L,{onChange:a=>l("position",a),value:s.position}),e.jsx(m,{message:o.position,className:"mt-2 col-12"})]})}),e.jsx("div",{className:"col-md-12 mb-3",children:e.jsx("div",{className:"form-group",children:e.jsx(n.Check,{type:"switch",id:"custom-switch",name:"public_profile_on",label:"Public Profile"})})}),e.jsx("div",{className:"col-md-12",children:e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"fw-700 fs-16 form-label",children:"Status"}),e.jsxs("div",{className:"radio-list",children:[e.jsx(j,{name:"status",onChange:a=>l("status",a),value:"1",checked:s.status==="1",label:"Published"}),e.jsx(j,{name:"status",onChange:a=>l("status",a),value:"0",checked:s.status==="0",label:"Draft"}),e.jsx(m,{message:o.status,className:"mt-2 col-12"})]})]})})]})]}),e.jsx("div",{className:"form-actions mt-10",children:e.jsxs("button",{type:"submit",className:"btn btn-primary",children:[" ",e.jsx("i",{className:"bi bi-check"})," Save Data"]})})]})})})})})})]})})]})}export{Q as default};