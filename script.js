gsap.registerPlugin(ScrollTrigger) 

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

const portfolioTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#portfolio',
        start: 'top 100px',
    }
});

portfolioTl.fromTo(
    '.portfolio-img',
    {
        opacity: 0,
    },
    {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
    }
);

const exhibitionTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#exhibition',
        start: 'top 200px',
    }
});

exhibitionTl.fromTo(
    '.exhibition-wrapper',
    {
        opacity: 0,
        y: 50
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
    }
);
