import{g as ue,r as ae,c as ge,q as me,j as i,Y as fe,a as oe}from"./app-DUUes-Qe.js";import{A as he}from"./AdminAuthenticated-Ds-dgqPm.js";import{d as le}from"./index-BzWycOG-.js";import"./Dropdown-CFmbVfto.js";import"./AdminSidebar-qQiqrWh-.js";import"./listen-8kQ8eSJE.js";import"./useWindow-BvcGFOsK.js";import"./Anchor-MvCfxlSE.js";import"./extends-B6xKY8K9.js";import"./objectWithoutPropertiesLoose-DXrfETLX.js";import"./PermissionAllow-a6rJKmWW.js";import"./ToastNotification-Cn01RQ_-.js";var ce={exports:{}};(function(te,se){(function(V,W){te.exports=W(ae)})(ge,V=>(()=>{var W={703:(d,g,C)=>{var a=C(414);function S(){}function T(){}T.resetWarningCache=S,d.exports=function(){function b(Y,E,m,R,ie,Z){if(Z!==a){var z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw z.name="Invariant Violation",z}}function N(){return b}b.isRequired=b;var B={array:b,bigint:b,bool:b,func:b,number:b,object:b,string:b,symbol:b,any:b,arrayOf:N,element:b,elementType:b,instanceOf:N,node:b,objectOf:N,oneOf:N,oneOfType:N,shape:N,exact:N,checkPropTypes:T,resetWarningCache:S};return B.PropTypes=B,B}},697:(d,g,C)=>{d.exports=C(703)()},414:d=>{d.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:d=>{d.exports=V}},G={};function x(d){var g=G[d];if(g!==void 0)return g.exports;var C=G[d]={exports:{}};return W[d](C,C.exports,x),C.exports}x.n=d=>{var g=d&&d.__esModule?()=>d.default:()=>d;return x.d(g,{a:g}),g},x.d=(d,g)=>{for(var C in g)x.o(g,C)&&!x.o(d,C)&&Object.defineProperty(d,C,{enumerable:!0,get:g[C]})},x.o=(d,g)=>Object.prototype.hasOwnProperty.call(d,g),x.r=d=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var U={};return(()=>{x.r(U),x.d(U,{default:()=>pe});var d=x(98),g=x.n(d),C=x(697),a=x.n(C);function S(){return S=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(r[c]=l[c])}return r},S.apply(this,arguments)}var T=function(r){var s=r.pageClassName,l=r.pageLinkClassName,c=r.page,M=r.selected,F=r.activeClassName,O=r.activeLinkClassName,t=r.getEventListener,e=r.pageSelectedHandler,u=r.href,n=r.extraAriaContext,o=r.pageLabelBuilder,p=r.rel,h=r.ariaLabel||"Page "+c+(n?" "+n:""),y=null;return M&&(y="page",h=r.ariaLabel||"Page "+c+" is your current page",s=s!==void 0?s+" "+F:F,l!==void 0?O!==void 0&&(l=l+" "+O):l=O),g().createElement("li",{className:s},g().createElement("a",S({rel:p,role:u?void 0:"button",className:l,href:u,tabIndex:M?"-1":"0","aria-label":h,"aria-current":y,onKeyPress:e},t(e)),o(c)))};T.propTypes={pageSelectedHandler:a().func.isRequired,selected:a().bool.isRequired,pageClassName:a().string,pageLinkClassName:a().string,activeClassName:a().string,activeLinkClassName:a().string,extraAriaContext:a().string,href:a().string,ariaLabel:a().string,page:a().number.isRequired,getEventListener:a().func.isRequired,pageLabelBuilder:a().func.isRequired,rel:a().string};const b=T;function N(){return N=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(r[c]=l[c])}return r},N.apply(this,arguments)}var B=function(r){var s=r.breakLabel,l=r.breakAriaLabel,c=r.breakClassName,M=r.breakLinkClassName,F=r.breakHandler,O=r.getEventListener,t=c||"break";return g().createElement("li",{className:t},g().createElement("a",N({className:M,role:"button",tabIndex:"0","aria-label":l,onKeyPress:F},O(F)),s))};B.propTypes={breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabel:a().string,breakClassName:a().string,breakLinkClassName:a().string,breakHandler:a().func.isRequired,getEventListener:a().func.isRequired};const Y=B;function E(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return r??s}function m(r){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},m(r)}function R(){return R=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(r[c]=l[c])}return r},R.apply(this,arguments)}function ie(r,s){for(var l=0;l<s.length;l++){var c=s[l];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,c.key,c)}}function Z(r,s){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,c){return l.__proto__=c,l},Z(r,s)}function z(r,s){if(s&&(m(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(r)}function L(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Q(r){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(s){return s.__proto__||Object.getPrototypeOf(s)},Q(r)}function P(r,s,l){return s in r?Object.defineProperty(r,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[s]=l,r}var re=function(r){(function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Z(t,e)})(O,r);var s,l,c,M,F=(c=O,M=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,e=Q(c);if(M){var u=Q(this).constructor;t=Reflect.construct(e,arguments,u)}else t=e.apply(this,arguments);return z(this,t)});function O(t){var e,u;return function(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}(this,O),P(L(e=F.call(this,t)),"handlePreviousPage",function(n){var o=e.state.selected;e.handleClick(n,null,o>0?o-1:void 0,{isPrevious:!0})}),P(L(e),"handleNextPage",function(n){var o=e.state.selected,p=e.props.pageCount;e.handleClick(n,null,o<p-1?o+1:void 0,{isNext:!0})}),P(L(e),"handlePageSelected",function(n,o){if(e.state.selected===n)return e.callActiveCallback(n),void e.handleClick(o,null,void 0,{isActive:!0});e.handleClick(o,null,n)}),P(L(e),"handlePageChange",function(n){e.state.selected!==n&&(e.setState({selected:n}),e.callCallback(n))}),P(L(e),"getEventListener",function(n){return P({},e.props.eventListener,n)}),P(L(e),"handleClick",function(n,o,p){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},y=h.isPrevious,A=y!==void 0&&y,K=h.isNext,$=K!==void 0&&K,J=h.isBreak,j=J!==void 0&&J,D=h.isActive,I=D!==void 0&&D;n.preventDefault?n.preventDefault():n.returnValue=!1;var _=e.state.selected,f=e.props.onClick,w=p;if(f){var k=f({index:o,selected:_,nextSelectedPage:p,event:n,isPrevious:A,isNext:$,isBreak:j,isActive:I});if(k===!1)return;Number.isInteger(k)&&(w=k)}w!==void 0&&e.handlePageChange(w)}),P(L(e),"handleBreakClick",function(n,o){var p=e.state.selected;e.handleClick(o,n,p<n?e.getForwardJump():e.getBackwardJump(),{isBreak:!0})}),P(L(e),"callCallback",function(n){e.props.onPageChange!==void 0&&typeof e.props.onPageChange=="function"&&e.props.onPageChange({selected:n})}),P(L(e),"callActiveCallback",function(n){e.props.onPageActive!==void 0&&typeof e.props.onPageActive=="function"&&e.props.onPageActive({selected:n})}),P(L(e),"getElementPageRel",function(n){var o=e.state.selected,p=e.props,h=p.nextPageRel,y=p.prevPageRel,A=p.selectedPageRel;return o-1===n?y:o===n?A:o+1===n?h:void 0}),P(L(e),"pagination",function(){var n=[],o=e.props,p=o.pageRangeDisplayed,h=o.pageCount,y=o.marginPagesDisplayed,A=o.breakLabel,K=o.breakClassName,$=o.breakLinkClassName,J=o.breakAriaLabels,j=e.state.selected;if(h<=p)for(var D=0;D<h;D++)n.push(e.getPageElement(D));else{var I=p/2,_=p-I;j>h-p/2?I=p-(_=h-j):j<p/2&&(_=p-(I=j));var f,w,k=function(H){return e.getPageElement(H)},v=[];for(f=0;f<h;f++){var X=f+1;if(X<=y)v.push({type:"page",index:f,display:k(f)});else if(X>h-y)v.push({type:"page",index:f,display:k(f)});else if(f>=j-I&&f<=j+(j===0&&p>1?_-1:_))v.push({type:"page",index:f,display:k(f)});else if(A&&v.length>0&&v[v.length-1].display!==w&&(p>0||y>0)){var ne=f<j?J.backward:J.forward;w=g().createElement(Y,{key:f,breakAriaLabel:ne,breakLabel:A,breakClassName:K,breakLinkClassName:$,breakHandler:e.handleBreakClick.bind(null,f),getEventListener:e.getEventListener}),v.push({type:"break",index:f,display:w})}}v.forEach(function(H,q){var ee=H;H.type==="break"&&v[q-1]&&v[q-1].type==="page"&&v[q+1]&&v[q+1].type==="page"&&v[q+1].index-v[q-1].index<=2&&(ee={type:"page",index:H.index,display:k(H.index)}),n.push(ee.display)})}return n}),t.initialPage!==void 0&&t.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(t.initialPage,") and forcePage (").concat(t.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),u=t.initialPage?t.initialPage:t.forcePage?t.forcePage:0,e.state={selected:u},e}return s=O,(l=[{key:"componentDidMount",value:function(){var t=this.props,e=t.initialPage,u=t.disableInitialCallback,n=t.extraAriaContext,o=t.pageCount,p=t.forcePage;e===void 0||u||this.callCallback(e),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(o)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(o,"). Did you forget a Math.ceil()?")),e!==void 0&&e>o-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(e," > ").concat(o-1,").")),p!==void 0&&p>o-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(p," > ").concat(o-1,")."))}},{key:"componentDidUpdate",value:function(t){this.props.forcePage!==void 0&&this.props.forcePage!==t.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(t.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var t=this.state.selected,e=this.props,u=e.pageCount,n=t+e.pageRangeDisplayed;return n>=u?u-1:n}},{key:"getBackwardJump",value:function(){var t=this.state.selected-this.props.pageRangeDisplayed;return t<0?0:t}},{key:"getElementHref",value:function(t){var e=this.props,u=e.hrefBuilder,n=e.pageCount,o=e.hrefAllControls;if(u)return o||t>=0&&t<n?u(t+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(t){var e=t===this.state.selected;if(this.props.ariaLabelBuilder&&t>=0&&t<this.props.pageCount){var u=this.props.ariaLabelBuilder(t+1,e);return this.props.extraAriaContext&&!e&&(u=u+" "+this.props.extraAriaContext),u}}},{key:"getPageElement",value:function(t){var e=this.state.selected,u=this.props,n=u.pageClassName,o=u.pageLinkClassName,p=u.activeClassName,h=u.activeLinkClassName,y=u.extraAriaContext,A=u.pageLabelBuilder;return g().createElement(b,{key:t,pageSelectedHandler:this.handlePageSelected.bind(null,t),selected:e===t,rel:this.getElementPageRel(t),pageClassName:n,pageLinkClassName:o,activeClassName:p,activeLinkClassName:h,extraAriaContext:y,href:this.getElementHref(t),ariaLabel:this.ariaLabelBuilder(t),page:t+1,pageLabelBuilder:A,getEventListener:this.getEventListener})}},{key:"render",value:function(){var t=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&t!==void 0)return t&&t(this.props);var e=this.props,u=e.disabledClassName,n=e.disabledLinkClassName,o=e.pageCount,p=e.className,h=e.containerClassName,y=e.previousLabel,A=e.previousClassName,K=e.previousLinkClassName,$=e.previousAriaLabel,J=e.prevRel,j=e.nextLabel,D=e.nextClassName,I=e.nextLinkClassName,_=e.nextAriaLabel,f=e.nextRel,w=this.state.selected,k=w===0,v=w===o-1,X="".concat(E(A)).concat(k?" ".concat(E(u)):""),ne="".concat(E(D)).concat(v?" ".concat(E(u)):""),H="".concat(E(K)).concat(k?" ".concat(E(n)):""),q="".concat(E(I)).concat(v?" ".concat(E(n)):""),ee=k?"true":"false",de=v?"true":"false";return g().createElement("ul",{className:p||h,role:"navigation","aria-label":"Pagination"},g().createElement("li",{className:X},g().createElement("a",R({className:H,href:this.getElementHref(w-1),tabIndex:k?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":ee,"aria-label":$,rel:J},this.getEventListener(this.handlePreviousPage)),y)),this.pagination(),g().createElement("li",{className:ne},g().createElement("a",R({className:q,href:this.getElementHref(w+1),tabIndex:v?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":de,"aria-label":_,rel:f},this.getEventListener(this.handleNextPage)),j)))}}])&&ie(s.prototype,l),Object.defineProperty(s,"prototype",{writable:!1}),O}(d.Component);P(re,"propTypes",{pageCount:a().number.isRequired,pageRangeDisplayed:a().number,marginPagesDisplayed:a().number,previousLabel:a().node,previousAriaLabel:a().string,prevPageRel:a().string,prevRel:a().string,nextLabel:a().node,nextAriaLabel:a().string,nextPageRel:a().string,nextRel:a().string,breakLabel:a().oneOfType([a().string,a().node]),breakAriaLabels:a().shape({forward:a().string,backward:a().string}),hrefBuilder:a().func,hrefAllControls:a().bool,onPageChange:a().func,onPageActive:a().func,onClick:a().func,initialPage:a().number,forcePage:a().number,disableInitialCallback:a().bool,containerClassName:a().string,className:a().string,pageClassName:a().string,pageLinkClassName:a().string,pageLabelBuilder:a().func,activeClassName:a().string,activeLinkClassName:a().string,previousClassName:a().string,nextClassName:a().string,previousLinkClassName:a().string,nextLinkClassName:a().string,disabledClassName:a().string,disabledLinkClassName:a().string,breakClassName:a().string,breakLinkClassName:a().string,extraAriaContext:a().string,ariaLabelBuilder:a().func,eventListener:a().string,renderOnZeroPageCount:a().func,selectedPageRel:a().string}),P(re,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(r){return r},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const pe=re})(),U})())})(ce);var be=ce.exports;const ve=ue(be);function Ae({cityList:te,auth:se,success:V=null,error:W=null}){const{url:G}=me(),[x,U]=ae.useState(""),[d,g]=ae.useState(0),C=25;ae.useEffect(()=>{const R=new URLSearchParams(window.location.search).get("name")||"";U(R)},[]);const a=m=>{window.confirm("Are you sure you want to delete the City?")&&le.Inertia.delete(route("admin.city.destroy",m.id))},S=m=>{U(m.target.value)},T=te.data.filter(m=>m.name.toLowerCase().includes(x.toLowerCase())),b=Math.ceil(T.length/C),N=({selected:m})=>{g(m),window.scrollTo(0,0)},B=()=>{const m=new URLSearchParams;m.append("name",x),le.Inertia.visit(`${G.pathname}?${m.toString()}`)},Y=d*C,E=T.slice(Y,Y+C);return i.jsxs(he,{user:se.user,header:i.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"City"}),success:V,error:W,children:[i.jsx(fe,{title:"City List"}),i.jsx("div",{className:"content-wrapper me-4",children:i.jsxs("div",{className:"container-full",children:[i.jsx("div",{className:"content-header",children:i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"col-lg-6",children:i.jsx("div",{className:"d-flex align-items-center",children:i.jsx("div",{className:"me-auto",children:i.jsx("h4",{className:"page-title",children:"City"})})})}),i.jsx("div",{className:"col-lg-6",children:i.jsx("div",{className:"text-end",children:i.jsxs(oe,{className:"btn btn-info text-end",href:route("admin.city.create"),children:[i.jsx("i",{className:"bi bi-plus"})," Create"]})})})]})}),i.jsx("section",{className:"content",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-12",children:i.jsx("div",{className:"box",children:i.jsxs("div",{className:"box-body",children:[i.jsxs("div",{className:"d-flex mb-3 align-items-center",children:[i.jsx("input",{value:x,onChange:S,placeholder:"Search by name",className:"form-control me-2"}),i.jsx("button",{onClick:B,className:"btn btn-primary btn-sm",children:"Search"})]}),i.jsx("div",{className:"table-responsive rounded card-table",children:i.jsxs("table",{className:"table border-no",id:"example1",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"#"}),i.jsx("th",{children:"Image"}),i.jsx("th",{children:"Name"}),i.jsx("th",{children:"Position"}),i.jsx("th",{children:"Status"}),i.jsx("th",{children:"Last Modified"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:E.map(m=>i.jsxs("tr",{className:"hover-primary",children:[i.jsx("td",{children:m.id}),i.jsx("td",{children:i.jsx("img",{src:m.image,className:"w-100 rounded-5",alt:`${m.image} icon`,onError:R=>{R.target.onerror=null,R.target.src="/assets/admin/images/noimage.webp"}})}),i.jsx("td",{children:m.name}),i.jsx("td",{children:m.position}),i.jsx("td",{children:m.status}),i.jsx("td",{children:m.updated_at}),i.jsxs("td",{children:[i.jsx(oe,{className:"btn btn-transparent",href:route("admin.city.edit",m.id),children:i.jsx("i",{className:"bi bi-pencil"})}),i.jsx("button",{onClick:()=>a(m),className:"btn btn-transparent border-0",children:i.jsx("i",{className:"bi bi-trash"})})]})]},m.id))})]})}),i.jsx(ve,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:b,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:N,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})]})})})})})]})})]})}export{Ae as default};