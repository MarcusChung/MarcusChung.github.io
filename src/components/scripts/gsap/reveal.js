// gsap to animate the reveal sections
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
          },
        }
      );
    });
  });
  