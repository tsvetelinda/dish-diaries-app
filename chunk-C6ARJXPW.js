import{a as n1}from"./chunk-UZB7LSIE.js";import{a as e1}from"./chunk-SMEFO6KX.js";import{a as U,c as G,d as H,e as B,f as W,g as Y,j as X,k as $,l as J,m as K,n as Q,p as Z}from"./chunk-ZRLTLDWR.js";import{a as y}from"./chunk-FWHHHCNJ.js";import{a as q}from"./chunk-SHVPFFSB.js";import{a as t1}from"./chunk-7LCM3ICE.js";import{c as k,d as v,f,g as E,h as M}from"./chunk-XAZLOLJU.js";import{h as j,i as w}from"./chunk-HGLNSWWQ.js";import{Ka as d,Ma as u,Oa as S,Pa as s,Qa as N,Ra as V,Sa as R,Ta as i,Ua as o,Va as p,W as P,Wa as T,Xa as D,Ya as g,ab as h,bb as r,ca as F,cb as A,da as L,db as b,ea as _,fa as I,fb as O,xa as c,ya as C}from"./chunk-KAITKATV.js";function a1(e,t){e&1&&(i(0,"p",11),r(1,"Make sure to complete all required fields."),o())}function c1(e,t){e&1&&(i(0,"p",11),r(1,"Email is not valid!"),o())}function s1(e,t){e&1&&(i(0,"p",11),r(1,"Make sure to complete all required fields."),o())}function p1(e,t){e&1&&(i(0,"p",11),r(1,"Make sure the cuisine name has at least 5 characters."),o())}function d1(e,t){e&1&&(i(0,"p",11),r(1,"Make sure to complete all required fields."),o())}function m1(e,t){if(e&1&&(i(0,"p",20),r(1),o()),e&2){let n=g(2);c(),A(n.errMsg)}}function f1(e,t){if(e&1){let n=T();i(0,"div",5)(1,"h2"),r(2),o(),i(3,"form",8,0),D("ngSubmit",function(){F(n);let m=h(4),x=g();return L(x.editProfile(m))}),i(5,"label",9),r(6,"Email"),o(),p(7,"input",10,1),d(9,a1,2,0,"p",11)(10,c1,2,0,"p",11),i(11,"label",12),r(12,"Favorite Cuisine"),o(),p(13,"input",13,2),d(15,s1,2,0,"p",11)(16,p1,2,0,"p",11),i(17,"label",14),r(18,"Cooking Skill Level"),o(),i(19,"select",15,3)(21,"option",16),r(22,"Newbie"),o(),i(23,"option",17),r(24,"Rising Star"),o(),i(25,"option",18),r(26,"Proficient"),o(),i(27,"option",19),r(28,"Culinary Wizard"),o()(),d(29,d1,2,0,"p",11)(30,m1,2,1,"p",20),i(31,"button"),r(32,"Edit"),o()()()}if(e&2){let n=h(4),l=h(8),m=h(14),x=h(20),a=g();c(2),b("Edit ",a.user==null?null:a.user.chefName,"'s Profile Data"),c(5),S(a.isFieldEmpty(l)||l!=null&&l.touched&&(!(l==null||l.errors==null)&&l.errors.emailValidator)?"error-input":"standard-input"),u("ngModel",a.user==null?null:a.user.email),c(2),s(a.isFieldEmpty(l)?9:-1),c(),s(l!=null&&l.touched&&(!(l==null||l.errors==null)&&l.errors.emailValidator)?10:-1),c(3),S(a.isFieldEmpty(m)||a.isMinLengthValid(m)?"error-input":"standard-input"),u("ngModel",a.user==null?null:a.user.favCuisine),c(2),s(a.isFieldEmpty(m)?15:-1),c(),s(a.isMinLengthValid(m)?16:-1),c(3),S(a.isFieldEmpty(x)?"error-input":"standard-input"),u("ngModel",a.user==null?null:a.user.cookingSkillLevel),c(10),s(a.isFieldEmpty(x)?29:-1),c(),s(n.submitted&&a.errMsg?30:-1)}}function u1(e,t){e&1&&(_(),i(0,"svg",32)(1,"g",38),p(2,"path",39),o()())}function g1(e,t){e&1&&(_(),i(0,"svg",32)(1,"g",38),p(2,"path",40),o()())}function x1(e,t){e&1&&(_(),i(0,"svg",32)(1,"g",38),p(2,"path",41)(3,"path",42),o()())}function _1(e,t){e&1&&(_(),i(0,"svg",32)(1,"g",38),p(2,"path",43),o()())}function C1(e,t){e&1&&(i(0,"p",34),r(1,"Fresh to the kitchen, ready to learn."),o())}function h1(e,t){e&1&&(i(0,"p",34),r(1,"A star in the making, one recipe at a time."),o())}function v1(e,t){e&1&&(i(0,"p",34),r(1,"Where skill meets flavor."),o())}function M1(e,t){e&1&&(i(0,"p",34),r(1,"Master of flavors, conjurer of delight."),o())}function b1(e,t){if(e&1){let n=T();i(0,"div",6)(1,"div",21),_(),i(2,"svg",22)(3,"g",23),p(4,"path",24)(5,"path",25)(6,"path",26)(7,"path",27)(8,"path",28)(9,"path",29)(10,"path",30),o()(),I(),i(11,"div",31),d(12,u1,3,0,":svg:svg",32)(13,g1,3,0,":svg:svg",32)(14,x1,4,0,":svg:svg",32)(15,_1,3,0,":svg:svg",32),o()(),i(16,"p",33),r(17),o(),d(18,C1,2,0,"p",34)(19,h1,2,0,"p",34)(20,v1,2,0,"p",34)(21,M1,2,0,"p",34),i(22,"div",35)(23,"p")(24,"span",36),r(25,"Email:"),o(),r(26),o(),i(27,"p")(28,"span",36),r(29,"Favorite Cuisine:"),o(),r(30),o()(),i(31,"button",37),D("click",function(){F(n);let m=g();return L(m.edit())}),r(32,"Edit Profile"),o()()}if(e&2){let n=g();c(12),s((n.user==null?null:n.user.cookingSkillLevel)==="Newbie"?12:(n.user==null?null:n.user.cookingSkillLevel)==="Rising Star"?13:(n.user==null?null:n.user.cookingSkillLevel)==="Proficient"?14:(n.user==null?null:n.user.cookingSkillLevel)==="Culinary Wizard"?15:-1),c(5),b("Chef ",n.user==null?null:n.user.chefName,""),c(),s((n.user==null?null:n.user.cookingSkillLevel)==="Newbie"?18:(n.user==null?null:n.user.cookingSkillLevel)==="Rising Star"?19:(n.user==null?null:n.user.cookingSkillLevel)==="Proficient"?20:(n.user==null?null:n.user.cookingSkillLevel)==="Culinary Wizard"?21:-1),c(8),b(" ",n.user==null?null:n.user.email,""),c(4),b(" ",n.user==null?null:n.user.favCuisine,"")}}function P1(e,t){e&1&&p(0,"app-loader")}function S1(e,t){if(e&1&&p(0,"app-single-card",46),e&2){let n=t.$implicit;u("dish",n)}}function O1(e,t){if(e&1&&(i(0,"p",45),r(1,"From your kitchen to the world: here are the recipes you've proudly shared!"),o(),V(2,S1,1,1,"app-single-card",46,N)),e&2){let n=g(2);c(2),R(n.dishes)}}function w1(e,t){e&1&&(i(0,"div",44)(1,"p",45),r(2,"Your recipe collection is looking a bit dish-appointing! Don't stew over it\u2014whip up your first dish and let's get cooking!"),o(),i(3,"button",47),r(4,"Add Dish"),o()())}function y1(e,t){if(e&1&&d(0,O1,4,0)(1,w1,5,0,"div",44),e&2){let n=g();s(n.dishes&&n.dishes.length>0?0:1)}}var z=class e{constructor(t,n,l){this.userService=t;this.apiService=n;this.router=l}user=null;dishes=[];showEditForm=!1;errMsg=null;isLoadingRecipes=!0;ngOnInit(){this.userService.getProfile().subscribe({next:t=>{this.user=t,this.apiService.getDishes().subscribe({next:n=>{this.dishes=n.filter(l=>l.chef.toString()===this.user?._id),this.isLoadingRecipes=!1},error:n=>{console.log(n.error.message)}})},error:t=>{console.log(t.error.message)}})}edit(){this.showEditForm=!this.showEditForm}isFieldEmpty(t){return t?.touched&&t?.errors?.required}isMinLengthValid(t){return t?.touched&&t?.errors?.minlength}editProfile(t){if(t.invalid)return;let{email:n,favCuisine:l,cookingSkillLevel:m}=t.value,x=this.user?._id;this.userService.editProfile(x,n,l,m).subscribe({next:a=>{this.user=a,this.showEditForm=!1},error:a=>{this.errMsg=a.error.message,t.reset()}})}static \u0275fac=function(n){return new(n||e)(C(y),C(t1),C(j))};static \u0275cmp=P({type:e,selectors:[["app-profile"]],standalone:!0,features:[O],decls:6,vars:3,consts:[["form","ngForm"],["inputEmail","ngModel"],["inputFavCuisine","ngModel"],["inputCookingSkillLevel","ngModel"],[1,"profile-container"],[1,"form-card"],[1,"profile-card"],[1,"user-recipes"],[3,"ngSubmit"],["for","email"],["id","email","name","email","appEmail","","required","",3,"ngModel"],[1,"error-msg"],["for","favCuisine"],["type","text","id","favCuisine","name","favCuisine","placeholder","e.g., Italian, Mexican","required","","minlength","5",3,"ngModel"],["for","cookingSkillLevel"],["id","cookingSkillLevel","name","cookingSkillLevel","required","",3,"ngModel"],["value","Newbie"],["value","Rising Star"],["value","Proficient"],["value","Culinary Wizard"],[1,"error-msg","centered"],[1,"avatar"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","150","height","150","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],["transform","translate(0.000000,512.000000) scale(0.100000,-0.100000)","fill","#FFD400","stroke","none"],["d",`M2419 5105 c-149 -30 -280 -105 -384 -217 l-65 -70 -44 11 c-64 16
                       -198 14 -270 -5 -252 -65 -436 -301 -436 -559 0 -143 55 -285 148 -386 l52
                       -57 1 -158 c0 -88 4 -181 9 -209 l8 -50 -53 -47 c-181 -162 -106 -441 138
                       -513 39 -11 42 -15 45 -51 8 -134 54 -308 110 -419 71 -142 217 -303 355 -392
                       l68 -43 -3 -57 -3 -57 -451 -181 c-248 -99 -469 -192 -492 -207 -66 -45 -131
                       -118 -167 -193 -30 -60 -47 -129 -120 -494 -47 -233 -85 -441 -85 -461 0 -102
                       72 -215 168 -262 l47 -23 1549 -3 c1711 -3 1612 -6 1694 60 22 18 52 54 67 81
                       48 85 46 110 -45 562 -45 226 -88 433 -96 461 -19 65 -74 157 -126 211 -49 50
                       -164 113 -205 113 -37 0 -66 -31 -66 -70 0 -38 14 -54 85 -92 65 -34 117 -88
                       148 -153 28 -57 194 -888 186 -930 -4 -17 -20 -45 -37 -61 l-30 -29 -205 -3
                       -204 -3 0 204 c0 192 -1 205 -20 222 -28 25 -76 23 -103 -4 -21 -20 -22 -31
                       -25 -221 l-3 -200 -664 0 -664 0 -3 171 -3 171 -29 25 c-33 28 -70 25 -98 -9
                       -16 -17 -18 -43 -18 -189 l0 -169 -265 0 -265 0 0 194 c0 107 -3 202 -6 211
                       -11 28 -58 46 -92 34 -47 -16 -52 -42 -52 -249 l0 -190 -182 0 c-165 0 -186 2
                       -216 20 -38 23 -72 75 -72 109 0 13 36 209 81 435 85 433 98 477 162 545 53
                       55 91 74 386 191 l282 112 22 -19 c70 -64 336 -291 360 -308 l28 -21 -61 -53
                       c-89 -78 -103 -111 -108 -254 -4 -112 -3 -120 19 -143 27 -29 68 -31 100 -5
                       21 17 24 29 29 129 3 63 11 116 18 124 6 8 80 68 163 133 128 100 154 117 168
                       106 53 -38 108 -56 176 -56 92 1 119 16 281 156 71 63 155 136 186 162 l56 48
                       103 -41 c57 -22 116 -40 132 -40 57 0 89 78 49 118 -11 11 -136 66 -280 123
                       l-262 104 0 56 0 57 73 45 c263 165 431 448 456 766 l6 84 42 12 c104 31 187
                       106 224 204 41 109 6 229 -92 313 l-51 44 11 53 c6 28 11 122 11 208 l0 156
                       48 51 c95 101 141 209 149 356 6 117 -12 203 -65 304 -71 136 -217 252 -368
                       291 -67 17 -206 20 -267 4 l-42 -10 -90 88 c-97 96 -199 156 -320 189 -82 22
                       -244 27 -326 9z m302 -159 c108 -34 218 -109 277 -189 53 -72 62 -89 97 -192
                       23 -68 36 -93 56 -104 33 -19 74 -8 96 25 16 25 16 31 -4 108 -15 59 -18 83
                       -9 88 6 4 46 8 89 8 189 0 354 -122 408 -302 18 -57 21 -87 16 -154 -7 -112
                       -44 -192 -132 -283 l-65 -68 0 -192 c0 -113 -4 -200 -10 -212 -10 -19 -32 -19
                       -984 -19 -879 0 -974 2 -980 16 -3 9 -6 104 -6 211 l0 196 -65 68 c-72 77 -98
                       121 -120 206 -71 271 133 533 414 533 102 0 108 -5 88 -66 -31 -96 -32 -120
                       -3 -148 14 -15 36 -26 48 -26 44 0 66 27 94 117 34 105 82 181 160 253 117
                       107 243 153 399 145 50 -2 111 -11 136 -19z m677 -1968 l-3 -323 -33 -95 c-96
                       -278 -296 -467 -587 -556 -93 -29 -345 -27 -440 3 -310 98 -536 346 -599 655
                       -12 59 -16 142 -16 358 l0 280 841 0 840 0 -3 -322z m-1828 162 c0 -82 -3
                       -150 -7 -150 -5 0 -26 10 -48 23 -81 45 -104 142 -50 213 21 27 76 63 98 64 4
                       0 7 -67 7 -150z m2056 114 c91 -67 77 -191 -26 -244 -22 -11 -42 -20 -45 -20
                       -3 0 -5 68 -5 151 l0 150 23 -6 c12 -4 36 -18 53 -31z m-1253 -1408 c135 -27
                       297 -20 475 21 19 5 22 1 22 -25 0 -28 -14 -42 -145 -142 -80 -61 -151 -113
                       -159 -116 -8 -3 -78 44 -165 111 -136 105 -151 119 -151 147 0 26 3 30 23 25
                       12 -3 57 -12 100 -21z m-52 -278 c89 -69 159 -130 159 -139 0 -24 -36 -65 -69
                       -79 -58 -24 -87 -8 -254 137 l-158 137 78 32 c43 18 79 33 81 33 2 1 75 -54
                       163 -121z m717 89 l83 -33 -155 -135 c-157 -136 -193 -157 -242 -145 -37 10
                       -86 61 -82 86 2 13 63 66 158 140 85 66 155 120 156 120 0 0 37 -15 82 -33z`],["d",`M1875 3905 c-24 -23 -25 -28 -25 -173 0 -142 1 -149 23 -170 31 -29
                       72 -28 102 3 24 23 25 28 25 170 0 142 -1 147 -25 170 -13 14 -36 25 -50 25
                       -14 0 -37 -11 -50 -25z`],["d",`M2307 3918 c-9 -7 -21 -26 -27 -41 -13 -37 -13 -246 1 -286 19 -54
                       79 -69 117 -28 21 22 22 33 22 173 0 144 -1 151 -23 172 -26 24 -65 28 -90 10z`],["d",`M2726 3909 l-26 -20 0 -153 c0 -146 1 -153 23 -174 29 -27 67 -28 98
                       -3 23 18 24 27 27 151 4 147 0 172 -28 200 -26 26 -60 25 -94 -1z`],["d",`M3150 3910 c-28 -28 -32 -53 -28 -200 3 -124 4 -133 27 -151 32 -26
                       73 -24 99 4 21 22 22 33 22 174 l0 152 -26 20 c-34 26 -68 27 -94 1z`],["d",`M2435 889 c-32 -19 -45 -41 -45 -79 0 -74 89 -109 140 -55 30 32 32
                       87 4 115 -24 25 -73 34 -99 19z`],["d",`M2415 505 c-53 -53 -16 -145 58 -145 75 0 110 97 53 146 -36 31 -80
                       31 -111 -1z`],[1,"badge"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","60","height","60","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],[1,"chef-name"],[1,"motto"],[1,"information"],[1,"details"],[3,"click"],["transform","translate(0.000000,512.000000) scale(0.100000,-0.100000)","fill","#000","stroke","none"],["d",`M3182 5107 c-57 -32 -184 -247 -241 -410 -97 -276 -106 -614 -25
                       -894 43 -148 91 -250 194 -410 12 -19 9 -39 -24 -177 -21 -86 -42 -158 -47
                       -162 -5 -3 -9 0 -9 6 0 26 -83 187 -143 278 -199 301 -492 520 -803 602 -108
                       28 -139 26 -175 -9 -27 -27 -29 -35 -29 -105 0 -41 9 -120 19 -174 82 -421
                       373 -807 757 -1004 49 -25 117 -56 152 -68 34 -13 62 -24 62 -25 0 -8 -99
                       -222 -144 -312 -85 -170 -252 -453 -267 -453 -4 0 -9 26 -13 59 -10 87 -52
                       234 -97 341 -141 330 -394 600 -692 740 -94 44 -114 47 -157 25 -40 -21 -48
                       -38 -61 -146 -36 -292 58 -639 250 -929 102 -154 302 -343 451 -427 28 -15 50
                       -31 50 -34 0 -14 -223 -260 -347 -382 l-130 -129 -7 105 c-21 324 -125 602
                       -321 852 -114 146 -319 314 -440 360 -38 15 -45 15 -79 1 -45 -19 -60 -51 -82
                       -178 -20 -115 -14 -373 11 -488 71 -321 250 -626 481 -819 46 -39 92 -74 101
                       -80 17 -10 16 -12 -7 -31 -108 -88 -485 -322 -665 -413 -89 -44 -110 -67 -110
                       -119 0 -33 6 -45 33 -69 55 -49 79 -42 327 96 158 88 383 233 522 336 l94 70
                       132 -65 c233 -115 409 -152 687 -143 191 6 267 19 427 72 122 41 201 79 308
                       150 117 78 165 125 165 163 0 52 -21 81 -89 126 -212 140 -441 212 -711 223
                       -123 5 -315 -8 -358 -25 -9 -3 25 40 75 96 50 56 112 128 137 160 l46 58 69
                       -17 c110 -28 273 -39 406 -29 436 36 834 256 1068 591 57 81 64 107 42 153
                       -14 28 -28 39 -73 57 -118 44 -236 63 -407 63 -216 0 -368 -30 -564 -110 -46
                       -19 -85 -33 -87 -32 -2 2 30 69 70 149 40 80 91 190 114 245 l42 99 158 1
                       c131 0 175 5 268 26 430 100 806 392 986 768 46 96 53 147 23 180 -31 34 -47
                       39 -156 51 -320 32 -717 -94 -992 -316 -37 -30 -69 -55 -71 -55 -2 0 5 42 17
                       93 16 75 29 105 67 162 93 138 167 317 207 505 25 119 25 437 0 563 -38 188
                       -134 412 -232 542 -63 83 -107 103 -163 72z m97 -349 c163 -343 162 -759 -1
                       -1095 -22 -46 -44 -83 -48 -83 -9 0 -84 160 -109 232 -43 126 -56 216 -56 398
                       0 189 14 279 62 415 32 89 93 215 104 215 5 0 26 -37 48 -82z m-1033 -1096
                       c228 -114 448 -346 564 -595 59 -125 108 -307 83 -307 -5 0 -57 24 -118 53
                       -230 112 -433 308 -560 541 -45 83 -108 258 -120 333 l-7 43 39 -14 c21 -7 75
                       -32 119 -54z m2024 -323 c0 -28 -104 -163 -195 -254 -220 -221 -502 -352 -799
                       -372 -115 -7 -113 -12 -44 89 91 136 269 297 419 381 142 79 323 139 472 156
                       106 12 147 12 147 0z m-2520 -695 c289 -212 487 -571 507 -916 4 -69 2 -108
                       -4 -108 -25 0 -167 112 -253 199 -219 222 -343 496 -366 810 l-7 93 29 -15
                       c16 -8 58 -36 94 -63z m-688 -731 c180 -147 337 -397 403 -643 32 -119 50
                       -294 41 -383 l-8 -67 -31 22 c-18 12 -75 65 -128 117 -167 167 -279 367 -340
                       611 -26 105 -40 400 -19 400 7 0 44 -26 82 -57z m2568 46 c46 -5 87 -12 89
                       -15 8 -8 -130 -143 -199 -194 -248 -184 -557 -273 -864 -249 -61 5 -114 13
                       -119 18 -14 14 138 158 234 223 108 72 201 118 314 156 192 64 367 84 545 61z
                       m-1024 -1110 c137 -19 391 -105 401 -136 6 -16 -180 -107 -280 -138 -234 -70
                       -520 -74 -746 -8 -67 19 -184 67 -212 86 -20 15 -18 17 46 52 122 69 274 120
                       425 144 79 13 276 13 366 0z`],["d",`M4512 5099 c-28 -14 -114 -95 -250 -236 -175 -181 -207 -220 -210
                   -248 -4 -41 28 -75 72 -75 26 0 61 31 248 217 l218 218 160 -160 c88 -88 159
                   -163 158 -167 -6 -17 -881 -898 -891 -898 -7 0 -84 72 -172 160 l-159 160 142
                   143 c155 157 165 175 117 222 -48 49 -66 39 -227 -122 -160 -160 -184 -198
                   -173 -265 7 -37 4 -42 -43 -92 -48 -50 -82 -103 -82 -126 0 -6 -60 -77 -134
                   -158 -621 -678 -1072 -1423 -1324 -2187 -36 -110 -67 -201 -68 -203 0 -1 -22
                   9 -47 24 -110 61 -315 113 -531 135 -178 18 -558 7 -711 -20 -230 -41 -403
                   -111 -496 -200 l-52 -50 6 -114 c34 -596 367 -965 937 -1042 416 -57 817 58
                   1048 298 70 74 79 107 39 145 -39 37 -76 29 -132 -29 -214 -219 -576 -320
                   -950 -264 -226 34 -386 107 -523 239 -104 99 -170 207 -215 351 -25 83 -52
                   213 -45 220 2 2 42 -11 88 -30 47 -19 118 -42 158 -52 71 -16 73 -16 100 4 35
                   26 42 81 13 107 -11 10 -57 29 -103 42 -87 24 -180 62 -212 87 -18 13 -16 16
                   45 45 91 43 207 77 334 99 157 26 621 26 777 0 141 -24 235 -50 326 -92 89
                   -42 87 -48 -24 -95 -176 -73 -363 -102 -683 -104 -231 -2 -234 -3 -252 -25
                   -27 -33 -24 -73 7 -102 26 -24 26 -24 247 -23 277 1 443 21 632 76 99 28 222
                   91 278 140 48 43 48 44 98 216 188 658 550 1335 1043 1951 114 143 277 330
                   343 393 l39 38 57 -58 57 -58 -91 -99 c-289 -315 -591 -724 -799 -1085 -170
                   -295 -344 -687 -444 -998 -38 -119 -49 -169 -62 -295 -17 -164 -24 -207 -55
                   -307 -16 -51 -17 -70 -9 -91 11 -26 46 -49 75 -49 62 0 110 146 139 431 16
                   156 51 278 151 535 248 634 660 1275 1155 1801 70 74 92 91 124 97 30 6 56 23
                   105 71 l66 63 51 -5 c38 -4 60 0 90 15 23 12 227 210 495 479 494 495 488 488
                   474 581 -7 44 -17 57 -188 231 -100 101 -196 190 -214 197 -46 20 -91 17 -141
                   -7z m-722 -1434 c-24 -25 -49 -45 -54 -45 -16 0 -166 153 -166 169 0 9 19 35
                   42 58 l43 43 90 -90 90 -90 -45 -45z`],["d",`M243 5096 c-25 -22 -28 -30 -26 -79 5 -149 61 -484 124 -737 204
                       -823 632 -1609 1207 -2220 l80 -85 -795 -797 c-789 -790 -796 -796 -790 -830
                       10 -53 202 -235 298 -282 197 -97 430 -83 607 35 26 18 325 309 664 648 l618
                       615 143 -142 c192 -190 172 -191 366 3 l146 145 610 -611 c414 -414 631 -624
                       675 -653 189 -125 407 -139 609 -40 56 28 99 61 181 141 110 106 132 142 111
                       180 -5 10 -363 371 -794 802 l-785 784 102 111 c718 781 1166 1746 1296 2797
                       21 170 18 195 -22 223 -60 42 4 100 -1189 -1089 -610 -608 -1114 -1105 -1119
                       -1105 -5 0 -509 497 -1119 1105 -1215 1211 -1133 1137 -1198 1081z m1852
                       -2656 c-187 -187 -343 -340 -347 -340 -11 0 -230 247 -331 373 -416 521 -736
                       1163 -902 1810 -27 108 -75 342 -100 492 -4 24 188 -163 1007 -982 l1013
                       -1013 -340 -340z m2609 2328 c-139 -899 -523 -1739 -1111 -2429 -101 -119
                       -1020 -1049 -1036 -1049 -5 0 -161 152 -347 338 l-337 337 1411 1413 c776 776
                       1414 1412 1417 1412 3 0 5 -10 3 -22z m-2811 -3500 l-218 -218 -182 182 -183
                       183 217 217 218 218 182 -182 183 -183 -217 -217z m1700 364 l217 -217 -183
                       -183 -182 -182 -220 220 -220 220 180 180 c99 99 182 180 185 180 3 0 103 -98
                       223 -218z m-2218 -522 l180 -180 -183 -183 -182 -182 -182 182 -183 183 180
                       180 c99 99 182 180 185 180 3 0 86 -81 185 -180z m2740 0 l180 -180 -180 -180
                       -180 -180 -185 179 -185 179 180 181 c99 100 182 181 185 181 3 0 86 -81 185
                       -180z m-3144 -762 c-114 -111 -184 -152 -289 -170 -135 -23 -264 19 -375 121
                       l-58 54 228 229 228 228 183 -183 183 -182 -100 -97z m3841 -49 c-142 -134
                       -321 -163 -496 -81 -42 20 -92 59 -164 127 l-103 98 183 184 183 183 228 -227
                       228 -228 -59 -56z`],["d",`M2978 2672 c-404 -403 -428 -429 -428 -463 0 -47 37 -83 86 -83 33 0
                       61 26 465 430 390 391 429 432 429 462 0 46 -38 82 -87 82 -36 0 -53 -15 -465
                       -428z`],["d",`M3045 5109 c-43 -25 -154 -118 -251 -209 -251 -235 -445 -499 -599
                       -812 -177 -359 -249 -716 -271 -1332 l-7 -184 -41 12 c-61 19 -109 46 -169 96
                       -137 114 -235 295 -302 555 -38 148 -57 175 -124 175 -76 0 -243 -144 -344
                       -298 -194 -295 -288 -667 -291 -1152 -1 -242 10 -341 59 -527 158 -598 604
                       -1093 1178 -1307 233 -87 420 -120 677 -120 257 0 444 33 677 120 508 190 927
                       609 1117 1117 103 274 139 539 117 837 -33 429 -127 744 -335 1120 -79 141
                       -195 313 -425 629 -209 288 -279 396 -352 541 -95 190 -141 359 -157 578 -8
                       102 -12 116 -34 138 -29 29 -92 41 -123 23z m-25 -411 c28 -141 73 -268 150
                       -423 85 -172 154 -279 389 -600 286 -391 394 -562 499 -792 118 -258 181 -518
                       201 -834 21 -311 -30 -586 -158 -855 -135 -282 -335 -517 -592 -692 -49 -33
                       -250 -142 -263 -142 -4 0 2 13 14 30 35 49 107 211 126 285 15 56 19 104 18
                       240 -1 155 -4 180 -31 285 -43 162 -109 295 -257 515 -182 270 -208 325 -226
                       487 -8 67 -14 86 -36 109 -36 37 -74 45 -120 23 -59 -28 -203 -179 -277 -290
                       -138 -207 -194 -381 -215 -659 l-7 -100 -27 40 c-24 36 -58 128 -72 196 -16
                       78 -109 104 -183 50 -100 -72 -175 -209 -219 -397 -27 -113 -27 -399 0 -499
                       19 -74 91 -236 126 -285 12 -17 19 -30 15 -30 -27 0 -247 127 -332 192 -337
                       256 -563 610 -652 1019 -78 364 -24 904 126 1242 45 103 172 297 194 297 4 0
                       14 -28 24 -62 23 -84 102 -246 164 -339 144 -216 349 -344 571 -356 l96 -6 31
                       31 31 31 6 208 c22 729 79 1028 262 1395 80 161 163 292 283 448 65 85 311
                       344 319 336 2 -3 12 -46 22 -98z m-247 -2843 c14 -28 82 -135 153 -240 140
                       -209 202 -329 233 -450 62 -242 52 -402 -36 -585 -38 -79 -59 -108 -127 -175
                       -131 -131 -264 -188 -436 -188 -172 0 -305 57 -436 188 -68 66 -89 96 -127
                       175 -62 128 -82 229 -74 376 6 109 28 229 52 287 l12 29 25 -44 c68 -114 172
                       -190 281 -203 63 -8 119 11 138 47 8 14 16 89 20 198 8 188 19 274 51 385 24
                       84 98 230 158 309 l43 57 22 -58 c13 -32 34 -81 48 -108z`],[1,"prompt"],[1,"prompt-msg"],[3,"dish"],["routerLink","/add"]],template:function(n,l){n&1&&(i(0,"div",4),d(1,f1,33,16,"div",5)(2,b1,33,5,"div",6),i(3,"div",7),d(4,P1,1,0,"app-loader")(5,y1,2,1),o()()),n&2&&(u("@fadeInOut",void 0),c(),s(l.showEditForm?1:2),c(3),s(l.isLoadingRecipes?4:5))},dependencies:[q,w,Z,Y,$,J,U,X,G,H,K,Q,W,B,e1,n1],styles:[".profile-container[_ngcontent-%COMP%]{width:80%;padding:20px;background-color:#000c;display:flex;align-items:center;position:absolute;top:calc(50% + 31px);left:50%;transform:translate(-50%,-50%)}.form-card[_ngcontent-%COMP%]{width:30%;border:1px solid #FFD400;box-shadow:#000c 0 14px 28px,#000000e6 0 10px 10px;padding:20px}.form-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ffd400;text-align:center;font-family:Poiret One,sans-serif}.form-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #cookingSkillLevel[_ngcontent-%COMP%]{background-color:#000000e6;padding:10px;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px;color:#f7e4c4;font-family:Poiret One,sans-serif;font-size:1.2rem;transition:border .5s ease}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, #cooking-level[_ngcontent-%COMP%]:focus{border:1px solid #F7E4C4;border-radius:0;outline:none}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#ffd400;font-size:1.8rem;cursor:pointer;padding:10px 20px;border:1px solid #FFD400;font-family:Poiret One,sans-serif;background:#000000e6;margin:20px 0;text-align:center;transition:transform .3s ease,box-shadow .3s ease;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 8px 15px #0003}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#ffd400;font-family:Poiret One,sans-serif;font-size:1.5rem}.standard-input[_ngcontent-%COMP%]{border:1px solid #FFD400}.error-input[_ngcontent-%COMP%]{border:1px solid #DC143C}.error-msg[_ngcontent-%COMP%]{color:#dc143c;font-size:1rem;font-family:Poiret One,sans-serif}.profile-card[_ngcontent-%COMP%]{width:30%;border:1px solid #FFD400;display:flex;flex-direction:column;padding:20px;justify-content:center;align-items:center;box-shadow:#000c 0 14px 28px,#000000e6 0 10px 10px}.profile-card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{border:3px solid #FFD400;border-radius:50%;padding:30px;width:200px;height:200px;display:flex;justify-content:center;align-items:center;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px;position:relative}.avatar[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{width:75px;height:75px;padding:10px;display:flex;justify-content:center;align-items:center;border-radius:50%;position:absolute;bottom:0;right:-15%;background:linear-gradient(135deg,#ffd400f2,#ffb800f2);box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px}.profile-card[_ngcontent-%COMP%]   .chef-name[_ngcontent-%COMP%], .prompt-msg[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#f7e4c4;font-size:2.5rem;text-align:center;text-shadow:2px 2px 1px rgba(0,0,0,.8);margin:5px 0 0}.prompt-msg[_ngcontent-%COMP%]{font-size:2rem;padding:0 10px}.profile-card[_ngcontent-%COMP%]   .motto[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#f7e4c4;font-size:1.8rem;text-align:center;text-shadow:2px 2px 1px rgba(0,0,0,.8);margin:5px 0 15px;border-top:1px solid #F7E4C4}.profile-card[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]{color:#f7e4c4;font-family:Poiret One,sans-serif;font-size:1.5rem;text-align:center}.profile-card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{color:#ffd400;font-weight:700}.profile-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .user-recipes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#ffd400;font-size:1.8rem;cursor:pointer;padding:10px 20px;border:1px solid #FFD400;font-family:Poiret One,sans-serif;background:#000000e6;margin:20px 0;text-align:center;transition:transform .3s ease,box-shadow .3s ease;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px}.user-recipes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0}.profile-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .user-recipes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 8px 15px #0003}.user-recipes[_ngcontent-%COMP%]{width:70%;display:flex;flex-wrap:wrap;overflow-y:auto;height:500px;justify-content:center;gap:20px}.user-recipes[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}.user-recipes[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#ffd400;border-radius:5px}.user-recipes[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#ffffff1a;border-radius:5px}.prompt[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:20px;align-items:center;gap:20px}.prompt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:30%}"],data:{animation:[k("fadeInOut",[E("in",f({opacity:1})),M("void => *",[f({opacity:0}),v("900ms 500ms",f({opacity:1}))]),M("* => void",[v("900ms",f({opacity:0}))])])]}})};function k1(e,t){e&1&&p(0,"app-profile")}function E1(e,t){e&1&&(i(0,"div",0)(1,"p"),r(2,"Discover the art of culinary storytelling! Explore our collection of thoughtfully curated recipes, each with its own unique story."),o(),i(3,"button",1),r(4,"Browse Recipes"),o(),i(5,"p"),r(6,"Become a cherished member of our community\u2014share your culinary creations, exchange experiences, and inspire others with your passion for food."),o(),i(7,"div",2)(8,"button",3),r(9,"Log in"),o(),i(10,"button",4),r(11,"Register"),o()()()),e&2&&u("@slideInOut",void 0)}var i1=class e{constructor(t){this.userService=t}get isLoggedIn(){return this.userService.isLogged}static \u0275fac=function(n){return new(n||e)(C(y))};static \u0275cmp=P({type:e,selectors:[["app-home"]],standalone:!0,features:[O],decls:2,vars:1,consts:[[1,"welcome-msg"],["id","browse-btn","routerLink","/list"],[1,"auth-buttons"],["routerLink","/login"],["routerLink","/register"]],template:function(n,l){n&1&&d(0,k1,1,0,"app-profile")(1,E1,12,1,"div",0),n&2&&s(l.isLoggedIn?0:1)},dependencies:[w,z],styles:[".welcome-msg[_ngcontent-%COMP%]{width:65%;padding:40px 40px 20px;background-color:#000c;display:flex;flex-direction:column;align-items:center;position:absolute;top:calc(50% + 31px);left:50%;transform:translate(-50%,-50%)}.welcome-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#f7e4c4;font-size:1.8rem;text-align:center;text-shadow:2px 2px 1px rgba(0,0,0,.8)}.welcome-msg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#ffd400;font-size:1.8rem;cursor:pointer;padding:10px 20px;border:1px solid #FFD400;font-family:Poiret One,sans-serif;background:#000000e6;margin:20px 0;text-align:center;transition:transform .3s ease,box-shadow .3s ease;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px}.welcome-msg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 8px 15px #0003}.welcome-msg[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}#browse-btn[_ngcontent-%COMP%]{padding:10px 30px}.auth-buttons[_ngcontent-%COMP%]{display:flex;gap:20px;justify-content:center}"],data:{animation:[k("slideInOut",[E("in",f({transform:"translateX(0)"})),M("void => *",[f({transform:"translate(-50%, 100%)"}),v("900ms 800ms")]),M("* => void",[v(900,f({transform:"translateX(100%)"}))])])]}})};export{i1 as HomeComponent};
