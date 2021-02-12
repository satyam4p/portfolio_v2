
// const url = "./Resume.pdf";

// let pdfDoc = null,
//     pageNum = 1,
//     pageIsRendering = false,
//     pageNumIsPending = null;

// const scale = 0.9,
//     canvas =document.querySelector('#pdf-render'),
//     ctx = canvas.getContext('2d');

// // Render the page

// const renderPage = num =>{
//     pageIsRendering = true;

//     //get page
//     pdfDoc.getPage(num).then(page => {
//         // console.log(page);
//         //set scale
//         const viewport = page.getViewport({scale});
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;
//         const renderCtx = {
//             canvasContext:ctx,
//             viewport
//         }

//         page.render(renderCtx).promise.then(()=>{
//             pageIsRendering = false;
//             if(pageNumIsPending !== null){
//                 renderPage(pageNumIsPending);
//                 pageNumIsPending = null;
//             }
//         });
//         //output current page
//         document.querySelector('#page-num').textContent = num;
//     });
// }
// //check for pages rendering
// const queueRenderPage = num =>{
//     if(pageIsRendering){
//         pageNumIsRendering = num;

//     }
//     else{
//         renderPage(num);
//     }
// }
// //show prev page
// const showPreviousPage =()=>{
//     if(pageNum <= 1){
//         return;
//     }
//     pageNum--;
//     queueRenderPage(pageNum);
// }
// //show next page
// const showNextPage =()=>{
//     if(pageNum >= pdfDoc.numPages){
//         return;
//     }
//     pageNum++;
//     queueRenderPage(pageNum);
// }
// //get document
// var pdfjsLib = window['pdfjs-dist/build/pdf'];

// // The workerSrc property shall be specified.
// pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

// pdfjsLib.getDocument(url).promise.then(pdfDoc_ =>{
//     pdfDoc = pdfDoc_;
//     // console.log(pdfDoc);
//     document.querySelector('#page-count').textContent = pdfDoc.numPages;
    
//     renderPage(pageNum)

// });
// //button events
// document.querySelector('#prev-page').addEventListener("click",showPreviousPage);
// document.querySelector('#next-page').addEventListener("click",showNextPage);

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
 var aboutLink = document.querySelector('.aboutLink');
 aboutLink.addEventListener('click',function(){
     console.log("about lnk clicked");
     smoothScroll('.about',900);
 })
/*smooth scroll logic --END*/

var burgerIcon = document.querySelector(".burgerIcon");
// var overlay = document.querySelector(".overlay");
burgerIcon.addEventListener('click',function(){
    body.classList.toggle("overlay");
    body.classList.toggle("active");
})



