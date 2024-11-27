// Hero animations
const heroTl = gsap.timeline({})
heroTl.fromTo('#hero h1, .hero-main p',
    {
        x: -100,
        opacity: 0
    },
    {
        x: 0,
        opacity:1,
        duration: 1.5,
        stagger: 0.5
    }
);

heroTl.fromTo('.social-link, nav',
    {
        opacity: 0
    },
    {
        opacity: 1,
        duration: 2,
        stagger: 0.2
    }
)

heroTl.fromTo('.statistics div',
    {
        opacity: 0,
        y: 20
    }, 
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5
    }
)
