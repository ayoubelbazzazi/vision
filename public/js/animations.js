import { changeColor, changeShape } from "./helpers.js";
gsap.registerPlugin(ScrollTrigger);

const progressBar = document.getElementById("progress");
const shapeContainer = document.querySelector(".shape-container");
const rectangles = document.querySelectorAll(".rectangle");
const marquee1 = document.querySelectorAll(".shape-container .marquee1");
const marquee2 = document.querySelectorAll(".marquee2");
const marquee3 = document.querySelectorAll(".marquee3");
const marquee4 = document.querySelectorAll(".marquee4");
const marquee5 = document.querySelectorAll(".marquee5");
const projects = document.querySelectorAll(".project");

gsap.to("body", { opacity: 1, duration: 1 });

gsap.to(".name", {
  opacity: 0,
  scale: 0.7,
  duration: 1,
  scrollTrigger: {
    trigger: ".name",
    start: "top 10%",
    end: "top -20%",
    scrub: true,
  },
});
gsap.to(".shape", { rotate: "360", duration: 8, ease: "none", repeat: -1 });

shapeContainer.addEventListener("mouseenter", () => {
  if (window.innerWidth < 1024) return;

  changeColor(shapeContainer, true);
});

shapeContainer.addEventListener("mouseleave", () => {
  if (window.innerWidth < 1024) return;

  changeColor(shapeContainer, false);
});

rectangles.forEach((rectangle, i) => {
  changeShape(rectangle, i);
});

// Progress bar animation

window.addEventListener("scroll", setProgressBarHeight);
setProgressBarHeight()

function setProgressBarHeight() {
  const height =
    (100 * (window.scrollY + window.innerHeight)) / document.body.offsetHeight;
  progressBar.style.setProperty("--height", height);
}

// Skills scroll animations

const animateSkills = () => {
  const p = gsap.utils.selector(".skillset");
  const skills = p(".skill");

  if (window.innerWidth < 1024) {
    skills.forEach((skill) => {
      gsap.to(skill, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: skill,
          start: "top 90%",
        },
      });
    });
    return;
  }
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

// projects animation

const animateProjects = () => {
  const p = gsap.utils.selector(".showcase");
  const projects = p(".project");
  if (window.innerWidth >= 1024) return;

  projects.forEach((project) => {
    gsap.to(project, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: project,
        start: "top 90%",
      },
    });
  });
};

animateProjects();

// Onscroll word circles nimation

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
};

// On scroll circles animations

gsap.set(".row-1", { x: window.innerWidth < 640 ? "-40%" : "-30%" });
gsap.set(".row-2", { x: "-50%" });

gsap.to(".row-1", {
  x: window.innerWidth < 640 ? "-30%" : "-10%",
  ease: "none",
  scrollTrigger: {
    start: "top 100%",
    trigger: ".row-1",
    scrub: true,
  },
});
gsap.to(".row-2", {
  x: "-60%",
  ease: "none",
  scrollTrigger: {
    start: "top 100%",
    trigger: ".row-2",
    scrub: true,
  },
});

animateSkills();
rotateWord(".words-circle");
// rotateWord(".words-circle-2");

// Marquees css animations params

function setMarqueeProperties(marqueeArray, duration) {
  marqueeArray.forEach((marquee) => {
    const marqueeWidth = marquee.getBoundingClientRect().width;
    const marginRight = Math.max(
      ...Array.from(marqueeArray).map((marquee) => {
        const computedStyles = window.getComputedStyle(marquee);
        return parseFloat(computedStyles.getPropertyValue("margin-right"));
      })
    );
    marquee.style.setProperty("--width", marqueeWidth);
    marquee.style.setProperty("--marginRight", marginRight);
    marquee.style.setProperty("--duration", duration);
  });
}

setMarqueeProperties(marquee1, 10);
setMarqueeProperties(marquee2, 7);
setMarqueeProperties(marquee3, 7);
setMarqueeProperties(marquee4, 7);
setMarqueeProperties(marquee5, 7);
