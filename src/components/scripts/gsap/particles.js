//credits to gsap for the javascript code
//https://codepen.io/GreenSock/pen/NWZRRNb

import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
const c = document.querySelector("canvas");
const ctx = c.getContext("2d");
let cw = (c.width = window.innerWidth);
let ch = (c.height = window.innerHeight);
let radius = Math.max(cw,ch);
const particles = Array(80);

for (let i = 0; i < particles.length; i++) {
  particles[i] = {
    x: 0,
    y: 0,
    scale: 0, 
    rotate: 0,
    img: new Image()
  }  
  particles[i].img.src = "https://assets.codepen.io/16327/flair-"+(2+i%21)+".png";
}

const tl = gsap.timeline({onUpdate:draw})
  .fromTo(particles, {
    x:(i)=> {
      const angle = (i/particles.length * Math.PI *2)- Math.PI/2
      return Math.cos(angle*10) * radius// * i/particles.length
    },
    y:(i)=> {
      const angle = (i/particles.length * Math.PI *2)- Math.PI/2
      return Math.sin(angle*10) * radius// * i/particles.length
    },
    scale: 0.4,
    rotate: 0
  },{
    duration: 4,
    ease: "sine",
    x: 0,
    y: 0,
    scale: 0,
    rotate: -3,
    stagger:{each:-0.1, repeat:-1}
  }, 0)
  .seek(99)

function draw(){  
  particles.sort( (a,b) => a.scale - b.scale ) // sort by scale to set z-indexing  
  ctx.clearRect(0, 0, cw, ch);
  particles.forEach((p, i) => {
    ctx.translate(cw / 2, ch / 2);
    ctx.rotate( p.rotate );
    ctx.drawImage(
      p.img,
      p.x,
      p.y,
      p.img.width * p.scale,
      p.img.height * p.scale
    );
    ctx.resetTransform();
  });
}

window.addEventListener("resize", () => {
  cw = c.width = innerWidth;
  ch = c.height = innerHeight;
  radius = Math.max(cw,ch);
  tl.invalidate();
});

c.addEventListener('pointerup', ()=>{ 
  gsap.to(tl, { 
    timeScale: tl.isActive() ? 0 : 1 // use timeScale to toggle play / pause
  })
})

});