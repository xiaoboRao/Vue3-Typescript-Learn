import "../css/style.css"
import "../css/img.css"
import "../font/iconfont.css"

import bgImg from "../img/zznh.png"

const divEle=document.createElement("div");
divEle.innerHTML="hello world"

//背景图片
const bgEle=document.createElement("div");
bgEle.className="bg-img"

//img标签
const imgEl=document.createElement("img");
imgEl.src=bgImg;

// i元素
const iEl = document.createElement('i');
iEl.className = "iconfont icon-ashbin";

document.body.appendChild(divEle)
document.body.appendChild(bgEle)

document.body.appendChild(imgEl)

document.body.appendChild(iEl)
