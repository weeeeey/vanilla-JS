const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = 'username';

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
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginButton.addEventListener('click',onLoginBtnClick);

// localStorage에 username 이 저장되어 있다면 h1을 보여주고
// 그렇지 않을 경우 form 태그를 보여주는 것이 목표
const savedUswername = localStorage.getItem(USERNAME_KEY);
if (savedUswername==null){
    // Show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}else{
    // show greeting
    paintGreetings(loginInput.value);
}