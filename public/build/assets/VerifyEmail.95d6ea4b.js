import{F as f,m as _,n as o,j as s,u as e,E as g,g as i,f as a,z as h,G as p,H as y,c as n,K as v,L as b,B as r}from"./app.0285b997.js";import{_ as x}from"./PrimaryButton.9b0321c9.js";const k=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),w={key:0,class:"mb-4 font-medium text-sm text-green-600"},V=["onSubmit"],B={class:"mt-4 flex items-center justify-between"},E=r(" Resend Verification Email "),L=r("Log Out"),C={__name:"VerifyEmail",props:{status:String},setup(c){const d=c,t=f(),l=()=>{t.post(route("verification.send"))},m=_(()=>d.status==="verification-link-sent");return(u,N)=>(n(),o(y,null,[s(e(v),{title:"Email Verification"}),k,e(m)?(n(),o("div",w," A new verification link has been sent to the email address you provided during registration. ")):g("",!0),i("form",{onSubmit:p(l,["prevent"])},[i("div",B,[s(x,{class:h({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:a(()=>[E]),_:1},8,["class","disabled"]),s(e(b),{href:u.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:a(()=>[L]),_:1},8,["href"])])],40,V)],64))}};export{C as default};