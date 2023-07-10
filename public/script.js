import "./gsap.js";
import "./lenis.js"

const body = document.body
const scrollWrap = document.querySelector(".smooth-scroll-wrapper")
const height = scrollWrap.getBoundingClientRect().height -1
const speed = .04
var offset = 0
const shapes = document.querySelectorAll(".shape");
const shapeAngles = [0, (Math.PI * 2) / 3, (Math.PI * 4) / 3];
const circle = document.querySelector(".circle");
const wordsCircle1 = document.querySelector(".words-circle");
const wordsCircle2 = document.querySelector(".words-circle-2")

const rotateLetters = (letters, wordsCircle) => {
  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.style.cssText = "position:absolute;top:50%;left:50%;font-size:18px;font-weight:700;text-transform:capitalize";
    
    span.innerText = letter;
    wordsCircle.appendChild(span);
    span.style.transform = `translate(${
      Math.cos((2 * Math.PI * i) / letters.length) *
        wordsCircle.getBoundingClientRect().width/2 -
      span.getBoundingClientRect().width / 2
    }px,${
      Math.sin((2 * Math.PI * i) / letters.length) *
        wordsCircle.getBoundingClientRect().height/2 -
      span.getBoundingClientRect().height / 2
    }px) rotate(${2*Math.PI*i*1/letters.length*180/Math.PI+90}deg)`;
  });
  
  shapes.forEach((shape, i) => {
    shape.style.transform = `translate(${
      (Math.cos(shapeAngles[i]) * circle.getBoundingClientRect().width) / 2 -
      shape.getBoundingClientRect().width / 2
    }px,${
      (Math.sin(shapeAngles[i]) * circle.getBoundingClientRect().height) / 2 -
      shape.getBoundingClientRect().height / 2
    }px)`;
  });
  
}


rotateLetters("services*services*".split(""), wordsCircle1)
rotateLetters("contact*contact*".split(""),wordsCircle2)