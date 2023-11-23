const cursor = document.getElementById("cursor");
const body = document.body;
const colorArray = ["#fa00ff", "#ff0000", "#95ff00"];
let isTouchScreen = Boolean(
  /Mobi|Android|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)
);

window.addEventListener("resize", () => {
  isTouchScreen = Boolean(
    /Mobi|Android|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
});

if (isTouchScreen) cursor.style.display = "none";

document.addEventListener("mousemove", moveCursor);
let cursorMoving = false;
let cursorPos = { x: 0, y: 0 };
let cursorTimeout;

function moveCursor(e) {
  if (isTouchScreen || window.innerWidth < 1200) return;
  clearTimeout(cursorTimeout);
  cursorMoving = true;
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";

  cursorTimeout = setTimeout(() => {
    cursorMoving = false;
  }, 10);
}

function createCircle() {
  if (!cursorMoving || isTouchScreen) return;
  let element = document.createElement("div");
  element.className = "element";
  body.prepend(element);
  element.style.left = cursor.getBoundingClientRect().x + "px";
  element.style.top = cursor.getBoundingClientRect().y + "px";
  const color = colorArray[Math.floor(Math.random() * colorArray.length)];
  element.style.backgroundColor = color;
  
  let circle = document.querySelectorAll(".element")[0],
    directionX = Math.random() < 0.5 ? -1 : 1,
    directionY = Math.random() < 0.5 ? -1 : 1;

  const translateX = -directionX * (Math.random() * 200 + 100);
  const translateY = -directionY * (Math.random() * 200);

  circle.style.transform = `translate(${translateX}px, ${translateY}px) scale(.25)`;
  circle.style.opacity = 0;

  setTimeout(() => {
    element.remove();
  }, 1500);
}

setInterval(createCircle, [10]);



