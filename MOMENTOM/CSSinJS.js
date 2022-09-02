// JS를 이용해서 CSS 속성값을 건드는거
function handleMouseClickByJS(){
    if (this.style.color==='black'){
        this.style.color='orange'
    }
    else{
        this.style.color='black'
    }
}
// CSS를 이용해서 JS를 건들고 JS가 Html 건드는 법
function handleMouseClickByCSS(){
    this.className = (this.className==="")?"active":"";
}
function handleMouseClickByClassList(){
    const clickedClass = "active";
    // if (this.classList.contains(clickedClass)){
    //     this.classList.remove(clickedClass);
    // }else{
    //     this.classList.add(clickedClass);
    // }
    this.classList.toggle(clickedClass)
}

const a = document.querySelector(".hello h1");


// a.addEventListener('click',handleMouseClickByJS);
// a.addEventListener('click',handleMouseClickByCSS);
a.addEventListener('click',handleMouseClickByClassList);
