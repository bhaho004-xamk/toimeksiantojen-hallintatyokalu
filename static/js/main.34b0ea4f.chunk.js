(this["webpackJsonptoimeksiantojen-hallintatyokalu"]=this["webpackJsonptoimeksiantojen-hallintatyokalu"]||[]).push([[0],{141:function(t,e,a){},176:function(t,e,a){"use strict";a.r(e);var i=a(0),o=a(14),c=a.n(o),n=(a(141),a(25)),s=a(222),r=a(57),l=a(225),j=a(232),u=a(226),b=a(216),O=a(228),k=a(11),d=a(16),m=a(206),x=a(215),h=a(217),p=a(218),y=a(210),v=a(211),f=a(212),g=a(213),T=a(214),w=a(34),R=a.n(w),S=a(33),M=a.n(S),A=a(230),C=a(2);var B=function(t){return Object(C.jsx)(m.a,{children:t.tiketit.map((function(e,a){var i=e.otsikko,o=new Date;e.luomispvm&&(o=Object(A.a)(e.luomispvm,"dd.MM.y HH.mm"));var c="[Luotu: ".concat(o,"] ").concat(e.ratkaisu),n=Object(C.jsx)(y.a,{style:{color:"green"}}),s=Object(C.jsx)(v.a,{style:{color:"#e3e3e3"}});switch(e.tilanne){case"Jonossa":n=Object(C.jsx)(f.a,{style:{color:"grey"}});break;case"Odottaa toimia":n=Object(C.jsx)(g.a,{style:{color:"yellow"}});break;case"Ratkaistu":n=Object(C.jsx)(y.a,{style:{color:"green"}});break;case"Ei ratkaisua":n=Object(C.jsx)(T.a,{style:{color:"red"}})}if(!0===e.seurattava&&(s=Object(C.jsx)(v.a,{style:{color:"red"}})),!0===e.seurattava)return Object(C.jsxs)(x.a,{children:[Object(C.jsx)(b.a,{onClick:function(){console.log("avataan",a),t.setTilanneMuutosKohde(a),t.setAuki(!0),console.log("Avattu?",t.auki)},style:{marginRight:5},children:n}),Object(C.jsx)(h.a,{primary:i,secondary:c}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)(b.a,{component:k.b,to:"/muokkaa/".concat(a),children:Object(C.jsx)(M.a,{})}),Object(C.jsx)(b.a,{component:k.b,to:"/poista/".concat(e.id),children:Object(C.jsx)(R.a,{})}),Object(C.jsx)(b.a,{component:k.b,to:"/muokkaa/".concat(a),children:s})]})]},a)}))})};a(59);var L=function(t){return Object(C.jsx)(m.a,{children:t.tiketit.map((function(e,a){var i=e.otsikko,o=new Date;e.luomispvm&&(o=Object(A.a)(e.luomispvm,"dd.MM.y HH.mm"));var c="[Luotu: ".concat(o,"] ").concat(e.ratkaisu),n=Object(C.jsx)(y.a,{style:{color:"green"}}),s=Object(C.jsx)(v.a,{style:{color:"#e3e3e3"}});switch(e.tilanne){case"Jonossa":n=Object(C.jsx)(f.a,{style:{color:"grey"}});break;case"Odottaa toimia":n=Object(C.jsx)(g.a,{style:{color:"yellow"}});break;case"Ratkaistu":n=Object(C.jsx)(y.a,{style:{color:"green"}});break;case"Ei ratkaisua":n=Object(C.jsx)(T.a,{style:{color:"red"}})}return!0===e.seurattava&&(s=Object(C.jsx)(v.a,{style:{color:"red"}})),Object(C.jsxs)(x.a,{children:[Object(C.jsx)(b.a,{onClick:function(){console.log("avataan",a),t.setTilanneMuutosKohde(a),t.setAuki(!0),console.log("Avattu?",t.auki)},style:{marginRight:5},children:n}),Object(C.jsx)(h.a,{primary:i,secondary:c}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)(b.a,{component:k.b,to:"/muokkaa/".concat(a),children:Object(C.jsx)(M.a,{})}),Object(C.jsx)(b.a,{component:k.b,to:"/poista/".concat(e.id),children:Object(C.jsx)(R.a,{})}),Object(C.jsx)(b.a,{component:k.b,to:"/muokkaa/".concat(a),children:s})]})]},a)}))})},D=a(48),E=a(74),J=a(231),K=a(220),W=a(236),H=a(221),V=a(234);var z=function(t){var e=Object(d.e)(),a=Object(i.useRef)(),o=Object(i.useRef)(),c=Object(i.useState)(!1),s=Object(n.a)(c,2),r=s[0],l=s[1],j=Object(i.useState)({}),u=Object(n.a)(j,2),b=u[0],O=u[1];return Object(C.jsxs)("form",{onSubmit:function(i){i.preventDefault();var c=t.tiketit,n=new Date,s=[];if(a.current.value||(s=Object(E.a)(Object(E.a)({},s),{},{otsikko:"Lis\xe4\xe4 kuvaus"})),Object.entries(s).length>0)O(Object(E.a)({},s));else{var l={id:Object(V.a)(),luomispvm:n.getTime(),otsikko:a.current.value,ratkaisu:o.current.value,tilanne:"Jonossa",seurattava:r};console.log(l),t.setTiketit([].concat(Object(D.a)(c),[l])),e.push("/tikettilista")}},children:[Object(C.jsx)(J.a,{name:"otsikko",variant:"outlined",label:"Ongelman kuvaus",fullWidth:!0,inputRef:a,style:{marginBottom:15,marginTop:15},error:Boolean(b.otsikko),helperText:b.otsikko}),Object(C.jsx)(J.a,{name:"ratkaisu",variant:"outlined",label:"Lis\xe4tiedot ja toimet",multiline:!0,rows:"8",fullWidth:!0,inputRef:o,style:{marginBottom:15,marginTop:15},error:Boolean(b.paikka),helperText:b.paikka}),Object(C.jsx)(K.a,{label:"Seurattava",control:Object(C.jsx)(W.a,{name:"seurantaVipu",color:"primary",value:r,onChange:function(t){l(!r)}})}),Object(C.jsx)(H.a,{type:"submit",variant:"contained",color:"primary",style:{marginTop:15},fullWidth:!0,children:"Lis\xe4\xe4"}),Object(C.jsx)(H.a,{component:k.b,to:"/tikettilista",variant:"contained",color:"default",style:{marginTop:15},fullWidth:!0,children:"Peruuta"}),Object(C.jsx)("a",{href:"https://elisa.fi/kartat/#mobile",children:Object(C.jsx)("img",{style:{border:"25px solid white"},alt:"Yhteystilanne",src:"https://shot.screenshotapi.net/screenshot?token=MB4GV2H-RTRM07Y-JAJVJPP-EEZG1TM&url=https%3A%2F%2Felisa.fi%2Fkartat%2F%23mobile&fresh=true&output=image&file_type=png&clip%5Bx%5D)=560&clip%5By%5D)=200&clip%5Bheight%5D)=620&clip%5Bwidth%5D)=640",width:"500"})})]})};var P=function(t){var e=Object(d.e)(),a=Object(d.f)().id,i=t.tiketit.filter((function(t){return t.id===a}))[0];return Object(C.jsxs)("form",{onSubmit:function(i){i.preventDefault();var o=t.tiketit.filter((function(t){return t.id!==a}));t.setTiketit(Object(D.a)(o)),e.push("/Tikettilista")},children:[Object(C.jsx)(r.a,{variant:"h5",align:"center",centered:!0,style:{marginTop:"30px"},children:"Vahvista teht\xe4v\xe4n poisto"}),Object(C.jsxs)(r.a,{align:"center",style:{marginBottom:30},children:['Haluatko varmasti poistaa tiketin "',i.otsikko,'"?']}),Object(C.jsx)(H.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,style:{marginBottom:10},children:"Poista teht\xe4v\xe4"}),Object(C.jsx)(H.a,{component:k.b,to:"/Tikettilista",variant:"contained",color:"default",fullWidth:!0,children:"Peruuta"})]})},I=a(219);var F=function(t){var e=Object(d.f)().indeksi,a=t.tiketit[e].otsikko,o=t.tiketit[e].ratkaisu,c=(t.tiketit[e].tilanne,Object(d.e)()),s=Object(i.useRef)(),r=Object(i.useRef)(),l=Object(i.useState)(t.tiketit[e].seurattava),j=Object(n.a)(l,2),u=j[0],b=j[1];return Object(C.jsxs)("form",{onSubmit:function(a){a.preventDefault();var i=t.tiketit,o={id:t.tiketit[e].id,luomispvm:t.tiketit[e].luomispvm,tilanne:t.tiketit[e].tilanne,otsikko:s.current.value,ratkaisu:r.current.value,seurattava:u};i[e]=o,t.setTiketit(Object(D.a)(i)),t.tallennaLista(),c.push("/tikettilista")},children:[Object(C.jsx)(I.a,{}),Object(C.jsx)(J.a,{name:"ongelmankuvaus",variant:"outlined",label:"Ongelman kuvaus",defaultValue:a,fullWidth:!0,inputRef:s,style:{marginBottom:15,marginTop:15}}),Object(C.jsx)(J.a,{name:"tehdyt toimet",variant:"outlined",label:"Tehdyt toimet:",defaultValue:o,fullWidth:!0,multiline:!0,rows:"8",inputRef:r,style:{marginBottom:15,marginTop:15}}),Object(C.jsx)(K.a,{label:"Seurattava",control:Object(C.jsx)(W.a,{checked:u,name:"seurantaVipu",color:"primary",value:u,onChange:function(t){b(!u)}})}),Object(C.jsx)(H.a,{type:"submit",variant:"contained",color:"primary",style:{marginTop:15},fullWidth:!0,children:"Muokkaa"}),Object(C.jsx)(H.a,{component:k.b,to:"/tikettilista",variant:"contained",color:"default",style:{marginTop:15},fullWidth:!0,children:"Peruuta"})]})},N=a(223);var G=function(t){var e=0;return Object(C.jsx)(s.a,{children:Object(C.jsxs)(m.a,{children:[t.tiketit.map((function(t,a){"Ratkaistu"===t.tilanne&&e++})),Object(C.jsxs)(N.a,{children:["Uusimmat teht\xe4v\xe4t (Ratkaistuja tikettej\xe4: ",e,"/",t.tiketit.length,") "]}),t.tiketit.map((function(e,a){var i=new Date;e.luomispvm&&(i=Object(A.a)(e.luomispvm,"dd.MM.y HH.mm"));var o=e.otsikko,c="[Luotu: ".concat(i,"] ").concat(e.ratkaisu),n=Object(C.jsx)(y.a,{style:{color:"green"}}),s=Object(C.jsx)(v.a,{style:{color:"#e3e3e3"}});switch(e.tilanne){case"Jonossa":n=Object(C.jsx)(f.a,{style:{color:"grey"}});break;case"Odottaa toimia":n=Object(C.jsx)(g.a,{style:{color:"yellow"}});break;case"Ratkaistu":n=Object(C.jsx)(y.a,{style:{color:"green"}});break;case"Ei ratkaisua":n=Object(C.jsx)(T.a,{style:{color:"red"}})}if(!0===e.seurattava&&(s=Object(C.jsx)(v.a,{style:{color:"red"}})),a<3)return Object(C.jsxs)(x.a,{children:[Object(C.jsx)(b.a,{onClick:function(){console.log("avataan",a),t.setTilanneMuutosKohde(a),t.setAuki(!0),console.log("Avattu?",t.auki)},style:{marginRight:5},children:n}),Object(C.jsx)(h.a,{primary:o,secondary:c}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)(b.a,{component:k.b,to:"/muokkaa/".concat(a),children:Object(C.jsx)(M.a,{})}),Object(C.jsx)(b.a,{component:k.b,to:"/poista/".concat(e.id),children:Object(C.jsx)(R.a,{})}),Object(C.jsx)(b.a,{component:k.b,to:"/muokkaa/".concat(a),children:s})]})]},a)})),Object(C.jsx)(N.a,{children:"Keskener\xe4iset seurattavat:"}),t.tiketit.map((function(e,a){var i=e.otsikko,o=new Date;e.luomispvm&&(o=Object(A.a)(e.luomispvm,"d.MM.y HH.mm"));var c="[Luotu: ".concat(o,"] ").concat(e.ratkaisu),n=Object(C.jsx)(y.a,{style:{color:"green"}}),s=Object(C.jsx)(v.a,{style:{color:"#e3e3e3"}});switch(e.tilanne){case"Jonossa":n=Object(C.jsx)(f.a,{style:{color:"grey"}});break;case"Odottaa toimia":n=Object(C.jsx)(g.a,{style:{color:"yellow"}});break;case"Ratkaistu":n=Object(C.jsx)(y.a,{style:{color:"green"}});break;case"Ei ratkaisua":n=Object(C.jsx)(T.a,{style:{color:"red"}})}if(!0===e.seurattava&&(s=Object(C.jsx)(v.a,{style:{color:"red"}})),!0===e.seurattava&&"Ratkaistu"!==e.tilanne&&"Ei ratkaisua"!==e.tilanne)return Object(C.jsxs)(x.a,{children:[Object(C.jsx)(b.a,{onClick:function(){console.log("avataan",a),t.setTilanneMuutosKohde(a),t.setAuki(!0),console.log("Avattu?",t.auki)},style:{marginRight:5},children:n}),Object(C.jsx)(h.a,{primary:i,secondary:c}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)(b.a,{component:k.b,to:"/muokkaa/".concat(a),children:Object(C.jsx)(M.a,{})}),Object(C.jsx)(b.a,{component:k.b,to:"/poista/".concat(e.id),children:Object(C.jsx)(R.a,{})}),Object(C.jsx)(b.a,{component:k.b,to:"/muokkaa/".concat(a),children:s})]})]},a)}))]})})},Y=a(227),U=a(229),Z=a(224);var _=function(t){var e=Object(i.useState)([]),a=Object(n.a)(e,2),o=a[0],c=a[1],r=t.tiketit,l=[],j=Object(i.useRef)();return Object(C.jsxs)(s.a,{children:[Object(C.jsx)(J.a,{name:"hakuehto",variant:"outlined",label:"Hae",fullWidth:!0,inputRef:j,style:{marginBottom:15,marginTop:15},onKeyPress:function(t){"Enter"===t.key&&(console.log(r),console.log("hae",j.current.value),r.map((function(t,e){(t.otsikko.toLowerCase().includes(j.current.value.toLowerCase())||t.ratkaisu.toLowerCase().includes(j.current.value.toLowerCase()))&&l.push(t)})),console.log("apulista: ",l),c(l),console.log("tilamuuttujalista: ",l))}}),Object(C.jsx)(m.a,{children:o.map((function(t,e){var a=t.otsikko,i="".concat(t.ratkaisu),o=Object(C.jsx)(y.a,{style:{color:"green"}});switch(t.tilanne){case"Jonossa":o=Object(C.jsx)(f.a,{style:{color:"grey"}});break;case"Odottaa toimia":o=Object(C.jsx)(g.a,{style:{color:"yellow"}});break;case"Ratkaistu":o=Object(C.jsx)(y.a,{style:{color:"green"}});break;case"Ei ratkaisua":o=Object(C.jsx)(Z.a,{style:{color:"red"}})}return Object(C.jsxs)(x.a,{children:[Object(C.jsx)(b.a,{children:o}),Object(C.jsx)(h.a,{primary:a,secondary:i}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)(b.a,{component:k.b,to:"/muokkaa/".concat(e),children:Object(C.jsx)(M.a,{})}),Object(C.jsx)(b.a,{component:k.b,to:"/poista/".concat(t.id),children:Object(C.jsx)(R.a,{})})]}),Object(C.jsx)(v.a,{style:{color:"red"}})]},e)}))})]})},q=a(235);var Q=function(t){var e=t.tiketit,a=t.tilanneMuutosKohde,i=function(i){console.log(a,"tartu listaan ",e[a].tilanne),e[a].tilanne=i,t.setTiketit(e),t.tallennaLista(),t.setAuki(!1)};return Object(C.jsx)(q.a,{open:t.auki,onBackdropClick:function(){t.setAuki(!1)},children:Object(C.jsxs)("table",{children:[Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)(b.a,{variant:"contained",color:"primary",style:{marginTop:40,marginRight:5},onClick:function(){i("Jonossa")},children:Object(C.jsx)(f.a,{style:{fontSize:120,color:"grey"}})})}),Object(C.jsx)("td",{children:Object(C.jsx)(b.a,{variant:"contained",color:"primary",style:{marginTop:40,marginRight:5},onClick:function(){i("Odottaa toimia")},children:Object(C.jsx)(g.a,{style:{fontSize:120,color:"yellow"}})})})]}),Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:Object(C.jsx)(b.a,{variant:"contained",color:"primary",style:{marginTop:40,marginRight:5},onClick:function(){i("Ei ratkaisua")},children:Object(C.jsx)(T.a,{style:{fontSize:120,color:"red"}})})}),Object(C.jsx)("td",{children:Object(C.jsx)(b.a,{variant:"contained",color:"primary",style:{marginTop:40,marginRight:5},onClick:function(){i("Ratkaistu")},children:Object(C.jsx)(y.a,{style:{fontSize:120,color:"green"}})})})]})]})})};var X=function(){var t=Object(i.useState)([{}]),e=Object(n.a)(t,2),a=e[0],o=e[1],c=Object(i.useState)(!1),m=Object(n.a)(c,2),x=m[0],h=m[1],p=Object(i.useState)(0),y=Object(n.a)(p,2),v=y[0],f=y[1],g=Object(i.useState)(0),T=Object(n.a)(g,2),w=T[0],R=T[1],S=function(){localStorage.setItem("tiketit",JSON.stringify(a))};return Object(i.useEffect)((function(){localStorage.getItem("tiketit")?o(JSON.parse(localStorage.getItem("tiketit"))):o([])}),[]),Object(i.useEffect)((function(){a.sort((function(t,e){return new Date(e.luomispvm)-new Date(t.luomispvm)})),S()}),[a,o]),Object(C.jsx)(s.a,{maxWidth:"sm",children:Object(C.jsxs)(k.a,{children:[Object(C.jsx)(r.a,{variant:"h5",align:"center",color:"primary",style:{fontWeight:"bold",letterSpacing:"18px",transform:"scale(1, 1.4)",lineHeight:"2"},children:"TOIMEKSIANNOT"}),Object(C.jsx)(l.a,{position:"static",children:Object(C.jsxs)(j.a,{value:w,indicatorColor:"primary",centered:!0,onChange:function(t,e){R(e)},"aria-label":"Valittu sivu",children:[Object(C.jsx)(u.a,{label:"Koti",component:k.b,to:"/"}),Object(C.jsx)(u.a,{label:"Tikettilista",component:k.b,to:"/tikettilista"}),Object(C.jsx)(u.a,{label:"Seurattavat",component:k.b,to:"/seurattavat/"})]})}),Object(C.jsx)(d.a,{path:"/",exact:!0,children:Object(C.jsx)(G,{tiketit:a,setTiketit:o,auki:x,setAuki:h,setTilanneMuutosKohde:f})}),Object(C.jsx)(d.a,{path:"/tikettilista",children:Object(C.jsx)(L,{tiketit:a,setTiketit:o,auki:x,setAuki:h,setTilanneMuutosKohde:f})}),Object(C.jsx)(d.a,{path:"/uusi",children:Object(C.jsx)(z,{tiketit:a,setTiketit:o})}),Object(C.jsx)(d.a,{path:"/seurattavat",children:Object(C.jsx)(B,{tiketit:a,setTiketit:o,auki:x,setAuki:h,setTilanneMuutosKohde:f})}),Object(C.jsx)(d.a,{path:"/poista/:id",children:Object(C.jsx)(P,{tiketit:a,setTiketit:o})}),Object(C.jsx)(d.a,{path:"/muokkaa/:indeksi",children:Object(C.jsx)(F,{tiketit:a,setTiketit:o,tallennaLista:S})}),Object(C.jsx)(d.a,{path:"/hae",children:Object(C.jsx)(_,{tiketit:a,setTiketit:o})}),Object(C.jsx)(Q,{tilanneMuutosKohde:v,auki:x,setAuki:h,tiketit:a,setTiketit:o,tallennaLista:S}),Object(C.jsx)(b.a,{component:k.b,to:"/hae/",variant:"contained",color:"primary",style:{marginTop:40,position:"fixed",bottom:"90px",right:"26px"},children:Object(C.jsx)(Y.a,{style:{fontSize:30}})}),Object(C.jsx)(O.a,{color:"primary",size:"large",component:k.b,to:"/uusi/",style:{marginTop:15,position:"fixed",bottom:"20px",right:"26px"},children:Object(C.jsx)(U.a,{style:{fontSize:40}})})]})})};c.a.render(Object(C.jsx)(X,{}),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.34b0ea4f.chunk.js.map