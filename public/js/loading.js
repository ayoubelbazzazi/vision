const slide2 = document.getElementById("slide-2");
const svgElement = slide2.querySelector("svg");
const paths = slide2.querySelectorAll("svg path");
const circle = slide2.querySelector("svg circle");

gsap.registerPlugin(CustomEase);

function loadingAnimation() {
  if (window.innerWidth < 1024) return;

  const svgWidth = svgElement.getBoundingClientRect().width;
  const svgHeight = svgElement.getBoundingClientRect().height;
  const svgOriginalWidth = parseFloat(svgElement.getAttribute("width"));
  const svgOriginalHeight = parseFloat(svgElement.getAttribute("height"));
  const widthRatio = svgOriginalWidth / svgWidth;
  const heightRatio = svgOriginalHeight / svgHeight;

  const { x, y, width, height } = circle.getBoundingClientRect();
  const translateX =
    widthRatio * Math.abs(x - window.innerWidth / 2 + width / 2);
  const translateY =
    heightRatio * Math.abs(y - window.innerHeight / 2 + height / 2);

  document.documentElement.style.setProperty("--slideX", -translateX);

  gsap.set(["#myname", "#progress-bar", "header", "main", "footer"], {
    opacity: 0,
    duration: 0,
    scale: 0.9,
    transformOrigin: "top center",
  });
  gsap.to("#slide-2", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1.5,
    delay: 0.5,
    ease: "power4.inOut",
  });

  gsap.to(["#slide-2 svg path", "#slide-2 svg circle"], {
    x: -translateX,
    y: translateY,
    delay: 2,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.to("#slide-2 svg", {
    scale:
      1.2 * Math.max(window.innerWidth / width, window.innerHeight / height),
    delay: 2,
    duration: 1.5,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0.46,0 0.655,0.014 0.775,0.088 0.893,0.161 0.884,0.4 1,1 "
    ),
  });

  gsap.to("#loading-container", {
    display: "none",
    duration: 0.1,
    delay: 3.5,
  });

  gsap.to(["#myname", "#progress-bar", "header", "main", "footer"], {
    opacity: 1,
    scale: 1,
    delay: 3.6,
    duration: 1,
  });
}

document.addEventListener("DOMContentLoaded", loadingAnimation);
