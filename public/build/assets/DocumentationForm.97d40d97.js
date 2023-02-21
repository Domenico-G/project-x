import{b as f,E as p,e as _,f as a,c as b,g as e,j as n,u as t,L as x,A as l,F as h}from"./app.b8f8a772.js";import{a as g}from"./AuthenticatedLayout.b972dca3.js";import{_ as v}from"./PrimaryButton.69772b0d.js";import{_ as y}from"./client.7dedfffd.js";const w={class:"p-4 sm:p-6 lg:p-8 bg-neutral-100"},k={class:"flex justify-between"},V=e("div",{class:"flex justify-between"},[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight text-3xl font-bold"}," Nuovo Documento ")],-1),j=e("button",{type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs font-bold px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"},[e("i",{class:"fa-solid fa-chevron-left"}),l(" Indietro ")],-1),F=["onSubmit"],L={__name:"DocumentationForm",props:{record:{type:Object,default:null}},setup(u){const o=u,i=f({interface:{appearance:"light",lists:!0,toolbar:!0}}),s=p({markdown:o.record?o.record.text:""}),c=()=>{o.record===null?s.post(route("documentation.store")):s.patch(route("documentation.update",o.record.id))};return(d,r)=>(b(),_(g,null,{default:a(()=>[e("div",w,[e("div",k,[V,n(t(x),{href:d.route("documentation.index")},{default:a(()=>[j]),_:1},8,["href"])])]),e("form",{autocomplete:"off",onSubmit:h(c,["prevent"]),class:"px-8 py-2 h-[calc(100%-102px)] overflow-y-auto"},[n(t(y),{modelValue:t(s).markdown,"onUpdate:modelValue":r[0]||(r[0]=m=>t(s).markdown=m),options:t(i)},null,8,["modelValue","options"]),n(v,{type:"submit"},{default:a(()=>[l("Conferma")]),_:1})],40,F)]),_:1}))}};export{L as default};
