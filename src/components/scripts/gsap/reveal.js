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

  gsap.from("#disappear p", {
    scrollTrigger: {
      trigger: "#disappear",
      scroller: "main",
      start: "top center",
      markers: true,
      toggleActions: "play reverse play reverse",
      onEnter: () => {
        gsap.to("#disappear p", {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
        });
      },
    },
  });
});

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
