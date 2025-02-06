import{a as L,c as k,d as D,e as I,f as R,g as T,m as V,p as z}from"./chunk-ZRLTLDWR.js";import{a as N}from"./chunk-2G4B7WEV.js";import{c as q,d as C,f as m,g as U,h as M}from"./chunk-XAZLOLJU.js";import{h as E,i as F}from"./chunk-HGLNSWWQ.js";import{Ka as u,Ma as v,Oa as x,Pa as p,Ta as t,Ua as o,Va as d,W as _,Wa as y,Xa as O,Ya as S,ab as c,bb as n,ca as b,cb as w,da as P,fb as h,xa as s,ya as f}from"./chunk-KAITKATV.js";function G(r,e){r&1&&(t(0,"p",8),n(1,"Make sure to fill in your email."),o())}function B(r,e){r&1&&(t(0,"p",8),n(1,"Make sure to fill in your password."),o())}function H(r,e){if(r&1&&(t(0,"p",8),n(1),o()),r&2){let a=S();s(),w(a.errMsg)}}var j=class r{constructor(e,a){this.userService=e;this.router=a}errMsg=null;isFieldEmpty(e){return e?.touched&&e?.errors?.required}login(e){if(e.invalid)return;let{email:a,password:i}=e.value;this.userService.login(a,i).subscribe({next:()=>{this.router.navigate(["/"])},error:l=>{this.errMsg=l.error.message,e.reset()}})}static \u0275fac=function(a){return new(a||r)(f(N),f(E))};static \u0275cmp=_({type:r,selectors:[["app-login"]],standalone:!0,features:[h],decls:24,vars:8,consts:[["form","ngForm"],["inputEmail","ngModel"],["inputPassword","ngModel"],[1,"login-container"],[1,"prompt-msg","login"],[3,"ngSubmit"],["for","email"],["type","email","id","email","name","email","required","","ngModel",""],[1,"error-msg"],["for","password"],["type","password","id","password","name","password","required","","ngModel",""],[1,"prompt-msg","register"],["routerLink","/register",1,"golden"]],template:function(a,i){if(a&1){let l=y();t(0,"div",3)(1,"p",4),n(2,"Let's get cookin'!"),d(3,"br"),n(4,"Sign in to whip up something delicious."),o(),t(5,"form",5,0),O("ngSubmit",function(){b(l);let A=c(6);return P(i.login(A))}),t(7,"label",6),n(8,"Email"),o(),d(9,"input",7,1),u(11,G,2,0,"p",8),t(12,"label",9),n(13,"Password"),o(),d(14,"input",10,2),u(16,B,2,0,"p",8)(17,H,2,1,"p",8),t(18,"button"),n(19,"Log in"),o()(),t(20,"p",11),n(21,"Not a member yet? Time to spice things up!"),o(),t(22,"a",12),n(23,"Register here!"),o()()}if(a&2){let l=c(10),g=c(15);v("@fadeInOut",void 0),s(9),x(i.isFieldEmpty(l)||i.errMsg?"error-input":"standard-input"),s(2),p(i.isFieldEmpty(l)?11:-1),s(3),x(i.isFieldEmpty(g)||i.errMsg?"error-input":"standard-input"),s(2),p(i.isFieldEmpty(g)?16:-1),s(),p(i.errMsg?17:-1)}},dependencies:[F,z,T,L,k,D,V,R,I],styles:[".login-container[_ngcontent-%COMP%]{width:65%;padding:20px;background-color:#000c;display:flex;flex-direction:column;align-items:center;position:absolute;top:calc(50% + 31px);left:50%;transform:translate(-50%,-50%)}.prompt-msg[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#f7e4c4;font-size:2rem;text-align:center;text-shadow:2px 2px 1px rgba(0,0,0,.8)}.login[_ngcontent-%COMP%]{margin-bottom:20px}.register[_ngcontent-%COMP%]{margin-top:20px}a.golden[_ngcontent-%COMP%]{color:#ffd400;transition:transform .3s ease}a.golden[_ngcontent-%COMP%]:hover{transform:scale(1.1)}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:50%;gap:10px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#000000e6;padding:10px;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px;color:#f7e4c4;font-family:Poiret One,sans-serif;font-size:1.2rem;transition:border .5s ease}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:1px solid #F7E4C4;border-radius:0;outline:none}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#ffd400;font-size:1.8rem;cursor:pointer;padding:10px 20px;border:1px solid #FFD400;font-family:Poiret One,sans-serif;background:#000000e6;margin:20px 0;text-align:center;transition:transform .3s ease,box-shadow .3s ease;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 8px 15px #0003}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#ffd400;font-family:Poiret One,sans-serif;font-size:1.5rem}.standard-input[_ngcontent-%COMP%]{border:1px solid #FFD400}.error-input[_ngcontent-%COMP%]{border:1px solid #DC143C}.error-msg[_ngcontent-%COMP%]{color:#dc143c;font-size:1rem;font-family:Poiret One,sans-serif}"],data:{animation:[q("fadeInOut",[U("in",m({opacity:1})),M("void => *",[m({opacity:0}),C("900ms 500ms",m({opacity:1}))]),M("* => void",[C("900ms",m({opacity:0}))])])]}})};export{j as LoginComponent};
