gsap.registerPlugin(ScrollTrigger) 

// Hero animations
const heroTl = gsap.timeline({})
heroTl.fromTo('#hero h1, .hero-main p, .hero-right',
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
        start: 'top 500px',
        end: '+=300',
    },
});

portfolioTl.fromTo(
    '.portfolio-img',
    {
        opacity: 0,
        scale: 0.5, // Slightly shrink the images
    },
    {
        opacity: 1,
        scale: 1, // Bring them to their normal size
        duration: 0.8,
        stagger: 0.15,
        ease: 'power1.out', // Smooth easing
    }
);


const exhibitionTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#exhibitions',
        start: 'top 200px',
    }
});

exhibitionTl.fromTo(
    '.exhibition-wrapper',
    {
        opacity: 0,
        y: 10
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
    }
);
