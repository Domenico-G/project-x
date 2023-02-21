import{c,l as h,g as e,o as D,m as z,n as b,r as L,q as v,x as k,y as w,j as a,f as n,z as p,u as i,T as M,e as C,L as d,A as _,B as $,p as T,k as B,C as j,D as E,w as I}from"./app.b8f8a772.js";const S=(o,s)=>{const t=o.__vccOpts||o;for(const[r,u]of s)t[r]=u;return t},N={},A=["src"];function O(o,s){return c(),h("div",null,[e("img",{src:o.$page.props.appLogo,alt:""},null,8,A)])}const V=S(N,[["render",O]]),U={class:"relative"},P={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(o){const s=o,t=g=>{l.value&&g.key==="Escape"&&(l.value=!1)};D(()=>document.addEventListener("keydown",t)),z(()=>document.removeEventListener("keydown",t));const r=b(()=>({48:"w-48"})[s.width.toString()]),u=b(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),l=L(!1);return(g,f)=>(c(),h("div",U,[e("div",{onClick:f[0]||(f[0]=y=>l.value=!l.value)},[v(g.$slots,"trigger")]),k(e("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=y=>l.value=!1)},null,512),[[w,l.value]]),a(M,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[k(e("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[i(r),i(u)]]),style:{display:"none"},onClick:f[2]||(f[2]=y=>l.value=!1)},[e("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses])},[v(g.$slots,"content")],2)],2),[[w,l.value]])]),_:3})]))}},q={__name:"DropdownLink",setup(o){return(s,t)=>(c(),C(i(d),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:n(()=>[v(s.$slots,"default")]),_:3}))}},x={__name:"ResponsiveNavLink",props:["href","active"],setup(o){const s=o,t=b(()=>s.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(r,u)=>(c(),C(i(d),{href:o.href,class:p(i(t))},{default:n(()=>[v(r.$slots,"default")]),_:3},8,["href","class"]))}},H={class:""},R={class:"w-full mx-auto px-4 sm:px-6 lg:px-8"},F={class:"flex justify-between h-16"},G={class:"sm:flex sm:items-center"},J={class:"hidden sm:flex sm:items-center sm:ml-6"},K={class:"ml-3 relative"},Q=e("span",{class:"inline-flex rounded-md"},[e("button",{type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},[_(" Impostazioni "),e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])])],-1),W={class:"-mr-2 flex items-center sm:hidden"},X={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Y={class:"pt-2 pb-3 space-y-1"},Z={class:"pt-4 pb-1 border-t border-gray-200"},ee={class:"px-4"},se={class:"font-medium text-base text-gray-800"},te={class:"font-medium text-sm text-gray-500"},oe={class:"mt-3 space-y-1"},ae={__name:"TheHeader",setup(o){const s=L(!1);return(t,r)=>(c(),h("nav",H,[e("div",R,[e("div",F,[e("div",G,[a(i(d),{href:t.route("dashboard")},{default:n(()=>[a(V,{class:"block h-9 w-auto mx-auto"})]),_:1},8,["href"])]),e("div",J,[e("div",K,[a(P,null,{trigger:n(()=>[Q]),content:n(()=>[a(q,{href:t.route("logout"),method:"post",as:"button"},{default:n(()=>[_(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",W,[e("button",{onClick:r[0]||(r[0]=u=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(c(),h("svg",X,[e("path",{class:p({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:p({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:p([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",Y,[a(x,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:n(()=>[_(" Dashboard ")]),_:1},8,["href","active"]),a(x,{href:t.route("users.index"),method:"post",as:"button"},{default:n(()=>[_(" Lista Utenti ")]),_:1},8,["href"])]),e("div",Z,[e("div",ee,[e("div",se,$(t.$page.props.auth.user.name),1),e("div",te,$(t.$page.props.auth.user.email),1)]),e("div",oe,[a(x,{href:t.route("logout"),method:"post",as:"button"},{default:n(()=>[_(" Log Out ")]),_:1},8,["href"])])])],2)]))}};const m=o=>(T("data-v-eeb19a6b"),o=o(),B(),o),ne={class:"w-44 z-0"},re={class:"p-2"},ie=m(()=>e("div",{class:"menu-link"},[e("i",{class:"fa-solid fa-chart-line mr-3"}),e("p",{class:"text-xs"},"Dashboard")],-1)),le=m(()=>e("div",{class:"menu-link"},[e("i",{class:"fa-solid fa-map-location mr-3"}),e("p",{class:"text-xs"},"Maps")],-1)),de=m(()=>e("div",{class:"menu-link"},[e("i",{class:"fa-sharp fa-solid fa-universal-access mr-3"}),e("p",{class:"text-xs"},"Punti Vendita")],-1)),ce=m(()=>e("div",{class:"menu-link"},[e("i",{class:"fa-solid fa-user mr-3"}),e("p",{class:"text-xs"},"Lista Utenti")],-1)),ue=m(()=>e("div",{class:"menu-link"},[e("i",{class:"fa-solid fa-book mr-3"}),e("p",{class:"text-xs"},"Documentazione")],-1)),fe={__name:"TheSidebar",setup(o){return(s,t)=>(c(),h("div",ne,[e("div",null,[e("div",re,[a(i(d),{href:s.route("dashboard"),class:"nav-link"},{default:n(()=>[ie]),_:1},8,["href"]),a(i(d),{href:s.route("maps"),class:"nav-link"},{default:n(()=>[le]),_:1},8,["href"]),a(i(d),{href:s.route("sales-point.index"),class:"nav-link"},{default:n(()=>[de]),_:1},8,["href"]),a(i(d),{href:s.route("users.index"),class:"nav-link"},{default:n(()=>[ce]),_:1},8,["href"]),a(i(d),{href:s.route("documentation.index"),class:"nav-link"},{default:n(()=>[ue]),_:1},8,["href"])])])]))}},pe=S(fe,[["__scopeId","data-v-eeb19a6b"]]),he={class:"overflow-hidden max-h-screen"},_e={class:"flex h-[calc(100vh-64px)]"},ve={class:"w-[calc(100%-175px)] relative"},ge={__name:"AuthenticatedLayout",setup(o){const s=j(),t=E();return b(function(){return t.props.value.flash}),I(t.props,function(r){r.flash.notification!==null&&s.success(r.flash.notification.message,{timeout:5e3})},{immediate:!0,deep:!0}),(r,u)=>(c(),h("div",he,[a(ae,{class:"border-b border-[#cbd0dd]"}),e("div",_e,[a(pe,{class:"border-r border-[#cbd0dd]"}),e("main",ve,[v(r.$slots,"default")])])]))}};export{S as _,ge as a};