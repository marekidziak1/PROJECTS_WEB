let box1= document.querySelector("#box1")
let box2= document.querySelector("#box2")
//setInterval(function() {console.log(box1.getBoundingClientRect().top)},1000)

box1.firstElementChild.classList.remove('inner');
box1.firstElementChild.classList.add('inner2');
box2.firstElementChild.classList.remove('inner');
box2.firstElementChild.classList.add('inner2');

let interval = setInterval(function(){box1.getBoundingClientRect().top <= 0?changeClass() : null},1000/60)

function changeClass(){
    box1.firstElementChild.classList.remove("inner2");
    box1.firstElementChild.classList.add("inner");
    clearInterval(interval);
}
let interval2=setInterval(function(){box2.getBoundingClientRect().top <= 0? startAnimation() : null}, 1000/60);

function startAnimation(){
    interval3 = setInterval(animation, 1000/60)
    clearInterval(interval2);
}
let pos = -50;
function animation(){
    pos += 1;
    box2.firstElementChild.style.left = pos+"%";
    if(pos >=50){
        clearInterval(interval3);
    }
}