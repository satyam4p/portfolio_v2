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
let experienceCards = document.getElementsByClassName("experience-list");
for(let card of experienceCards){
    card.addEventListener('mouseover',(e)=>{
        let currentRoleEle = card.querySelector('.current-role')
        currentRoleEle.classList.add('active-role')
    })
    card.addEventListener('mouseout',(e)=>{
        let currentRoleEle = card.querySelector('.current-role')
        currentRoleEle.classList.remove('active-role')
    })
}
let aboutSection = document.querySelector("#about-section");
let aboutWatcher = document.createElement('div');
aboutWatcher.setAttribute('data-about-section-watcher','');
aboutSection.before(aboutWatcher);

const aboutObserver = new IntersectionObserver((entries)=>{
    about.classList.toggle('span-grow', entries[0].isIntersecting);
});
aboutObserver.observe(aboutWatcher);

let experienceSection = document.querySelector('#experience-section');
let experienceWatcher = document.createElement('div');
experienceWatcher.setAttribute('data-experience-wathcer','');
experienceSection.before(experienceWatcher);

const experienceObserver = new IntersectionObserver((entries)=>{
    experience.classList.toggle('span-grow', entries[0].isIntersecting);
})

experienceObserver.observe(experienceWatcher)

let projectsSection = document.querySelector('#projects-section');
let projectsWatcher = document.createElement('div');
projectsWatcher.setAttribute('data-project-watcher','');
projectsSection.before(projectsWatcher);

const projectsObserver = new IntersectionObserver((entries)=>{
    projects.classList.toggle('span-grow', entries[0].isIntersecting);
})

projectsObserver.observe(projectsWatcher);
