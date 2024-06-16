function cursorEffect() {
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")


    page1Content.addEventListener("mousemove", function(dets){
        gsap.to(cursor, {
            x:dets.x,
            y:dets.y
        })
    })

    page1Content.addEventListener("mouseenter", function(){
        gsap.to(cursor, {
            scale:1,
            opacity:1
        })
    })

    page1Content.addEventListener("mouseleave", function(){
        gsap.to(cursor, {
            scale:0,
            opacity:0
        })
    })
}

function page2Animation() {
    gsap.from("#page2", {
    y:120,
    stagger:0.2,
    duration:1,
    opacity:0,
    scrollTrigger: {
        trigger:"#page2",
        scroller:"body",
        start:"top 47%",
        end:"top 46%",
        scrub:2
    }
})
}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function page4Animation() {
    gsap.from("#page4", {
    y:120,
    stagger:0.2,
    duration:1,
    opacity:0,
    scrollTrigger: {
        trigger:"#page4",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})
}

function page6Animation() {
    gsap.from("#page6", {
    y:120,
    stagger:0.2,
    duration:1,
    opacity:0,
    scrollTrigger: {
        trigger:"#page6",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})
}

cursorEffect()
page2Animation()
loco()
page4Animation()
page6Animation()


