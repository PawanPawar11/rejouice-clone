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
    gsap.from("#para #para-line", {
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

cursorEffect()
page2Animation()
loco()