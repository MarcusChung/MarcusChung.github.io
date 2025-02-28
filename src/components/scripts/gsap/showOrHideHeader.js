import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
    const mainHeader = document.getElementById("mainHeader");
    const showBtn = document.getElementById("showBtn");
    const hideBtn = document.getElementById("hideBtn");

    // Initially hide mainHeader with animation
    // gsap.set(mainHeader, { opacity: 0, y: -20, display: "none" });

    // Show animation
    showBtn.addEventListener("click", () => {
        gsap.to(mainHeader, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            display: "block",
            ease: "power2.out",
            height: "auto",
        });
        showBtn.classList.add("hidden");
        hideBtn.classList.remove("hidden");
    });

    // Hide animation
    hideBtn.addEventListener("click", () => {
        gsap.to(mainHeader, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            height: 0,
            onComplete: () => mainHeader.style.display = "none",
        });
        hideBtn.classList.add("hidden");
        showBtn.classList.remove("hidden"); 
    });
});