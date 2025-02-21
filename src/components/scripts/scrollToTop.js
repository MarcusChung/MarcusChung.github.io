import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export function scrollToTop() {
  gsap.to(window, {
    duration: 1.5,  
    scrollTo: { y: 0, autoKill: true }, 
    ease: "power2.out" 
  });
}