const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"

function onLoginBtnClick(){
    const username = loginInput.value;

    // if (username===''){
    //     alert("Please write your name.");
    // }else if (username.length>15){
    //     alert("Your name is too long.");
    // }

}

// 이벤트의 초기화(새로고침) 되는 것을 막아줌
// 여기에서 이벤트는 현재 submit 이므로 출력했을때 event는 SubmitEvent로 표기됨
// 이벤트가 click이었으면 이벤트는 ClickEvent로 표기
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.toggle(HIDDEN_CLASSNAME);
    greeting.innerHTML=`Hello ${username}`
    greeting.classList.toggle(HIDDEN_CLASSNAME)
}

loginButton.addEventListener('click',onLoginBtnClick);
loginForm.addEventListener('submit',onLoginSubmit);
