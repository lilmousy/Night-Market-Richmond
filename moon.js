gsap.registerPlugin(ScrollTrigger);
    let speed = 500;



    /*   moon  */
    gsap.fromTo("#moon", { opacity: 1 }, {
        y: 250,
        x: 2080,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".scrollElement",
            start: "0 top",
            end: "10% 30%",
            scrub: .5,
            onEnter: function() { gsap.to("#moon", { scaleX: 1, rotation: 0 }) },
            onLeave: function() { gsap.to("#moon", { scaleX: 1, rotation: 0 }) },
        }
    })

//$(window).scroll(function(){
 //   $(".fade").css("opacity", 1 - $(window).scrollTop() / 250);
 // });




    //reset scrollbar position after refresh
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }

