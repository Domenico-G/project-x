import{E as I,r as m,b as V,w as A,e as C,f as i,c as p,g as e,j as n,u as s,I as x,A as u,L as f,x as y,O as b,l as g,H as E,B as c,G as U}from"./app.b8f8a772.js";import{_ as j}from"./BaseSelect.457b14b1.js";import{a as B}from"./AuthenticatedLayout.b972dca3.js";import{_ as L}from"./PrimaryButton.69772b0d.js";const N={class:"py-2 px-4 sm:p-6 lg:p-8 bg-neutral-100 border-b border-[#cbd0dd]"},$=e("div",{class:"flex justify-between mb-3"},[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight text-3xl font-bold"}," Lista Utenti ")],-1),z={class:"flex items-center justify-between"},D={class:"bulk-action flex justify-start items-center"},R=e("button",{type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-xs font-bold px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"},[e("i",{class:"fa-solid fa-plus"}),u(" Nuovo Utente ")],-1),F={class:"overflow-x-auto relative shadow-md h-[calc(100%-152px)] overflow-y-auto"},M={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},O={class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},G={scope:"col",class:"py-3 px-6"},H=e("th",{scope:"col",class:"py-3 px-6"},"ID",-1),S=e("th",{scope:"col",class:"py-3 px-6"},"Nome",-1),T=e("th",{scope:"col",class:"py-3 px-6"},"Cognome",-1),q=e("th",{scope:"col",class:"py-3 px-6"},"Email",-1),J=e("th",{scope:"col",class:"py-3 px-6"},"Iscrizione",-1),K=e("th",{scope:"col",class:"py-3 px-6"},"Azioni",-1),P={scope:"row",class:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"},Q=["value"],W={scope:"row",class:"py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"},X={class:"py-4 px-6"},Y={class:"py-4 px-6"},Z={class:"py-4 px-6"},ee={class:"py-4 px-6"},te={class:"py-4 px-6"},se=["onClick"],de={__name:"UsersList",props:{records:Object},setup(k){const _=k,o=I({recordsId:[]}),d=m("all"),r=m(!1),v=V({all:"Azioni di gruppo",delete:"Elimina",export:"Esporta",import:"Importa"});A(r,(a,l)=>{a?(_.records.forEach(t=>{o.recordsId.push(t.id)}),console.log(o.recordsId)):(o.recordsId=[],console.log(o.recordsId))});const w=a=>{o.delete(route("users.destroy",a))};return(a,l)=>(p(),C(B,null,{default:i(()=>[e("div",N,[$,e("div",z,[e("div",D,[n(j,{class:"mr-2",options:s(v),value:s(d),modelValue:s(d),"onUpdate:modelValue":l[0]||(l[0]=t=>x(d)?d.value=t:null)},null,8,["options","value","modelValue"]),n(L,{onClick:a.massActionRecords,type:"button"},{default:i(()=>[u("Applica")]),_:1},8,["onClick"])]),n(s(f),{href:a.route("users.create")},{default:i(()=>[R]),_:1},8,["href"])])]),e("div",F,[e("table",M,[e("thead",O,[e("tr",null,[e("th",G,[y(e("input",{type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=t=>x(r)?r.value=t:null)},null,512),[[b,s(r)]])]),H,S,T,q,J,K])]),e("tbody",null,[(p(!0),g(U,null,E(_.records,t=>(p(),g("tr",{key:t.id,class:"bg-white border-b dark:bg-gray-900 dark:border-gray-700"},[e("td",P,[y(e("input",{type:"checkbox",value:t.id,"onUpdate:modelValue":l[2]||(l[2]=h=>s(o).recordsId=h)},null,8,Q),[[b,s(o).recordsId]])]),e("td",W,c(t.id),1),e("td",X,c(t.name),1),e("td",Y,c(t.surname),1),e("td",Z,c(t.email),1),e("td",ee,c(t.created_at),1),e("td",te,[n(s(f),{href:a.route("users.edit",t.id)},{default:i(()=>[u("Modifica")]),_:2},1032,["href"]),e("p",{onClick:h=>w(t.id)},"Elimina",8,se)])]))),128))])])])]),_:1}))}};export{de as default};