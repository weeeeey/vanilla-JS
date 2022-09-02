'use strict';
const title = document.querySelector(".hello:first-child h1");
title.innerText = "Hello"

console.dir(title)
// title은 이제 object 이므로 안에 메서드 속성들이 있어서 접근 가능
// 그중에 style 메서드가 있음
// 이를 통해 css 속성 변경 가능



// 하지만 js 는 event(클릭 등등)을 리슨해야함
// 사용자가 함수를 호출하는게 아닌 js가 실행하길 원하므로 ()을 생략
title.addEventListener("click",handleTitleClick)

function handleTitleClick(){
    title.style.color = 'blue'
    console.log("title was clicked")
}
