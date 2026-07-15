/*=========================================
PREMIUM LOADER
=========================================*/

const loader = document.getElementById("loader");
const progress = document.getElementById("progressBar");
const value = document.getElementById("progressValue");

let percent = 0;

// Animate the progress bar
const loading = setInterval(() => {

    // Slow down near the end
    if (percent < 70) {
        percent += 4;
    } else if (percent < 90) {
        percent += 2;
    } else if (percent < 98) {
        percent += 1;
    }

    progress.style.width = percent + "%";
    value.textContent = percent + "%";

}, 50);

// Finish only when everything is loaded
window.addEventListener("load", () => {

    clearInterval(loading);

    percent = 100;
    progress.style.width = "100%";
    value.textContent = "100%";

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 600);

    }, 300);

});

/*=========================================
NAVBAR
=========================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/*=========================================
MOBILE MENU
=========================================*/

const menuBtn=document.getElementById("menuBtn");
const closeBtn=document.getElementById("closeMenu");
const mobileMenu=document.getElementById("mobileMenu");

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.add("active");
document.body.style.overflow="hidden";

});

closeBtn.addEventListener("click",()=>{

mobileMenu.classList.remove("active");
document.body.style.overflow="";

});

document.querySelectorAll("#mobileMenu a").forEach(link=>{

link.addEventListener("click",(e)=>{

const href=link.getAttribute("href");

// Internal section links
if(href.startsWith("#")){

e.preventDefault();

mobileMenu.classList.remove("active");
document.body.style.overflow="";

setTimeout(()=>{

document.querySelector(href)?.scrollIntoView({

behavior:"smooth",
block:"start"

});

},250);

}

// External links (Google Form)
else{

e.preventDefault();

mobileMenu.classList.remove("active");
document.body.style.overflow="";

setTimeout(()=>{

window.location.assign(href);

},200);

}

});

});

/*=========================================
BACK TO TOP
=========================================*/

const back=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

back.classList.add("show");

}else{

back.classList.remove("show");

}

});

back.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*=========================================
SMOOTH LINKS
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href==="#" || href.length<=1) return;

const target=document.querySelector(href);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*=========================================
MUSIC PLAYER
=========================================*/

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicButton");

const toast=document.createElement("div");

toast.className="music-toast";

toast.innerHTML="🎵 Now Playing • IGNITE Mix";

document.body.appendChild(toast);

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.classList.add("playing");

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2200);

}else{

music.pause();

musicBtn.classList.remove("playing");

}

});

/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements=document.querySelectorAll(

"section,.feature,.highlight-card,.experience-card,.pass-card,.contact-card"

);

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{

threshold:.15

});

revealElements.forEach(element=>{

element.classList.add("reveal");

revealObserver.observe(element);

});

/*=========================================
CURSOR GLOW
=========================================*/

if(window.innerWidth>992){

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.opacity=".9";

glow.style.left=e.clientX-125+"px";

glow.style.top=e.clientY-125+"px";

});

document.addEventListener("mouseleave",()=>{

glow.style.opacity="0";

});

}

/*=========================================
3D HERO IMAGE
=========================================*/

const hero=document.querySelector(".hero-image");

if(hero && window.innerWidth>768){

hero.addEventListener("mousemove",e=>{

const rect=hero.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*14;

const rotateX=((y/rect.height)-0.5)*-14;

hero.style.transform=

`perspective(1400px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 translateY(-10px)`;

});

hero.addEventListener("mouseleave",()=>{

hero.style.transform=

"perspective(1400px) rotateX(0deg) rotateY(0deg)";

});

}

/*=========================================
BUTTON RIPPLE
=========================================*/

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

const rect=this.getBoundingClientRect();

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";
ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=========================================
PARALLAX HERO
=========================================*/

const heroImage=document.querySelector(".hero-image");
const glow=document.querySelector(".hero-glow");

window.addEventListener("scroll",()=>{

    if(window.innerWidth<=768) return;

    const scroll=window.pageYOffset;

    if(heroImage){
        heroImage.style.transform=`translateY(${scroll*0.05}px)`;
    }

    if(glow){
        glow.style.transform=
        `translate(-50%,-50%) translateY(${scroll*0.08}px)`;
    }

});
