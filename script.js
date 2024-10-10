function loco() {
    gsap.registerPlugin(ScrollTrigger);

         const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

loco()

function navAnimation(){
    let lastScrollTop = 0;
const navbar = document.querySelector('.nav');

window.addEventListener('scroll', function () {
        let scrollY = document.documentElement.scrollTop 

    if (scrollY == 0 ) {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled-up', 'hidden');
    } else if ( scrollY>0 ) {
        navbar.classList.add('hidden');
        navbar.classList.remove('scrolled-up', 'transparent');
    } else {
        navbar.classList.add('scrolled-up');
        navbar.classList.remove('hidden', 'transparent');
    }

    lastScrollTop = scrollY;
    console.log(scrollY)
});

   var playbtn = document.querySelector(" .user") 
   var pause = document.querySelector(".upper")
   playbtn.addEventListener("mousemove",function(){
        playbtn.style.opacity ="0"
        pause.style.opacity = "1"
   })
   playbtn.addEventListener("mouseleave",function(){
       playbtn.style.opacity ="1"
       pause.style.opacity = "0"
})
   
    var food = document.querySelector("#food")
    var upper = document.querySelector(".food")
    food.addEventListener("mouseenter",function(){
        food.style.border = "1px solid black"
        food.style.borderRadius = "30px"
        var tl = gsap.timeline()
        tl.to(".food",{
            y:() => window.innerHeight * .9,
            duration:.5,
        })
    })
    upper.addEventListener("mouseleave",function(){
        food.style.border = "0px"
        gsap.to(".food",{
            y:() => window.innerHeight * -.9,
            duration:1,
            ease: "expoScale(0.5,7,none)",
        })
    })

    var info = document.querySelector("#info")
    var up = document.querySelector(".info")
    info.addEventListener("mouseenter",function(){
        food.style.border = "1px solid black"
        food.style.borderRadius = "30px"
        var tl = gsap.timeline()
        tl.to(".info",{
            y:() => window.innerHeight * .9,
            duration:.5,
        })
    })
    up.addEventListener("mouseleave",function(){
        food.style.border = "0px"
        gsap.to(".info",{
            y:() => window.innerHeight * -.9,
            duration:1,
            ease: "expoScale(0.5,7,none)",
        })
    })
}
navAnimation()

var mouse = document.querySelector(".mouse")
var mouse1 = document.querySelector(".mouse1")
var cont1 = document.querySelector(".cont-1")
var cont2 = document.querySelector(".cont-2")

cont1.addEventListener("mouseenter",function(){

    cont1.addEventListener("mousemove",function(dets){
        gsap.to(mouse,{
            x:() => window.innerWidth * -.25 + dets.x,
        })
    })
    cont1.addEventListener("mouseleave",function(dets){
        gsap.to(mouse,{
            x:0,
            y:0
        })
    })
})


cont2.addEventListener("mouseenter",function(){
    
    cont2.addEventListener("mousemove",function(dets){
        gsap.to(mouse1,{
            x:() => window.innerWidth * -.75 + dets.x,
        })
    })
    
    cont2.addEventListener("mouseleave",function(dets){
        gsap.to(mouse1,{
            x:0,
            y:0
        })
    })
})

console.log(document.scrollY)