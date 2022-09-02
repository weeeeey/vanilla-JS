"use strict";

// HTML 요소를 통해서 데이터 따오기
const a = document.getElementById('title');


// CSS 선택자를 이용해서 데이터 따오기 (All은 배열로 받아와서 접근할려면 forEach나 인덱스 이용)
const b = document.querySelectorAll("h1.hellos");

// 해당되는 선택자 첫번째만 따옴
const c = document.querySelector("h1.hellos");

// 하위 속성 따오기
const d = document.querySelector("h1.hellos .downer")

console.log(b)
console.log(d)
