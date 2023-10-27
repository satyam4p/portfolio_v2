"use strict";


let scrollwatcher = document.createElement('div');
scrollwatcher.setAttribute('data-scroll-watcher','');

// nav.before(scrollwatcher);
// const navObserver = new IntersectionObserver((entries)=>{
//     // nav.classList.toggle('sticking', !entries[0].isIntersecting);
// },{rootMargin: "150px 0px 0px 0px"})
// navObserver.observe(scrollwatcher);

let about = document.querySelector("#about");
let experience = document.querySelector("#experience");
let projects = document.querySelector("#projects");
const navElemnts = [about, experience, projects];
for(let item of navElemnts){
    item.addEventListener("mouseover",(e)=>{
        let childSpan = document.querySelector(`#${item.id} span`);
        childSpan.classList.add("span-grow")
    })
    item.addEventListener("mouseout",(e)=>{
        let childSpan = document.querySelector(`#${item.id} span`);
        childSpan.classList.remove("span-grow")
    })
}

