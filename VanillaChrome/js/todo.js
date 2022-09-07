const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = []; //새로고침 하더라도 toDo 리스트가 사라지지 않게 하기 위함. (로컬에 저장할거)
// 로컬 저장소에는 무조건 스트링만 저장하게 됨
const TODOS_KEY = "todos";

function saveToDos(){
    // 무엇이든 스트링화 시키는 JSON.strigfy()
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDO(event){
    // event를 통해 path를 알 수 있음(event를 출력한 후 그 안에서 target을 찾기)
    // target 에는 parentElement 가 있음 ( 타겟은 선택된 것의 html 요소를 보여줌)
    const li = event.target.parentElement; //해당 이벤트(클릭된 버튼)의 정확한 위치, 그곳의 부모
    li.remove();
}

function paintToDo(newToDo){
    // ul 안에 li 생성해서 todo list 추가할거
    // 나중에 선택한 리스트를 선택하기 위해서 button을 추가할거임
    // 한줄에 리스트 쓰고 옆에 버튼 쓸거니 리스트 스트링은 span에 넣을거
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    toDoList.appendChild(li);
    
    span.innerText=newToDo;
    li.appendChild(span);

    button.innerText='X';
    li.appendChild(button);
    button.addEventListener('click',deleteToDO);


}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newToDo);
    saveToDos();
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){ //null 이 아니라면
    const parseToDos = JSON.parse(savedToDos); //문자열로 변환한걸 원상복구
    toDos=parseToDos;
    parseToDos.forEach(paintToDo);
}

