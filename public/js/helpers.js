export const changeColor = (shapeContainer, to) => {
  let q = gsap.utils.selector(shapeContainer);
  const shapes = q(".shape");
  const colors = ["#fff", "#FFAEDC", "#FFF480"];
  const m = gsap.utils.selector(".shape-container");
  shapes.forEach((shape, i) => {
    if (to) {
      gsap.to(shape, { backgroundColor: colors[i], duration: 0.3 });
      return;
    }
    gsap.to(shape, { backgroundColor: "rgb(165 161 255)", duration: 0.3 });
  });
};

export const changeShape = (rectangle, i) => {
  const q = gsap.utils.selector(".shape-container");
  const p = gsap.utils.selector(".rectangle-container");
  const shapes = q(".shape");
  const rects = p(".sub-rectangle");
  const colors = ["#fff", "#FFAEDC", "#FFF480"];
  rectangle.addEventListener("mouseenter", () => {
    if (window.innerWidth < 1024) return;
    gsap.to(`.elements${i + 1}`, { opacity: 0, duration: 0.3 });
    shapes.forEach((shape, j) => {
      if (i === j) {
        gsap.to(shape, {
          scale: 1.8,
          duration: 0.3,
          backgroundColor: colors[i],
        });
        gsap.to(rects[i], { scale: 0.95, duration: 0.3 });
      } else {
        gsap.to(shape, {
          scale: 0.6,
          duration: 0.3,
          backgroundColor: "#A5A1FF",
        });
      }
    });
  });
  rectangle.addEventListener("mouseleave", () => {
    if (window.innerWidth < 1024) return;
    gsap.to(`.elements${i + 1}`, { opacity: 1, duration: 0.3 });

    rects.forEach((rect) => {
      gsap.to(rect, { scale: 1, duration: 0.3 });
    });
    shapes.forEach((shape) => {
      gsap.to(shape, { scale: 1, duration: 0.3, backgroundColor: "#A5A1FF" });
    });
  });
};
