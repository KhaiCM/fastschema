(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{72431:function(){},16665:function(e,t,s){Promise.resolve().then(s.bind(s,29985))},29985:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return eb}});var a=s(57437);s(8158),s(54598),s(48951),s(43718),s(93312),s(59951);var r=s(10023),n=s(47082),l=s(33511),i=s.n(l),o=s(18009),c=s(22169),d=s(51919),u=s(2265),m=s(62985),f=s(62177),x=s(86736),h=s(57742);x.zt,u.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(x.l_,{ref:t,className:(0,c.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",s),...r})}).displayName=x.l_.displayName;let p=(0,h.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}});u.forwardRef((e,t)=>{let{className:s,variant:r,...n}=e;return(0,a.jsx)(x.fC,{ref:t,className:(0,c.cn)(p({variant:r}),s),...n})}).displayName=x.fC.displayName;let g=u.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(x.aU,{ref:t,className:(0,c.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",s),...r})});g.displayName=x.aU.displayName,u.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(x.x8,{ref:t,className:(0,c.cn)("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",s),"toast-close":"",...r,children:(0,a.jsx)(f.Pxu,{className:"h-4 w-4"})})}).displayName=x.x8.displayName,u.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(x.Dx,{ref:t,className:(0,c.cn)("text-sm font-semibold [&+div]:text-xs",s),...r})}).displayName=x.Dx.displayName,u.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(x.dk,{ref:t,className:(0,c.cn)("text-sm opacity-90",s),...r})}).displayName=x.dk.displayName;let j=0,v=new Map,N=e=>{if(v.has(e))return;let t=setTimeout(()=>{v.delete(e),S({type:"REMOVE_TOAST",toastId:e})},1e6);v.set(e,t)},b=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?N(s):e.toasts.forEach(e=>{N(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},w=[],y={toasts:[]};function S(e){y=b(y,e),w.forEach(e=>{e(y)})}function _(e){let{...t}=e,s=(j=(j+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>S({type:"DISMISS_TOAST",toastId:s});return S({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||a()}}}),{id:s,dismiss:a,update:e=>S({type:"UPDATE_TOAST",toast:{...e,id:s}})}}var k=s(29069);let T=()=>{let[e,t]=(0,u.useState)();return(0,u.useEffect)(()=>{d.ZP.on("system-error",t)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(A,{}),e?(0,a.jsx)("div",{style:{width:"100%",marginBottom:30},children:(0,a.jsxs)(k.bZ,{variant:"destructive",children:[(0,a.jsx)(m.Z,{className:"h-4 w-4"}),(0,a.jsx)(k.Cd,{children:e.error}),(0,a.jsx)(k.X,{children:e.message})]})}):null]})},A=()=>{let{toast:e}=function(){let[e,t]=u.useState(y);return u.useEffect(()=>(w.push(t),()=>{let e=w.indexOf(t);e>-1&&w.splice(e,1)}),[e]),{...e,toast:_,dismiss:e=>S({type:"DISMISS_TOAST",toastId:e})}}();return d.ZP.on("network-error",t=>{e({variant:"destructive",title:"Network Error",description:t,action:(0,a.jsx)(g,{altText:"Close",children:"Close"})})}),(0,a.jsx)(a.Fragment,{})};var Z=s(47907),E=s(53365),C=s(75006),R=s(79984),D=s(84665),O=s.n(D),V=s(84971),M=s(96304);let F=async()=>({menus:[],schemas:await (0,M.cQ)()});var I=s(53171);let P=()=>{void 0===window||window.fastschema||(window.fastschema={ui:{fieldRenders:(0,I.Rz)()}})};var z=s(91774);function U(e){let{children:t,...s}=e;return(0,a.jsx)(z.f,{...s,children:t})}var X=s(62677),Q=s(8792),H=s(36827),Y=s(43345),B=s(79744),G=s(57654),$=s(50326),q=s(35005),J=s(35540),W=s(34059),L=s(2787),K=s(51675),ee=s(4697),et=s(70094),es=s(65561),ea=s(94509),er=s(29910),en=s(63236),el=s(28814),ei=s(33277),eo=s(34645),ec=s(53118),ed=s(97081);let eu=()=>{var e;let t=(0,R.aF)();return(0,a.jsxs)(eo.h_,{children:[(0,a.jsx)(eo.$F,{asChild:!0,children:(0,a.jsxs)("button",{className:"inline-flex items-center justify-center text-sm font-medium gap-2 outline-none text-muted-foreground hover:text-primary",children:[(0,a.jsx)(ec.Z,{className:"h-5 w-5"}),(0,a.jsx)("span",{children:(0,ed.rV)(null!==(e=null==t?void 0:t.username)&&void 0!==e?e:"")})]})}),(0,a.jsxs)(eo.AW,{align:"start",children:[(0,a.jsx)(eo.Ju,{children:"My Account"}),(0,a.jsx)(eo.VD,{}),(0,a.jsx)(eo.Xi,{className:"cursor-pointer",children:"Settings"}),(0,a.jsx)(eo.Xi,{className:"cursor-pointer",children:"Support"}),(0,a.jsx)(eo.VD,{}),(0,a.jsx)(eo.Xi,{className:"cursor-pointer",onClick:()=>(0,E.kS)(),children:"Logout"})]})]})};var em=s(25326);let ef=e=>{let{items:t,pathname:s,className:r}=e,n=[],l=s.split("/").filter(Boolean),i="";return l.forEach(e=>{i+="/"+e,n.push(i)}),(0,a.jsx)(em.UQ,{type:"multiple",className:(0,c.cn)("w-full",r),defaultValue:n,children:t.map((e,t)=>(0,a.jsx)(ex,{...e,pathname:s},e.href+t))})},ex=e=>{let{label:t,href:s,pathname:r,checkActiveFn:n,sheet:l,icon:i,extra:o,items:d}=e,u=n?n(r):(null!=r?r:"/").split("?")[0]===e.href,m=(0,c.cn)("flex items-center text-muted-foreground px-3 py-2",u?"text-primary":"",l?"gap-3 rounded-xl mx-[-0.65rem] hover:text-foreground":"gap-2 rounded-lg transition-all hover:text-primary");return(null==d?void 0:d.length)?(0,a.jsxs)(em.Qd,{value:s,className:"border-0",children:[(0,a.jsxs)(em.o4,{className:(0,c.cn)("hover:no-underline",m,u?"bg-muted":""),children:[(0,a.jsx)("span",{className:"rotate-0",children:i}),t,(0,a.jsx)("span",{className:"ml-auto flex shrink-0",children:o})]}),(0,a.jsx)(em.vF,{children:(0,a.jsx)(ef,{items:d,pathname:null!=r?r:"/",className:"pl-5 mt-1"})})]}):(0,a.jsxs)(Q.default,{href:s,className:m,children:[i,t]})};var eh=s(82628);let ep=["user","role","permission","file"],eg=e=>{let{appConfig:t}=(0,u.useContext)(R.Il),{logo:s,sheet:r}=e,n=(0,Z.usePathname)(),l=(0,Z.useSearchParams)(),i=r?"h-5 w-5":"h-4 w-4",o=t.schemas.filter(e=>!ep.includes(e.name)),c=[{href:"/",icon:(0,a.jsx)(q.Z,{className:i}),label:"Dashboard"},{href:"/content",icon:(0,a.jsx)(J.Z,{className:i}),label:"Content",extra:(0,a.jsx)(ei.C,{className:"flex items-center justify-center w-5 h-5 rounded-full px-2",children:o.length}),items:[{href:"/content/?schema=user",label:"All Users",icon:(0,a.jsx)(W.Z,{className:"w4 h-4"}),checkActiveFn:()=>"/content"===n&&"user"===l.get("schema")},{href:"/content/edit?schema=user",label:"New User",icon:(0,a.jsx)(L.Z,{className:"w4 h-4"}),checkActiveFn:()=>"/content/edit"===n&&"user"===l.get("schema")},...o.map(e=>({href:"/content/?schema=".concat(e.name),label:(0,ed.rV)(e.name),icon:(0,a.jsx)(K.Z,{className:"w4 h-4"}),checkActiveFn:()=>"/content"===n&&l.get("schema")===e.name}))]},{href:"/schemas",icon:(0,a.jsx)(ee.Z,{className:i}),label:"Schemas",items:[{href:"/schemas",label:"All Schemas",icon:(0,a.jsx)(ee.Z,{className:"w4 h-4"})},{href:"/schemas/edit",label:"New Schema",icon:(0,a.jsx)(et.Z,{className:"w4 h-4"})}]},{href:"/media",icon:(0,a.jsx)(es.Z,{className:i}),label:"Media",items:[{href:"/media",label:"All Media",icon:(0,a.jsx)(K.Z,{className:"w4 h-4"})},{href:"/media/upload",label:"Upload Media",icon:(0,a.jsx)(ea.Z,{className:"w4 h-4"})}]},{href:"/settings",icon:(0,a.jsx)(er.Z,{className:i}),label:"Settings",items:[{href:"/settings/roles",icon:(0,a.jsx)(en.Z,{className:i}),label:"Roles & Permissions"}]}];return(0,a.jsxs)("aside",{className:"flex h-full flex-col",children:[(0,a.jsxs)("nav",{className:r?"grid gap-2 text-lg font-medium":"grid items-start px-2 text-sm font-medium lg:px-4",children:[s&&(0,a.jsxs)(Q.default,{href:"#",className:"flex items-center gap-2 text-lg font-semibold",children:[(0,a.jsx)(H.Z,{className:"h-6 w-6"}),(0,a.jsx)("span",{children:"Fastschema"})]}),(0,a.jsx)(ef,{items:c,pathname:n})]}),(0,a.jsxs)("nav",{className:"mt-auto mb-3 flex flex-row items-center px-6 lg:px-7 gap-3",children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(eu,{})}),(0,a.jsx)(eh.u,{tip:"Help",children:(0,a.jsx)(el.Z,{className:"h-4 w-4"})})]})]})};var ej=s(34560);let ev=e=>{let{children:t}=e;return(0,a.jsxs)("div",{className:"grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]",children:[(0,a.jsx)("div",{className:"hidden border-r bg-muted/40 md:block",children:(0,a.jsxs)("div",{className:"flex h-full max-h-screen flex-col gap-2",children:[(0,a.jsxs)("div",{className:"flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6",children:[(0,a.jsxs)(Q.default,{href:"/",className:"flex items-center gap-2 font-semibold",children:[(0,a.jsx)(H.Z,{className:"h-6 w-6"}),(0,a.jsx)("span",{children:"Fastschema"})]}),(0,a.jsxs)(G.z,{variant:"outline",size:"icon",className:"ml-auto h-8 w-8",children:[(0,a.jsx)(Y.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle notifications"})]})]}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(eg,{})})]})}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)("header",{className:"flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 shrink-0  md:hidden",children:[(0,a.jsxs)($.yo,{children:[(0,a.jsx)($.aM,{asChild:!0,children:(0,a.jsxs)(G.z,{variant:"outline",size:"icon",className:"shrink-0 md:hidden",children:[(0,a.jsx)(B.Z,{className:"h-5 w-5"}),(0,a.jsx)("span",{className:"sr-only",children:"Toggle navigation menu"})]})}),(0,a.jsx)($.ue,{side:"left",className:"flex flex-col",children:(0,a.jsx)(eg,{logo:!0,sheet:!0})})]}),(0,a.jsx)(eu,{})]}),(0,a.jsxs)("main",{className:"flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6",children:[(0,a.jsx)(ej.Sc,{}),(0,a.jsx)("div",{className:"w-full h-full",children:t})]})]})]})},eN=(0,c.cn)("min-h-screen bg-background font-sans antialiased","[&_.slate-selected]:!bg-primary/20 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/10",O().variable);function eb(e){let{children:t}=e,s=(0,E.rw)((0,Z.usePathname)()),l=(0,Z.useRouter)(),[c,d]=(0,u.useState)(!1),[m,f]=(0,u.useState)(),[x,h]=(0,u.useState)(),[p,g]=(0,u.useState)(R._8.appConfig),j=new r.S;(0,u.useEffect)(()=>{P()},[]),(0,u.useEffect)(()=>{if(s){d(!0);return}(async()=>{try{let e=await (0,E.bG)(),t=await F();g(t),h(e),d(!0)}catch(e){(0,V.f1)(e)?l.push("/login"):f(e.message)}})()},[s]);let v=(0,u.useMemo)(()=>({...R.Vo,user:x,setUser:h}),[x]),N=(0,u.useMemo)(()=>({...R.Il,appConfig:p,setAppConfig:g,reloadAppConfig:async()=>{try{let e=await F();g(e)}catch(e){f(e.message)}}}),[p]);return c||m?(0,a.jsx)("html",{lang:"en",children:(0,a.jsx)("body",{className:eN,suppressHydrationWarning:!0,children:(0,a.jsxs)(U,{attribute:"class",defaultTheme:"light",children:[(0,a.jsx)(R.Vo.Provider,{value:v,children:(0,a.jsx)(R.Il.Provider,{value:N,children:(0,a.jsx)(n.aH,{client:j,children:(0,a.jsxs)(X.pn,{delayDuration:50,children:[(0,a.jsx)(T,{}),s?t:(0,a.jsx)(ev,{children:t}),(0,a.jsx)(o.x7,{})]})})})}),(0,a.jsx)(i(),{color:"#facc15"})]})})}):(0,a.jsx)("html",{lang:"en",children:(0,a.jsx)("body",{children:(0,a.jsx)("div",{className:eN,children:(0,a.jsx)(C.g,{full:!0})})})})}},25326:function(e,t,s){"use strict";s.d(t,{Qd:function(){return c},UQ:function(){return o},o4:function(){return d},vF:function(){return u}});var a=s(57437),r=s(2265),n=s(95320),l=s(62177),i=s(22169);let o=n.fC,c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.ck,{ref:t,className:(0,i.cn)("border-b",s),...r})});c.displayName="AccordionItem";let d=r.forwardRef((e,t)=>{let{className:s,children:r,...o}=e;return(0,a.jsx)(n.h4,{className:"flex",children:(0,a.jsxs)(n.xz,{ref:t,className:(0,i.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",s),...o,children:[r,(0,a.jsx)(l.v4q,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})});d.displayName=n.xz.displayName;let u=r.forwardRef((e,t)=>{let{className:s,children:r,...l}=e;return(0,a.jsx)(n.VY,{ref:t,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...l,children:(0,a.jsx)("div",{className:(0,i.cn)("pb-4 pt-0",s),children:r})})});u.displayName=n.VY.displayName},50326:function(e,t,s){"use strict";s.d(t,{Ei:function(){return j},FF:function(){return p},Tu:function(){return h},aM:function(){return d},bC:function(){return g},ue:function(){return x},yo:function(){return c}});var a=s(57437),r=s(2265),n=s(72936),l=s(62177),i=s(57742),o=s(22169);let c=n.fC,d=n.xz;n.x8;let u=n.h_,m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r,ref:t})});m.displayName=n.aV.displayName;let f=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),x=r.forwardRef((e,t)=>{let{side:s="right",className:r,children:i,...c}=e;return(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{}),(0,a.jsxs)(n.VY,{ref:t,className:(0,o.cn)(f({side:s}),r),...c,children:[i,(0,a.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,a.jsx)(l.Pxu,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});x.displayName=n.VY.displayName;let h=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...s})};h.displayName="SheetHeader";let p=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};p.displayName="SheetFooter";let g=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold text-foreground",s),...r})});g.displayName=n.Dx.displayName;let j=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",s),...r})});j.displayName=n.dk.displayName},96304:function(e,t,s){"use strict";s.d(t,{J1:function(){return l},cQ:function(){return r},uV:function(){return i},uX:function(){return n}});var a=s(84971);let r=async()=>(await (0,a.dX)("/schema")).filter(e=>!e.is_junction_schema),n=async(e,t,s)=>{var r,n;let l=null;return(null==(l=t?await (0,a.qb)("/schema/".concat(t),{schema:e,rename_fields:null!=s?s:[]}):await (0,a.SO)("/schema",e))?void 0:null===(r=l.fields)||void 0===r?void 0:r.length)&&(l.fields=(null!==(n=null==l?void 0:l.fields)&&void 0!==n?n:[]).map(e=>(e.server_name=e.name,e))),l},l=async e=>{var t,s;if(!e)return null;let r=await (0,a.dX)("/schema/".concat(e));return(null==r?void 0:null===(t=r.fields)||void 0===t?void 0:t.length)&&(r.fields=(null!==(s=null==r?void 0:r.fields)&&void 0!==s?s:[]).map(e=>(e.server_name=e.name,e))),r},i=e=>(0,a.HG)("/schema/".concat(e))},53365:function(e,t,s){"use strict";s.d(t,{M8:function(){return c},bG:function(){return l},cY:function(){return i},kS:function(){return d},rw:function(){return u},x4:function(){return o}});var a=s(98955),r=s(84971),n=s(33108);let l=e=>(0,r.dX)("/user/me",{disableErrorNotification:e}),i=e=>(0,r.SO)("/setup",e),o=e=>(0,r.SO)("/user/login",e),c=e=>{a.Z.set(n.B$,e,{expires:7})},d=()=>{a.Z.remove(n.B$),window.location.href="/dash/login"},u=e=>(e="/".concat(e,"/").replaceAll("//","/"),n.aD.includes(e))},8158:function(){},54598:function(){},48951:function(){}},function(e){e.O(0,[310,572,902,637,872,792,571,32,732,152,998,147,203,807,365,313,894,704,547,117,271,650,971,69,744],function(){return e(e.s=16665)}),_N_E=e.O()}]);