import{o as e,c as t,a as n,t as a,r as l,b as o,n as r,d as s,w as i,e as c,f as u,g as d,u as p,h as m,F as g,i as v}from"./vendor.7c0dc445.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/lottery/assets/list.90beeac8.svg"}),f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/lottery/assets/message.84fa0cc4.svg"}),k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/lottery/assets/setting.61c5c78b.svg"}),b=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/lottery/assets/star.fd9a5cac.svg"});const h={class:"flex items-center mb-4"},w=["src"],D={class:"text-xl font-black ml-2"},x=["rows","placeholder","value","readonly"],C={class:"text-right h-6"},S={props:{title:{type:String,default:""},placeholder:{type:String,default:""},icon:{type:String,default:""},content:{type:String,default:""},readonly:{type:Boolean,default:!1},rows:{type:String,default:"10"},remark:{type:String,default:""}},setup:o=>(r,s)=>{return e(),t("section",null,[n("div",h,[n("img",{src:(i=o.icon,{"./img/list.svg":y,"./img/message.svg":f,"./img/setting.svg":k,"./img/star.svg":b}[`./img/${i}`].default)},null,8,w),n("h2",D,a(o.title),1),l(r.$slots,"subTitle")]),n("textarea",{class:"\n        w-full\n        rounded-md\n        outline-none\n        p-4\n        resize-none\n        shadow-xl\n        border border-transparent\n        transition\n        focus:border-blue-500\n      ",cols:"30",rows:o.rows,placeholder:o.placeholder,value:o.content,readonly:o.readonly,onInput:s[0]||(s[0]=e=>r.$emit("update:content",e.target.value))},null,40,x),n("p",C,a(o.remark),1)]);var i}},$={props:{sectionData:{type:Object,default:()=>({})}},setup:t=>(n,a)=>(e(),o(S,{icon:t.sectionData.icon,title:t.sectionData.title,placeholder:t.sectionData.placeholder,content:t.sectionData.key.value,"onUpdate:content":a[0]||(a[0]=e=>t.sectionData.key.value=e),rows:"2"},null,8,["icon","title","placeholder","content"]))},_={props:{sectionData:{type:Object,default:()=>({})}},setup:t=>(n,a)=>(e(),o(S,{icon:t.sectionData.icon,title:t.sectionData.title,placeholder:t.sectionData.placeholder,remark:t.sectionData.remark.value,"onUpdate:remark":a[0]||(a[0]=e=>t.sectionData.remark.value=e),content:t.sectionData.key.value,"onUpdate:content":a[1]||(a[1]=e=>t.sectionData.key.value=e)},null,8,["icon","title","placeholder","remark","content"]))},j={props:{content:{type:String,default:""},custom:{type:String,default:""}},setup:n=>(l,o)=>(e(),t("button",{class:r(["text-center text-white py-2 px-10 rounded-3xl shadow-sm transition",n.custom]),onClick:o[0]||(o[0]=e=>l.$emit("clickHandle"))},a(n.content),3))},z={class:"flex justify-evenly mt-2"},O={props:{sectionData:{type:Object,default:()=>({})},titleContent:{type:String,default:""},prizeContent:{type:String,default:""},peopleContent:{type:String,default:""},isLoading:{type:Boolean,default:!1},countdown:{type:Number,default:5}},emits:["createPeopleList","draw","updateRemark","updateLoading"],setup(a,{emit:l}){const o=a,r=()=>{const e=window.prompt("請輸入抽獎人數",10);if(null===e)return;const t=Number(e);if(/^[0-9]*[1-9][0-9]*$/.test(t)){let e="";for(let n=1;n<=t;n++)e=e+n+"\n";l("createPeopleList",e)}else window.alert("請輸入正確數字")},c=(e=!0)=>{var t,n;if(!u())return;const{titleContent:a,prizeContent:r,peopleContent:s,countdown:i}=o,c=null==(t=null==r?void 0:r.split("\n"))?void 0:t.filter((e=>e.trim())),p=c.map((e=>Number(e.split(",")[1])||1)),m=c.map((e=>e.split(",")[0])),g=p.reduce(((e,t)=>e+t),0),v=null==(n=null==s?void 0:s.split("\n"))?void 0:n.filter((e=>e.trim())),y=v.length;if(g>y)return void window.alert("獎項數目超過待抽人數，請重新填寫");l("draw",""),l("updateLoading",!0);const f=`預計抽出${p.length}個獎項，共${g}個名額`,k=`共有${y}個人參與`;l("updateRemark",{prizeRemark:f,peopleRemark:k});const b=e?" (測試中)":"";let h=`【${a}】${b}\n=============================\n`;m.forEach(((e,t)=>{h=`${h}${e}：\n`;for(let n=0;n<p[t];n++){const e=v.length,t=d(e);h=`${h}${v[t]}${b}\n`,v.splice(t,1)}h=`${h}\n`})),setTimeout((()=>{l("draw",h),l("updateRemark",{prizeRemark:f,peopleRemark:k}),l("updateLoading",!1)}),1e3*i)},u=()=>{const{titleContent:e,prizeContent:t,peopleContent:n}=o,a={title:{isValid:!!e.trim(),message:"請輸入抽獎主題"},prize:{isValid:!!t.trim(),message:"請輸入獎項設定"},list:{isValid:!!n.trim(),message:"請輸入待抽名單"}};for(const l of Object.keys(a))if(!a[l].isValid)return window.alert(a[l].message),!1;return!0},d=e=>Math.floor(Math.random()*e);return(l,o)=>(e(),t("div",null,[s(S,{icon:a.sectionData.icon,title:a.sectionData.title,placeholder:a.sectionData.placeholder,remark:a.sectionData.remark.value,content:a.sectionData.key.value,"onUpdate:content":o[0]||(o[0]=e=>a.sectionData.key.value=e)},{subTitle:i((()=>[n("button",{class:"\n            bg-green-100\n            py-1\n            px-4\n            ml-4\n            rounded-sm\n            shadow-sm\n            text-sm\n            hover:bg-green-300\n            transition\n          ",onClick:r}," 產生名單編號 ")])),_:1},8,["icon","title","placeholder","remark","content"]),n("div",z,[s(j,{content:"試抽",custom:"bg-green-400 hover:bg-green-500",onClickHandle:c}),s(j,{content:"抽獎",custom:"bg-green-400 hover:bg-green-500",onClickHandle:o[1]||(o[1]=e=>c(!1))})])]))}},L={class:"flex justify-evenly mt-2"},R=["href","download"],T={props:{sectionData:{type:Object,default:()=>({})},titleContent:{type:String,default:""}},setup(a){const l=a,o=async()=>{navigator.clipboard.writeText(l.sectionData.key.value).then((()=>alert("複製成功"))).catch((()=>alert("複製失敗")))};return(l,r)=>(e(),t("div",null,[s(S,{icon:a.sectionData.icon,title:a.sectionData.title,placeholder:a.sectionData.placeholder,content:a.sectionData.key.value,"onUpdate:content":r[0]||(r[0]=e=>a.sectionData.key.value=e),readonly:""},null,8,["icon","title","placeholder","content"]),n("div",L,[s(j,{content:"複製",custom:"bg-green-400 hover:bg-green-500",onClickHandle:o}),n("a",{class:"\n          bg-green-400\n          hover:bg-green-500\n          text-center text-white\n          py-2\n          px-10\n          rounded-3xl\n          shadow-sm\n          transition\n        ",href:`data:text/plain;charset=utf-8,${a.sectionData.key.value}`,download:a.titleContent},"下載",8,R)])]))}},M={class:"\n      fixed\n      top-0\n      left-0\n      w-full\n      min-h-full\n      bg-black bg-opacity-50\n      flex\n      items-center\n      justify-center\n      text-white\n      md:text-10xl\n      text-9xl\n    "},N={class:"animate-ping"},U={props:{countdown:{type:Number,default:5}},setup(l){const o=l,r=c("");u((()=>{r.value=setInterval(i,1e3)})),d((()=>{clearInterval(r.value)}));let s=c(o.countdown);const i=()=>{s.value<=0?clearInterval(r.value):s.value=s.value-1};return(l,o)=>(e(),t("div",M,[n("span",N,a(p(s)),1)]))}},H=n("h1",{class:"bg-green-500 text-center p-4 text-4xl font-black text-white"}," 簡易抽獎工具 ",-1),I={class:"flex mt-2 md:mr-8 justify-evenly md:justify-end"},P={class:"md:grid grid-cols-2 gap-4 p-6"};v({setup(a){const l={icon:"message.svg",title:"標題",placeholder:"在此輸入抽獎標題",key:c("")},r={icon:"setting.svg",title:"獎項清單",placeholder:"說明：一行一獎項，可多種獎項。\n格式：獎品名稱,獎品數量(可省略，預設為1)，也可以指輸入數字(數量)",key:c(""),remark:c("")},i={key:"list",icon:"list.svg",title:"待抽獎人名單",placeholder:"說明：一行一筆資料，可按下【產生名單編號】",key:c(""),remark:c("")},u={key:"result",icon:"star.svg",title:"中獎結果",placeholder:"",key:c("")},d=()=>{l.key.value="年末大抽獎，各式獎項等你來拿。",r.key.value="頭獎-跑車一台\n二獎-GOGORO一台\n三獎-現金三萬元\n小獎-現金三千,5\n",i.key.value="王先生\n陳小姐\n廖先生\n李小姐\n范小姐\n蘇先生\n陳先生\n張先生"},p=({prizeRemark:e=e.remark.value,peopleRemark:t=i.remark.value})=>{r.remark.value=e,i.remark.value=t},v=e=>{b.value=e},y=e=>{u.key.value=e},f=e=>{i.key.value=e},k=()=>{l.key.value="",r.key.value="",i.key.value="",u.key.value="",r.remark.value="",i.remark.value=""},b=c(!1);return(a,c)=>(e(),t(g,null,[H,n("div",I,[s(j,{content:"產生範例",custom:"bg-blue-400 hover:bg-blue-500 mr-8",onClickHandle:d}),s(j,{content:"全部清除",custom:"bg-red-400 hover:bg-red-500",onClickHandle:k})]),n("section",P,[s($,{sectionData:l,class:"mb-4 md:mb-0"}),s(_,{sectionData:r,class:"mb-4 md:mb-0"}),s(O,{class:"mb-4 md:mb-0",sectionData:i,titleContent:l.key.value,prizeContent:r.key.value,peopleContent:i.key.value,countdown:5,onCreatePeopleList:f,onDraw:y,onUpdateRemark:p,onUpdateLoading:v},null,8,["titleContent","prizeContent","peopleContent"]),s(T,{class:"mb-4 md:mb-0",sectionData:u,titleContent:l.key.value},null,8,["titleContent"])]),b.value?(e(),o(U,{key:0,countdown:5})):m("",!0)],64))}}).mount("#app");
