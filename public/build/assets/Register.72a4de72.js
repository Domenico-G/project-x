import{F as c,n as f,j as a,u as s,g as r,f as i,z as _,G as w,H as g,c as V,K as v,L as b,B as d}from"./app.0285b997.js";import{a as t,_ as m}from"./InputLabel.10d0f1a7.js";import{_ as y}from"./PrimaryButton.9b0321c9.js";import{_ as n}from"./TextInput.d7906ee2.js";const x=["onSubmit"],k={class:"mt-4"},q={class:"mt-4"},U={class:"mt-4"},h={class:"flex items-center justify-end mt-4"},B=d(" Already registered? "),F=d(" Register "),j={__name:"Register",setup(N){const e=c({name:"",surname:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(p,o)=>(V(),f(g,null,[a(s(v),{title:"Register"}),r("form",{onSubmit:w(u,["prevent"])},[r("div",null,[a(m,{for:"name",value:"Name"}),a(n,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",null,[a(m,{for:"surname",value:"Surname"}),a(n,{id:"surname",type:"text",class:"mt-1 block w-full",modelValue:s(e).surname,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).surname=l),required:"",autofocus:"",autocomplete:"surname"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.surname},null,8,["message"])]),r("div",k,[a(m,{for:"email",value:"Email"}),a(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",q,[a(m,{for:"password",value:"Password"}),a(n,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[3]||(o[3]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",U,[a(m,{for:"password_confirmation",value:"Confirm Password"}),a(n,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(t,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),r("div",h,[a(s(b),{href:p.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[B]),_:1},8,["href"]),a(y,{class:_(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>[F]),_:1},8,["class","disabled"])])],40,x)],64))}};export{j as default};