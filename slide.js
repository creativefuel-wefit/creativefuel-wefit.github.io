// CREDIT TO JACK @ GREENSOCK
gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".portfolio");
let tl = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: 1,
    trigger: container,
    end: () => `+=${container.scrollWidth - document.documentElement.clientWidth + container.offsetWidth}`
  },
  defaults: { ease: "none", duration: 1 }
});

tl.to(".parallax", { x: 300 })
  .to(".panel", {
      x: () => `+=${-(container.scrollWidth - document.documentElement.clientWidth)}`
    },
    0
  )
  .from(".secondAn", {
      opacity: 0,
      scale: 0.25,
      duration: 0.2,
      stagger: {
        amount: 0.8
      }
    },
    0
  );

gsap.from(".firstAn", {
  duration: 1,
  opacity: 0,
  scale: 0.25,
  scrollTrigger: {
    trigger: container,
    start: "top 90%",
    end: "bottom 10%",
    toggleActions: "play none none reverse"
  }
});
