<img src="./screenshots/mockup.png" style="width:100%;margin-bottom:2rem">

# [Live demo](https://waitforittwo.netlify.app)

# About

An eye-catching and aesthetically pleasing website, meticulously crafted for my portfolio, that showcases the experience I've gained from integrating HTML, Tailwind CSS, and JavaScript.

Feel free to explore the repository at your leisure to see the project in action and take it as testimony of my skills in producing premium digital experiences.

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

Again, I used Tailwind CSS to streamline the development of a responsive layout (tablets are excluded). Tailwind provides a set of utility classes that significantly accelerated the design process with a clean and less verbose approach to responsiveness.<br/>
Although it is important to note that the html looks a bit ugly and the separation of concerns principle is violated. Nevertheless, the speed and ease of development with Tailwind outweigh considerably these downsides for my specific project requirements.<br/><br/>
The example below shows the implementation of responsiveness in vanilla CSS compared to Tailwind:

```html
<header class="lg:bg-[#222]"></header>
```

VS

```css
@media (min-width: 1024px) {
  header {
    background-color: #222;
  }
}
```

<u>NB:</u> I relied on media queries but for very specific use cases.

## CSS animations

Below is the code for the marquee animations:

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

## Loading animation ([loading.js](public/js/loading.js))

<img src="screenshots/loading animation.gif" style="width:100%;margin-bottom:2rem"/>

I crafted a captivating loading animation to elevate the user experience. This animation utilizes the power of clip-path alongside a skillfully applied transform scale() effect to achieve a mesmerizing zoom effect.<br/>
Check for a close-in examination.

## Custom cursor ([cursor.js](public/js/cursor.js))

<img src="screenshots/cursor.gif" style="width:100%;margin-bottom:2rem"/>

l created a colorful particle effect that follows the mouse. I simply made use of the 'mousemove' event and implemented a function that creates circles of random colors and removes them after a delay as the user moves the cursor around.<br/>
<u>NB:</u> I chose to use only two colors for the live demo.

## Scroll-based animations

| Example 1                                                                                                | Example 2                                                                                              |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| <img src="screenshots/scroll animation 1.gif" style="width:100%;margin-bottom:2rem"/> | <img src="screenshots/scroll animation 2.gif" style="width:100%;margin-bottom:2rem"/> |

I achieved these animations using the greensock animation plateform's scroll library: ScrollTrigger.

## Contact

If you have any suggestions or questions, you can email me at the address [a.elbazzazi.outlook.com](mailto:a.elbazzazi@outlook.com) or you can use the contact form on my [website](https://ayoubelbazzazi.vercel.app/Contact).

Best regards.
