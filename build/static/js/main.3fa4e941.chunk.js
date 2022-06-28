(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={form:"ProfileForm_form__2xGgc",control:"ProfileForm_control__2YUZH",action:"ProfileForm_action__opJ_6"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__2lqQ1",logo:"MainNavigation_logo__1TgMx"}},20:function(e,t,n){e.exports={profile:"UserProfile_profile__gQOnH"}},21:function(e,t,n){e.exports={starting:"StartingPageContent_starting__kwCvL"}},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o,c=n(17),r=n.n(c),i=n(7),a=(n(30),n(1)),s=n.n(a),l=n(2),j=n(11),u=n(0),d=s.a.createContext({token:"",isloggedIn:!1,login:function(e){},logout:function(){}}),h=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},b=function(e){var t,n=function(){var e=localStorage.getItem("token"),t=localStorage.getItem("expirationTime"),n=h(t);return n<=6e4?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),null):{token:e,duration:n}}();t&&(t=n.token);var c=Object(a.useState)(t),r=Object(j.a)(c,2),i=r[0],s=r[1],l=!!i,b=Object(a.useCallback)((function(){s(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),o&&clearTimeout(o)}),[]);Object(a.useEffect)((function(){n&&(o=setTimeout(b,n.duration))}),[n,b]);var O={token:i,isloggedIn:l,login:function(e,t){s(e),localStorage.setItem("token",e),localStorage.setItem("expirationTime",t);var n=h(t);o=setTimeout(b,n)},logout:b};return Object(u.jsx)(d.Provider,{value:O,children:e.children})},O=d,g=n(15),x=n.n(g),m=function(){var e=Object(a.useContext)(O),t=e.isloggedIn;return Object(u.jsxs)("header",{className:x.a.header,children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("div",{className:x.a.logo,children:"React Auth"})}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[!t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/auth",children:"Login"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)(i.b,{to:"/profile",children:"Profile"})}),t&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(){e.logout()},children:"Logout"})})]})})]})},f=function(e){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(m,{}),Object(u.jsx)("main",{children:e.children})]})},p=n(12),v=n.n(p),_=function(){var e=Object(a.useRef)(),t=Object(a.useContext)(O),n=Object(l.g)();return Object(u.jsxs)("form",{className:v.a.form,onSubmit:function(o){o.preventDefault();var c=e.current.value;fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBXrWeIY04oBBYukh66ClHiMfA3Cr-aP4s",{method:"POST",body:JSON.stringify({idToken:t.token,password:c,returnSecureToken:!1}),headers:{"Content-Type":"application/json"}}).then((function(e){n.replace("/")}))},children:[Object(u.jsxs)("div",{className:v.a.control,children:[Object(u.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(u.jsx)("input",{type:"password",id:"new-password",minLength:"7",ref:e})]}),Object(u.jsx)("div",{className:v.a.action,children:Object(u.jsx)("button",{children:"Change Password"})})]})},k=n(20),S=n.n(k),w=function(){return Object(u.jsxs)("section",{className:S.a.profile,children:[Object(u.jsx)("h1",{children:"Your User Profile"}),Object(u.jsx)(_,{})]})},I=n(9),C=n.n(I),y=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(l.g)(),o=Object(a.useContext)(O),c=Object(a.useState)(!0),r=Object(j.a)(c,2),i=r[0],s=r[1],d=Object(a.useState)(!1),h=Object(j.a)(d,2),b=h[0],g=h[1];return Object(u.jsxs)("section",{className:C.a.auth,children:[Object(u.jsx)("h1",{children:i?"Login":"Sign Up"}),Object(u.jsxs)("form",{onSubmit:function(c){c.preventDefault();var r,a=e.current.value,s=t.current.value;g(!0),r=i?"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXrWeIY04oBBYukh66ClHiMfA3Cr-aP4s":"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXrWeIY04oBBYukh66ClHiMfA3Cr-aP4s",fetch(r,{method:"POST",body:JSON.stringify({email:a,password:s,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return g(!1),e.ok?e.json():e.json().then((function(e){throw new Error("Authentication failed!")}))})).then((function(e){var t=new Date((new Date).getTime()+1e3*+e.expiresIn);o.login(e.idToken,t.toISOString()),n.replace("/")})).catch((function(e){alert(e.message)}))},children:[Object(u.jsxs)("div",{className:C.a.control,children:[Object(u.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(u.jsx)("input",{type:"email",id:"email",required:!0,ref:e})]}),Object(u.jsxs)("div",{className:C.a.control,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(u.jsx)("input",{type:"password",id:"password",required:!0,ref:t})]}),Object(u.jsxs)("div",{className:C.a.actions,children:[!b&&Object(u.jsx)("button",{children:i?"Login":"Create Account"}),b&&Object(u.jsx)("p",{children:"Sending request..."}),Object(u.jsx)("button",{type:"button",className:C.a.toggle,onClick:function(){s((function(e){return!e}))},children:i?"Create new account":"Login with existing account"})]})]})]})},T=function(){return Object(u.jsx)(y,{})},N=n(21),P=n.n(N),A=function(){return Object(u.jsx)("section",{className:P.a.starting,children:Object(u.jsx)("h1",{children:"Welcome on Board!"})})},B=function(){return Object(u.jsx)(A,{})};var F=function(){var e=Object(a.useContext)(O);return Object(u.jsx)(f,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{path:"/",exact:!0,children:Object(u.jsx)(B,{})}),!e.isloggedIn&&Object(u.jsx)(l.b,{path:"/auth",children:Object(u.jsx)(T,{})}),e.isloggedIn&&Object(u.jsx)(l.b,{path:"/profile",children:Object(u.jsx)(w,{})}),Object(u.jsx)(l.b,{path:"*",children:Object(u.jsx)(l.a,{to:"/"})})]})})};r.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(b,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(F,{})})}))},9:function(e,t,n){e.exports={auth:"AuthForm_auth__MPw6W",control:"AuthForm_control__2fVSU",actions:"AuthForm_actions__1VNhY",toggle:"AuthForm_toggle__21tnB"}}},[[39,1,2]]]);
//# sourceMappingURL=main.3fa4e941.chunk.js.map