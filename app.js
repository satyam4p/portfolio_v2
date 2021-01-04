

/*typewriting effect logic --START */
function typewriting(){
    const texts = ['Learn.','Practice.','Create.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0,++index);

    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 300);
}());
}
typewriting();

/*typewriting logic --END */
/* scroll to top logic --START*/

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
/* scroll to top logic --END*/

/*smooth scroll logic --START*/
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
/*smooth scroll logic --END*/

var burgerIcon = document.querySelector(".burgerIcon");
burgerIcon.addEventListener('click',function(){
    
})



