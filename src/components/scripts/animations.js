import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from("#logo", {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
gsap.from("#demo2", {
  scrollTrigger: {
    trigger: "#demo2",
    toggleActions: "restart pause reverse pause"
  },
  x: 400,
  rotation: 360,
  duration: 3,
});

gsap.from("#mainText", {
  scrollTrigger: {
    trigger: "#mainText",
    toggleActions: "restart pause reverse pause",
    markers: true,
    start: "top 80%",
    scrub: 1,
    pin: true,
  },
  x: 200,
  rotation: 360,
  duration: 4,
});

// gsap to animate the reveal sections
document.addEventListener("DOMContentLoaded", () => {
  const revealSections = document.querySelectorAll(".reveal-section");

  revealSections.forEach((section) => {
    gsap.fromTo(
      section,
      { autoAlpha: 0, y: 20 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: section,
          start: "top center+=100",
          toggleActions: "play none none reverse",
          markers: true,
        },
      }
    );
  });
});

// export function animateIntro() {
//   gsap.fromTo("#myElement", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
// }


// export function animate() {
//   gsap.to(".logo", { duration: 1, x: 300, backgroundColor: "", borderRadius: "20%", border: "5px solid white", ease: "bounce"});
// }

// export function entrance() {
//   gsap.from(".logo", {duration: 1.5, opacity: 0, scale: 0.3: ease: "back"});
// }

// // Experimental..
// // Function to animate circles bouncing around and returning to their positions
// function animateCircles() {
//   // Select all elements with the class 'circle'
//   const circles = document.querySelectorAll(".circle");

//   // Create a timeline
//   const tl = gsap.timeline();

//   // Animate each circle
//   circles.forEach((circle) => {
//     // Store the original position
//     const originalX = circle.offsetLeft;
//     const originalY = circle.offsetTop;

//     // Calculate random positions within the viewport
//     const randomX = Math.random() * window.innerWidth - circle.clientWidth;
//     const randomY = Math.random() * window.innerHeight - circle.clientHeight;

//     // Add animation to the timeline
//     tl.to(circle, {
//       duration: 1,
//       x: randomX - originalX,
//       y: randomY - originalY,
//       ease: "bounce.out",
//     }).to(circle, {
//       duration: 1,
//       x: 0,
//       y: 0,
//       ease: "elastic.out",
//     });
//   });
// }

// // Animate circles on page load
// window.addEventListener("load", animateCircles);

// // Re-animate circles when hovering over the logo
// const logo = document.getElementById("logo");
// if (logo) {
//   logo.addEventListener("mouseenter", animateCircles);
// }