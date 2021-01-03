
// Scroll logic

const body = document.body;
console.log(body);
const scroll = document.querySelector(".scroller");
const scrollIcon = document.querySelector(".scrollIcon");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";

let lastScroll = 0;

window.addEventListener("scroll",() => {
    let currentScroll = window.pageYOffset;
    console.log("current page YOffset value:: ",lastScroll);
     if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
    }

    if(currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        //down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    }
    else if (currentScroll < lastScroll && body.classList.contains(scrollDown)){
        //up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
})

function smoothScroll(target,duration){
    var trgt = document.querySelector(target);
    var targetPosition = trgt.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition-startPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime===null){
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration);
        //window.scrollTo(x-axis,y-axis);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(timeElapsed,startPosition,distance,duration){
        timeElapsed /= duration/2;
        if(timeElapsed < 1) return distance / 2 * timeElapsed * timeElapsed + startPosition;
        timeElapsed--;
        return -distance / 2 * ( timeElapsed * ( timeElapsed - 2) -1) + startPosition;
     }
    requestAnimationFrame(animation);
}
 
 var section1 = document.querySelector('.section1');
section1.addEventListener('click',function(){
    smoothScroll('.projects',900);
});

 var section2 = document.querySelector('.section2');
section2.addEventListener('click',function(){
    smoothScroll('.section1',900);
});
var resume = document.querySelector(".Resume");
resume.addEventListener("click",function(){
    smoothScroll('.section3',800);
})

var burgerIcon = document.querySelector(".burgerIcon");
burgerIcon.addEventListener('click',function(){
    
})



