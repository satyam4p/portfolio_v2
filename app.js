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
    smoothScroll('.section2',1000);
});

 var section2 = document.querySelector('.section2');
section2.addEventListener('click',function(){
    smoothScroll('.section1',1000);
});
