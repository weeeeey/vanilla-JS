const images = [
    "bg1.png","bg2.png","bg3.jpg"
];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);
// append 는 맨 뒤에 태그 추가
// prepend 하면 맨 앞에 태그 추가