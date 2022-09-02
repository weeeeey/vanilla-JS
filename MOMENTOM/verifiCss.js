'use strict';
const title = document.querySelector(".hello:first-child h1");
title.innerText = "Hello"

console.dir(title)
// title은 이제 object 이므로 안에 메서드 속성들이 있어서 접근 가능
// 그중에 style 메서드가 있음
// 이를 통해 css 속성 변경 가능

title.style.color = 'blue'
