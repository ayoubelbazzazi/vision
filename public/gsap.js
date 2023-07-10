import { changeColor, changeShape } from "./helpers.js";
gsap.registerPlugin(ScrollTrigger);
const name = document.querySelector(".name")
const shapeContainer = document.querySelector(".shape-container");
const header = document.querySelector("header");
const rectangles = document.querySelectorAll(".rectangle");
const marquee1 = document.querySelector(".shape-container .marquee1");
const marquee21 = document.querySelector(".marquee21");
const marquee22 = document.querySelector(".marquee22");
const marquee23 = document.querySelector(".marquee23");
const marquee31 = document.querySelector(".marquee31")

gsap.to("body",{opacity:1, duration:1})

gsap.to(".name",{
    opacity:0,
    scale:.7,
    duration:1,
    scrollTrigger:{
        trigger:".name",
        start:"top 10%",
        end:"top -20%",
        scrub:true,
    }
})
gsap.to(".circle", { rotate: "360", duration: 8, ease: "none", repeat: -1 });
gsap.to(".shape", { rotate: "360", duration: 8, ease: "none", repeat: -1 });
shapeContainer.addEventListener("mouseenter", () => {
  gsap.to(".shape-container", { scale: 0.97, duration: 0.3 });
  changeColor(shapeContainer, true);
});

shapeContainer.addEventListener("mouseleave", () => {
  gsap.to(".shape-container", { scale: 1, duration: 0.3 });
  changeColor(shapeContainer, false);
});

header.addEventListener("mouseenter", () => {
  gsap.to(".marquee-container", { opacity: 0, duration: 0.3 });
});
header.addEventListener("mouseleave", () => {
  console.log("yeay");
  gsap.to(".marquee-container", { opacity: 1, duration: 0.3 });
});

rectangles.forEach((rectangle, i) => {
  changeShape(rectangle, i);
});



gsap.to(".marquee1", {
  x: -marquee1.getBoundingClientRect().width - 30,
  duration: 10,
  ease: "none",
  repeat: -1,
});
gsap.to(".marquee21", {
  x: -marquee21.getBoundingClientRect().width - 30,
  duration: 7,
  ease: "none",
  repeat: -1,
});
gsap.to(".marquee22", {
  x: -marquee22.getBoundingClientRect().width - 30,
  duration: 7,
  ease: "none",
  repeat: -1,
});
gsap.to(".marquee23", {
  x: -marquee23.getBoundingClientRect().width - 30,
  duration: 7,
  ease: "none",
  repeat: -1,
});
gsap.to(".marquee31", {
    x: -marquee31.getBoundingClientRect().width - 30,
    duration: 7,
    ease: "none",
    repeat: -1,
  });

const animateSkills = () => {
  const p = gsap.utils.selector(".skillset");
  const skills = p(".skill");
  const skillTitles = p(".skill-title");
  skills.forEach((skill) => {
    gsap.to(skill, {
      x: "0",
      duration: 1,
      scrollTrigger: {
        trigger: skill,
        start: "top 100%",
        end: "top 10%",
        scrub: true,
      },
    });
  });
  skillTitles.forEach((skill) => {
    gsap.from(skill, {});
    gsap.to(skill, {
      right: "0",
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: skill,
        start: "top 100%",
        end: "top 10%",
        scrub: true,
      },
    });
  });
};

const rotateWord = (className) => {
    gsap.to(className, {
        rotate: 360,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: className,
          end: "top -20%",
          start: "top 100%",
          scrub: true,
        },
      });
}

const animateProjects = () => {
  const p = gsap.utils.selector(".showcase");
  const projects = p(".project");
  projects.forEach((project, i) => {
    // const q = gsap.utils.selector(`.project-nth-of-type(${i+1}) .title`)
    const pr = gsap.utils.selector(`.project:nth-of-type(${i + 1})`);
    const title = pr(".project-title");

    project.addEventListener("mouseenter", () => {
      gsap.to(project, { scale: 0.97, duration: 0.3 });
      gsap.to(title[0], { scale: 1.1, duration: 0.3 });
    });
    project.addEventListener("mouseleave", () => {
      gsap.to(project, { scale: 1, duration: 0.3 });
      gsap.to(title[0], { scale: 1, duration: 0.3 });

    });
  });
};

gsap.from(".row-1", {x:"-50%"})
gsap.from(".row-2",{x:"-50%"})
gsap.to(".row-1", {
    x:0,
    ease:"none",
    scrollTrigger:{
        start:"top 100%",
        trigger:".row-1",
        scrub:true
    }
})
gsap.to(".row-2", {
    x:"-100%",
    ease:"none",
    scrollTrigger:{
        start:"top 100%",
        trigger:".row-2",
        scrub:true
    }
})
animateProjects();
animateSkills();
rotateWord(".words-circle")
rotateWord(".words-circle-2")

