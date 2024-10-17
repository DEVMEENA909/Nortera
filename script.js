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

    var nav = document.querySelector('.nav')
    let lastScrollTop = 0;
    locoScroll.on('scroll',(obj) =>{
         let scrollY = obj.scroll.y
         if(scrollY==0){
            nav.style.backgroundColor = "transparent"
            nav.style.transform = "translate(0%)"
         }
         else if(scrollY>=lastScrollTop){
            nav.style.transform = 'translateY(-110%)'
         }
         else if(scrollY<lastScrollTop){
             nav.style.backgroundColor = "white"
             nav.style.transform = "translateY(0%)"
         }
        //  console.log(scrollY)
         lastScrollTop = scrollY;
    })

}
loco()

function navAnimation(){
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
        tl.to(upper,{
            y:() => window.innerHeight * .9,
            duration:.5,
        })
    })
    upper.addEventListener("mouseleave",function(){
        food.style.border = "0px"
        gsap.to(upper,{
            y:() => window.innerHeight * -.9,
            duration:1,
            ease: "expoScale(0.5,7,none)",
            stagger:.2,
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

function mouseAnimation(){
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
    cont1.addEventListener("mouseleave",function(){
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
    
    cont2.addEventListener("mouseleave",function(){
        gsap.to(mouse1,{
            x:0,
            y:0
        })
    })
})

}
mouseAnimation();

function gsapAnimations(){

    var tl = gsap.timeline()
    gsap.from(".logo , .nav-right , .nav-center",{
        y:-100,
        duration:.7
    })
    gsap.from(".page1 .img-div img",{
        y:50,
        scale:.9,
        duration:.9
    })
    gsap.from(".img-div h3",{
        y:-300,
        duration:.6,
        opacity:0
    })
    gsap.from(".low-1 #lef",{
        y:-200,
        duration:.6,
    })
    gsap.from(".low-1 #rig",{
        y:170,
        duration:.7,
    })
    gsap.from(".page2 .leftbox",{
        height:0,
        duration:2,
        scrollTrigger:{
            trigger:".page2 ",
            scroller:".main",
            start:"top 70%",
            end:"top 120%",
        }
    })
    gsap.from(".page3 h2",{
        opacity:0,
        y:120,
        duration:1,
        scrollTrigger:{
            trigger:".page3",
            scroller:".main",
            start:"top 50%",
            end:"top 90%",
        }
    })
    gsap.from(".page3 .move",{
        y:100,
        opacity:0,
        scrollTrigger:{
            trigger:".page3 .hover-box",
            scroller:".main",
            start:"top 60%",
        }
    })
    gsap.from(".page6 .new #lef-1",{
        y:150,
        opacity:0,
        scrollTrigger:{
            trigger:".page6",
            scroller:".main",
            start:"top 80%",
            end:"top 60%",
        }
    })
    gsap.from(".page6 .new #rig-1",{
        y:-150,
        opacity:0,
        scrollTrigger:{
            trigger:".page6",
            scroller:".main",
            start:"top 80%",
            end:"top 60%",
        }
    })
    gsap.from(".page4 .center p",{
        y:150,
        opacity:0,
        scrollTrigger:{
            trigger:".page4",
            scroller:".main",
            start:"top 60%",
            end:"top 60%",
        }
    })
    gsap.from(".page4 .right .items .pck h1",{
        y:150,
        opacity:0,
        stagger:.1,
        duration:.3,
        scrollTrigger:{
            trigger:".page4",
            scroller:".main",
            start:"top 40%",
            end:"top 50%",
        }
    })

}
gsapAnimations()