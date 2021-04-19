(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{52:function(n,e,t){},83:function(n,e,t){"use strict";t.r(e);var r,i,a,c,o,s,l,d,b,j=t(2),h=t.n(j),p=t(14),m=t.n(p),x=(t(52),t(9)),g=t(3),f=t(4),u=t(23),O=t(7),w=f.b.header(r||(r=Object(g.a)(['\n  width: 100vw;\n  height: 100px;\n\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n\n  text-align: center;\n\n  font-family: "Roboto", sans-serif;\n']))),v=f.b.nav(i||(i=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  height: inherit;\n  background: transparent;\n\n  width: 80%;\n  max-width: 1200px;\n  margin: auto;\n\n  @media (max-width: 1000px) {\n    width: 95%;\n  }\n\n  @media (max-width: 800px) {\n    width: 80%;\n  }\n"]))),k=Object(f.b)(u.Link)(a||(a=Object(g.a)(["\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-weight: bold;\n  }\n  img {\n    margin-right: 0.2em;\n  }\n"]))),y=f.b.ul(c||(c=Object(g.a)(["\n  list-style: none;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 800px) {\n    flex-direction: column;\n    position: absolute;\n    justify-content: flex-start;\n    padding-top: 150px;\n    top: -155vh;\n    left: 0;\n    right: 0;\n\n    background: rgba(0, 0, 0, 0.9);\n    height: 100vh;\n    z-index: -1;\n\n    transition: top 1s ease;\n    &.show {\n      top: 0px;\n    }\n    &.hide {\n      top: -155vh;\n    }\n  }\n"]))),S=f.b.li(o||(o=Object(g.a)(["\n  margin: 0 0.4em;\n\n  @media (max-width: 800px) {\n    margin: 1.2em 0;\n  }\n"]))),E=Object(f.b)(u.Link)(s||(s=Object(g.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 0.5em 1em;\n  border: 2px solid transparent;\n  border-radius: 3px;\n\n  transition: border 0.25s ease;\n\n  :hover,\n  &.active {\n    border-bottom: 2px solid white;\n  }\n"]))),C=f.b.a(l||(l=Object(g.a)(["\n  text-decoration: none;\n  color: white;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 0.5em 1em;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid white;\n  border-radius: 5em;\n\n  p {\n    margin-left: 10px;\n  }\n\n  transition: background 0.25s ease, color 0.25s ease, font-weight 0.25s ease;\n\n  :hover {\n    background: white;\n    color: black;\n    font-weight: bold;\n  }\n"]))),N=Object(f.b)(O.a)(d||(d=Object(g.a)(["\n  color: white;\n  transform: scale(1.5);\n  cursor: pointer;\n  @media (min-width: 800px) {\n    display: none;\n  }\n"]))),z=Object(f.b)(O.e)(b||(b=Object(g.a)(["\n  color: white;\n  transform: scale(1.5);\n  cursor: pointer;\n  @media (min-width: 800px) {\n    display: none;\n  }\n"]))),P=t(42),A=t(1);var M,B,D=function(){var n=Object(j.useState)(!1),e=Object(x.a)(n,2),t=e[0],r=e[1],i=function(){r(!t)};return Object(A.jsx)(w,{children:Object(A.jsxs)(v,{children:[Object(A.jsx)(k,{to:"home",smooth:!0,children:Object(A.jsx)("h1",{children:"VRG"})}),Object(A.jsxs)(y,{className:t?"show":"hide",onClick:i,children:[Object(A.jsx)(S,{children:Object(A.jsx)(E,{to:"home",activeClass:"active",spy:!0,smooth:!0,offset:-105,onClick:i,children:"Home"})}),Object(A.jsx)(S,{children:Object(A.jsx)(E,{to:"aboutme",activeClass:"active",spy:!0,smooth:!0,offset:-105,onClick:i,children:"About"})}),Object(A.jsx)(S,{children:Object(A.jsx)(E,{to:"services",activeClass:"active",spy:!0,smooth:!0,offset:-105,onClick:i,children:"Services"})}),Object(A.jsx)(S,{children:Object(A.jsx)(E,{to:"contact",activeClass:"active",spy:!0,smooth:!0,offset:-105,onClick:i,children:"Contact"})}),Object(A.jsx)(S,{children:Object(A.jsxs)(C,{href:"https://github.com/BlazerHeat",target:"_blank",children:[Object(A.jsx)(P.a,{style:{transform:"scale(1.5)"}}),Object(A.jsx)("p",{children:"Github"})]})})]}),t?Object(A.jsx)(z,{onClick:i}):Object(A.jsx)(N,{onClick:i})]})})},G=t.p+"static/media/hero-bg3.78941f80.jpg",I=f.b.div(M||(M=Object(g.a)(["\n  height: 100vh;\n\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url(",");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  /* background-attachment: fixed; */\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),G),L=f.b.div(B||(B=Object(g.a)(["\n  color: white;\n  font-size: 2rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  text-align: center;\n\n  padding: 0 1em;\n\n  @media (max-width: 400px) {\n    font-size: 1.5em;\n  }\n"]))),R=t(47),T=["Full-Stack Developer",2e3,"Casual Gamer \ud83c\udfae",2e3];var _,F,H,V,J,U,Q,K,W,X=function(){return Object(A.jsx)(I,{name:"home",children:Object(A.jsxs)(L,{children:[Object(A.jsxs)("h1",{children:["Hello,",Object(A.jsx)("br",{}),"I am Vatsal Ghoghari"]}),Object(A.jsx)(R.a,{steps:T,loop:1/0,wrapper:"p"})]})})},Y=f.b.section(_||(_=Object(g.a)(["\n  width: 100%;\n\n  background: #f5f5f5;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),q=f.b.section(F||(F=Object(g.a)(["\n  width: 90%;\n  max-width: 1200px;\n  margin: 2em 0;\n  padding: 2em 1em;\n\n  background: white;\n  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 6%), 0 2px 5px 0 rgb(0 0 0 / 20%);\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 1.5em;\n\n  @media (max-width: 900px) {\n    grid-template-rows: 1fr;\n    grid-template-columns: none;\n\n    row-gap: 1.5em;\n  }\n"]))),Z=f.b.div(H||(H=Object(g.a)(["\n  display: grid;\n  grid-template-rows: auto;\n\n  justify-content: center;\n  align-items: center;\n\n  row-gap: 1em;\n"]))),$=f.b.div(V||(V=Object(g.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n\n  justify-content: center;\n  align-items: center;\n\n  column-gap: 1em;\n\n  img {\n    width: 50%;\n    min-width: 200px;\n    border-radius: 50%;\n    justify-self: center;\n\n    filter: grayscale(100%);\n\n    padding: 0.5em;\n\n    border: 5px solid #0078ff;\n\n    transition: filter 0.25s ease;\n\n    :hover {\n      filter: grayscale(0%);\n    }\n  }\n\n  @media (max-width: 900px) {\n    grid-template-rows: 1fr;\n    grid-template-columns: none;\n\n    div {\n      justify-self: center;\n    }\n  }\n"]))),nn=f.b.div(J||(J=Object(g.a)(["\n  align-self: flex-start;\n\n  h2 {\n    margin-bottom: 0.5em;\n  }\n"]))),en=f.b.div(U||(U=Object(g.a)(["\n  width: 100%;\n  height: 0.7rem;\n  margin: 0.5rem 0 1.2rem 0;\n\n  background-color: #cde1f8;\n"]))),tn=f.b.div(Q||(Q=Object(g.a)(["\n  width: ",";\n  height: 100%;\n\n  background-color: #0078ff;\n"])),(function(n){return n.progress+"%"})),rn=f.b.div(K||(K=Object(g.a)(["\n  span {\n    border-bottom: #0078ff 5px solid;\n    font-size: 2em;\n    font-weight: bold;\n  }\n\n  p {\n    margin-top: 2em;\n    line-height: 2em;\n    word-spacing: 0.3em;\n  }\n"]))),an=f.b.div(W||(W=Object(g.a)(["\n  p {\n    margin-top: 1em;\n    margin-right: 1em;\n  }\n"]))),cn=t.p+"static/media/testimonial-1.fd5dcf51.jpg";function on(n){var e=n.skillName,t=n.skillPercent;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("span",{children:[e," "]}),Object(A.jsxs)("span",{children:[t,"%"]}),Object(A.jsx)(en,{children:Object(A.jsx)(tn,{progress:t})})]})}var sn,ln,dn,bn=function(){return Object(A.jsx)(Y,{name:"aboutme",children:Object(A.jsxs)(q,{children:[Object(A.jsxs)(Z,{children:[Object(A.jsxs)($,{children:[Object(A.jsx)("img",{src:cn,alt:""}),Object(A.jsxs)(an,{children:[Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Name:"})," Vatsal Ghoghari"]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"DOB:"})," 29/12/2001"]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Profile:"})," Full Stack Developer"]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Email:"})," vghoghari82@gmail.com"]}),Object(A.jsxs)("p",{children:[Object(A.jsx)("strong",{children:"Phone:"})," (+91) 7203088769"]})]})]}),Object(A.jsxs)(nn,{children:[Object(A.jsx)("h2",{children:"Skills"}),Object(A.jsx)(on,{skillName:"JavaScript (Node.js)",skillPercent:95}),Object(A.jsx)(on,{skillName:"Python",skillPercent:90}),Object(A.jsx)(on,{skillName:"HTML/CSS",skillPercent:85}),Object(A.jsx)(on,{skillName:"C/C++",skillPercent:70}),Object(A.jsx)(on,{skillName:"Java",skillPercent:65})]})]}),Object(A.jsxs)(rn,{children:[Object(A.jsx)("span",{children:"About Me"}),Object(A.jsxs)("p",{children:["Hi, I am Vatsal Ghoghari currently pursuing for B.Tech in CSE (Computer Science & Engg.) at"," ",Object(A.jsx)("a",{href:"https://www.charusat.ac.in/",target:"_blank",rel:"noreferrer",style:{color:"black",wordSpacing:"0em"},children:"Charusat University."}),Object(A.jsx)("br",{}),"I also like to participate in competitive coding wars with the help of some public hubs like"," ",Object(A.jsx)("a",{href:"https://www.codechef.com/",target:"_blank",rel:"noreferrer",style:{color:"black",wordSpacing:"0em"},children:"CodeChef"})," ","And"," ",Object(A.jsx)("a",{href:"https://cssbattle.dev/",target:"_blank",rel:"noreferrer",style:{color:"black",wordSpacing:"0em"},children:"CSS-Battle"})," ","to improve my coding skills for frontend as-well backend side.",Object(A.jsx)("br",{}),Object(A.jsx)("br",{}),"Always passionate about Technology and programing.",Object(A.jsx)("br",{}),"Projects i have worked on in free time:"," ",Object(A.jsx)("a",{href:"https://github.com/BlazerHeat?tab=repositories",target:"_blank",rel:"noreferrer",style:{color:"black",wordSpacing:"0em"},children:"Github Repo"})]})]})]})})},jn=f.b.section(sn||(sn=Object(g.a)(["\n  width: 100%;\n\n  background: #f5f5f5;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  text-align: center;\n\n  > p {\n    border-bottom: #0078ff 5px solid;\n    margin: 1rem;\n  }\n"]))),hn=f.b.div(ln||(ln=Object(g.a)(["\n  width: 100%;\n  max-width: 2000px;\n\n  padding: 0 1rem;\n  margin-top: 1rem;\n  margin-bottom: 3rem;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),pn=f.b.div(dn||(dn=Object(g.a)(["\n  min-width: 230px;\n  max-width: 500px;\n  min-height: 400px;\n\n  background-color: #fff;\n  box-shadow: 0 13px 8px -10px rgb(0 0 0 / 10%);\n  padding: 2.5rem 1.3rem;\n  border-radius: 1rem;\n  margin: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    border-radius: 50%;\n    min-width: 150px;\n    max-width: 430px;\n    height: auto;\n\n    border: 10px solid #0078ff;\n    padding: 30px;\n\n    transition: border 0.5s ease, background-color 0.5s ease, color 0.5s ease;\n  }\n\n  h4 {\n    margin-top: 1em;\n  }\n\n  p {\n    padding: 0 2em;\n  }\n\n  :hover > svg {\n    border: 10px solid #cde1f8;\n    background-color: #0078ff;\n    color: white;\n  }\n"])));function mn(n){var e=n.pic,t=n.heading,r=n.text;return Object(A.jsxs)(pn,{children:[e,Object(A.jsx)("h4",{children:t}),Object(A.jsx)("p",{children:r})]})}var xn=t(44),gn=t(43);var fn,un,On,wn,vn,kn,yn,Sn,En,Cn,Nn,zn,Pn=function(){return Object(A.jsxs)(jn,{name:"services",children:[Object(A.jsx)("h3",{children:"SERVICES"}),Object(A.jsx)("p",{children:"Lets' see what can i do."}),Object(A.jsxs)(hn,{children:[Object(A.jsx)(mn,{pic:Object(A.jsx)(O.d,{}),heading:"WEB DESGIN",text:"The key feature of great websites are UI/UX and responsiveness (Auto-Scale with device width), I have 3 months expernice with React which is powerful JS libaray for frontend devlopent made by Facebook."}),Object(A.jsx)(mn,{pic:Object(A.jsx)(gn.a,{}),heading:"BACKEND DEVELOPMENT",text:"Having good expiernece with Express (Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications). i can assure to code self-efficient (load handling) servers."}),Object(A.jsx)(mn,{pic:Object(A.jsx)(xn.a,{}),heading:"DATABASE MANAGEMENT",text:"SQL or NoSQL, I have good expiernce with Either of these databases which include MongoDB, MySQL, Postgres, etc.."})]})]})},An=t.p+"static/media/hero-bg2.22fc68a8.jpg",Mn=f.b.div(fn||(fn=Object(g.a)(["\n  width: 100%;\n  min-height: 90vh;\n\n  background: linear-gradient(rgba(0, 119, 255, 0.7), rgba(0, 119, 255, 0.7)),\n    url(",");\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  background-attachment: fixed;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),An),Bn=f.b.div(un||(un=Object(g.a)(["\n  width: 90%;\n  max-width: 1200px;\n  margin: 2em 0;\n  padding: 2em 1em;\n\n  background: white;\n  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 6%), 0 2px 5px 0 rgb(0 0 0 / 20%);\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 0.5em;\n\n  span {\n    border-bottom: #0078ff 5px solid;\n    font-size: 2em;\n    font-weight: bold;\n  }\n\n  @media (max-width: 650px) {\n    grid-template-rows: 1fr;\n    grid-template-columns: none;\n    column-gap: 0em;\n  }\n\n  @media (max-width: 350px) {\n    font-size: 0.7em;\n  }\n"]))),Dn=f.b.div(On||(On=Object(g.a)(["\n  font-size: 1.2em;\n  height: 70%;\n  max-height: 350px;\n  margin: 1em 2rem;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 650px) {\n    align-items: center;\n  }\n"]))),Gn=f.b.a(wn||(wn=Object(g.a)(["\n  text-decoration: none;\n  color: black;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: 3px solid #0078ff;\n  border-radius: 10em;\n\n  padding: 0.4em;\n  margin: 0 0.3em;\n\n  transition: background 0.3s ease, color 0.3s ease, border 0.3s ease;\n\n  :hover {\n    background: #0078ff;\n    color: white;\n    border: 3px solid #86b7fe;\n  }\n"]))),In=f.b.div(vn||(vn=Object(g.a)(["\n  width: 100%;\n"]))),Ln=f.b.form(kn||(kn=Object(g.a)(["\n  margin: 2rem 0;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  input,\n  textarea {\n    width: 90%;\n    max-width: 500px;\n    margin: 0.7rem;\n    padding: 10px 15px;\n\n    border: 2px solid grey;\n\n    border-radius: 0;\n    box-shadow: none;\n    font-size: 14px;\n\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n\n    transition: color 0.25s ease, background-color 0.25s ease,\n      border-color 0.25s ease, outline 0.25s ease, box-shadow 0.25s ease;\n  }\n\n  input:focus,\n  textarea:focus {\n    color: #212529;\n    background-color: #fff;\n\n    outline: 0;\n  }\n\n  input:focus {\n    border-color: ",";\n    box-shadow: 0 0 0 0.25rem\n      ",";\n  }\n\n  textarea:focus {\n    border-color: ",";\n    box-shadow: 0 0 0 0.25rem\n      ",";\n  }\n"])),(function(n){return n.nameError?"#ff0000":"#86b7fe"}),(function(n){return n.nameError?"rgb(255 0 0 / 25%)":"rgb(13 110 253 / 25%)"}),(function(n){return n.messageError?"#ff0000":"#86b7fe"}),(function(n){return n.messageError?"rgb(255 0 0 / 25%)":"rgb(13 110 253 / 25%)"})),Rn=f.b.p(yn||(yn=Object(g.a)(["\n  color: red;\n  display: none;\n  ","\n"])),(function(n){return n.nameError&&Object(f.a)(Sn||(Sn=Object(g.a)(["\n      display: inline-block;\n    "])))})),Tn=f.b.p(En||(En=Object(g.a)(["\n  color: red;\n  display: none;\n  ","\n"])),(function(n){return n.messageError&&Object(f.a)(Cn||(Cn=Object(g.a)(["\n      display: inline-block;\n    "])))})),_n=f.b.button(Nn||(Nn=Object(g.a)(["\n  cursor: ",";\n  padding: 0.6em 1.5em;\n\n  border: 2px solid #0078ff;\n  border-radius: 5em;\n  background: ",";\n\n  outline: none;\n\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n\n  p {\n    margin-right: 0.5em;\n    font-size: 1.5em;\n    color: ",";\n    transition: color 0.3s ease;\n  }\n\n  svg {\n    color: ",";\n    transform: scale(1.5);\n    transition: color 0.3s ease;\n  }\n\n  transition: background 0.3s ease, border 0.3s ease;\n\n  ","\n"])),(function(n){return n.sent?"default":"pointer"}),(function(n){return n.sent?"#0078ff":"transparent"}),(function(n){return n.sent?"white":"#0078ff"}),(function(n){return n.sent?"white":"#0078ff"}),(function(n){return n.sent||Object(f.a)(zn||(zn=Object(g.a)(["\n      :hover {\n        background: #0078ff;\n\n        border: 2px solid #cde1f8;\n        p,\n        svg {\n          color: white;\n        }\n      }\n    "])))}));function Fn(n){var e=n.icon,t=n.link;return Object(A.jsx)(Gn,{href:t,target:"_blank",children:e})}var Hn=t(25),Vn=t(46),Jn=t(45),Un=t.n(Jn).a.create({baseURL:"https://edu-dyno.herokuapp.com",withCredentials:!0,responseType:"json"});var Qn,Kn=function(){var n=Object(j.useState)(""),e=Object(x.a)(n,2),t=e[0],r=e[1],i=Object(j.useState)(""),a=Object(x.a)(i,2),c=a[0],o=a[1],s=Object(j.useState)(!1),l=Object(x.a)(s,2),d=l[0],b=l[1],h=Object(j.useState)(!1),p=Object(x.a)(h,2),m=p[0],g=p[1],f=Object(j.useState)(!1),u=Object(x.a)(f,2),w=u[0],v=u[1];return Object(A.jsx)(Mn,{name:"contact",children:Object(A.jsxs)(Bn,{children:[Object(A.jsxs)(In,{children:[Object(A.jsx)("span",{children:"Send Feedback"}),Object(A.jsxs)(Ln,{onSubmit:function(n){n.preventDefault(),m||w||""===t||""===c||(b(!0),Un.post("/feedback",{name:t,message:c}))},nameError:m,messageError:w,children:[Object(A.jsx)("input",{name:"name",type:"text",placeholder:"Your Name",value:t,onChange:function(n){var e=n.target.value;r(e),g(e.length>=1&&e.length<3)},disabled:!!d}),Object(A.jsx)(Rn,{nameError:m,children:"Name should be atlest 3 character long."}),Object(A.jsx)("textarea",{name:"feedback",cols:"30",rows:"10",placeholder:"Message",style:{resize:"vertical"},value:c,onChange:function(n){var e=n.target.value;o(e),v(e.length>=1&&e.length<3)},disabled:!!d}),Object(A.jsx)(Tn,{messageError:w,children:"Message should be atlest 3 character long."}),Object(A.jsxs)(_n,{type:"submit",disabled:!!d,sent:d,children:[Object(A.jsxs)("p",{children:[" ",d?"Thank you":"SEND"]}),d?Object(A.jsx)(Vn.a,{}):Object(A.jsx)(Hn.b,{})]})]})]}),Object(A.jsxs)("div",{style:{width:"100%"},children:[Object(A.jsx)("span",{children:"Social Media"}),Object(A.jsxs)(Dn,{children:[Object(A.jsx)(Fn,{icon:Object(A.jsx)(O.c,{}),link:"https://www.instagram.com/vatsal_ghoghari/"}),Object(A.jsx)(Fn,{icon:Object(A.jsx)(O.f,{}),link:"https://api.whatsapp.com/send?phone=917203088769"}),Object(A.jsx)(Fn,{icon:Object(A.jsx)(O.b,{}),link:"https://discord.gg/4esvUJcEFP"}),Object(A.jsx)(Fn,{icon:Object(A.jsx)(Hn.a,{}),link:"https://mail.google.com/mail/u/?authuser=vghoghari82@gmail.com"})]})]})]})})},Wn=f.b.footer(Qn||(Qn=Object(g.a)(["\n  width: 100%;\n  min-height: 100px;\n\n  background-color: #0062d3;\n  padding: 25px 0;\n  text-align: center;\n  color: #fff;\n"])));var Xn=function(){return Object(A.jsxs)(Wn,{children:[Object(A.jsxs)("p",{children:["\xa9 Copyright ",Object(A.jsx)("strong",{children:"VRG"}),". All Rights Reserved"]}),Object(A.jsxs)("p",{children:["Inspired by"," ",Object(A.jsx)("a",{href:"https://bootstrapmade.com/",style:{color:"white"},target:"_blank",rel:"noreferrer",children:"BootstrapMade"})]})]})};var Yn=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(D,{}),Object(A.jsx)(X,{}),Object(A.jsx)(bn,{}),Object(A.jsx)(Pn,{}),Object(A.jsx)(Kn,{}),Object(A.jsx)(Xn,{})]})};m.a.render(Object(A.jsx)(h.a.StrictMode,{children:Object(A.jsx)(Yn,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.684443f9.chunk.js.map