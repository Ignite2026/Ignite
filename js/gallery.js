    /*=========================================
    IGNITE V2 GALLERY
    =========================================*/

    const galleryItems=document.querySelectorAll(".gallery-item img");
    const lightbox=document.getElementById("lightbox");
    const lightboxImage=document.getElementById("lightboxImage");

    const prevBtn=document.getElementById("prevImage");
    const nextBtn=document.getElementById("nextImage");
    const closeLightboxBtn=document.getElementById("closeLightbox");

    const storyBar=document.querySelector(".story-bar");

    let currentIndex=0;
    let hideControlsTimer;

    /*=========================================
    OPEN IMAGE
    =========================================*/

    function openImage(index){

    currentIndex=index;

    lightboxImage.src=galleryItems[currentIndex].src;

    lightbox.classList.add("active");

    document.body.style.overflow="hidden";

    restartProgress();

    showControls();

    }

    /*=========================================
    CLOSE
    =========================================*/

    function closeImage(){

    lightbox.classList.remove("active");

    document.body.style.overflow="";

    stopProgress();

    }

    /*=========================================
    NEXT
    =========================================*/

    function nextImage(){

    currentIndex++;

    if(currentIndex>=galleryItems.length){

    currentIndex=0;

    }

    lightboxImage.src=galleryItems[currentIndex].src;

    restartProgress();

    }

    /*=========================================
    PREVIOUS
    =========================================*/

    function previousImage(){

    currentIndex--;

    if(currentIndex<0){

    currentIndex=galleryItems.length-1;

    }

    lightboxImage.src=galleryItems[currentIndex].src;

    restartProgress();

    }

    /*=========================================
    EVENTS
    =========================================*/

    galleryItems.forEach((image,index)=>{

    image.addEventListener("click",()=>{

    openImage(index);

    });

    });

    nextBtn.onclick=nextImage;

    prevBtn.onclick=previousImage;

    closeLightboxBtn.onclick=closeImage;

    /*=========================================
    CLICK OUTSIDE
    =========================================*/

    lightbox.addEventListener("click",e=>{

    if(e.target===lightbox){

    closeImage();

    }

    });

    /*=========================================
    KEYBOARD
    =========================================*/

    document.addEventListener("keydown",e=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowRight"){

    nextImage();

    }

    if(e.key==="ArrowLeft"){

    previousImage();

    }

    if(e.key==="Escape"){

    closeImage();

    }

    });

    /*=========================================
    SWIPE
    =========================================*/

    let touchStartX=0;
    let touchEndX=0;

    lightbox.addEventListener("touchstart",e=>{

    touchStartX=e.changedTouches[0].clientX;

    });

    lightbox.addEventListener("touchend",e=>{

    touchEndX=e.changedTouches[0].clientX;

    let distance=touchStartX-touchEndX;

    if(Math.abs(distance)<60) return;

    if(distance>0){

    nextImage();

    }else{

    previousImage();

    }

    });

    /*=========================================
    AUTO HIDE CONTROLS
    =========================================*/

    function showControls(){

    clearTimeout(hideControlsTimer);

    const controls=document.querySelectorAll(

    "#prevImage,#nextImage,#closeLightbox,.story-header"

    );

    controls.forEach(control=>{

    control.style.opacity="1";

    });

    hideControlsTimer=setTimeout(()=>{

    controls.forEach(control=>{

    control.style.opacity=".15";

    });

    },2500);

    }

    lightbox.addEventListener("mousemove",showControls);

    lightbox.addEventListener("touchstart",showControls);

    /*=========================================
    STORY BAR
    =========================================*/

    function restartProgress(){

    storyBar.style.animation="none";

    storyBar.offsetHeight;

    storyBar.style.animation="storyProgress 6s linear forwards";

    }

    function stopProgress(){

    storyBar.style.animation="none";

    }

    /*=========================================
    DOUBLE TAP
    =========================================*/

    let lastTap=0;

    lightboxImage.addEventListener("touchend",()=>{

    const now=Date.now();

    if(now-lastTap<300){

    closeImage();

    }

    lastTap=now;

    });
