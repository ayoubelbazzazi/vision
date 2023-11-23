const toAbout = document.getElementById("to-about");
const about = document.getElementById("about");
const scrollTos = ["to-overview", "to-work", "to-about", "to-contact"];
const scrollDestinations = ["overview", "work", "about", "contact"];
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  e.options.duration = 2;
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

scrollTos.forEach((item, i) => {
  const scrollTo = document.getElementById(item);
  scrollTo.addEventListener("click", () => {
    const destination = document.getElementById(scrollDestinations[i]);
    lenis.scrollTo(destination, { duration: 2 });
  });
});

// toAbout.addEventListener("click", () => {
//   lenis.scrollTo(about,{duration:2})
// })
