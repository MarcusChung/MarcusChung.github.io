//contains multiple animations for the website. Experimental.
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
    toggleActions: "restart pause reverse reverse",
    markers: true,
    start: "top 80%",
    end: "bottom 10%",
    scrub: 1,
    pin: true,
  },
  x: 200,
  rotation: 360,
  duration: 4,
});

animateCircles();


// export function animateIntro() {
//   gsap.fromTo("#myElement", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
// }


// export function animate() {
//   gsap.to(".logo", { duration: 1, x: 300, backgroundColor: "", borderRadius: "20%", border: "5px solid white", ease: "bounce"});
// }

// export function entrance() {
//   gsap.from(".logo", {duration: 1.5, opacity: 0, scale: 0.3: ease: "back"});
// }


// Function to animate circles bouncing around and returning to their positions
function animateCircles() {
  // Select all elements with the class 'circle'
  const circles = document.querySelectorAll(".circle");

  // Create a timeline
  const tl = gsap.timeline();

  // Animate each circle
  circles.forEach((circle) => {
    // Store the original position
    const originalX = circle.offsetLeft;
    const originalY = circle.offsetTop;

    // Calculate random positions within the viewport
    const randomX = Math.random() * window.innerWidth - circle.clientWidth;
    const randomY = Math.random() * window.innerHeight - circle.clientHeight;

    // Add animation to the timeline
    tl.to(circle, {
      duration: 1,
      x: randomX - originalX,
      y: randomY - originalY,
      ease: "bounce.out",
    }).to(circle, {
      duration: 1,
      x: 0,
      y: 0,
      ease: "elastic.out",
    });
  });
}

// Animate circles on page load
window.addEventListener("load", animateCircles);

// Re-animate circles when hovering over the logo
const logo = document.getElementById("logo");
if (logo) {
  logo.addEventListener("mouseenter", animateCircles);
}























// window.addEventListener("load", () => {
  // gsap.from("#appear", {
  //   opacity: 100, 
  //   y: 200, 
  //   duration: 2,
  //   ease: "ease",
  //   scrollTrigger: {
  //     trigger: "#appear",
  //     start: "top center",
  //     scroller: "main",
  //     toggleActions: "play none none reverse",
  //     markers: false,
  //     onEnter: () => possSection.classList.remove("snap-center"), 
  //     onLeaveBack: () => possSection.classList.add("snap-center"), 
  //   },
  // });

  // gsap.from("#pikachu", {
  //   opacity: 0, 
  //   y: 500, 
  //   duration: 10,
  //   ease: "ease",
  // });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const revealSections = document.querySelectorAll(".reveal-section");
  
//     revealSections.forEach((section) => {
//       gsap.fromTo(
//         section,
//         { autoAlpha: 0, y: 20 },
//         {
//           duration: 1,
//           autoAlpha: 1,
//           y: 0,
//           ease: "power2.inOut",
//           scrollTrigger: {
//             scroller: "#main1",
//             trigger: section,
//             start: "top center+=100",
//             toggleActions: "play none none reverse",
//             markers: true,
//             snap: {
//               snapTo: 1,
//               duration: { min:0.2, max:0.5},
//               ease: "power1.inOut",
//             }
//           },
//         }
//       );
//     });
//   });


// document.addEventListener("DOMContentLoaded", () => {
// gsap.from("#disappear", {
//   duration: 1.5, 
//   opacity: 0, 
//   scale: 0.3, 
//   ease: "back",
//   scrollTrigger: {
//     trigger: "#disappear",
//     scroller: "#main1",
//     toggleActions: "restart pause reverse reverse",
//     markers: true,
//     start: "top",
//     end: "bottom",
//     scrub: 1,
//     pin: true,
//   },
// });
// });



// gsap.from("#reveal2", {
//   scrollTrigger: {
//     trigger: "#reveal2", 
//     toggleActions: "restart pause reverse reverse",
//     markers: true, 
//     start: "top 80%", 
//     end: "bottom 10%",
//     scrub: 1,
//     pin: true,
//   },
//   // Define your animation properties here
//   opacity: 0,
//   y: 50,
//   duration: 1,
// });
