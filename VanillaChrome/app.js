const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

const link = document.querySelector('a')
function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username)

    // if (username===''){
    //     alert("Please write your name.");
    // }else if (username.length>15){
    //     alert("Your name is too long.");
    // }

}

// 이벤트의 초기화(새로고침) 되는 것을 막아줌
function onLoginSubmit(event){
    
    event.preventDefault();
    console.log(event);
}

function handleLinkClick(event){
    alert("clicked!");
    event.preventDefault(); //클릭 후 prevent를 해서 브라우저 기본 동작을 멈춤. 따라서 링크 이동 안하게 됨
}
loginButton.addEventListener('click',onLoginBtnClick);
loginForm.addEventListener('submit',onLoginSubmit);

link.addEventListener('click',handleLinkClick);