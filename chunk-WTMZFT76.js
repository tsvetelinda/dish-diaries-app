import{a as b}from"./chunk-2G4B7WEV.js";import{a as y}from"./chunk-SHVPFFSB.js";import{a as C}from"./chunk-7LCM3ICE.js";import{c as k,d as g,f as a,g as S,h}from"./chunk-XAZLOLJU.js";import"./chunk-HGLNSWWQ.js";import{Ma as s,Qa as c,Ra as l,Sa as m,Ta as n,Ua as o,Va as f,W as v,bb as u,fb as x,xa as d,ya as p}from"./chunk-KAITKATV.js";function w(t,e){if(t&1&&f(0,"app-single-card",4),t&2){let i=e.$implicit;s("dish",i)}}function O(t,e){if(t&1&&f(0,"app-single-card",4),t&2){let i=e.$implicit;s("dish",i)}}var _=class t{constructor(e,i){this.apiService=e;this.userService=i}user=null;dishes=[];liked=[];disliked=[];ngOnInit(){this.userService.getProfile().subscribe({next:e=>{this.user=e},error:e=>{console.log(e.error.message)}}),this.apiService.getDishes().subscribe({next:e=>{this.liked=e.filter(i=>i.reactions.some(r=>r.status==="liked"&&r.user.toString()===this.user?._id)),this.disliked=e.filter(i=>i.reactions.some(r=>r.status==="disliked"&&r.user.toString()===this.user?._id))},error:e=>{console.log(e.error.message)}})}static \u0275fac=function(i){return new(i||t)(p(C),p(b))};static \u0275cmp=v({type:t,selectors:[["app-tried"]],standalone:!0,features:[x],decls:13,vars:1,consts:[[1,"tried-container"],[1,"liked-container"],[1,"prompt-msg"],[1,"dish-container"],[3,"dish"],[1,"disliked-container"]],template:function(i,r){i&1&&(n(0,"div",0)(1,"div",1)(2,"p",2),u(3,"Recipes you've enjoyed and savored!"),o(),n(4,"div",3),l(5,w,1,1,"app-single-card",4,c),o()(),n(7,"div",5)(8,"p",2),u(9,"Dishes that didn't quite hit the mark!"),o(),n(10,"div",3),l(11,O,1,1,"app-single-card",4,c),o()()()),i&2&&(s("@fadeInOut",void 0),d(5),m(r.liked),d(6),m(r.disliked))},dependencies:[y],styles:[".tried-container[_ngcontent-%COMP%]{width:80%;max-height:600px;padding:20px;background-color:#000c;display:flex;flex-direction:column;align-items:center;position:absolute;top:calc(50% + 31px);left:50%;transform:translate(-50%,-50%);gap:20px;overflow-y:auto}.prompt-msg[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;width:100%;color:#f7e4c4;font-size:2rem;text-align:center;text-shadow:2px 2px 1px rgba(0,0,0,.8);margin-bottom:10px}.dish-container[_ngcontent-%COMP%]{display:flex;gap:30px;flex-wrap:wrap;justify-content:center}.tried-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}.tried-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#ffd400;border-radius:5px}.tried-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#ffffff1a;border-radius:5px}"],data:{animation:[k("fadeInOut",[S("in",a({opacity:1})),h("void => *",[a({opacity:0}),g("900ms 500ms",a({opacity:1}))]),h("* => void",[g("900ms",a({opacity:0}))])])]}})};export{_ as TriedComponent};
