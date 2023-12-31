<img src="./screenshots/mockup.png" style="width:100%;margin-bottom:2rem">

# [Live demo](https://waitforittwo.netlify.app)

# About

Explore my second web design for my portfolio website. Crafted with care and dedication using HTML, Tailwind CSS, and JavaScript, this project is a visually appealing showcase of my skills and a hands-on display of my experience in creating colorful digital experiences.

# Stack used

1. <img src="screenshots/html.png" style="width:15px;"/> HTML
2. <img src="screenshots/tailwindcss.png" style="width:15px;"/> Tailwind CSS
3. <img src="screenshots/javascript.png" style="width:15px;"/> Javascript

# Screenshots

| Mobile                                | Desktop                                 |
| ------------------------------------- | --------------------------------------- |
| ![Screenshots](screenshots/phone.png) | ![Screenshots](screenshots/desktop.png) |

# Highlights

1. [**Fully** responsive design](#fully-responsive-design)
2. [**CSS** animations](#css-animations)
3. [Loading **animation**](#loading-animation)
4. [**Custom** cursor](#custom-cursor)
5. [**Scroll-based** animations](#scroll-based-animations)
6. [**Smooth** scrolling](#smooth-scrolling)

## Fully responsive design

Again, I used Tailwind CSS to streamline the development of a responsive layout (tablets are not included). Tailwind provides a set of utility classes that significantly accelerated the design process with a clean and less verbose approach to responsiveness.<br/>
Although it is important to note that the html looks a bit ugly and the separation of concerns principle is violated. Nevertheless, the speed and ease of development with Tailwind outweigh considerably these downsides for my specific project requirements.<br/><br/>
The example below shows the implementation of responsiveness in vanilla CSS compared to that in Tailwind:

Tailwind CSS:
```html
<header class="lg:bg-[#222]"></header>
```

Vanilla CSS:

```css
@media (min-width: 1024px) {
  header {
    background-color: #222;
  }
}
```

<u>NB:</u> I still relied on media queries but for very specific scenarios.

## CSS animations

I opted for CSS animations over JavaScript, I prioritized the inherent smoothness they offer, delivering a fluid and seamless user experience.

Below is an example code for the marquee animations, where the use of Javascript is limited to calculating the transform distance while the animation itself is handled solely with CSS:

```javascript
const marquee = document.querySelector(".marquee");

function marqueeAnimation() {
  const { width } = marquee.getBoundingClientRect();
  const computedStyles = window.getComputedStyle(marquee);
  const marginRight = parseFloat(
    computedStyles.getPropertyValue("margin-right")
  );
  marquee.style.setProperty("--width", width);
  marquee.style.setProperty("--marginRight", marginRight);
}
```

```css
.marquee {
  --width: 0;
  --marginRight: 0;
  --duration: 0;
  animation: marquee 1s linear infinite;
}

@keyframes marquee {
  to {
    transform: translateX(calc((var(--width) + var(--marginRight)) * -1px));
  }
}
```

## loading animation 
## ([loading.js](public/js/loading.js))

<img src="screenshots/loading animation.gif" style="width:100%;margin-bottom:2rem"/>

I crafted a captivating loading animation to elevate the user experience. This animation utilizes the power of clip-path alongside a skillfully applied transform scale() effect to achieve a mesmerizing zoom effect.<br/>
Check for a close-in examination.

## Custom cursor 
## ([cursor.js](public/js/cursor.js))

<img src="screenshots/cursor.gif" style="width:100%;margin-bottom:2rem"/>

l created a colorful particle effect that follows the mouse. I simply made use of the 'mousemove' event and implemented a function that creates circles of random colors and removes them after a delay as the user moves the cursor around.<br/>
<u>NB:</u> I chose to use only two colors for the live demo.

## Scroll-based animations

| Example 1                                                                                                | Example 2                                                                                              |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img src="screenshots/scroll animation 1.gif" style="width:100%;margin-bottom:2rem"/> | <img src="screenshots/scroll animation 2.gif" style="width:100%;margin-bottom:2rem"/> |

I achieved these animations using the greensock animation plateform's scroll-based animations library: ScrollTrigger.

## Notes

1. For this one project I stuffed as many animations in one page as was reasonably possible. Therefore, the user experience might be less fuild in mobile devices with weak computing power. 

## Contact

If you have any suggestions or questions, you can email me at the address [a.elbazzazi.outlook.com](mailto:a.elbazzazi@outlook.com) or you can use the contact form on my [website](https://ayoubelbazzazi.vercel.app/Contact).

Best regards.

