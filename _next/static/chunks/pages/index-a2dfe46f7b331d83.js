(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5521)}])},5521:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return X}});var i=t(5893),r=t(7297),s=t(1163),c=t(7294),o=t(9521),a=t(587),d=t(5201),l=t(4565),h=t(292),u=t(6788),p=t(4154);function x(){let n=(0,r.Z)(["\n  p:first-child {\n    font-size: 26px;\n    color: #ff5555;\n    margin-bottom: 5px;\n  }\n  font-size: 16px;\n"]);return x=function(){return n},n}let f=()=>(0,i.jsxs)(w,{children:[(0,i.jsx)("p",{children:"내가 슬램덩크 캐릭터라면?"}),(0,i.jsx)("p",{children:"내 성격과 맞는 슬램덩크 캐릭터 찾기"}),(0,i.jsx)("a",{href:"https://www.webfreecounter.com/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)("img",{src:"https://www.cutercounter.com/hits.php?id=hvxfqkax&nd=1&style=1",alt:"website counter"})})]}),w=o.ZP.header.withConfig({componentId:"sc-ff70612e-0"})(x());function m(){let n=(0,r.Z)(["\n  position: fixed;\n  top: 3vh;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 33%;\n  min-width: 280px;\n  max-width: 80vw;\n  background: #d7baba;\n  flex-direction: column-reverse;\n  justify-content: center;\n  border-radius: 2vh;\n  height: 20px;\n  display: inline-flex;\n  -webkit-perspective: 1000;\n  overflow-x: hidden;\n  div {\n    z-index: 1;\n    float: left;\n    background: #ff5555;\n    height: 5vh;\n    max-height: 20px;\n    width: ","%;\n    border-radius: 2vh;\n    max-width: 100%;\n    position: absolute;\n    transition: width 0.5s;\n  }\n  span {\n    z-index: 2;\n    color: white;\n  }\n"]);return m=function(){return n},n}let g=n=>{let{idx:e}=n;return(0,i.jsxs)(j,{width:(e+1)/12*100,children:[(0,i.jsx)("div",{}),(0,i.jsxs)("span",{children:[e+1,"/12"]})]})},j=o.ZP.header.withConfig({componentId:"sc-9e8d5810-0"})(m(),n=>n.width);var v=t(2459);function b(){let n=(0,r.Z)(["\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 80vh;\n  align-items: center;\n  h1 {\n    color: #ff5555;\n  }\n  p,\n  h1 {\n    margin: 0;\n  }\n  > * {\n    transform: translateX(500px) scale(0.5);\n    opacity: 0;\n    word-break: keep-all;\n  }\n  > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 550px;\n    height: 309px;\n    border-radius: 12px;\n    @media (max-width: 550px) {\n      width: 90vw;\n      height: 55vw;\n    }\n  }\n  img {\n    width: 550px;\n    height: 309px;\n    border-radius: 12px;\n    @media (max-width: 550px) {\n      width: 90vw;\n      height: 55vw;\n    }\n  }\n"]);return b=function(){return n},n}let y=n=>{let{idx:e,datas:t,goToNextStep:r}=n,s=(0,d.Z)(["q".concat(e+1,".png")]),o=(0,c.useRef)(null);return(0,c.useEffect)(()=>{(0,h.t)(o.current,"transform : translateX(0px) scale(1);\n         opacity : 1;",80)},[e]),(0,i.jsxs)(k,{ref:o,children:[(0,i.jsx)("div",{children:s?(0,i.jsx)("img",{src:"".concat("https://cdn.jsdelivr.net/gh/hoonsbory/slamdunk-test@gh-pages","/images/q").concat(e+1,".png")}):(0,i.jsx)(v.Z,{})}),(0,i.jsxs)("h1",{children:["Q",e+1]}),(0,i.jsx)("p",{children:t.question}),t.answer.map((n,e)=>(0,i.jsx)(l.R,{onClick:()=>r(o.current,n.char),children:n.text},e))]})},k=o.ZP.div.withConfig({componentId:"sc-908f895e-0"})(b());function Z(){let n=(0,r.Z)(["\n  opacity: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > * {\n    transform: translateY(-100px) scale(0.7);\n    opacity: 0;\n  }\n  div {\n    background-image: url('./images/mainImg.jpg');\n    background-size: cover;\n    width: 500px;\n    height: 300px;\n    border-radius: 10px;\n    margin-bottom: 15px;\n    @media (max-width: 550px) {\n      width: 90vw;\n      height: 55vw;\n    }\n  }\n"]);return Z=function(){return n},n}let _=()=>document.documentElement.style.setProperty("--vh","".concat(.01*window.innerHeight,"px")),E=()=>{let n=(0,s.useRouter)(),[e,t]=(0,c.useState)(!1),[r,o]=(0,c.useState)(0),x=(0,d.Z)(),w=(0,c.useRef)(null),m=(0,c.useRef)([a.Xf[r]]),j=(0,c.useRef)({I:0,E:0,N:0,S:0,T:0,F:0,P:0,J:0});(0,c.useEffect)(()=>{_(),window.addEventListener("resize",_)},[]),(0,c.useEffect)(()=>{x&&(w.current.style.opacity="1",(0,h.t)(w.current,"transform : translateY(0px) scale(1);\n        opacity : 1;",120))},[x]);let v=n=>{m.current.pop(),a.Xf[n]&&m.current.push(a.Xf[n])},b=()=>{let n="",e=Object.entries(j.current);for(let t=0;t<8;t+=2)e[t][1]>=e[t+1][1]?n+=e[t][0]:n+=e[t+1][0];return n},k=async(e,t)=>{await (0,h.t)(e,h.C,80),o(e=>e>=11?(n.push("/"+a.I8[b()]),e):(v(e+1),e+1)),j.current[t]+=1};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.Z,{description:"MBTI 테스트를 통해 내가 어떤 슬램덩크 캐릭터와 맞는 지 확인해보세요",title:"슬램덩크 MBTI 테스트",og_title:"슬램덩크 MBTI 테스트",query:"",img:"mainImg.jpg"}),(0,i.jsxs)("div",{children:[x||(0,i.jsx)(u.Z,{}),e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{idx:r}),m.current.map(n=>(0,i.jsx)(y,{idx:r,datas:n,goToNextStep:k},r))]}):(0,i.jsxs)(I,{ref:w,children:[(0,i.jsx)(f,{}),(0,i.jsx)("div",{}),(0,i.jsx)(l.R,{onClick:async()=>{await (0,h.t)(w.current,h.C,80),t(!0)},children:"테스트 시작"})]})]})]})},I=o.ZP.article.withConfig({componentId:"sc-223e6428-0"})(Z());var C=t(7152);let P=()=>(0,i.jsx)(C.Z,{children:(0,i.jsx)(E,{})});var X=P}},function(n){n.O(0,[171,70,774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);