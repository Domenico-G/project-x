import{E as c,l as f,j as a,u as s,g as r,f as i,z as w,F as _,G as g,c as V,P as v,A as d,L as b}from"./app.b8f8a772.js";import{a as t,_ as m}from"./InputLabel.b8b914fc.js";import{_ as y}from"./PrimaryButton.69772b0d.js";import{_ as n}from"./TextInput.2412c76e.js";const x=["onSubmit"],k={class:"mt-4"},q={class:"mt-4"},U={class:"mt-4"},F={class:"flex items-center justify-end mt-4"},P={__name:"Register",setup(N){const e=c({name:"",surname:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(p,o)=>(V(),f(g,null,[a(s(v),{title:"Register"}),r("form",{onSubmit:_(u,["prevent"])},[r("div",null,[a(m,{for:"name",value:"Name"}),a(n,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",null,[a(m,{for:"surname",value:"Surname"}),a(n,{id:"surname",type:"text",class:"mt-1 block w-full",modelValue:s(e).surname,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).surname=l),required:"",autofocus:"",autocomplete:"surname"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.surname},null,8,["message"])]),r("div",k,[a(m,{for:"email",value:"Email"}),a(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",q,[a(m,{for:"password",value:"Password"}),a(n,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[3]||(o[3]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",U,[a(m,{for:"password_confirmation",value:"Confirm Password"}),a(n,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),r("div",F,[a(s(b),{href:p.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(y,{class:w(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)],64))}};export{P as default};