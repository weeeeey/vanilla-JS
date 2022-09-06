const clock = document.querySelector('h2#clock');

function getClock(){
    // 매초마다 새로운 date를 만들어서 출력하는거임
    const date = new Date(); 
    // get으로 시간을 따오면 number 타입임
    // 그런데 이럴경우 시간이 한자리수일때 03이 아닌 3만 출력됨
    // 이를 처리하기 위해 스트링에 있는 padstart를 사용 (스트링화) 
    // padStart(몇자리로 맞출지, 모자른건 어떤 문자로 채울지)
    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

// setInterval(sayHello,5000);
// setTimeout(sayHello,5000);
getClock();
setInterval(getClock,1000);
