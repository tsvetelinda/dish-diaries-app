import{a as h1}from"./chunk-FSDLZ76X.js";import{a as n1,c as e1,d as t1,e as i1,f as o1,g as l1,h as r1,i as a1,j as c1,k as s1,l as d1,m as p1,n as m1,o as g1,p as u1}from"./chunk-ZRLTLDWR.js";import{a as Z}from"./chunk-FWHHHCNJ.js";import{a as q}from"./chunk-7LCM3ICE.js";import{c as R,d as y,f as M,g as A,h as D}from"./chunk-XAZLOLJU.js";import{f as Q,h as X}from"./chunk-HGLNSWWQ.js";import{$a as B,Bb as J,Ka as h,Ma as g,Oa as S,Pa as s,Qa as G,Ra as H,Sa as j,Ta as n,Ua as e,Va as c,W as F,Wa as E,Xa as z,Ya as f,ab as x,bb as l,ca as v,cb as _,da as b,db as L,ea as d,fa as m,fb as N,hb as K,ib as $,ka as Y,ua as W,xa as a,ya as O}from"./chunk-KAITKATV.js";function C1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure to complete all required fields."),e())}function v1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure the dish name has at least 7 characters."),e())}function b1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure to complete all required fields."),e())}function S1(i,r){i&1&&(n(0,"p",17),l(1,"Invalid URL. Ensure it's a proper link starting with http:// or https://"),e())}function z1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure to complete all required fields."),e())}function w1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure to complete all required fields."),e())}function P1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure the description has at least 10 characters."),e())}function O1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure to complete all required fields."),e())}function E1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure the ingredients contain at least 10 characters."),e())}function k1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure to complete all required fields."),e())}function y1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure to complete all required fields."),e())}function D1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure to complete all required fields."),e())}function T1(i,r){i&1&&(n(0,"p",17),l(1,"Make sure the instructions contain at least 10 characters."),e())}function V1(i,r){if(i&1&&(n(0,"p",17),l(1),e()),i&2){let t=f();a(),_(t.errMsg)}}var U=class i{constructor(r){this.apiService=r}dish=null;formSubmitted=new Y;errMsg=null;isFieldEmpty(r){return r?.touched&&r?.errors?.required}isMinLengthValid(r){return r?.touched&&r?.errors?.minlength}editDish(r){if(r.invalid)return;let{dishName:t,chef:o,imageUrl:p,dietaryPreferences:C,description:u,ingredients:T,servings:k,cookingTime:P,cookingSkillLevel:V,instructions:I}=r.value;this.apiService.editDish(this.dish?._id,t,o,u,p,T,I,C,P,k,V).subscribe({next:w=>{this.dish=w,this.formSubmitted.emit({showEdit:!1,updatedDish:w})},error:w=>{this.errMsg=w.error.message}})}static \u0275fac=function(t){return new(t||i)(O(q))};static \u0275cmp=F({type:i,selectors:[["app-edit"]],inputs:{dish:"dish"},outputs:{formSubmitted:"formSubmitted"},standalone:!0,features:[N],decls:125,vars:43,consts:[["form","ngForm"],["inputDishName","ngModel"],["inputImageUrl","ngModel"],["inputDietaryPreferences","ngModel"],["inputDescription","ngModel"],["inputIngedients","ngModel"],["inputServings","ngModel"],["inputCookingTime","ngModel"],["inputcookingSkillLevel","ngModel"],["inputInstructions","ngModel"],[1,"form-container"],[1,"prompt-msg"],[3,"ngSubmit"],[1,"row-wrapper"],[1,"input-wrapper"],["for","dishName"],["type","text","id","dishName","name","dishName","placeholder","Spaghetti Carbonara","required","","minlength","7","maxlength","22",3,"ngModel"],[1,"error-msg"],["for","imageUrl"],["type","text","id","imageUrl","name","imageUrl","required","","appImage","",3,"ngModel"],["for","dietaryPreferences"],["id","dietaryPreferences","name","dietaryPreferences","required","",3,"ngModel"],["value","Vegetarian"],["value","Vegan"],["value","Gluten-Free"],["value","Non-Vegetarian"],["value","Keto"],["value","Other"],["for","description"],["id","description","name","description","rows","2","placeholder","Share the flavors and story behind this delightful dish!","required","","minlength","10",3,"ngModel"],[1,"label-container"],["for","ingredients"],[1,"disclaimer"],["id","ingredients","name","ingredients","rows","2","placeholder","List your ingredients here...","required","","minlength","10",3,"ngModel"],["for","servings"],["type","number","id","servings","name","servings","placeholder","4","required","",3,"ngModel"],["for","cookingTime"],["type","number","id","cookingTime","name","cookingTime","placeholder","30","required","",3,"ngModel"],[1,"skill-wrapper"],["for","cookingSkillLevel"],["id","cookingSkillLevel"],[1,"custom-radio"],["type","radio","name","cookingSkillLevel","value","Newbie","id","newbie","required","",3,"ngModel"],[1,"radio-mark"],[1,"icon"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],["transform","translate(0.000000,512.000000) scale(0.100000,-0.100000)","fill","#FFD400","stroke","none"],["d",`M3182 5107 c-57 -32 -184 -247 -241 -410 -97 -276 -106 -614 -25
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
                   425 144 79 13 276 13 366 0z`],["type","radio","name","cookingSkillLevel","value","Rising Star","id","risingStar","required","",3,"ngModel"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","22","height","22","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],["d",`M4512 5099 c-28 -14 -114 -95 -250 -236 -175 -181 -207 -220 -210
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
                   42 58 l43 43 90 -90 90 -90 -45 -45z`],["type","radio","name","cookingSkillLevel","value","Proficient","id","proficient","required","",3,"ngModel"],["d",`M243 5096 c-25 -22 -28 -30 -26 -79 5 -149 61 -484 124 -737 204
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
                   -428z`],["type","radio","name","cookingSkillLevel","value","Culinary Wizard","id","culinaryWizard","required","",3,"ngModel"],["d",`M3045 5109 c-43 -25 -154 -118 -251 -209 -251 -235 -445 -499 -599
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
                   84 98 230 158 309 l43 57 22 -58 c13 -32 34 -81 48 -108z`],["for","instructions"],["id","instructions","name","instructions","rows","2","cols","40","placeholder","Describe the steps for preparing this delicious recipe here...","required","","minlength","10",3,"ngModel"]],template:function(t,o){if(t&1){let p=E();n(0,"div",10)(1,"p",11),l(2,"Time to add a pinch of change! Edit your dish and make it even tastier!"),e(),n(3,"form",12,0),z("ngSubmit",function(){v(p);let u=x(4);return b(o.editDish(u))}),n(5,"div",13)(6,"div",14)(7,"label",15),l(8,"Dish Name"),e(),c(9,"input",16,1),h(11,C1,2,0,"p",17)(12,v1,2,0,"p",17),e(),n(13,"div",14)(14,"label",18),l(15,"Image URL"),e(),c(16,"input",19,2),h(18,b1,2,0,"p",17)(19,S1,2,0,"p",17),e(),n(20,"div",14)(21,"label",20),l(22,"Dietary Preference"),e(),n(23,"select",21,3)(25,"option",22),l(26,"Vegetarian"),e(),n(27,"option",23),l(28,"Vegan"),e(),n(29,"option",24),l(30,"Gluten-Free"),e(),n(31,"option",25),l(32,"Non-Vegetarian"),e(),n(33,"option",26),l(34,"Keto"),e(),n(35,"option",27),l(36,"Other"),e()(),h(37,z1,2,0,"p",17),e()(),n(38,"div",13)(39,"div",14)(40,"label",28),l(41,"Description"),e(),c(42,"textarea",29,4),h(44,w1,2,0,"p",17)(45,P1,2,0,"p",17),e(),n(46,"div",14)(47,"div",30)(48,"label",31),l(49,"Ingredients"),e(),n(50,"p",32),l(51,"*Make sure to list each ingredient on a new line."),e()(),c(52,"textarea",33,5),h(54,O1,2,0,"p",17)(55,E1,2,0,"p",17),e()(),n(56,"div",13)(57,"div",14)(58,"label",34),l(59,"Number of Servings"),e(),c(60,"input",35,6),h(62,k1,2,0,"p",17),e(),n(63,"div",14)(64,"div",30)(65,"label",36),l(66,"Cooking Time"),e(),n(67,"p",32),l(68,"*Make sure to enter the time in minutes."),e()(),c(69,"input",37,7),h(71,y1,2,0,"p",17),e()(),n(72,"div",38)(73,"label",39),l(74,"Cooking Skills Level"),e(),n(75,"div",40)(76,"label",41),c(77,"input",42,8)(79,"span",43),l(80,"Newbie "),n(81,"span",44),d(),n(82,"svg",45)(83,"g",46),c(84,"path",47),e()()()(),m(),n(85,"label",41),c(86,"input",48,8)(88,"span",43),l(89,"Rising Star "),n(90,"span",44),d(),n(91,"svg",49)(92,"g",46),c(93,"path",50),e()()()(),m(),n(94,"label",41),c(95,"input",51,8)(97,"span",43),l(98,"Proficient "),n(99,"span",44),d(),n(100,"svg",45)(101,"g",46),c(102,"path",52)(103,"path",53),e()()()(),m(),n(104,"label",41),c(105,"input",54,8)(107,"span",43),l(108," Culinary Wizard "),n(109,"span",44),d(),n(110,"svg",45)(111,"g",46),c(112,"path",55),e()()()()()(),m(),n(113,"div",30)(114,"label",56),l(115,"Instructions"),e(),n(116,"p",32),l(117,"*Make sure to write each instruction on a new line."),e()(),c(118,"textarea",57,9),h(120,D1,2,0,"p",17)(121,T1,2,0,"p",17)(122,V1,2,1,"p",17),n(123,"button"),l(124,"Edit Dish"),e()()()}if(t&2){let p=x(4),C=x(10),u=x(17),T=x(24),k=x(43),P=x(53),V=x(61),I=x(70),w=x(119);g("@fadeInOut",void 0),a(9),S(o.isFieldEmpty(C)||o.isMinLengthValid(C)?"error-input":"standard-input"),g("ngModel",o.dish==null?null:o.dish.dishName),a(2),s(o.isFieldEmpty(C)?11:-1),a(),s(o.isMinLengthValid(C)?12:-1),a(4),S(o.isFieldEmpty(u)||u!=null&&u.touched&&(!(u==null||u.errors==null)&&u.errors.imageValidator)?"error-input":"standard-input"),g("ngModel",o.dish==null?null:o.dish.imageUrl),a(2),s(o.isFieldEmpty(u)?18:-1),a(),s(u!=null&&u.touched&&(!(u==null||u.errors==null)&&u.errors.imageValidator)?19:-1),a(4),S(o.isFieldEmpty(T)?"error-input":"standard-input"),g("ngModel",o.dish==null?null:o.dish.dietaryPreferences),a(14),s(o.isFieldEmpty(T)?37:-1),a(5),S(o.isFieldEmpty(k)||o.isMinLengthValid(k)?"error-input":"standard-input"),g("ngModel",o.dish==null?null:o.dish.description),a(2),s(o.isFieldEmpty(k)?44:-1),a(),s(o.isMinLengthValid(k)?45:-1),a(7),S(o.isFieldEmpty(P)||o.isMinLengthValid(P)?"error-input":"standard-input"),g("ngModel",o.dish==null||o.dish.ingredients==null?null:o.dish.ingredients.join(`
