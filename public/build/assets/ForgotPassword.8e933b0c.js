import{F as d,n as i,j as a,u as e,A as u,E as c,g as t,f as _,z as f,G as p,H as w,c as r,K as g,B as y}from"./app.0285b997.js";import{a as b,_ as x}from"./InputLabel.10d0f1a7.js";import{_ as h}from"./PrimaryButton.9b0321c9.js";import{_ as k}from"./TextInput.d7906ee2.js";const V=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),v={key:0,class:"mb-4 font-medium text-sm text-green-600"},F=["onSubmit"],N={class:"flex items-center justify-end mt-4"},B=y(" Email Password Reset Link "),j={__name:"ForgotPassword",props:{status:String},setup(o){const s=d({email:""}),m=()=>{s.post(route("password.email"))};return(E,l)=>(r(),i(w,null,[a(e(g),{title:"Forgot Password"}),V,o.status?(r(),i("div",v,u(o.status),1)):c("",!0),t("form",{onSubmit:p(m,["prevent"])},[t("div",null,[a(x,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(b,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",N,[a(h,{class:f({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:_(()=>[B]),_:1},8,["class","disabled"])])],40,F)],64))}};export{j as default};