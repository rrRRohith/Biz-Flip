import{p as ge,o as ve,l as Ee,e as ut,f as Me,u as N,k as se,m as Fe,a as ct,g as dt,b as We,q as X,j as b,i as Z,d as ft,n as ht,r as _e,h as pt}from"./useMergedRefs-p-XhYV3y.js";import{r as a,j as f,f as Y,R as q}from"./app-BzHzbjUi.js";import{_ as mt}from"./objectWithoutPropertiesLoose-DXrfETLX.js";import{_ as Et,T as Xe}from"./TransitionGroupContext-BG4bzCke.js";import{P as Ce}from"./index-DOHSW8CS.js";var pe;function $e(e){if((!pe&&pe!==0||e)&&ge){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),pe=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return pe}function gt(e){const t=a.useRef(e);return t.current=e,t}function ze(e){const t=gt(e);a.useEffect(()=>()=>t.current(),[])}function vt(e){var t=ve(e);return t&&t.defaultView||window}function xt(e,t){return vt(e).getComputedStyle(e,t)}var Rt=/([A-Z])/g;function yt(e){return e.replace(Rt,"-$1").toLowerCase()}var bt=/^ms-/;function me(e){return yt(e).replace(bt,"-ms-")}var Tt=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function Ct(e){return!!(e&&Tt.test(e))}function _(e,t){var n="",s="";if(typeof t=="string")return e.style.getPropertyValue(me(t))||xt(e).getPropertyValue(me(t));Object.keys(t).forEach(function(o){var r=t[o];!r&&r!==0?e.style.removeProperty(me(o)):Ct(o)?s+=o+"("+r+") ":n+=me(o)+": "+r+";"}),s&&(n+="transform: "+s+";"),e.style.cssText+=";"+n}function Nt(e,t,n,s){if(s===void 0&&(s=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,s),e.dispatchEvent(o)}}function kt(e){var t=_(e,"transitionDuration")||"",n=t.indexOf("ms")===-1?1e3:1;return parseFloat(t)*n}function wt(e,t,n){n===void 0&&(n=5);var s=!1,o=setTimeout(function(){s||Nt(e,"transitionend",!0)},t+n),r=Ee(e,"transitionend",function(){s=!0},{once:!0});return function(){clearTimeout(o),r()}}function Pe(e,t,n,s){n==null&&(n=kt(e)||0);var o=wt(e,n,s),r=Ee(e,"transitionend",t);return function(){o(),r()}}function Ne(e){e===void 0&&(e=ve());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Ot(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Ue=ut("modal-open");class je{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:s=!1}={}){this.handleContainerOverflow=n,this.isRTL=s,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return Ot(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},s=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[s]:o.style[s]},t.scrollBarWidth&&(n[s]=`${parseInt(_(o,s)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(Ue,""),_(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Ue),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const ke=(e,t)=>ge?e==null?(t||ve()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function St(e,t){const n=Me(),[s,o]=a.useState(()=>ke(e,n==null?void 0:n.document));if(!s){const r=ke(e);r&&o(r)}return a.useEffect(()=>{},[t,s]),a.useEffect(()=>{const r=ke(e);r!==s&&o(r)},[e,s]),s}function Mt({children:e,in:t,onExited:n,mountOnEnter:s,unmountOnExit:o}){const r=a.useRef(null),i=a.useRef(t),l=N(n);a.useEffect(()=>{t?i.current=!0:l(r.current)},[t,l]);const u=se(r,e.ref),c=a.cloneElement(e,{ref:u});return t?c:o||!i.current&&s?null:c}function jt(e){return e.code==="Escape"||e.keyCode===27}function Dt(){const e=a.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const Lt=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function At(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Bt(e){let{onEnter:t,onEntering:n,onEntered:s,onExit:o,onExiting:r,onExited:i,addEndListener:l,children:u}=e,c=At(e,Lt);const{major:p}=Dt(),E=p>=19?u.props.ref:u.ref,v=a.useRef(null),R=se(v,typeof u=="function"?null:E),m=x=>y=>{x&&v.current&&x(v.current,y)},w=a.useCallback(m(t),[t]),D=a.useCallback(m(n),[n]),T=a.useCallback(m(s),[s]),L=a.useCallback(m(o),[o]),O=a.useCallback(m(r),[r]),A=a.useCallback(m(i),[i]),B=a.useCallback(m(l),[l]);return Object.assign({},c,{nodeRef:v},t&&{onEnter:w},n&&{onEntering:D},s&&{onEntered:T},o&&{onExit:L},r&&{onExiting:O},i&&{onExited:A},l&&{addEndListener:B},{children:typeof u=="function"?(x,y)=>u(x,Object.assign({},y,{ref:R})):a.cloneElement(u,{ref:R})})}const It=["component"];function Ft(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const Wt=a.forwardRef((e,t)=>{let{component:n}=e,s=Ft(e,It);const o=Bt(s);return f.jsx(n,Object.assign({ref:t},o))});function _t({in:e,onTransition:t}){const n=a.useRef(null),s=a.useRef(!0),o=N(t);return Fe(()=>{if(!n.current)return;let r=!1;return o({in:e,element:n.current,initial:s.current,isStale:()=>r}),()=>{r=!0}},[e,o]),Fe(()=>(s.current=!1,()=>{s.current=!0}),[]),n}function $t({children:e,in:t,onExited:n,onEntered:s,transition:o}){const[r,i]=a.useState(!t);t&&r&&i(!1);const l=_t({in:!!t,onTransition:c=>{const p=()=>{c.isStale()||(c.in?s==null||s(c.element,c.initial):(i(!0),n==null||n(c.element)))};Promise.resolve(o(c)).then(p,E=>{throw c.in||i(!0),E})}}),u=se(l,e.ref);return r&&!t?null:a.cloneElement(e,{ref:u})}function He(e,t,n){return e?f.jsx(Wt,Object.assign({},n,{component:e})):t?f.jsx($t,Object.assign({},n,{transition:t})):f.jsx(Mt,Object.assign({},n))}const Ut=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Ht(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,r;for(r=0;r<s.length;r++)o=s[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let we;function Gt(e){return we||(we=new je({ownerDocument:e==null?void 0:e.document})),we}function Kt(e){const t=Me(),n=e||Gt(t),s=a.useRef({dialog:null,backdrop:null});return Object.assign(s.current,{add:()=>n.add(s.current),remove:()=>n.remove(s.current),isTopModal:()=>n.isTopModal(s.current),setDialogRef:a.useCallback(o=>{s.current.dialog=o},[]),setBackdropRef:a.useCallback(o=>{s.current.backdrop=o},[])})}const Ye=a.forwardRef((e,t)=>{let{show:n=!1,role:s="dialog",className:o,style:r,children:i,backdrop:l=!0,keyboard:u=!0,onBackdropClick:c,onEscapeKeyDown:p,transition:E,runTransition:v,backdropTransition:R,runBackdropTransition:m,autoFocus:w=!0,enforceFocus:D=!0,restoreFocus:T=!0,restoreFocusOptions:L,renderDialog:O,renderBackdrop:A=h=>f.jsx("div",Object.assign({},h)),manager:B,container:x,onShow:y,onHide:J=()=>{},onExit:xe,onExited:Q,onExiting:ae,onEnter:ie,onEntering:le,onEntered:ue}=e,Re=Ht(e,Ut);const S=Me(),$=St(x),g=Kt(B),ye=ct(),ce=dt(n),[I,U]=a.useState(!n),C=a.useRef(null);a.useImperativeHandle(t,()=>g,[g]),ge&&!ce&&n&&(C.current=Ne(S==null?void 0:S.document)),n&&I&&U(!1);const M=N(()=>{if(g.add(),H.current=Ee(document,"keydown",Te),te.current=Ee(document,"focus",()=>setTimeout(be),!0),y&&y(),w){var h,he;const re=Ne((h=(he=g.dialog)==null?void 0:he.ownerDocument)!=null?h:S==null?void 0:S.document);g.dialog&&re&&!We(g.dialog,re)&&(C.current=re,g.dialog.focus())}}),ee=N(()=>{if(g.remove(),H.current==null||H.current(),te.current==null||te.current(),T){var h;(h=C.current)==null||h.focus==null||h.focus(L),C.current=null}});a.useEffect(()=>{!n||!$||M()},[n,$,M]),a.useEffect(()=>{I&&ee()},[I,ee]),ze(()=>{ee()});const be=N(()=>{if(!D||!ye()||!g.isTopModal())return;const h=Ne(S==null?void 0:S.document);g.dialog&&h&&!We(g.dialog,h)&&g.dialog.focus()}),de=N(h=>{h.target===h.currentTarget&&(c==null||c(h),l===!0&&J())}),Te=N(h=>{u&&jt(h)&&g.isTopModal()&&(p==null||p(h),h.defaultPrevented||J())}),te=a.useRef(),H=a.useRef(),fe=(...h)=>{U(!0),Q==null||Q(...h)};if(!$)return null;const G=Object.assign({role:s,ref:g.setDialogRef,"aria-modal":s==="dialog"?!0:void 0},Re,{style:r,className:o,tabIndex:-1});let ne=O?O(G):f.jsx("div",Object.assign({},G,{children:a.cloneElement(i,{role:"document"})}));ne=He(E,v,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:xe,onExiting:ae,onExited:fe,onEnter:ie,onEntering:le,onEntered:ue,children:ne});let K=null;return l&&(K=A({ref:g.setBackdropRef,onClick:de}),K=He(R,m,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:K})),f.jsx(f.Fragment,{children:Y.createPortal(f.jsxs(f.Fragment,{children:[K,ne]}),$)})});Ye.displayName="Modal";const Vt=Object.assign(Ye,{Manager:je});function Xt(e,t){return e.classList?e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function zt(e,t){e.classList?e.classList.add(t):Xt(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Ge(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Pt(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Ge(e.className,t):e.setAttribute("class",Ge(e.className&&e.className.baseVal||"",t))}const z={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Yt extends je{adjustAndStore(t,n,s){const o=n.style[t];n.dataset[t]=o,_(n,{[t]:`${parseFloat(_(n,t))+s}px`})}restore(t,n){const s=n.dataset[t];s!==void 0&&(delete n.dataset[t],_(n,{[t]:s}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(zt(n,"modal-open"),!t.scrollBarWidth)return;const s=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";X(n,z.FIXED_CONTENT).forEach(r=>this.adjustAndStore(s,r,t.scrollBarWidth)),X(n,z.STICKY_CONTENT).forEach(r=>this.adjustAndStore(o,r,-t.scrollBarWidth)),X(n,z.NAVBAR_TOGGLER).forEach(r=>this.adjustAndStore(o,r,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();Pt(n,"modal-open");const s=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";X(n,z.FIXED_CONTENT).forEach(r=>this.restore(s,r)),X(n,z.STICKY_CONTENT).forEach(r=>this.restore(o,r)),X(n,z.NAVBAR_TOGGLER).forEach(r=>this.restore(o,r))}}let Oe;function qt(e){return Oe||(Oe=new Yt(e)),Oe}const Ke={disabled:!1};var Zt=function(t){return t.scrollTop},oe="unmounted",F="exited",j="entering",W="entered",Se="exiting",k=function(e){Et(t,e);function t(s,o){var r;r=e.call(this,s,o)||this;var i=o,l=i&&!i.isMounting?s.enter:s.appear,u;return r.appearStatus=null,s.in?l?(u=F,r.appearStatus=j):u=W:s.unmountOnExit||s.mountOnEnter?u=oe:u=F,r.state={status:u},r.nextCallback=null,r}t.getDerivedStateFromProps=function(o,r){var i=o.in;return i&&r.status===oe?{status:F}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var r=null;if(o!==this.props){var i=this.state.status;this.props.in?i!==j&&i!==W&&(r=j):(i===j||i===W)&&(r=Se)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,r,i,l;return r=i=l=o,o!=null&&typeof o!="number"&&(r=o.exit,i=o.enter,l=o.appear!==void 0?o.appear:i),{exit:r,enter:i,appear:l}},n.updateStatus=function(o,r){if(o===void 0&&(o=!1),r!==null)if(this.cancelNextCallback(),r===j){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:Y.findDOMNode(this);i&&Zt(i)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===F&&this.setState({status:oe})},n.performEnter=function(o){var r=this,i=this.props.enter,l=this.context?this.context.isMounting:o,u=this.props.nodeRef?[l]:[Y.findDOMNode(this),l],c=u[0],p=u[1],E=this.getTimeouts(),v=l?E.appear:E.enter;if(!o&&!i||Ke.disabled){this.safeSetState({status:W},function(){r.props.onEntered(c)});return}this.props.onEnter(c,p),this.safeSetState({status:j},function(){r.props.onEntering(c,p),r.onTransitionEnd(v,function(){r.safeSetState({status:W},function(){r.props.onEntered(c,p)})})})},n.performExit=function(){var o=this,r=this.props.exit,i=this.getTimeouts(),l=this.props.nodeRef?void 0:Y.findDOMNode(this);if(!r||Ke.disabled){this.safeSetState({status:F},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Se},function(){o.props.onExiting(l),o.onTransitionEnd(i.exit,function(){o.safeSetState({status:F},function(){o.props.onExited(l)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,r){r=this.setNextCallback(r),this.setState(o,r)},n.setNextCallback=function(o){var r=this,i=!0;return this.nextCallback=function(l){i&&(i=!1,r.nextCallback=null,o(l))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},n.onTransitionEnd=function(o,r){this.setNextCallback(r);var i=this.props.nodeRef?this.props.nodeRef.current:Y.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!i||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],c=u[0],p=u[1];this.props.addEndListener(c,p)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===oe)return null;var r=this.props,i=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var l=mt(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return q.createElement(Xe.Provider,{value:null},typeof i=="function"?i(o,l):q.cloneElement(q.Children.only(i),l))},t}(q.Component);k.contextType=Xe;k.propTypes={};function P(){}k.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:P,onEntering:P,onEntered:P,onExit:P,onExiting:P,onExited:P};k.UNMOUNTED=oe;k.EXITED=F;k.ENTERING=j;k.ENTERED=W;k.EXITING=Se;function Ve(e,t){const n=_(e,t)||"",s=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*s}function Jt(e,t){const n=Ve(e,"transitionDuration"),s=Ve(e,"transitionDelay"),o=Pe(e,r=>{r.target===e&&(o(),t(r))},n+s)}function Qt(e){e.offsetHeight}function en(e){return e&&"setState"in e?Y.findDOMNode(e):e??null}const tn=q.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:s,onExiting:o,onExited:r,addEndListener:i,children:l,childRef:u,...c},p)=>{const E=a.useRef(null),v=se(E,u),R=x=>{v(en(x))},m=x=>y=>{x&&E.current&&x(E.current,y)},w=a.useCallback(m(e),[e]),D=a.useCallback(m(t),[t]),T=a.useCallback(m(n),[n]),L=a.useCallback(m(s),[s]),O=a.useCallback(m(o),[o]),A=a.useCallback(m(r),[r]),B=a.useCallback(m(i),[i]);return f.jsx(k,{ref:p,...c,onEnter:w,onEntered:T,onEntering:D,onExit:L,onExited:A,onExiting:O,addEndListener:B,nodeRef:E,children:typeof l=="function"?(x,y)=>l(x,{...y,ref:R}):q.cloneElement(l,{ref:R})})}),nn={[j]:"show",[W]:"show"},De=a.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:s,...o},r)=>{const i={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},l=a.useCallback((u,c)=>{Qt(u),s==null||s(u,c)},[s]);return f.jsx(tn,{ref:r,addEndListener:Jt,...i,onEnter:l,childRef:t.ref,children:(u,c)=>a.cloneElement(t,{...c,className:b("fade",e,t.props.className,nn[u],n[u])})})});De.displayName="Fade";const qe=a.forwardRef(({className:e,bsPrefix:t,as:n="div",...s},o)=>(t=Z(t,"modal-body"),f.jsx(n,{ref:o,className:b(e,t),...s})));qe.displayName="ModalBody";const Ze=a.createContext({onHide(){}}),Le=a.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:s,size:o,fullscreen:r,children:i,scrollable:l,...u},c)=>{e=Z(e,"modal");const p=`${e}-dialog`,E=typeof r=="string"?`${e}-fullscreen-${r}`:`${e}-fullscreen`;return f.jsx("div",{...u,ref:c,className:b(p,t,o&&`${e}-${o}`,s&&`${p}-centered`,l&&`${p}-scrollable`,r&&E),children:f.jsx("div",{className:b(`${e}-content`,n),children:i})})});Le.displayName="ModalDialog";const Je=a.forwardRef(({className:e,bsPrefix:t,as:n="div",...s},o)=>(t=Z(t,"modal-footer"),f.jsx(n,{ref:o,className:b(e,t),...s})));Je.displayName="ModalFooter";const rn={"aria-label":Ce.string,onClick:Ce.func,variant:Ce.oneOf(["white"])},Ae=a.forwardRef(({className:e,variant:t,"aria-label":n="Close",...s},o)=>f.jsx("button",{ref:o,type:"button",className:b("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...s}));Ae.displayName="CloseButton";Ae.propTypes=rn;const on=a.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:s,children:o,...r},i)=>{const l=a.useContext(Ze),u=N(()=>{l==null||l.onHide(),s==null||s()});return f.jsxs("div",{ref:i,...r,children:[o,n&&f.jsx(Ae,{"aria-label":e,variant:t,onClick:u})]})}),Qe=a.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:s=!1,...o},r)=>(e=Z(e,"modal-header"),f.jsx(on,{ref:r,...o,className:b(t,e),closeLabel:n,closeButton:s})));Qe.displayName="ModalHeader";const sn=e=>a.forwardRef((t,n)=>f.jsx("div",{...t,ref:n,className:b(t.className,e)})),an=sn("h4"),et=a.forwardRef(({className:e,bsPrefix:t,as:n=an,...s},o)=>(t=Z(t,"modal-title"),f.jsx(n,{ref:o,className:b(e,t),...s})));et.displayName="ModalTitle";function ln(e){return f.jsx(De,{...e,timeout:null})}function un(e){return f.jsx(De,{...e,timeout:null})}const tt=a.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:s,contentClassName:o,children:r,dialogAs:i=Le,"data-bs-theme":l,"aria-labelledby":u,"aria-describedby":c,"aria-label":p,show:E=!1,animation:v=!0,backdrop:R=!0,keyboard:m=!0,onEscapeKeyDown:w,onShow:D,onHide:T,container:L,autoFocus:O=!0,enforceFocus:A=!0,restoreFocus:B=!0,restoreFocusOptions:x,onEntered:y,onExit:J,onExiting:xe,onEnter:Q,onEntering:ae,onExited:ie,backdropClassName:le,manager:ue,...Re},S)=>{const[$,g]=a.useState({}),[ye,ce]=a.useState(!1),I=a.useRef(!1),U=a.useRef(!1),C=a.useRef(null),[M,ee]=ft(),be=se(S,ee),de=N(T),Te=ht();e=Z(e,"modal");const te=a.useMemo(()=>({onHide:de}),[de]);function H(){return ue||qt({isRTL:Te})}function fe(d){if(!ge)return;const V=H().getScrollbarWidth()>0,Ie=d.scrollHeight>ve(d).documentElement.clientHeight;g({paddingRight:V&&!Ie?$e():void 0,paddingLeft:!V&&Ie?$e():void 0})}const G=N(()=>{M&&fe(M.dialog)});ze(()=>{_e(window,"resize",G),C.current==null||C.current()});const ne=()=>{I.current=!0},K=d=>{I.current&&M&&d.target===M.dialog&&(U.current=!0),I.current=!1},h=()=>{ce(!0),C.current=Pe(M.dialog,()=>{ce(!1)})},he=d=>{d.target===d.currentTarget&&h()},re=d=>{if(R==="static"){he(d);return}if(U.current||d.target!==d.currentTarget){U.current=!1;return}T==null||T()},nt=d=>{m?w==null||w(d):(d.preventDefault(),R==="static"&&h())},rt=(d,V)=>{d&&fe(d),Q==null||Q(d,V)},ot=d=>{C.current==null||C.current(),J==null||J(d)},st=(d,V)=>{ae==null||ae(d,V),pt(window,"resize",G)},at=d=>{d&&(d.style.display=""),ie==null||ie(d),_e(window,"resize",G)},it=a.useCallback(d=>f.jsx("div",{...d,className:b(`${e}-backdrop`,le,!v&&"show")}),[v,le,e]),Be={...n,...$};Be.display="block";const lt=d=>f.jsx("div",{role:"dialog",...d,style:Be,className:b(t,e,ye&&`${e}-static`,!v&&"show"),onClick:R?re:void 0,onMouseUp:K,"data-bs-theme":l,"aria-label":p,"aria-labelledby":u,"aria-describedby":c,children:f.jsx(i,{...Re,onMouseDown:ne,className:s,contentClassName:o,children:r})});return f.jsx(Ze.Provider,{value:te,children:f.jsx(Vt,{show:E,ref:be,backdrop:R,container:L,keyboard:!0,autoFocus:O,enforceFocus:A,restoreFocus:B,restoreFocusOptions:x,onEscapeKeyDown:nt,onShow:D,onHide:T,onEnter:rt,onEntering:st,onEntered:y,onExit:ot,onExiting:xe,onExited:at,manager:H(),transition:v?ln:void 0,backdropTransition:v?un:void 0,renderBackdrop:it,renderDialog:lt})})});tt.displayName="Modal";const mn=Object.assign(tt,{Body:qe,Header:Qe,Title:et,Footer:Je,Dialog:Le,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{mn as M};