`)),a(2),s(o.isFieldEmpty(P)?54:-1),a(),s(o.isMinLengthValid(P)?55:-1),a(5),S(o.isFieldEmpty(V)?"error-input":"standard-input"),g("ngModel",o.dish==null?null:o.dish.servings),a(2),s(o.isFieldEmpty(V)?62:-1),a(7),S(o.isFieldEmpty(I)?"error-input":"standard-input"),g("ngModel",o.dish==null?null:o.dish.cookingTime),a(2),s(o.isFieldEmpty(I)?71:-1),a(6),g("ngModel",o.dish==null?null:o.dish.cookingSkillLevel),a(9),g("ngModel",o.dish==null?null:o.dish.cookingSkillLevel),a(9),g("ngModel",o.dish==null?null:o.dish.cookingSkillLevel),a(10),g("ngModel",o.dish==null?null:o.dish.cookingSkillLevel),a(13),S(o.isFieldEmpty(w)||o.isMinLengthValid(P)?"error-input":"standard-input"),g("ngModel",o.dish==null||o.dish.instructions==null?null:o.dish.instructions.join(`
`)),a(2),s(o.isFieldEmpty(w)?120:-1),a(),s(o.isMinLengthValid(w)?121:-1),a(),s(p.submitted&&o.errMsg?122:-1)}},dependencies:[u1,l1,s1,d1,n1,r1,c1,a1,e1,t1,p1,m1,g1,o1,i1,h1],styles:['.form-container[_ngcontent-%COMP%]{width:85%;padding:20px;background-color:#000c;display:flex;flex-direction:column;align-items:center;position:absolute;top:calc(50% + 31px);left:50%;transform:translate(-50%,-50%)}.form-container[_ngcontent-%COMP%]   .prompt-msg[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#f7e4c4;font-size:2rem;text-align:center;text-shadow:2px 2px 1px rgba(0,0,0,.8)}.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:90%;gap:5px}.row-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;gap:20px}.input-wrapper[_ngcontent-%COMP%]{width:50%;display:flex;flex-direction:column;gap:5px}.skill-wrapper[_ngcontent-%COMP%]{width:100%;display:flex;gap:5px;padding:5px 0}.skill-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:20%}.skill-wrapper[_ngcontent-%COMP%]   #cookingSkillLevel[_ngcontent-%COMP%]{width:80%;display:flex;gap:5px;justify-content:left}#cookingSkillLevel[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.label-container[_ngcontent-%COMP%]{display:flex;align-items:flex-end;width:100%}.label-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:35%}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .disclaimer[_ngcontent-%COMP%], .error-msg[_ngcontent-%COMP%]{color:#ffd400;font-family:Poiret One,sans-serif;font-size:1.4rem}.error-msg[_ngcontent-%COMP%]{color:#dc143c;font-size:1rem}.disclaimer[_ngcontent-%COMP%]{font-size:.9rem;width:65%;text-align:right}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   #dietaryPreferences[_ngcontent-%COMP%]{background-color:#000000e6;padding:8px;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px;color:#f7e4c4;font-family:Poiret One,sans-serif;font-size:1.2rem;transition:border .5s ease}.standard-input[_ngcontent-%COMP%]{border:1px solid #FFD400}.error-input[_ngcontent-%COMP%]{border:1px solid #DC143C}textarea[_ngcontent-%COMP%]::-webkit-scrollbar{width:7px}textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#ffd400;border-radius:10px}textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#393636;border-radius:10px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border:1px solid #F7E4C4;border-radius:0;outline:none}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#ffd400;font-size:1.8rem;cursor:pointer;padding:10px 20px;border:1px solid #FFD400;font-family:Poiret One,sans-serif;background:#000000e6;margin:20px 0;text-align:center;transition:transform .3s ease,box-shadow .3s ease;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px}input[type=radio][_ngcontent-%COMP%]{display:none}.custom-radio[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.custom-radio[_ngcontent-%COMP%]   .radio-mark[_ngcontent-%COMP%]{width:20px;height:20px;background-color:#000;border:2px solid #FFD400;border-radius:50%;margin-right:10px;position:relative}input[type=radio][_ngcontent-%COMP%]:checked + .radio-mark[_ngcontent-%COMP%]{background-color:#ffd400}.custom-radio[_ngcontent-%COMP%]   .radio-mark[_ngcontent-%COMP%]:after{content:"";width:10px;height:10px;background-color:#000;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:none}input[type=radio][_ngcontent-%COMP%]:checked + .radio-mark[_ngcontent-%COMP%]:after{display:block;background-color:#000}.custom-radio[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:5px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 8px 15px #0003}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none}'],data:{animation:[R("fadeInOut",[A("in",M({opacity:1})),D("void => *",[M({opacity:0}),y("900ms 500ms",M({opacity:1}))]),D("* => void",[y("900ms",M({opacity:0}))])])]}})};function I1(i,r){if(i&1){let t=E();n(0,"app-edit",2),z("formSubmitted",function(p){v(t);let C=f();return b(C.onFormSubmitted(p))}),e()}if(i&2){let t=f();g("dish",t.dish)}}function F1(i,r){if(i&1&&(n(0,"li"),l(1),e()),i&2){let t=r.$implicit;a(),_(t)}}function L1(i,r){if(i&1&&(n(0,"p",73),l(1),e()),i&2){let t=f(4);a(),_(t.errMsg)}}function N1(i,r){if(i&1){let t=E();n(0,"button",71),z("click",function(){v(t);let p=f(3);return b(p.edit())}),l(1,"Edit"),e(),n(2,"button",72),z("click",function(){v(t);let p=f(3);return b(p.remove())}),l(3,"Remove"),e(),h(4,L1,2,1,"p",73)}if(i&2){let t=f(3);a(4),s(t.errMsg?4:-1)}}function R1(i,r){i&1&&(n(0,"div",74)(1,"span",75),d(),n(2,"svg",76)(3,"g",12),c(4,"path",77)(5,"path",78),e()()(),m(),n(6,"p",79),l(7,"You're a fan of this culinary masterpiece!"),e()())}function A1(i,r){i&1&&(n(0,"div",74)(1,"span",75),d(),n(2,"svg",76)(3,"g",12),c(4,"path",80)(5,"path",81),e()()(),m(),n(6,"p",82),l(7,"This dish wasn't a flavor match for you."),e()(),n(8,"p"),l(9,"Disliked!"),e())}function q1(i,r){if(i&1){let t=E();n(0,"div",83)(1,"div",85),z("click",function(){v(t);let p=f(5);return b(p.likedIt())}),d(),n(2,"svg",76)(3,"g",12),c(4,"path",86)(5,"path",87),e()()(),m(),n(6,"div",85),z("click",function(){v(t);let p=f(5);return b(p.dislikedIt())}),d(),n(7,"svg",76)(8,"g",12),c(9,"path",88)(10,"path",89),e()()()()}}function U1(i,r){if(i&1){let t=E();n(0,"button",90),z("click",function(){v(t);let p=f(5);return b(p.triedIt())}),l(1,"Tried it!"),n(2,"span",22),d(),n(3,"svg",91)(4,"g",12),c(5,"path",92)(6,"path",93)(7,"path",94)(8,"path",95)(9,"path",96)(10,"path",97)(11,"path",98)(12,"path",99)(13,"path",100),e()()()()}}function G1(i,r){if(i&1&&h(0,q1,11,0,"div",83)(1,U1,14,0,"button",84),i&2){let t=f(4);s(t.showReactions?0:1)}}function H1(i,r){if(i&1&&h(0,R1,8,0,"div",74)(1,A1,10,0)(2,G1,2,1),i&2){let t=f(3);s(t.hasTried=="liked"?0:t.hasTried=="disliked"?1:2)}}function j1(i,r){if(i&1&&h(0,N1,5,1)(1,H1,3,1),i&2){let t=f(2);s(t.isOwner?0:1)}}function B1(i,r){if(i&1&&(n(0,"li"),l(1),e()),i&2){let t=r.$implicit;a(),_(t)}}function Y1(i,r){if(i&1&&(n(0,"div",1)(1,"div",3)(2,"p",4),l(3,"Flavors Worth Remembering"),e(),c(4,"img",5),n(5,"div",6)(6,"p",7),l(7,"Check Reactions"),e(),n(8,"div",8)(9,"div",9)(10,"div",10),d(),n(11,"svg",11)(12,"g",12),c(13,"path",13)(14,"path",14),e()(),m(),n(15,"p",7),l(16),e()()(),n(17,"div",15)(18,"div",10),d(),n(19,"svg",11)(20,"g",12),c(21,"path",16)(22,"path",17),e()(),m(),n(23,"p",7),l(24),e()()()()()(),n(25,"div",18)(26,"div",19)(27,"h1",20),l(28),e(),n(29,"div",21)(30,"span",22),d(),n(31,"svg",23)(32,"g",12),c(33,"path",24)(34,"path",25)(35,"path",26)(36,"path",27)(37,"path",28)(38,"path",29)(39,"path",30),e()()(),m(),n(40,"h3",31),l(41),e()()(),n(42,"p",32),l(43),e(),n(44,"div",33)(45,"div",34)(46,"span"),d(),n(47,"svg",35)(48,"g",12),c(49,"path",36)(50,"path",37),e()()(),m(),n(51,"p"),l(52),e()(),n(53,"div",34)(54,"span"),d(),n(55,"svg",35)(56,"g",12),c(57,"path",38)(58,"path",39)(59,"path",40)(60,"path",41)(61,"path",42)(62,"path",43)(63,"path",44)(64,"path",45)(65,"path",46),e()()(),m(),n(66,"p"),l(67),e()(),n(68,"div",34)(69,"span"),d(),n(70,"svg",35)(71,"g",12),c(72,"path",47),e()()(),m(),n(73,"p"),l(74),e()(),n(75,"div",34)(76,"span"),d(),n(77,"svg",35)(78,"g",12),c(79,"path",48)(80,"path",49),e()()(),m(),n(81,"p"),l(82),e()()(),n(83,"div",50)(84,"div",51)(85,"h3")(86,"span"),d(),n(87,"svg",35)(88,"g",12),c(89,"path",52)(90,"path",53)(91,"path",54)(92,"path",55)(93,"path",56)(94,"path",57)(95,"path",58)(96,"path",59)(97,"path",60),e()()(),l(98,"Ingredients"),e(),m(),n(99,"ul",61),H(100,F1,2,1,"li",null,G),e(),n(102,"div",62),h(103,j1,2,1),e()(),n(104,"div",63)(105,"h3")(106,"span"),d(),n(107,"svg",35)(108,"g",12),c(109,"path",64)(110,"path",65)(111,"path",66)(112,"path",67)(113,"path",68),e()()(),l(114,"Instructions"),e(),m(),n(115,"ol",69),H(116,B1,2,1,"li",null,G),e()()(),n(118,"p",70),l(119),K(120,"date"),e()()()),i&2){let t=f();g("@fadeInOut",void 0),a(4),B("src",t.dish==null?null:t.dish.imageUrl,W),B("alt",t.dish==null?null:t.dish.dishName),a(12),_(t.likes),a(8),_(t.dislikes),a(4),_(t.dish==null?null:t.dish.dishName),a(13),_(t.dish==null||t.dish.chef==null?null:t.dish.chef.chefName),a(2),_(t.dish==null?null:t.dish.description),a(9),_(t.dish==null?null:t.dish.dietaryPreferences),a(15),L("",t.dish==null?null:t.dish.cookingTime," minutes"),a(7),L("",t.dish==null?null:t.dish.servings," servings"),a(8),_(t.dish==null?null:t.dish.cookingSkillLevel),a(18),j(t.dish==null?null:t.dish.ingredients),a(3),s(t.isLoggedIn?103:-1),a(13),j(t.dish==null?null:t.dish.instructions),a(3),L("Created ",$(120,14,t.dish==null?null:t.dish.createdAt,"fullDate"),"")}}var f1=class i{constructor(r,t,o,p){this.route=r;this.apiService=t;this.userService=o;this.router=p}dish=null;errMsg=null;showEdit=!1;showReactions=!1;likes=0;dislikes=0;currentUser=null;get isLoggedIn(){return this.userService.isLogged}ngOnInit(){let r=this.route.snapshot.params.id;this.apiService.getSingleDish(r).subscribe(t=>{this.dish=t,this.likes=this.dish.reactions.filter(o=>o.status==="liked").length,this.dislikes=this.dish.reactions.filter(o=>o.status==="disliked").length}),this.userService.getProfile().subscribe(t=>{this.currentUser=t})}get isOwner(){return this.dish?.chef?._id===this.currentUser?._id}get hasTried(){return this.dish?.reactions.find(t=>t.user.toString()==this.currentUser?._id)?.status}remove(){this.apiService.removeDish(this.dish?._id).subscribe({next:()=>{this.router.navigate(["/list"])},error:r=>{this.errMsg=r.error.message}})}edit(){this.showEdit=!this.showEdit}onFormSubmitted(r){this.showEdit=r.showEdit,this.dish=r.updatedDish}triedIt(){this.showReactions=!this.showReactions}likedIt(){let r=this.dish?._id;this.apiService.triedDish(r,this.currentUser?._id,"liked").subscribe({next:t=>{this.dish=t,this.showReactions=!1},error:t=>{this.errMsg=t.error.message}})}dislikedIt(){let r=this.dish?._id;this.apiService.triedDish(r,this.currentUser?._id,"disliked").subscribe({next:t=>{this.dish=t,this.showReactions=!1},error:t=>{this.errMsg=t.error.message}})}static \u0275fac=function(t){return new(t||i)(O(Q),O(q),O(Z),O(X))};static \u0275cmp=F({type:i,selectors:[["app-details"]],standalone:!0,features:[N],decls:2,vars:1,consts:[[3,"dish"],[1,"details-container"],[3,"formSubmitted","dish"],[1,"img-container"],[1,"motto"],[3,"src","alt"],[1,"hidden"],[1,"value"],[1,"reactions"],[1,"likes"],[1,"icon-container"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","70","height","70","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],["transform","translate(0.000000,512.000000) scale(0.100000,-0.100000)","fill","#FFD400","stroke","none"],["d",`M3533 5107 c-18 -7 -218 -154 -445 -328 -227 -173 -433 -329 -458
                                                   -346 -60 -41 -177 -164 -228 -239 -90 -133 -175 -332 -221 -517 l-28 -111 -16
                                                   49 c-25 77 -39 184 -32 245 4 30 24 93 45 140 92 205 141 387 142 522 1 108
                                                   -25 170 -88 205 -51 29 -134 39 -187 23 -88 -26 -91 -33 -291 -693 -146 -483
                                                   -151 -532 -69 -712 87 -191 121 -313 131 -478 20 -308 -50 -599 -233 -972 -76
                                                   -155 -239 -442 -269 -473 -10 -10 -35 -6 -129 18 -102 27 -122 29 -158 20 -55
                                                   -15 -84 -35 -108 -74 -23 -37 -211 -728 -211 -776 0 -45 35 -115 70 -140 30
                                                   -22 1685 -470 1735 -470 45 0 114 39 140 79 24 37 215 732 215 781 -1 41 -35
                                                   106 -71 133 -19 14 -76 37 -128 51 -51 14 -96 27 -98 30 -8 8 29 70 77 131
                                                   162 205 536 425 1024 605 76 28 164 64 196 80 156 79 305 260 391 475 51 128
                                                   49 182 -11 250 -10 12 -20 45 -24 83 -18 161 -92 344 -208 507 -35 50 -132
                                                   159 -218 246 -133 134 -166 161 -229 193 -63 31 -84 36 -142 36 -37 0 -79 -4
                                                   -94 -10 -23 -9 -25 -8 -15 9 5 11 44 50 85 89 67 61 106 85 343 207 524 270
                                                   608 318 657 377 67 79 83 185 38 246 -62 83 -164 93 -343 33 -164 -55 -471
                                                   -189 -717 -312 l-212 -106 32 41 c64 82 285 301 402 399 153 128 170 154 170
                                                   268 0 76 -3 90 -27 126 -43 65 -111 87 -185 60z m87 -126 c13 -26 13 -94 -1
                                                   -123 -6 -13 -45 -50 -87 -83 -100 -79 -335 -307 -421 -409 -251 -296 -417
                                                   -599 -471 -859 -14 -72 2 -107 50 -107 42 0 56 20 75 107 21 96 81 251 140
                                                   359 39 72 53 87 117 131 154 105 486 274 827 420 232 99 342 135 405 131 56
                                                   -3 73 -20 62 -64 -18 -69 -89 -113 -664 -408 -259 -133 -283 -147 -381 -241
                                                   -79 -75 -142 -162 -185 -257 -56 -120 -58 -165 -10 -186 14 -7 27 -12 30 -12
                                                   2 0 38 31 78 69 89 82 144 111 211 111 81 0 127 -30 281 -184 168 -168 250
                                                   -276 315 -411 59 -123 78 -193 86 -312 l6 -92 -28 -11 c-54 -21 -70 2 -209
                                                   304 -40 85 -57 110 -128 181 -91 90 -157 128 -250 145 -189 35 -442 -124 -517
                                                   -326 -95 -253 10 -525 236 -615 48 -19 77 -23 173 -23 100 0 125 3 188 26 91
                                                   33 190 91 287 169 72 58 75 60 97 44 42 -29 90 -36 146 -21 29 7 52 9 52 4 0
                                                   -20 -70 -159 -108 -214 -106 -157 -187 -215 -412 -299 -321 -119 -568 -239
                                                   -765 -370 -198 -132 -325 -258 -399 -394 l-31 -57 -190 51 c-104 28 -331 89
                                                   -502 135 -172 46 -313 87 -313 91 0 4 35 65 77 136 223 372 361 711 408 1003
                                                   22 138 23 356 1 477 -21 119 -67 264 -121 378 -51 108 -59 148 -46 241 9 63
                                                   179 639 267 907 40 120 51 130 125 108 33 -10 40 -17 49 -53 24 -87 -28 -295
                                                   -131 -531 -22 -48 -44 -119 -50 -158 -21 -134 24 -333 114 -504 38 -73 45 -80
                                                   75 -83 45 -4 60 11 67 66 48 363 173 683 338 859 34 36 112 103 172 148 61 45
                                                   269 204 464 353 195 150 362 272 372 272 10 0 23 -9 29 -19z m-102 -1941 c48
                                                   -21 141 -106 182 -165 15 -22 53 -100 85 -173 55 -127 57 -134 39 -147 -11 -7
                                                   -50 -39 -89 -70 -312 -251 -651 -189 -694 127 -17 126 23 242 114 332 53 52
                                                   137 102 198 117 43 10 112 2 165 -21z m-1893 -1849 c1131 -302 1066 -283 1083
                                                   -309 14 -21 8 -47 -78 -370 -51 -191 -97 -355 -101 -364 -5 -9 -18 -20 -30
                                                   -23 -12 -4 -265 59 -662 165 -1110 297 -1020 271 -1031 301 -7 20 11 99 83
                                                   368 51 188 95 349 98 358 7 18 42 33 63 28 8 -2 267 -71 575 -154z`],["d",`M1138 1086 c-91 -33 -139 -94 -146 -187 -17 -232 291 -324 402 -120
                                                   93 173 -73 372 -256 307z m140 -141 c63 -74 -11 -185 -104 -155 -80 27 -87
                                                   148 -10 181 35 14 89 2 114 -26z`],[1,"dislikes"],["d",`M2495 4814 c-211 -15 -369 -33 -695 -81 -344 -50 -396 -55 -630 -63
                                                   -201 -6 -265 -11 -304 -25 -102 -35 -159 -87 -205 -185 -23 -49 -26 -67 -26
                                                   -165 0 -99 3 -116 28 -169 15 -32 27 -60 27 -61 0 -2 -21 -10 -46 -19 -88 -30
                                                   -162 -102 -198 -194 -39 -100 -28 -261 24 -349 13 -22 15 -33 7 -33 -18 0
                                                   -129 -56 -152 -77 -118 -105 -151 -326 -72 -480 21 -40 21 -43 -1 -43 -33 0
                                                   -120 -51 -158 -92 -20 -22 -48 -66 -63 -97 -23 -50 -26 -68 -25 -161 0 -85 4
                                                   -116 23 -162 28 -73 94 -141 169 -176 l57 -27 495 -7 c661 -8 921 -33 1314
                                                   -125 l108 -25 -6 -36 c-8 -54 -73 -181 -197 -389 -228 -381 -313 -616 -313
                                                   -868 0 -139 21 -199 100 -284 108 -117 254 -148 387 -83 86 43 125 91 187 232
                                                   132 297 280 497 660 886 313 321 396 438 605 858 68 136 125 252 127 257 2 5
                                                   21 0 44 -11 40 -20 56 -20 627 -18 l585 3 43 30 c27 19 54 50 71 84 26 50 28
                                                   61 28 180 0 120 -1 129 -23 149 -31 29 -77 29 -105 -1 -20 -21 -22 -34 -22
                                                   -138 0 -102 -2 -118 -20 -137 l-21 -22 -549 0 -549 0 -20 26 c-20 26 -21 37
                                                   -21 433 0 396 -1 408 -20 429 -30 32 -82 30 -109 -4 -20 -26 -21 -37 -21 -414
                                                   l0 -388 -46 -109 c-120 -280 -235 -500 -373 -708 -72 -108 -119 -164 -290
                                                   -340 -460 -473 -593 -656 -770 -1053 -31 -71 -81 -105 -155 -105 -90 0 -162
                                                   59 -191 155 -19 65 -19 110 1 223 34 200 110 376 287 671 136 225 159 269 191
                                                   366 20 57 29 72 43 70 10 -1 68 -27 129 -58 117 -59 135 -61 169 -24 22 24 22
                                                   76 1 99 -22 24 -176 103 -261 134 -394 145 -780 194 -1580 203 -531 6 -539 7
                                                   -594 69 -48 55 -64 144 -40 230 16 56 44 92 92 118 41 21 52 22 392 25 193 1
                                                   360 5 373 7 31 7 53 59 40 95 -15 46 -41 50 -291 50 -138 0 -248 5 -272 11
                                                   -51 14 -110 73 -124 124 -24 89 -9 184 40 239 51 59 91 66 359 66 221 0 239 1
                                                   262 20 33 25 39 49 22 88 -16 39 -24 40 -199 44 -127 3 -144 6 -185 28 -134
                                                   75 -131 314 4 388 26 14 70 18 274 22 l244 5 24 28 c29 34 30 56 4 89 -19 24
                                                   -25 26 -153 30 -159 5 -211 24 -255 91 -24 37 -27 50 -27 132 0 82 3 95 27
                                                   132 17 26 44 49 75 64 45 22 64 24 298 30 229 6 279 11 595 58 190 28 413 58
                                                   495 67 197 21 449 21 587 0 213 -33 499 -128 693 -229 l80 -42 5 -285 c3 -157
                                                   9 -293 13 -302 21 -41 114 -37 131 7 3 9 6 158 6 331 l0 315 25 24 24 25 541
                                                   0 541 0 24 -25 25 -24 0 -611 c0 -380 4 -618 10 -630 23 -43 116 -40 134 5 3
                                                   9 6 291 6 627 0 452 -3 621 -12 652 -17 57 -90 128 -148 144 -34 10 -180 12
                                                   -600 10 -550 -3 -555 -3 -596 -25 -23 -12 -53 -36 -67 -53 l-26 -31 -98 47
                                                   c-309 147 -610 225 -913 237 -63 2 -137 3 -165 1z`],["d",`M4318 4330 c-48 -14 -94 -49 -124 -92 -26 -37 -29 -49 -29 -124 0
                                                   -75 3 -86 30 -126 55 -79 161 -115 256 -87 124 38 188 193 129 315 -45 93
                                                   -163 144 -262 114z m106 -162 c53 -48 25 -128 -44 -128 -67 0 -96 88 -44 129
                                                   34 27 57 26 88 -1z`],[1,"info-container"],[1,"title-container"],[1,"title"],[1,"chef-container"],[1,"icon"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","40","height","40","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],["d",`M2419 5105 c-149 -30 -280 -105 -384 -217 l-65 -70 -44 11 c-64 16
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
                       31 -111 -1z`],[1,"chef-name"],[1,"description"],[1,"tabs-container"],[1,"tab-container"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","30","height","30","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],["d",`M791 5004 c-20 -25 -21 -39 -21 -280 l0 -254 -255 -340 -255 -340 0
                       -938 0 -937 -49 -43 c-33 -28 -61 -65 -83 -109 -28 -58 -34 -80 -36 -155 -4
                       -81 -2 -93 27 -154 50 -107 191 -226 333 -282 21 -8 38 -18 38 -21 0 -3 -28
                       -24 -61 -46 -77 -51 -140 -120 -176 -193 -24 -49 -28 -69 -28 -142 0 -73 4
                       -92 27 -135 65 -123 230 -225 363 -225 162 0 381 129 624 368 l119 117 17 -62
                       c19 -70 70 -161 118 -211 119 -125 390 -248 729 -331 331 -81 907 -161 1385
                       -192 246 -15 745 -7 871 15 327 57 446 185 350 376 -38 78 -164 207 -291 300
                       -49 36 -98 72 -109 80 -19 15 -17 17 50 63 144 99 315 302 407 486 52 104 111
                       288 131 410 24 148 15 422 -19 576 -105 471 -343 763 -677 831 -143 28 -292 7
                       -464 -67 -50 -21 -90 -37 -91 -36 0 1 -9 43 -18 92 -10 50 -49 182 -87 295
                       -71 211 -90 288 -90 372 0 70 26 185 60 268 l29 71 -75 37 c-87 43 -79 48
                       -125 -78 -84 -229 -78 -389 26 -687 30 -87 64 -189 75 -228 22 -80 43 -246 32
                       -257 -4 -4 -45 18 -92 48 -149 97 -289 154 -430 175 l-79 11 -3 267 -3 268
                       -257 343 -258 343 0 257 c0 255 0 257 -23 278 l-23 22 -806 0 -807 0 -20 -26z
                       m1509 -314 l0 -170 -680 0 -680 0 0 170 0 170 680 0 680 0 0 -170z m-92 -349
                       c-1 -4 -86 -119 -188 -255 l-185 -246 -658 0 c-362 0 -657 4 -655 9 2 4 86
                       119 188 255 l185 246 658 0 c362 0 657 -4 655 -9z m355 -276 l167 -225 -341 0
                       -341 0 29 38 c153 208 309 412 313 412 3 -1 80 -102 173 -225z m-773 -650 l0
                       -255 -680 0 -680 0 0 255 0 255 680 0 680 0 0 -255z m1030 35 l0 -219 -42 -12
                       c-187 -50 -368 -220 -487 -457 -104 -207 -171 -550 -155 -789 l7 -96 -39 6
                       c-21 4 -63 7 -91 7 l-53 0 0 890 0 890 430 0 430 0 0 -220z m327 -401 c92 -28
                       224 -98 324 -170 45 -32 86 -59 91 -59 13 0 9 -30 -15 -102 l-22 -68 -50 23
                       c-28 13 -65 41 -83 61 l-33 37 -66 -38 c-36 -21 -68 -44 -71 -51 -7 -21 118
                       -136 180 -165 166 -78 376 -36 497 100 28 31 51 60 51 65 0 4 -31 26 -70 48
                       l-70 41 -40 -42 c-22 -23 -42 -40 -44 -38 -2 2 5 45 15 94 10 50 19 101 19
                       116 0 21 12 32 73 66 40 23 115 56 167 74 122 41 259 46 353 11 297 -108 507
                       -517 507 -987 0 -265 -70 -496 -215 -715 -89 -133 -242 -278 -356 -336 l-46
                       -23 -69 42 c-507 312 -1315 679 -1733 788 -63 16 -116 31 -118 33 -14 14 -21
                       198 -12 310 37 478 256 834 553 902 77 17 193 10 283 -17z m-1357 -628 l0
                       -569 -56 -32 c-31 -17 -75 -49 -99 -71 l-43 -40 -12 58 c-25 127 -81 323 -118
                       415 -74 185 -160 296 -270 350 -64 32 -71 33 -187 33 -111 0 -124 -2 -177 -28
                       -70 -34 -131 -101 -158 -173 -36 -97 -21 -243 36 -355 13 -27 24 -50 24 -52 0
                       -2 -21 0 -47 4 -27 4 -94 8 -150 8 l-103 1 0 510 0 510 680 0 680 0 0 -569z
                       m-695 -32 c108 -29 215 -229 295 -546 26 -106 60 -304 60 -354 0 -56 -76 -306
                       -104 -343 -13 -17 -64 -76 -113 -131 -208 -231 -455 -413 -586 -431 -83 -12
                       -203 51 -242 127 -61 116 62 254 312 349 45 17 87 38 95 47 18 22 16 89 -3
                       108 -9 9 -69 34 -134 56 -215 73 -364 167 -401 254 -33 80 -4 185 63 229 84
                       55 244 59 448 10 170 -41 170 -41 205 -6 17 17 30 41 30 54 0 14 -30 66 -68
                       119 -88 123 -124 204 -129 289 -5 81 15 125 72 157 45 26 132 31 200 12z
                       m1132 -694 c85 -16 304 -73 321 -84 9 -5 -17 -108 -93 -371 -66 -228 -102
                       -366 -95 -370 14 -9 150 -43 153 -39 2 2 49 164 105 358 57 195 104 356 106
                       358 5 5 250 -95 421 -172 283 -127 921 -459 969 -505 4 -5 -11 -74 -34 -154
                       -24 -81 -40 -149 -37 -152 3 -3 39 -16 81 -29 l75 -23 15 51 c8 29 25 87 37
                       129 l22 77 59 -40 c108 -74 257 -200 303 -256 58 -71 66 -100 34 -124 -29 -22
                       -139 -54 -244 -71 -120 -19 -780 -16 -999 5 -92 9 -170 18 -172 20 -2 2 14 66
                       37 141 22 76 39 139 37 141 -9 9 -150 45 -157 41 -4 -3 -27 -73 -51 -156 -32
                       -113 -47 -150 -59 -150 -32 0 -429 61 -561 86 -427 81 -745 199 -870 324 -75
                       75 -100 138 -100 256 0 97 19 198 62 334 80 252 175 360 339 389 63 11 194 5
                       296 -14z`],["d",`M3940 3996 c-100 -28 -189 -93 -242 -175 -15 -25 -28 -54 -28 -66 0
                       -30 49 -103 100 -149 23 -21 72 -52 109 -70 61 -29 74 -31 172 -31 101 0 108
                       1 181 38 54 26 92 54 132 97 70 76 79 112 43 173 -88 150 -294 231 -467 183z
                       m193 -170 c20 -8 53 -26 73 -41 34 -26 35 -27 17 -47 -38 -42 -94 -63 -173
                       -63 -79 0 -135 21 -173 63 -18 20 -17 21 17 47 47 36 100 54 156 54 25 0 62
                       -6 83 -13z`],["d",`M2370 5113 c-559 -53 -1006 -230 -1417 -562 -514 -413 -842 -1000
                       -934 -1671 -18 -125 -18 -515 0 -640 80 -582 327 -1083 732 -1489 729 -728
                       1808 -948 2769 -564 475 190 895 536 1186 979 283 429 431 961 411 1479 -21
                       540 -187 1008 -523 1473 l-16 22 86 0 c97 0 135 13 154 55 25 55 11 105 -38
                       130 -23 12 -72 15 -244 15 l-216 0 -32 -29 -33 -29 0 -230 c0 -230 0 -230 24
                       -256 29 -31 80 -42 112 -26 46 24 59 50 59 125 l1 70 29 -35 c42 -50 173 -271
                       216 -365 96 -209 166 -443 200 -670 14 -88 18 -178 18 -335 0 -244 -15 -371
                       -69 -585 -104 -408 -315 -775 -620 -1080 -305 -306 -671 -516 -1080 -620 -213
                       -54 -341 -69 -585 -69 -237 0 -355 13 -565 64 -421 103 -834 341 -1130 651
                       -349 365 -563 800 -641 1299 -25 161 -25 519 0 680 20 133 72 341 111 450 271
                       751 910 1323 1679 1505 231 55 480 72 794 55 l94 -5 29 33 c42 47 35 113 -17
                       147 -40 26 -379 44 -544 28z`],["d",`M3188 4991 c-27 -24 -33 -36 -33 -69 0 -50 33 -89 81 -98 93 -17 153
                       99 85 167 -40 40 -89 40 -133 0z`],["d",`M2338 4456 c-263 -34 -520 -119 -728 -241 -91 -53 -110 -75 -110
                       -123 0 -44 14 -68 50 -87 40 -21 58 -19 110 10 208 116 381 184 580 226 141
                       31 475 34 615 6 458 -91 836 -333 1099 -701 226 -317 342 -736 308 -1117 -13
                       -142 -50 -322 -89 -434 -40 -115 -149 -323 -221 -425 -86 -122 -281 -316 -401
                       -401 -408 -287 -920 -385 -1396 -268 -895 221 -1450 1103 -1265 2010 37 180
                       114 379 205 528 44 73 45 109 6 153 -24 27 -36 33 -70 32 -52 -2 -69 -17 -125
                       -113 -193 -329 -284 -750 -245 -1132 46 -462 244 -870 576 -1190 288 -276 607
                       -438 1009 -510 174 -31 449 -31 629 0 417 73 767 258 1056 558 277 288 440
                       612 510 1009 32 182 32 446 0 628 -70 397 -233 721 -510 1009 -286 297 -646
                       488 -1051 558 -150 26 -400 33 -542 15z`],["d",`M2504 4062 c-36 -28 -44 -57 -44 -147 0 -86 1 -88 34 -121 38 -38 70
                       -43 116 -19 43 22 50 43 50 150 0 93 -1 98 -29 126 -35 34 -93 39 -127 11z`],["d",`M1214 3906 c-37 -37 -43 -70 -20 -115 15 -28 53 -51 86 -51 51 0 100
                       49 100 99 0 34 -23 72 -51 87 -45 23 -78 17 -115 -20z`],["d",`M3435 3564 c-16 -8 -184 -168 -371 -356 l-342 -341 -48 17 c-61 21
                       -167 21 -228 0 l-48 -17 -172 171 c-94 93 -181 175 -193 181 -85 43 -175 -47
                       -132 -132 6 -12 88 -99 181 -193 l171 -172 -17 -48 c-42 -124 -10 -262 83
                       -355 97 -97 237 -126 368 -77 79 29 162 112 191 191 27 70 29 173 6 241 l-17
                       48 350 351 c232 233 353 361 357 379 10 43 -17 96 -58 113 -43 18 -44 18 -81
                       -1z m-798 -884 c87 -52 83 -198 -6 -245 -98 -50 -211 16 -211 123 0 85 56 142
                       140 142 27 0 58 -8 77 -20z`],["d",`M1069 2631 c-38 -39 -40 -96 -5 -134 31 -34 58 -40 157 -35 77 3 82
                       5 110 36 32 36 36 69 14 112 -22 43 -43 50 -150 50 -93 0 -98 -1 -126 -29z`],["d",`M3793 2625 c-32 -32 -35 -39 -30 -78 4 -28 14 -49 32 -64 23 -21 37
                       -23 126 -23 98 0 101 1 130 29 49 49 35 128 -28 160 -12 6 -61 11 -108 11 -86
                       0 -87 0 -122 -35z`],["d",`M2514 1350 c-43 -17 -54 -48 -54 -153 0 -96 1 -99 29 -128 49 -49
                       128 -35 160 28 6 12 11 61 11 108 0 86 -1 88 -34 121 -35 35 -68 42 -112 24z`],["d",`M2470 4904 c-130 -22 -175 -38 -218 -78 -60 -54 -70 -144 -28 -248
                       16 -40 20 -60 13 -63 -7 -1 -61 -13 -122 -25 -544 -107 -1062 -461 -1369 -935
                       -189 -292 -312 -639 -341 -967 l-7 -78 -89 0 c-135 0 -183 -14 -239 -69 -57
                       -55 -70 -93 -70 -207 0 -107 32 -174 105 -219 l48 -30 434 -5 434 -5 -51 -39
                       c-29 -22 -132 -137 -231 -257 -99 -120 -183 -220 -187 -223 -4 -2 -29 2 -56
                       11 -40 13 -56 14 -102 4 -30 -7 -68 -24 -84 -37 -34 -29 -175 -230 -201 -289
                       -43 -93 -8 -195 89 -262 250 -175 953 -647 980 -659 72 -30 170 -7 226 52 14
                       16 62 83 106 149 87 132 101 176 80 253 -6 24 -28 61 -48 84 l-37 41 40 34
                       c59 52 115 82 197 106 105 32 375 31 613 -2 272 -37 420 -24 744 65 295 82
                       437 142 588 251 127 91 578 498 599 540 13 27 19 60 18 111 l0 72 322 0 322 0
                       53 28 c81 42 113 100 117 212 5 119 -9 164 -68 221 -57 55 -104 69 -239 69
                       l-89 0 -7 78 c-10 110 -41 270 -76 392 -38 130 -105 299 -130 324 -23 24 -73
                       25 -99 1 -30 -27 -25 -71 19 -176 67 -163 120 -374 137 -546 l7 -73 -1733 -2
                       -1732 -3 -19 -24 c-26 -32 -24 -73 4 -99 l23 -22 1908 -2 1908 -3 19 -24 c14
                       -18 19 -39 19 -90 0 -58 -3 -71 -23 -89 l-23 -22 -2365 0 -2366 0 -21 23 c-30
                       32 -32 143 -3 178 l19 24 321 3 320 3 21 26 c23 30 24 42 9 77 -17 36 -57 46
                       -192 46 l-119 0 6 68 c46 460 250 887 586 1222 663 663 1689 778 2491 280 194
                       -120 397 -306 538 -493 47 -61 83 -100 98 -103 52 -14 102 37 89 89 -17 71
                       -265 346 -431 480 -269 217 -596 373 -920 437 -60 12 -115 24 -122 25 -7 3 -3
                       23 13 63 64 159 13 265 -151 308 -51 14 -231 26 -275 18z m255 -167 c34 -12
                       40 -19 43 -45 4 -35 -19 -84 -56 -124 -25 -28 -27 -28 -152 -28 -125 0 -127 0
                       -152 28 -35 37 -58 85 -58 122 0 33 16 43 95 60 56 13 232 4 280 -13z m-877
                       -2848 c161 -43 309 -79 327 -79 19 0 175 29 347 65 171 36 324 65 340 65 73 0
                       122 -65 99 -132 -14 -39 -22 -45 -169 -124 -67 -36 -127 -74 -132 -84 -17 -31
                       -11 -60 16 -87 l25 -25 192 5 192 5 231 69 232 69 253 166 c140 92 266 170
                       281 173 36 9 78 -31 78 -74 0 -39 -3 -42 -271 -278 -254 -224 -319 -274 -444
                       -338 -118 -60 -394 -146 -630 -196 -94 -20 -359 -17 -495 6 -170 28 -494 27
                       -602 -3 -121 -33 -204 -80 -303 -173 l-40 -37 -352 240 -352 239 166 202 c91
                       111 179 215 197 230 131 119 317 193 456 181 36 -3 197 -41 358 -85z m392 81
                       c-33 -11 -90 -11 -115 0 -13 6 7 8 60 8 55 0 72 -3 55 -8z m1549 5 c-3 -2 -73
                       -49 -155 -103 l-151 -99 -211 -62 c-117 -33 -216 -61 -222 -61 -6 0 3 18 19
                       41 42 57 58 134 42 204 -7 30 -17 57 -22 60 -33 21 20 25 348 25 196 0 354 -2
                       352 -5z m-3212 -731 c770 -522 863 -587 869 -611 5 -19 -8 -46 -61 -126 -82
                       -125 -102 -147 -130 -147 -20 0 -938 613 -992 663 -13 11 -23 30 -23 41 0 22
                       129 219 162 249 11 9 26 17 34 17 8 0 71 -39 141 -86z`],["d",`M2435 5106 c-265 -42 -498 -191 -646 -414 l-52 -80 -128 6 c-144 5
                       -242 -7 -351 -44 -338 -115 -577 -388 -643 -736 -55 -291 35 -603 237 -823
                       148 -160 364 -276 561 -300 l57 -7 0 -412 c0 -457 3 -485 62 -552 17 -19 50
                       -45 72 -57 41 -22 45 -22 647 -25 569 -2 607 -1 627 15 32 26 38 73 14 103
                       l-20 25 -601 5 -600 5 -23 23 c-20 20 -23 34 -26 127 l-4 105 956 0 956 0 0
                       -90 c0 -102 -15 -145 -56 -160 -14 -6 -108 -10 -209 -10 -101 0 -191 -3 -200
                       -6 -28 -11 -46 -58 -34 -92 16 -47 41 -52 257 -52 177 0 202 3 242 21 55 25
                       95 62 123 114 21 39 22 51 25 476 l3 437 61 6 c137 16 309 88 435 183 442 332
                       513 958 156 1387 -92 111 -237 216 -374 269 -135 54 -174 60 -356 62 l-173 2
                       -50 77 c-201 308 -573 469 -945 412z m345 -162 c36 -8 112 -38 169 -66 90 -44
                       117 -64 196 -142 154 -152 225 -302 245 -521 7 -74 13 -93 31 -107 28 -24 74
                       -23 99 2 32 32 26 148 -17 339 l-6 24 124 -6 c187 -9 321 -57 469 -169 137
                       -103 250 -270 297 -438 27 -101 25 -311 -6 -410 -83 -270 -287 -476 -556 -560
                       -150 -47 -365 -37 -530 25 -58 22 -70 24 -93 13 -39 -19 -57 -61 -40 -95 21
                       -44 140 -92 290 -117 l73 -12 3 -242 2 -242 -190 0 -190 0 0 130 c0 126 -1
                       132 -25 155 -30 31 -71 32 -102 3 -22 -20 -23 -28 -23 -155 l0 -133 -182 2
                       -183 3 -5 138 c-4 122 -7 140 -24 153 -23 16 -60 18 -86 4 -29 -16 -40 -66
                       -40 -186 l0 -114 -180 0 -180 0 0 132 c0 121 -2 134 -22 155 -30 33 -80 31
                       -107 -3 -19 -24 -21 -40 -21 -155 l0 -129 -175 0 -175 0 2 242 3 243 58 7
                       c144 18 293 75 315 121 17 34 -1 76 -40 95 -23 11 -35 9 -93 -13 -171 -64
                       -382 -73 -540 -21 -263 86 -464 290 -546 556 -31 99 -33 309 -6 410 77 278
                       298 500 579 581 77 22 318 39 318 23 0 -5 -9 -52 -20 -104 -27 -128 -27 -223
                       0 -250 26 -26 81 -26 105 0 12 14 20 46 26 107 19 205 87 358 217 496 126 131
                       292 218 477 248 70 11 228 3 305 -17z`],["d",`M961 1855 c-26 -34 -27 -55 -1 -87 10 -14 151 -100 312 -193 161 -92
                       306 -181 322 -198 23 -24 27 -36 23 -62 -5 -30 -93 -195 -104 -195 -3 0 -157
                       87 -342 194 -185 107 -347 197 -361 201 -38 9 -80 -27 -80 -69 0 -18 6 -40 13
                       -49 6 -9 165 -105 352 -213 187 -108 341 -197 342 -198 1 -1 -20 -40 -47 -86
                       -55 -95 -80 -120 -119 -120 -16 0 -149 71 -341 182 -199 114 -325 181 -342
                       181 -60 0 -91 -75 -50 -121 17 -19 499 -300 619 -361 107 -54 195 -39 281 46
                       l54 53 332 -191 332 -192 -20 -60 c-17 -52 -18 -67 -8 -115 21 -101 90 -171
                       190 -193 70 -15 121 -2 222 56 l77 45 94 -53 c86 -48 99 -52 159 -52 99 0 175
                       48 223 139 26 52 28 147 3 194 -10 19 -16 35 -14 36 2 2 65 38 140 80 172 96
                       193 122 147 180 -35 45 -68 36 -249 -64 l-162 -91 -66 37 c-37 21 -79 45 -95
                       54 l-27 17 444 257 c244 141 449 262 454 269 6 6 15 45 20 85 7 45 20 89 36
                       116 108 185 444 294 617 200 73 -40 102 -88 107 -176 4 -64 1 -75 -32 -144
                       -59 -119 -192 -237 -318 -281 -24 -9 -75 -18 -114 -21 -63 -4 -79 -1 -129 22
                       -32 14 -67 26 -78 26 -28 0 -284 -147 -303 -174 -7 -11 -14 -31 -14 -44 0 -29
                       42 -72 71 -72 12 0 73 29 135 65 l113 65 43 -17 c65 -27 243 -24 323 6 143 52
                       282 162 365 289 62 94 90 180 90 273 0 210 -147 351 -380 366 -197 13 -398
                       -64 -540 -207 -79 -79 -111 -132 -131 -215 -6 -27 -14 -56 -18 -64 -7 -14
                       -869 -518 -903 -528 -10 -3 -192 96 -455 247 -241 139 -439 254 -441 255 -1 1
                       7 22 18 46 34 77 22 168 -33 240 -35 47 -645 402 -698 407 -30 3 -40 -1 -58
                       -23z m1299 -1148 c609 -351 668 -386 689 -410 33 -40 3 -122 -53 -141 -20 -8
                       -36 -5 -69 11 -36 18 -1167 667 -1239 712 l-27 16 45 78 c35 61 49 77 62 72 9
                       -3 276 -155 592 -338z m196 -508 c9 -14 -81 -53 -107 -46 -56 14 -92 77 -71
                       122 l11 24 81 -46 c44 -25 83 -49 86 -54z`],[1,"steps-container"],[1,"ingredients-container"],["d",`M3907 4929 c-161 -38 -286 -181 -310 -356 -10 -69 -19 -92 -37 -93
                       -3 0 -34 38 -69 85 -185 250 -447 387 -676 356 -210 -30 -373 -144 -480 -336
                       -64 -116 -109 -164 -192 -206 -65 -33 -70 -34 -187 -34 l-121 0 -145 72 c-210
                       104 -251 117 -390 117 -105 1 -120 -1 -172 -26 -32 -15 -77 -40 -102 -57 -30
                       -21 -57 -31 -81 -31 -109 0 -196 -106 -253 -309 -12 -40 -23 -75 -25 -77 -2
                       -2 -14 33 -26 78 -45 162 -143 464 -164 501 -36 65 -101 84 -165 50 -17 -10
                       -93 -71 -167 -136 -107 -94 -136 -125 -140 -151 -5 -22 4 -64 30 -140 74 -220
                       161 -613 260 -1166 25 -139 45 -261 45 -270 0 -14 -13 -19 -62 -24 -111 -11
                       -207 -78 -252 -175 -20 -44 -21 -61 -21 -322 l0 -275 33 -65 33 -66 -25 -37
                       c-41 -61 -48 -119 -44 -387 l3 -245 33 -66 33 -65 -25 -37 c-41 -61 -48 -119
                       -44 -386 3 -231 4 -248 26 -295 29 -63 73 -109 137 -143 l50 -27 2345 0 2345
                       0 50 27 c64 34 108 80 137 143 22 47 23 64 26 295 4 267 -3 325 -44 386 l-25
                       37 33 65 33 66 3 245 c4 268 -3 326 -44 387 l-25 37 33 66 33 65 0 275 0 276
                       -29 58 c-19 40 -43 70 -77 95 -31 24 -46 42 -43 52 16 45 34 153 33 205 0 138
                       -62 285 -166 395 l-65 69 25 33 c49 65 78 138 87 216 4 42 13 78 18 80 28 9
                       95 67 131 112 62 78 85 148 85 255 0 70 -5 103 -23 148 -29 73 -89 149 -150
                       189 -47 32 -47 32 -59 110 -22 150 -99 261 -226 324 -122 60 -274 57 -384 -7
                       -34 -19 -34 -19 -65 0 -74 45 -205 63 -300 40z m188 -208 c22 -10 46 -26 54
                       -35 20 -24 65 -46 94 -46 14 0 49 18 78 40 66 49 108 64 169 58 67 -7 120 -37
                       156 -90 37 -55 48 -110 33 -177 -16 -75 -1 -97 96 -146 66 -33 84 -48 109 -88
                       41 -67 46 -129 13 -200 -27 -60 -67 -94 -138 -121 -68 -25 -83 -46 -80 -109 7
                       -108 3 -147 -21 -189 -30 -55 -93 -99 -151 -105 l-46 -5 -11 43 c-18 65 -53
                       128 -101 183 l-43 49 55 52 c31 28 78 64 105 79 64 37 84 63 84 109 0 50 -43
                       97 -90 97 -50 0 -146 -58 -235 -141 -80 -76 -81 -77 -109 -62 -19 10 -26 19
                       -21 31 43 111 61 291 36 355 -15 38 -70 63 -112 51 -52 -15 -70 -49 -74 -142
                       -2 -45 -12 -109 -21 -142 -15 -54 -19 -60 -37 -54 -66 21 -202 20 -273 -1 -18
                       -6 -24 0 -38 34 -45 114 2 216 130 276 90 43 109 73 93 146 -25 109 39 229
                       139 259 46 14 115 10 157 -9z m-1163 -1 c161 -23 321 -146 453 -347 l28 -43
                       -24 -52 c-19 -44 -23 -70 -24 -153 0 -89 3 -107 28 -160 l28 -59 -60 -58 c-70
                       -68 -129 -143 -201 -255 -28 -46 -55 -83 -60 -83 -4 0 -19 17 -33 39 -63 96
                       -202 222 -318 291 l-57 33 23 67 c12 36 42 103 65 148 35 67 41 87 36 116 -12
                       65 -98 99 -153 61 -26 -19 -82 -118 -117 -210 -49 -127 -35 -115 -113 -98
                       -108 23 -333 13 -444 -20 -448 -134 -738 -536 -716 -987 4 -63 9 -127 13 -142
                       l6 -28 -81 0 -81 0 0 308 c1 318 11 550 32 710 14 111 18 114 123 114 52 0 86
                       -6 120 -21 68 -30 110 -28 146 8 60 61 28 136 -78 180 -59 24 -173 43 -213 34
                       -27 -5 -27 -5 -22 45 4 47 2 52 -37 95 -22 24 -41 47 -41 50 0 3 21 12 47 21
                       102 35 202 12 403 -90 146 -75 223 -96 340 -97 111 0 188 17 280 60 102 49
                       208 156 270 272 82 155 184 228 360 260 3 0 35 -4 72 -9z m-2542 -467 c140
                       -442 218 -869 254 -1395 l6 -78 -49 0 c-59 0 -52 -16 -86 190 -83 499 -192
                       1011 -267 1255 l-30 99 53 48 c30 26 57 48 60 48 3 0 29 -75 59 -167z m601
                       -79 l37 -36 -14 -51 c-55 -204 -75 -426 -81 -894 l-5 -413 -38 0 -38 0 -6 78
                       c-18 224 -39 425 -56 542 l-20 130 45 223 c24 122 53 251 63 287 22 73 61 170
                       70 170 4 0 23 -16 43 -36z m2874 -361 c67 -21 136 -56 221 -114 154 -104 202
                       -205 175 -363 -14 -77 -59 -206 -73 -206 -5 0 -44 20 -87 45 -92 53 -138 59
                       -176 21 -66 -66 -39 -128 88 -200 48 -28 87 -53 87 -56 0 -3 -20 -40 -45 -83
                       l-45 -77 -530 0 c-292 0 -530 2 -530 5 0 6 120 247 126 254 1 2 32 -13 68 -33
                       40 -22 78 -36 100 -36 49 0 86 34 93 85 7 52 -17 82 -102 129 l-64 36 56 98
                       c78 136 182 292 194 292 6 0 41 -18 78 -40 37 -22 80 -40 95 -40 76 0 125 74
                       92 139 -9 17 -39 45 -66 62 -28 17 -48 35 -44 40 10 16 84 50 127 58 50 9 94
                       5 162 -16z m-1420 -63 c212 -54 400 -200 499 -390 l36 -67 -128 -256 -127
                       -256 -615 2 -614 2 -13 60 c-73 355 144 745 489 877 136 52 331 63 473 28z
                       m2197 -480 c73 -65 124 -144 145 -224 15 -54 15 -76 6 -138 -6 -40 -16 -85
                       -22 -100 l-11 -28 -259 0 -260 0 44 80 c81 146 144 296 165 397 l11 52 47 4
                       c26 2 54 4 63 5 8 1 40 -20 71 -48z m249 -728 l29 -32 0 -226 c0 -234 -3 -253
                       -44 -286 -20 -17 -156 -18 -2316 -18 -2160 0 -2296 1 -2316 18 -41 33 -44 52
                       -44 285 0 214 1 226 21 251 12 15 31 32 43 36 11 5 1051 8 2309 7 l2289 -2 29
                       -33z m0 -800 l29 -32 0 -226 c0 -234 -3 -253 -44 -286 -20 -17 -156 -18 -2316
                       -18 -2160 0 -2296 1 -2316 18 -41 33 -44 52 -44 285 0 214 1 226 21 251 12 15
                       31 32 43 36 11 5 1051 8 2309 7 l2289 -2 29 -33z m0 -800 l29 -32 0 -226 c0
                       -234 -3 -253 -44 -286 -20 -17 -156 -18 -2316 -18 -2160 0 -2296 1 -2316 18
                       -41 33 -44 52 -44 285 0 214 1 226 21 251 12 15 31 32 43 36 11 5 1051 8 2309
                       7 l2289 -2 29 -33z`],["d",`M2881 4459 c-50 -49 -35 -132 28 -159 99 -40 187 86 112 161 -42 41
                       -98 41 -140 -2z`],["d",`M3675 3335 c-38 -37 -37 -96 3 -137 20 -22 35 -28 68 -28 35 0 47 5
                       68 31 17 19 26 43 26 64 0 21 -9 45 -26 64 -22 26 -33 31 -70 31 -34 0 -51 -6
                       -69 -25z`],["d",`M580 2373 c-78 -30 -90 -142 -19 -178 103 -54 199 75 116 154 -24 22
                       -72 34 -97 24z`],["d",`M4480 2373 c-78 -30 -90 -142 -19 -178 103 -54 199 75 116 154 -24
                       22 -72 34 -97 24z`],["d",`M580 1573 c-78 -30 -90 -142 -19 -178 103 -54 199 75 116 154 -24 22
                       -72 34 -97 24z`],["d",`M4480 1573 c-78 -30 -90 -142 -19 -178 103 -54 199 75 116 154 -24
                       22 -72 34 -97 24z`],["d",`M580 773 c-78 -30 -90 -142 -19 -178 103 -54 199 75 116 154 -24 22
                       -72 34 -97 24z`],["d",`M4480 773 c-78 -30 -90 -142 -19 -178 103 -54 199 75 116 154 -24 22
                       -72 34 -97 24z`],[1,"ingredients-list"],[1,"buttons"],[1,"instructions-container"],["d",`M523 5002 c-91 -32 -155 -97 -182 -182 -11 -34 -12 -35 -64 -36 -153
                       -4 -271 -129 -271 -289 -1 -113 56 -205 159 -258 54 -27 167 -35 217 -14 l36
                       15 88 -124 c79 -111 88 -128 85 -163 -4 -64 19 -238 45 -339 89 -342 276 -581
                       531 -679 146 -55 335 -39 444 39 248 177 262 556 32 863 -150 200 -437 413
                       -618 459 -48 12 -53 17 -128 119 l-78 107 25 33 c54 71 72 178 45 267 -44 145
                       -222 233 -366 182z m144 -147 c50 -20 83 -69 83 -124 0 -53 -12 -75 -68 -128
                       -58 -54 -55 -71 38 -200 64 -89 69 -99 53 -110 -51 -34 -93 -70 -104 -90 -7
                       -13 -15 -23 -19 -23 -4 0 -42 49 -85 109 -95 135 -109 142 -191 99 -77 -41
                       -133 -36 -181 16 -37 41 -48 72 -39 120 9 48 39 82 91 102 43 16 46 16 103 -5
                       96 -36 132 -10 132 97 0 66 19 99 74 133 38 23 64 24 113 4z m375 -724 c124
                       -48 324 -200 434 -328 122 -144 176 -270 177 -418 1 -122 -20 -183 -87 -250
                       -106 -107 -256 -115 -429 -23 -217 116 -389 468 -389 798 -1 131 14 183 65
                       226 28 24 37 26 101 22 40 -3 96 -15 128 -27z`],["d",`M1770 4921 c-90 -29 -165 -95 -202 -176 -17 -38 -23 -68 -22 -125 0
                       -95 28 -162 93 -223 154 -144 399 -99 493 91 33 67 33 197 0 264 -30 60 -90
                       120 -150 150 -50 24 -164 35 -212 19z m168 -168 c92 -68 97 -185 12 -256 -113
                       -96 -284 10 -256 158 8 42 49 93 91 111 40 19 119 12 153 -13z`],["d",`M3254 4438 c-16 -12 -71 -58 -121 -101 l-92 -78 -77 37 c-71 35 -82
                       38 -168 39 -87 0 -96 -2 -168 -38 -54 -26 -90 -53 -121 -88 -41 -47 -47 -50
                       -113 -60 -191 -30 -348 -180 -394 -378 -17 -71 -8 -191 19 -261 31 -81 111
                       -182 183 -230 91 -60 178 -84 293 -78 83 5 101 9 176 46 130 63 206 148 251
                       277 20 60 29 73 62 91 63 35 124 102 158 173 31 61 33 72 33 166 -1 74 -5 108
                       -18 132 -9 18 -17 38 -17 46 0 8 52 59 116 113 115 97 139 128 127 161 -20 56
                       -78 70 -129 31z m-385 -261 c19 -7 36 -16 37 -22 1 -5 -83 -82 -188 -170 -289
                       -243 -288 -241 -288 -280 0 -24 7 -39 26 -54 53 -42 43 -48 349 212 230 196
                       221 193 224 93 3 -98 -51 -177 -154 -225 -46 -22 -66 -37 -70 -53 -3 -13 -10
                       -45 -15 -73 -21 -96 -93 -185 -185 -227 -40 -18 -67 -23 -140 -23 -78 0 -97 4
                       -140 27 -62 32 -129 103 -158 166 -31 67 -30 188 1 256 58 126 154 191 301
                       203 l83 6 34 53 c66 104 178 148 283 111z`],["d",`M350 3257 c-186 -52 -283 -264 -199 -432 151 -302 608 -185 587 150
                       -13 197 -202 335 -388 282z m176 -172 c122 -93 56 -285 -98 -285 -50 0 -97 26
                       -132 73 -31 42 -29 130 3 176 52 73 157 90 227 36z`],["d",`M3462 3103 c-650 -124 -2541 -506 -2558 -518 -18 -12 -24 -24 -24
                       -54 0 -47 28 -75 73 -74 18 1 601 114 1297 252 1066 212 1266 249 1278 237 20
                       -20 28 -226 12 -323 -16 -102 -60 -221 -116 -317 -43 -74 -187 -236 -210 -236
                       -6 0 -20 19 -30 42 -35 79 -94 157 -138 183 -49 28 -75 31 -114 11 -44 -23
                       -67 -54 -125 -173 -48 -96 -115 -206 -160 -264 -7 -9 -26 -19 -44 -23 -30 -7
                       -31 -6 -38 36 -38 227 -172 286 -266 119 -20 -36 -40 -66 -45 -68 -5 -2 -54
                       72 -109 163 -98 166 -116 187 -167 199 -54 14 -90 -17 -162 -138 -36 -62 -66
                       -122 -66 -134 0 -28 31 -60 65 -69 36 -9 64 14 105 85 19 33 38 61 41 61 4 0
                       55 -81 114 -180 60 -100 116 -185 126 -190 10 -6 27 -10 39 -10 24 0 111 77
                       141 126 11 19 25 32 30 28 18 -11 10 -175 -13 -246 l-22 -68 21 -27 c14 -20
                       31 -29 56 -31 33 -3 44 4 126 78 146 131 249 266 352 463 l56 109 20 -29 c125
                       -176 158 -498 74 -712 -26 -65 -26 -96 -1 -121 24 -24 70 -26 113 -4 58 30
                       151 96 221 157 43 38 66 54 63 41 -3 -10 -11 -37 -16 -60 -13 -50 -76 -148
                       -122 -190 -76 -69 -9 -64 -800 -64 l-716 0 -31 68 c-17 37 -36 95 -43 130 -15
                       79 -7 238 16 319 21 75 15 107 -26 129 -26 13 -36 13 -60 3 -36 -14 -43 -27
                       -59 -102 -7 -31 -18 -61 -24 -66 -6 -4 -110 -28 -231 -52 -194 -39 -236 -44
                       -350 -44 -101 1 -148 6 -210 22 -263 71 -467 239 -581 478 -52 109 -83 223
                       -64 235 6 4 127 30 269 59 230 45 258 53 279 76 27 32 28 55 1 89 -15 19 -30
                       26 -54 26 -61 0 -535 -98 -568 -118 -74 -43 -99 -119 -73 -225 80 -335 325
                       -610 653 -733 122 -46 199 -59 353 -58 130 0 166 4 351 42 113 23 208 42 211
                       42 3 0 8 -35 11 -78 4 -45 19 -115 35 -165 l29 -86 -422 -3 -421 -3 -36 -24
                       c-19 -13 -46 -40 -59 -59 -24 -35 -24 -39 -27 -308 -3 -257 -2 -275 17 -312
                       25 -49 71 -88 119 -102 20 -5 92 -10 160 -10 l122 0 0 -85 c0 -94 11 -128 47
                       -144 34 -16 2772 -16 2806 0 36 16 47 50 47 144 l0 85 123 0 c67 0 139 5 159
                       10 48 14 94 53 119 102 19 37 20 55 17 312 -3 269 -3 273 -27 308 -13 19 -40
                       46 -59 59 l-36 24 -408 3 c-224 1 -408 5 -408 8 0 3 13 24 29 47 79 115 117
                       238 108 349 -7 83 -26 120 -73 143 -56 26 -99 9 -160 -62 -27 -32 -65 -73 -86
                       -91 l-37 -33 6 105 c4 63 1 141 -7 196 -12 91 -12 92 12 108 47 32 171 159
                       220 224 46 62 54 68 102 77 28 6 337 67 686 136 385 77 652 134 677 146 84 41
                       153 150 153 244 0 140 -130 275 -265 275 -27 0 -129 -15 -225 -34 -155 -30
                       -177 -37 -197 -60 -28 -33 -29 -56 -2 -90 27 -34 49 -34 234 4 195 39 218 39
                       260 -3 19 -19 37 -47 41 -62 10 -39 -14 -103 -47 -128 -19 -14 -193 -52 -650
                       -143 -343 -68 -627 -124 -631 -124 -4 0 0 19 8 43 9 23 24 82 34 131 11 48 21
                       90 23 92 2 2 116 26 254 53 138 27 260 54 272 60 41 22 41 93 0 123 -26 20
                       -26 20 -260 -27 -129 -25 -241 -48 -250 -51 -12 -3 -17 12 -27 82 -14 109 -44
                       164 -105 193 -41 20 -74 24 -125 14z m-982 -2353 l0 -260 -801 0 c-532 0 -807
                       3 -820 10 -18 10 -19 24 -19 248 0 172 3 241 12 250 9 9 205 12 820 12 l808 0
                       0 -260z m1788 248 c9 -9 12 -78 12 -250 0 -224 -1 -238 -19 -248 -13 -7 -288
                       -10 -820 -10 l-801 0 0 260 0 260 808 0 c615 0 811 -3 820 -12z m-408 -703 l0
                       -45 -1300 0 -1300 0 0 45 0 45 1300 0 1300 0 0 -45z`],[1,"instructions-list"],[1,"created-date"],[1,"edit-btn",3,"click"],[1,"remove-btn",3,"click"],[1,"error-msg"],[1,"reaction"],[1,"reaction-icon"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","50","height","50","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],["d",`M3533 5107 c-18 -7 -218 -154 -445 -328 -227 -173 -433 -329 -458
                                           -346 -60 -41 -177 -164 -228 -239 -90 -133 -175 -332 -221 -517 l-28 -111 -16
                                           49 c-25 77 -39 184 -32 245 4 30 24 93 45 140 92 205 141 387 142 522 1 108
                                           -25 170 -88 205 -51 29 -134 39 -187 23 -88 -26 -91 -33 -291 -693 -146 -483
                                           -151 -532 -69 -712 87 -191 121 -313 131 -478 20 -308 -50 -599 -233 -972 -76
                                           -155 -239 -442 -269 -473 -10 -10 -35 -6 -129 18 -102 27 -122 29 -158 20 -55
                                           -15 -84 -35 -108 -74 -23 -37 -211 -728 -211 -776 0 -45 35 -115 70 -140 30
                                           -22 1685 -470 1735 -470 45 0 114 39 140 79 24 37 215 732 215 781 -1 41 -35
                                           106 -71 133 -19 14 -76 37 -128 51 -51 14 -96 27 -98 30 -8 8 29 70 77 131
                                           162 205 536 425 1024 605 76 28 164 64 196 80 156 79 305 260 391 475 51 128
                                           49 182 -11 250 -10 12 -20 45 -24 83 -18 161 -92 344 -208 507 -35 50 -132
                                           159 -218 246 -133 134 -166 161 -229 193 -63 31 -84 36 -142 36 -37 0 -79 -4
                                           -94 -10 -23 -9 -25 -8 -15 9 5 11 44 50 85 89 67 61 106 85 343 207 524 270
                                           608 318 657 377 67 79 83 185 38 246 -62 83 -164 93 -343 33 -164 -55 -471
                                           -189 -717 -312 l-212 -106 32 41 c64 82 285 301 402 399 153 128 170 154 170
                                           268 0 76 -3 90 -27 126 -43 65 -111 87 -185 60z m87 -126 c13 -26 13 -94 -1
                                           -123 -6 -13 -45 -50 -87 -83 -100 -79 -335 -307 -421 -409 -251 -296 -417
                                           -599 -471 -859 -14 -72 2 -107 50 -107 42 0 56 20 75 107 21 96 81 251 140
                                           359 39 72 53 87 117 131 154 105 486 274 827 420 232 99 342 135 405 131 56
                                           -3 73 -20 62 -64 -18 -69 -89 -113 -664 -408 -259 -133 -283 -147 -381 -241
                                           -79 -75 -142 -162 -185 -257 -56 -120 -58 -165 -10 -186 14 -7 27 -12 30 -12
                                           2 0 38 31 78 69 89 82 144 111 211 111 81 0 127 -30 281 -184 168 -168 250
                                           -276 315 -411 59 -123 78 -193 86 -312 l6 -92 -28 -11 c-54 -21 -70 2 -209
                                           304 -40 85 -57 110 -128 181 -91 90 -157 128 -250 145 -189 35 -442 -124 -517
                                           -326 -95 -253 10 -525 236 -615 48 -19 77 -23 173 -23 100 0 125 3 188 26 91
                                           33 190 91 287 169 72 58 75 60 97 44 42 -29 90 -36 146 -21 29 7 52 9 52 4 0
                                           -20 -70 -159 -108 -214 -106 -157 -187 -215 -412 -299 -321 -119 -568 -239
                                           -765 -370 -198 -132 -325 -258 -399 -394 l-31 -57 -190 51 c-104 28 -331 89
                                           -502 135 -172 46 -313 87 -313 91 0 4 35 65 77 136 223 372 361 711 408 1003
                                           22 138 23 356 1 477 -21 119 -67 264 -121 378 -51 108 -59 148 -46 241 9 63
                                           179 639 267 907 40 120 51 130 125 108 33 -10 40 -17 49 -53 24 -87 -28 -295
                                           -131 -531 -22 -48 -44 -119 -50 -158 -21 -134 24 -333 114 -504 38 -73 45 -80
                                           75 -83 45 -4 60 11 67 66 48 363 173 683 338 859 34 36 112 103 172 148 61 45
                                           269 204 464 353 195 150 362 272 372 272 10 0 23 -9 29 -19z m-102 -1941 c48
                                           -21 141 -106 182 -165 15 -22 53 -100 85 -173 55 -127 57 -134 39 -147 -11 -7
                                           -50 -39 -89 -70 -312 -251 -651 -189 -694 127 -17 126 23 242 114 332 53 52
                                           137 102 198 117 43 10 112 2 165 -21z m-1893 -1849 c1131 -302 1066 -283 1083
                                           -309 14 -21 8 -47 -78 -370 -51 -191 -97 -355 -101 -364 -5 -9 -18 -20 -30
                                           -23 -12 -4 -265 59 -662 165 -1110 297 -1020 271 -1031 301 -7 20 11 99 83
                                           368 51 188 95 349 98 358 7 18 42 33 63 28 8 -2 267 -71 575 -154z`],["d",`M1138 1086 c-91 -33 -139 -94 -146 -187 -17 -232 291 -324 402 -120
                                           93 173 -73 372 -256 307z m140 -141 c63 -74 -11 -185 -104 -155 -80 27 -87
                                           148 -10 181 35 14 89 2 114 -26z`],[1,"like-msg"],["d",`M2495 4814 c-211 -15 -369 -33 -695 -81 -344 -50 -396 -55 -630 -63
                                           -201 -6 -265 -11 -304 -25 -102 -35 -159 -87 -205 -185 -23 -49 -26 -67 -26
                                           -165 0 -99 3 -116 28 -169 15 -32 27 -60 27 -61 0 -2 -21 -10 -46 -19 -88 -30
                                           -162 -102 -198 -194 -39 -100 -28 -261 24 -349 13 -22 15 -33 7 -33 -18 0
                                           -129 -56 -152 -77 -118 -105 -151 -326 -72 -480 21 -40 21 -43 -1 -43 -33 0
                                           -120 -51 -158 -92 -20 -22 -48 -66 -63 -97 -23 -50 -26 -68 -25 -161 0 -85 4
                                           -116 23 -162 28 -73 94 -141 169 -176 l57 -27 495 -7 c661 -8 921 -33 1314
                                           -125 l108 -25 -6 -36 c-8 -54 -73 -181 -197 -389 -228 -381 -313 -616 -313
                                           -868 0 -139 21 -199 100 -284 108 -117 254 -148 387 -83 86 43 125 91 187 232
                                           132 297 280 497 660 886 313 321 396 438 605 858 68 136 125 252 127 257 2 5
                                           21 0 44 -11 40 -20 56 -20 627 -18 l585 3 43 30 c27 19 54 50 71 84 26 50 28
                                           61 28 180 0 120 -1 129 -23 149 -31 29 -77 29 -105 -1 -20 -21 -22 -34 -22
                                           -138 0 -102 -2 -118 -20 -137 l-21 -22 -549 0 -549 0 -20 26 c-20 26 -21 37
                                           -21 433 0 396 -1 408 -20 429 -30 32 -82 30 -109 -4 -20 -26 -21 -37 -21 -414
                                           l0 -388 -46 -109 c-120 -280 -235 -500 -373 -708 -72 -108 -119 -164 -290
                                           -340 -460 -473 -593 -656 -770 -1053 -31 -71 -81 -105 -155 -105 -90 0 -162
                                           59 -191 155 -19 65 -19 110 1 223 34 200 110 376 287 671 136 225 159 269 191
                                           366 20 57 29 72 43 70 10 -1 68 -27 129 -58 117 -59 135 -61 169 -24 22 24 22
                                           76 1 99 -22 24 -176 103 -261 134 -394 145 -780 194 -1580 203 -531 6 -539 7
                                           -594 69 -48 55 -64 144 -40 230 16 56 44 92 92 118 41 21 52 22 392 25 193 1
                                           360 5 373 7 31 7 53 59 40 95 -15 46 -41 50 -291 50 -138 0 -248 5 -272 11
                                           -51 14 -110 73 -124 124 -24 89 -9 184 40 239 51 59 91 66 359 66 221 0 239 1
                                           262 20 33 25 39 49 22 88 -16 39 -24 40 -199 44 -127 3 -144 6 -185 28 -134
                                           75 -131 314 4 388 26 14 70 18 274 22 l244 5 24 28 c29 34 30 56 4 89 -19 24
                                           -25 26 -153 30 -159 5 -211 24 -255 91 -24 37 -27 50 -27 132 0 82 3 95 27
                                           132 17 26 44 49 75 64 45 22 64 24 298 30 229 6 279 11 595 58 190 28 413 58
                                           495 67 197 21 449 21 587 0 213 -33 499 -128 693 -229 l80 -42 5 -285 c3 -157
                                           9 -293 13 -302 21 -41 114 -37 131 7 3 9 6 158 6 331 l0 315 25 24 24 25 541
                                           0 541 0 24 -25 25 -24 0 -611 c0 -380 4 -618 10 -630 23 -43 116 -40 134 5 3
                                           9 6 291 6 627 0 452 -3 621 -12 652 -17 57 -90 128 -148 144 -34 10 -180 12
                                           -600 10 -550 -3 -555 -3 -596 -25 -23 -12 -53 -36 -67 -53 l-26 -31 -98 47
                                           c-309 147 -610 225 -913 237 -63 2 -137 3 -165 1z`],["d",`M4318 4330 c-48 -14 -94 -49 -124 -92 -26 -37 -29 -49 -29 -124 0
                                           -75 3 -86 30 -126 55 -79 161 -115 256 -87 124 38 188 193 129 315 -45 93
                                           -163 144 -262 114z m106 -162 c53 -48 25 -128 -44 -128 -67 0 -96 88 -44 129
                                           34 27 57 26 88 -1z`],[1,"dislike-msg"],[1,"reaction-btns"],[1,"tried-it-btn"],[1,"single-btn",3,"click"],["d",`M3533 5107 c-18 -7 -218 -154 -445 -328 -227 -173 -433 -329 -458
