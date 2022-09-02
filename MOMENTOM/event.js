'use strict';
const title = document.querySelector(".hello:first-child h1");
title.innerText = "Hello"

console.dir(title)
// title은 이제 object 이므로 안에 메서드 속성들이 있어서 접근 가능
// 그중에 style 메서드가 있음
// 이를 통해 css 속성 변경 가능



// 하지만 js 는 event(클릭 등등)을 리슨해야함
// 가능한 이벤트들은 console.dir을 통해 on으로 시작하는것들을 검색하면됨
// 사용자가 함수를 호출하는게 아닌 js가 실행하길 원하므로 ()을 생략

// 1
title.addEventListener("click",handleTitleClick);
// event를 리슨할 수 있는 또다른 방법
// title.onclick=handleTitleClick
// 2
title.addEventListener("mouseenter",handleMouseEnter);
// title.onmouseenter = handleMouseEnter
// 3
title.addEventListener("mouseleave",handleMouseELeave);
// title.onmouseleave = handleMouseELeave


// 1
function handleTitleClick(){
    title.style.color = 'blue';
    console.log("title was clicked");
}
// 2
function handleMouseEnter(){
    this.innerText="Hello";
}
// 3
function handleMouseELeave(){
    this.innerText="Mouse leave here";
}



// window 를 이용해서 화면 자체 속성 변경시켜줄 수 있음

function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
    // body나 head 만 document로 직접 접근 가능 (나머지는 querySelector)
}

function handleWindowCopy(){
    alert("copier")
}
function handleWindowOffline(){
    alert("SoS no Wifi")
}
function handleWindowOnline(){
    console.log("on Wifi")
}

// 화면의 크기가 변하면 백그라운드 색이 변환
window.addEventListener("resize",handleWindowResize)
window.addEventListener("copy",handleWindowCopy)
window.addEventListener("offline",handleWindowOffline)
window.addEventListener("online",handleWindowOnline)
