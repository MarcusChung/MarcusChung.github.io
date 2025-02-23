// gsap to animate the reveal sections
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap.from("#welcome", {
    duration: 1.5,
    opacity: 0,
    scale: 0.3,
    ease: "back",
  });
  
   gsap.from("#poss", {
    opacity: 0, 
    y: 50, 
    duration: 1,
    rotate: 360,
    ease: "ease",
    scrollTrigger: {
      trigger: "#poss",
      start: "top center",
      scroller: "main",
      toggleActions: "play none none none",
      markers: false,
    },
  });


  //turn off markers when you push to production because they can block the 'show header' button.
  gsap.from("#disappear p", {
    scrollTrigger: {
      trigger: "#disappear",
      scroller: "main",
      start: "top center",
      markers: false,
      toggleActions: "play none none none",
      onEnter: () => {  // Remove snap
        gsap.to("#disappear p", {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to("#disappear p", {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      },
    },
  });
});

const possSection = document.querySelector("#appear");
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#appear",
    scroller: "main",
    toggleActions: "play none none reverse",
    markers: true,
  
  },
});

tl.from("#appear", {
  opacity: 1,
  y: 250,
  duration: 2,
  ease: "power2.out",
})
.from("#pikachu", {
  opacity: 0,
  x: 500,
  duration: 3,
  ease: "power2.out",
}, "-=2"); // Overlap the animations

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
//     trigger: "#reveal2", // Set the trigger to the correct element
//     toggleActions: "restart pause reverse reverse",
//     markers: true, // Enable markers for debugging
//     start: "top 80%", // Adjust start position as needed
//     end: "bottom 10%", // Adjust end position as needed
//     scrub: 1,
//     pin: true,
//   },
//   // Define your animation properties here
//   opacity: 0,
//   y: 50,
//   duration: 1,
// });