-346 -60 -41 -177 -164 -228 -239 -90 -133 -175 -332 -221 -517 l-28 -111 -16
49 c-25 77 -39 184 -32 245 4 30 24 93 45 140 92 205 141 387 142 522 1 108
-25 170 -88 205 -51 29 -134 39 -187 23 -88 -26 -91 -33 -291 -693 -146 -483
-151 -532 -69 -712 87 -191 121 -313 131 -478 20 -308 -50 -599 -233 -972 -76
-155 -239 -442 -269 -473 -10 -10 -35 -6 -129 18 -102 27 -122 29 -158 20 -55
-15 -84 -35 -108 -74 -23 -37 -211 -728 -211 -776 0 -45 35 -115 70 -140 30
-22 1685 -470 1735 -470 45 0 114 39 140 79 24 37 215 732 215 781 -1 41 -35
106 -71 133 -19 14 -76 37 -128 51 -51 14 -96 27 -98 30 -8 8 29 70 77 131
162 205 536 425 1024 605 76 28 164 64 196 80 156 79 305 260 391 475 51 128
49 182 -11 250 -10 12 -20 45 -24 83 -18 161 -92 344 -208 507 -35 50 -132
159 -218 246 -133 134 -166 161 -229 193 -63 31 -84 36 -142 36 -37 0 -79 -4
-94 -10 -23 -9 -25 -8 -15 9 5 11 44 50 85 89 67 61 106 85 343 207 524 270
608 318 657 377 67 79 83 185 38 246 -62 83 -164 93 -343 33 -164 -55 -471
-189 -717 -312 l-212 -106 32 41 c64 82 285 301 402 399 153 128 170 154 170
268 0 76 -3 90 -27 126 -43 65 -111 87 -185 60z m87 -126 c13 -26 13 -94 -1
-123 -6 -13 -45 -50 -87 -83 -100 -79 -335 -307 -421 -409 -251 -296 -417
-599 -471 -859 -14 -72 2 -107 50 -107 42 0 56 20 75 107 21 96 81 251 140
359 39 72 53 87 117 131 154 105 486 274 827 420 232 99 342 135 405 131 56
-3 73 -20 62 -64 -18 -69 -89 -113 -664 -408 -259 -133 -283 -147 -381 -241
-79 -75 -142 -162 -185 -257 -56 -120 -58 -165 -10 -186 14 -7 27 -12 30 -12
2 0 38 31 78 69 89 82 144 111 211 111 81 0 127 -30 281 -184 168 -168 250
-276 315 -411 59 -123 78 -193 86 -312 l6 -92 -28 -11 c-54 -21 -70 2 -209
304 -40 85 -57 110 -128 181 -91 90 -157 128 -250 145 -189 35 -442 -124 -517
-326 -95 -253 10 -525 236 -615 48 -19 77 -23 173 -23 100 0 125 3 188 26 91
33 190 91 287 169 72 58 75 60 97 44 42 -29 90 -36 146 -21 29 7 52 9 52 4 0
-20 -70 -159 -108 -214 -106 -157 -187 -215 -412 -299 -321 -119 -568 -239
-765 -370 -198 -132 -325 -258 -399 -394 l-31 -57 -190 51 c-104 28 -331 89
-502 135 -172 46 -313 87 -313 91 0 4 35 65 77 136 223 372 361 711 408 1003
22 138 23 356 1 477 -21 119 -67 264 -121 378 -51 108 -59 148 -46 241 9 63
179 639 267 907 40 120 51 130 125 108 33 -10 40 -17 49 -53 24 -87 -28 -295
-131 -531 -22 -48 -44 -119 -50 -158 -21 -134 24 -333 114 -504 38 -73 45 -80
75 -83 45 -4 60 11 67 66 48 363 173 683 338 859 34 36 112 103 172 148 61 45
269 204 464 353 195 150 362 272 372 272 10 0 23 -9 29 -19z m-102 -1941 c48
-21 141 -106 182 -165 15 -22 53 -100 85 -173 55 -127 57 -134 39 -147 -11 -7
-50 -39 -89 -70 -312 -251 -651 -189 -694 127 -17 126 23 242 114 332 53 52
137 102 198 117 43 10 112 2 165 -21z m-1893 -1849 c1131 -302 1066 -283 1083
-309 14 -21 8 -47 -78 -370 -51 -191 -97 -355 -101 -364 -5 -9 -18 -20 -30
-23 -12 -4 -265 59 -662 165 -1110 297 -1020 271 -1031 301 -7 20 11 99 83
368 51 188 95 349 98 358 7 18 42 33 63 28 8 -2 267 -71 575 -154z`],["d",`M1138 1086 c-91 -33 -139 -94 -146 -187 -17 -232 291 -324 402 -120
93 173 -73 372 -256 307z m140 -141 c63 -74 -11 -185 -104 -155 -80 27 -87
148 -10 181 35 14 89 2 114 -26z`],["d",`M2495 4814 c-211 -15 -369 -33 -695 -81 -344 -50 -396 -55 -630 -63
-201 -6 -265 -11 -304 -25 -102 -35 -159 -87 -205 -185 -23 -49 -26 -67 -26
-165 0 -99 3 -116 28 -169 15 -32 27 -60 27 -61 0 -2 -21 -10 -46 -19 -88 -30
-162 -102 -198 -194 -39 -100 -28 -261 24 -349 13 -22 15 -33 7 -33 -18 0
-129 -56 -152 -77 -118 -105 -151 -326 -72 -480 21 -40 21 -43 -1 -43 -33 0
-120 -51 -158 -92 -20 -22 -48 -66 -63 -97 -23 -50 -26 -68 -25 -161 0 -85 4
-116 23 -162 28 -73 94 -141 169 -176 l57 -27 495 -7 c661 -8 921 -33 1314
-125 l108 -25 -6 -36 c-8 -54 -73 -181 -197 -389 -228 -381 -313 -616 -313
-868 0 -139 21 -199 100 -284 108 -117 254 -148 387 -83 86 43 125 91 187 232
132 297 280 497 660 886 313 321 396 438 605 858 68 136 125 252 127 257 2 5
21 0 44 -11 40 -20 56 -20 627 -18 l585 3 43 30 c27 19 54 50 71 84 26 50 28
61 28 180 0 120 -1 129 -23 149 -31 29 -77 29 -105 -1 -20 -21 -22 -34 -22
-138 0 -102 -2 -118 -20 -137 l-21 -22 -549 0 -549 0 -20 26 c-20 26 -21 37
-21 433 0 396 -1 408 -20 429 -30 32 -82 30 -109 -4 -20 -26 -21 -37 -21 -414
l0 -388 -46 -109 c-120 -280 -235 -500 -373 -708 -72 -108 -119 -164 -290
-340 -460 -473 -593 -656 -770 -1053 -31 -71 -81 -105 -155 -105 -90 0 -162
59 -191 155 -19 65 -19 110 1 223 34 200 110 376 287 671 136 225 159 269 191
366 20 57 29 72 43 70 10 -1 68 -27 129 -58 117 -59 135 -61 169 -24 22 24 22
76 1 99 -22 24 -176 103 -261 134 -394 145 -780 194 -1580 203 -531 6 -539 7
-594 69 -48 55 -64 144 -40 230 16 56 44 92 92 118 41 21 52 22 392 25 193 1
360 5 373 7 31 7 53 59 40 95 -15 46 -41 50 -291 50 -138 0 -248 5 -272 11
-51 14 -110 73 -124 124 -24 89 -9 184 40 239 51 59 91 66 359 66 221 0 239 1
262 20 33 25 39 49 22 88 -16 39 -24 40 -199 44 -127 3 -144 6 -185 28 -134
75 -131 314 4 388 26 14 70 18 274 22 l244 5 24 28 c29 34 30 56 4 89 -19 24
-25 26 -153 30 -159 5 -211 24 -255 91 -24 37 -27 50 -27 132 0 82 3 95 27
132 17 26 44 49 75 64 45 22 64 24 298 30 229 6 279 11 595 58 190 28 413 58
495 67 197 21 449 21 587 0 213 -33 499 -128 693 -229 l80 -42 5 -285 c3 -157
9 -293 13 -302 21 -41 114 -37 131 7 3 9 6 158 6 331 l0 315 25 24 24 25 541
0 541 0 24 -25 25 -24 0 -611 c0 -380 4 -618 10 -630 23 -43 116 -40 134 5 3
9 6 291 6 627 0 452 -3 621 -12 652 -17 57 -90 128 -148 144 -34 10 -180 12
-600 10 -550 -3 -555 -3 -596 -25 -23 -12 -53 -36 -67 -53 l-26 -31 -98 47
c-309 147 -610 225 -913 237 -63 2 -137 3 -165 1z`],["d",`M4318 4330 c-48 -14 -94 -49 -124 -92 -26 -37 -29 -49 -29 -124 0
-75 3 -86 30 -126 55 -79 161 -115 256 -87 124 38 188 193 129 315 -45 93
-163 144 -262 114z m106 -162 c53 -48 25 -128 -44 -128 -67 0 -96 88 -44 129
34 27 57 26 88 -1z`],[1,"tried-it-btn",3,"click"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","35","height","35","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],["d",`M1200 4627 c-49 -16 -133 -102 -148 -153 -28 -94 -8 -169 63 -239
                                           102 -103 243 -101 338 5 93 103 90 228 -8 325 -70 71 -152 91 -245 62z m135
                                           -172 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40
                                           -9 55 -25z`],["d",`M1551 4053 c-99 -126 -172 -280 -186 -397 l-7 -56 79 0 79 0 12 61
                                           c15 79 68 187 137 274 30 39 58 76 61 83 7 15 -82 112 -102 112 -6 0 -39 -35
                                           -73 -77z`],["d",`M640 4067 c-19 -6 -58 -34 -85 -62 -71 -70 -91 -145 -63 -239 16 -55
                                           99 -138 154 -154 94 -28 169 -8 239 63 98 97 101 222 8 325 -65 72 -158 97
                                           -253 67z m135 -172 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80
                                           80 80 19 0 40 -9 55 -25z`],["d",`M4760 3736 c-30 -12 -311 -140 -625 -283 -313 -142 -589 -268 -613
                                           -278 -104 -45 -171 -168 -158 -291 4 -34 3 -65 -1 -67 -5 -3 -40 5 -78 18
                                           -311 104 -954 18 -1665 -224 -96 -32 -176 -58 -178 -56 -1 1 -7 29 -13 63 -20
                                           114 17 259 97 379 24 36 44 69 44 72 0 11 -95 101 -106 101 -17 0 -92 -108
                                           -129 -185 -63 -132 -84 -260 -64 -392 7 -48 14 -92 14 -96 0 -5 -36 -23 -80
                                           -41 -44 -18 -125 -54 -180 -79 -55 -25 -101 -45 -102 -43 -7 7 -43 203 -52
                                           288 -6 54 -11 175 -12 270 0 106 -5 185 -12 205 -22 60 -72 117 -128 148 -47
                                           26 -64 30 -129 30 -58 0 -85 -6 -116 -22 -53 -28 -99 -74 -127 -127 -21 -40
                                           -22 -53 -25 -371 -2 -215 -7 -334 -14 -342 -6 -7 -24 -13 -40 -13 -77 0 -160
                                           -65 -183 -145 -22 -73 -2 -241 50 -421 5 -14 -5 -34 -33 -68 -89 -107 -118
                                           -212 -88 -308 55 -169 175 -356 324 -500 300 -291 719 -448 1197 -448 1012 0
                                           1907 708 2016 1594 20 162 -1 365 -54 537 l-14 46 41 -21 c29 -14 61 -20 111
                                           -21 l70 0 655 318 c360 175 668 330 683 345 51 48 71 99 71 177 0 57 -5 80
                                           -27 122 -70 135 -195 185 -327 129z m141 -146 c22 -12 59 -80 59 -109 0 -11
                                           -10 -31 -22 -45 -14 -16 -217 -120 -516 -266 -272 -132 -495 -240 -497 -240
                                           -1 0 -6 17 -10 37 -8 44 -47 124 -69 142 -9 8 -16 17 -16 21 0 4 129 66 288
                                           138 158 72 384 176 502 231 118 54 225 100 238 100 13 1 32 -4 43 -9z m-4230
                                           -508 l26 -29 6 -229 c8 -340 52 -561 156 -780 105 -220 252 -382 434 -480 l60
                                           -32 -39 -11 c-79 -23 -332 -71 -430 -83 -89 -10 -111 -9 -170 5 -207 51 -346
                                           196 -427 447 -35 108 -64 304 -48 329 5 7 30 17 56 22 77 14 129 51 159 111
                                           l26 52 0 313 c0 343 2 357 58 388 41 23 101 13 133 -23z m3051 -80 c34 -34 46
                                           -94 26 -132 -16 -29 -73 -70 -99 -70 -16 0 -15 3 6 25 68 67 -25 177 -101 120
                                           -27 -21 -36 -18 -29 8 9 27 43 66 70 78 36 16 96 3 127 -29z m-597 -292 c94
                                           -14 157 -36 190 -66 23 -21 27 -31 22 -62 -7 -41 -59 -120 -112 -172 l-35 -34
                                           0 28 c0 59 -24 111 -75 161 -97 98 -222 101 -325 8 -52 -47 -63 -71 -95 -216
                                           -30 -139 -83 -247 -179 -366 -44 -56 -62 -69 -141 -106 -129 -61 -395 -164
                                           -578 -225 l-158 -52 -72 18 c-157 38 -341 156 -438 280 -70 91 -149 231 -149
                                           266 0 9 129 71 279 133 66 28 96 36 99 27 3 -9 79 -119 98 -141 2 -2 30 20 64
                                           49 l60 52 -35 48 c-19 26 -35 52 -35 57 0 10 297 111 482 163 229 65 545 128
                                           753 149 115 12 299 12 380 1z m-120 -255 c15 -14 25 -35 25 -52 -1 -47 -25
                                           -149 -42 -174 -15 -22 -160 -119 -202 -135 -17 -7 -17 -6 -1 26 28 54 55 139
                                           75 235 13 65 24 94 40 107 32 26 76 23 105 -7z m395 -195 c0 -36 -5 -103 -10
                                           -148 -91 -725 -788 -1332 -1644 -1433 -125 -15 -412 -6 -529 15 -312 59 -587
                                           196 -783 391 -65 65 -150 173 -142 180 3 3 40 0 84 -6 96 -14 331 -6 499 16
                                           734 97 1677 447 2220 823 96 66 234 180 266 220 31 37 39 25 39 -58z m-3057
                                           -788 l52 -55 -45 7 c-71 11 -136 35 -165 62 -23 21 -26 31 -22 60 3 19 16 50
                                           27 70 l22 34 39 -61 c22 -34 63 -86 92 -117z`],["d",`M564 1803 c17 -97 111 -231 215 -307 27 -20 51 -36 54 -36 4 0 25 27
                                           47 60 l41 61 -76 71 c-54 50 -83 87 -103 129 l-27 59 -79 0 -78 0 6 -37z`],["d","M1440 2000 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"],["d","M160 3520 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"],["d","M1040 3440 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"],["d","M960 2720 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"]],template:function(t,o){t&1&&h(0,I1,1,1,"app-edit",0)(1,Y1,121,17,"div",1),t&2&&s(o.showEdit?0:1)},dependencies:[U,J],styles:['.details-container[_ngcontent-%COMP%]{width:85%;height:80%;padding:20px;background-color:#000c;display:flex;position:absolute;top:calc(50% + 31px);left:50%;transform:translate(-50%,-50%);gap:30px}.img-container[_ngcontent-%COMP%]{width:30%;border:1px solid #FFD400;padding:5px 20px;position:relative;z-index:-10;overflow:hidden;display:flex;flex-direction:column;justify-content:center}.motto[_ngcontent-%COMP%]{width:100%;text-align:center;font-family:Dancing Script,cursive;color:#f7e4c4;font-size:1.2rem;text-shadow:2px 2px 1px rgba(0,0,0,.8);margin-bottom:5px}.hidden[_ngcontent-%COMP%]{background-color:#000;color:#ffd400;width:70%;text-align:center;border-top-left-radius:10px;border-top-right-radius:10px;position:absolute;bottom:-45px;left:50%;transform:translate(-50%);cursor:pointer;padding:5px;z-index:-1;transition:bottom .6s ease-in-out}.hidden[_ngcontent-%COMP%]:hover{bottom:0}.reactions[_ngcontent-%COMP%]{display:flex;gap:20px;width:100%;justify-content:center}.likes[_ngcontent-%COMP%], .dislikes[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.icon-container[_ngcontent-%COMP%]{width:40px;height:40px;display:flex;gap:5px;justify-content:center;align-items:center}.value[_ngcontent-%COMP%]{color:#ffd400;font-family:Poiret One,sans-serif;font-size:1.2rem;font-weight:700;text-shadow:2px 2px 1px rgba(0,0,0,.8);text-align:center}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{flex:1 1 0;max-height:85%;position:relative;z-index:-2;box-shadow:#000c 0 14px 28px,#000000e6 0 10px 10px}.info-container[_ngcontent-%COMP%]{width:70%;display:flex;flex-direction:column;align-items:flex-start;gap:10px}.title-container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:flex-end}.title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:50%;color:#ffd400;font-family:Poiret One,sans-serif;font-size:2.3rem;font-weight:300;text-shadow:2px 2px 1px rgba(0,0,0,.8)}.title-container[_ngcontent-%COMP%]   .chef-container[_ngcontent-%COMP%]{width:50%;display:flex;justify-content:right}.chef-container[_ngcontent-%COMP%]   .chef-name[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#f7e4c4;font-size:1.7rem;text-shadow:2px 2px 1px rgba(0,0,0,.8)}.chef-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{display:flex;align-items:flex-end}.info-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .like-msg[_ngcontent-%COMP%], .dislike-msg[_ngcontent-%COMP%]{font-family:Dancing Script,cursive;color:#f7e4c4;font-size:1.2rem;text-shadow:2px 2px 1px rgba(0,0,0,.8)}.like-msg[_ngcontent-%COMP%], .dislike-msg[_ngcontent-%COMP%]{font-size:1.4rem}.tabs-container[_ngcontent-%COMP%]{width:100%;display:flex;gap:20px}.tab-container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;border:1px solid #FFD400;padding:5px;box-shadow:#000000e6 0 19px 38px,#000000e6 0 15px 12px}.tab-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#ffd400;font-family:Poiret One,sans-serif;font-size:1.3rem;font-weight:300;text-shadow:2px 2px 1px rgba(0,0,0,.8)}.steps-container[_ngcontent-%COMP%]{width:100%;display:flex;gap:20px}.ingredients-container[_ngcontent-%COMP%]{width:35%;display:flex;flex-direction:column}.instructions-container[_ngcontent-%COMP%]{width:65%;display:flex;flex-direction:column;gap:10px}.ingredients-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .instructions-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#ffd400;font-family:Poiret One,sans-serif;font-size:1.8rem;font-weight:300;text-shadow:2px 2px 1px rgba(0,0,0,.8)}.ingredients-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .instructions-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.ingredients-container[_ngcontent-%COMP%]   .ingredients-list[_ngcontent-%COMP%], .instructions-container[_ngcontent-%COMP%]   .instructions-list[_ngcontent-%COMP%]{color:#f7e4c4;font-family:Poiret One,sans-serif;font-size:1.3rem;font-weight:300;text-shadow:2px 2px 1px rgba(0,0,0,.8)}.ingredients-container[_ngcontent-%COMP%]   .ingredients-list[_ngcontent-%COMP%]{list-style:none}.instructions-container[_ngcontent-%COMP%]   .instructions-list[_ngcontent-%COMP%]{padding-left:25px}.ingredients-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";color:#ffd400;font-size:1em;margin-right:10px}.buttons[_ngcontent-%COMP%]{display:flex;gap:10px}.tried-it-btn[_ngcontent-%COMP%], .edit-btn[_ngcontent-%COMP%], .remove-btn[_ngcontent-%COMP%]{width:90%;color:#ffd400;font-size:1.9rem;cursor:pointer;padding:10px 20px;border:1px solid #FFD400;font-family:Poiret One,sans-serif;background:#000000e6;margin:20px 0;text-align:center;transition:transform .3s ease,box-shadow .3s ease;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px}.edit-btn[_ngcontent-%COMP%], .remove-btn[_ngcontent-%COMP%]{width:40%;color:#ffd400;font-size:1.5rem;cursor:pointer;padding:10px 20px;border:1px solid #FFD400;font-family:Poiret One,sans-serif;background:#000000e6;margin:10px 0;text-align:center;transition:transform .3s ease,box-shadow .3s ease;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px}.buttons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:10px}.tried-it-btn[_ngcontent-%COMP%]:hover, .edit-btn[_ngcontent-%COMP%]:hover, .remove-btn[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 8px 15px #0003}.tried-it-btn[_ngcontent-%COMP%]:focus, .edit-btn[_ngcontent-%COMP%]:hover, .remove-btn[_ngcontent-%COMP%]:hover{outline:none}.error-msg[_ngcontent-%COMP%]{color:#dc143c;font-size:1rem;font-family:Poiret One,sans-serif}.reaction[_ngcontent-%COMP%]{margin-top:20px;display:flex;gap:10px;text-align:center;justify-content:center}.reaction-icon[_ngcontent-%COMP%]{display:flex;align-items:center}.reaction-btns[_ngcontent-%COMP%]{padding:20px 0;display:flex;gap:20px}.single-btn[_ngcontent-%COMP%]{border:1px solid #FFD400;border-radius:50%;padding:15px;cursor:pointer;transition:transform .3s ease,background-color .3s ease;box-shadow:#000000bf 0 14px 28px,#00000038 0 10px 10px}.single-btn[_ngcontent-%COMP%]:hover{background-color:#000;transform:scale(1.1);box-shadow:#000000e6 0 14px 28px,#000c 0 10px 10px}.created-date[_ngcontent-%COMP%]{width:100%;text-align:right;font-family:Dancing Script,cursive;color:#ffd400;font-size:1.1rem;text-shadow:2px 2px 1px rgba(0,0,0,.8)}'],data:{animation:[R("fadeInOut",[A("in",M({opacity:1})),D("void => *",[M({opacity:0}),y("900ms 500ms",M({opacity:1}))]),D("* => void",[y("900ms",M({opacity:0}))])])]}})};export{f1 as DetailsComponent};
