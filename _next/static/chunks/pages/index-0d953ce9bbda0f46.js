(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5521)}])},5521:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return E}});var r=t(5893),i=t(7297),s=t(1163),c=t(7294),o=t(9521),a=t(587),d=t(5201),l=t(4565),u=t(292),h=t(2459),f=t(4154);function p(){let n=(0,i.Z)(["\n  p:first-child {\n    font-size: 26px;\n    color: #ff5555;\n    margin-bottom: 5px;\n  }\n  font-size: 16px;\n"]);return p=function(){return n},n}let x=()=>(0,r.jsxs)(m,{children:[(0,r.jsx)("p",{children:"내가 슬램덩크 캐릭터라면?"}),(0,r.jsx)("p",{children:"내 성격과 맞는 슬램덩크 캐릭터 찾기"}),(0,r.jsx)("a",{href:"https://www.webfreecounter.com/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{src:"https://www.cutercounter.com/hits.php?id=hvxfqkax&nd=1&style=1",alt:"website counter"})})]}),m=o.ZP.header.withConfig({componentId:"sc-ff70612e-0"})(p());function w(){let n=(0,i.Z)(["\n  position: fixed;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 33%;\n  min-width: 280px;\n  max-width: 80vw;\n  background: #d7baba;\n  flex-direction: column-reverse;\n  justify-content: center;\n  border-radius: 2vh;\n  height: 20px;\n  display: inline-flex;\n  -webkit-perspective: 1000;\n  overflow-x: hidden;\n  div {\n    z-index: 1;\n    float: left;\n    background: #ff5555;\n    height: 5vh;\n    max-height: 20px;\n    width: ","%;\n    border-radius: 2vh;\n    max-width: 100%;\n    position: absolute;\n    transition: width 0.5s;\n  }\n  span {\n    z-index: 2;\n    color: white;\n  }\n"]);return w=function(){return n},n}let g=n=>{let{idx:e}=n;return(0,r.jsxs)(j,{width:(e+1)/12*100,children:[(0,r.jsx)("div",{}),(0,r.jsxs)("span",{children:[e+1,"/12"]})]})},j=o.ZP.header.withConfig({componentId:"sc-d3b7b127-0"})(w(),n=>n.width);function b(){let n=(0,i.Z)(["\n  margin-top: 3vh;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 90vh;\n  align-items: center;\n  h1 {\n    color: #ff5555;\n  }\n  * {\n    transform: translateX(500px) scale(0.5);\n    opacity: 0;\n    word-break: keep-all;\n  }\n  img {\n    width: 550px;\n    height: 309px;\n    border-radius: 12px;\n    @media (max-width: 550px) {\n      width: 90vw;\n      height: 55vw;\n    }\n  }\n"]);return b=function(){return n},n}let v=n=>{let{idx:e,datas:t,goToNextStep:i}=n,s=(0,c.useRef)(null);return(0,c.useEffect)(()=>{(0,u.t)(s.current,"transform : translateX(0px) scale(1);\n         opacity : 1;",80)},[e]),(0,r.jsxs)(y,{ref:s,children:[(0,r.jsx)("img",{src:"".concat("https://cdn.jsdelivr.net/gh/hoonsbory/slamdunk-test@gh-pages","/images/q").concat(e+1,".png")}),(0,r.jsxs)("h1",{children:["Q",e+1]}),(0,r.jsx)("p",{children:t.question}),t.answer.map((n,e)=>(0,r.jsx)(l.R,{onClick:()=>i(s.current,n.char),children:n.text},e))]})},y=o.ZP.div.withConfig({componentId:"sc-62e0f53a-0"})(b());function k(){let n=(0,i.Z)(["\n  opacity: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > * {\n    transform: translateY(-100px) scale(0.7);\n    opacity: 0;\n  }\n  div {\n    background-image: url('./images/mainImg.jpg');\n    background-size: cover;\n    width: 500px;\n    height: 300px;\n    border-radius: 10px;\n    margin-bottom: 15px;\n    @media (max-width: 550px) {\n      width: 90vw;\n      height: 55vw;\n    }\n  }\n"]);return k=function(){return n},n}let _=()=>{let n=(0,s.useRouter)(),[e,t]=(0,c.useState)(!1),[i,o]=(0,c.useState)(0),p=(0,d.Z)(),m=(0,c.useRef)(null),w=(0,c.useRef)([a.Xf[i]]),j=(0,c.useRef)({I:0,E:0,N:0,S:0,T:0,F:0,P:0,J:0});(0,c.useEffect)(()=>{p&&(m.current.style.opacity="1",(0,u.t)(m.current,"transform : translateY(0px) scale(1);\n        opacity : 1;",120))},[p]);let b=n=>{w.current.pop(),a.Xf[n]&&w.current.push(a.Xf[n])},y=()=>{let n="",e=Object.entries(j.current);for(let t=0;t<8;t+=2)e[t][1]>=e[t+1][1]?n+=e[t][0]:n+=e[t+1][0];return n},k=async(e,t)=>{await (0,u.t)(e,u.C,80),o(n=>(b(n+1),n+1)),j.current[t]+=1,11===i&&n.push("/"+a.I8[y()])};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{description:"MBTI 테스트를 통해 내가 어떤 슬램덩크 캐릭터와 맞는 지 확인해보세요",title:"슬램덩크 MBTI 테스트",og_title:"슬램덩크 MBTI 테스트",query:"",img:"mainImg.jpg"}),(0,r.jsxs)("div",{children:[p||(0,r.jsx)(h.Z,{}),e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{idx:i}),w.current.map(n=>(0,r.jsx)(v,{idx:i,datas:n,goToNextStep:k},i))]}):(0,r.jsxs)(Z,{ref:m,children:[(0,r.jsx)(x,{}),(0,r.jsx)("div",{}),(0,r.jsx)(l.R,{onClick:async()=>{await (0,u.t)(m.current,u.C,80),t(!0)},children:"테스트 시작"})]})]})]})},Z=o.ZP.article.withConfig({componentId:"sc-ef9b026d-0"})(k());var I=t(7152);let C=()=>(0,r.jsx)(I.Z,{children:(0,r.jsx)(_,{})});var E=C}},function(n){n.O(0,[171,331,774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);