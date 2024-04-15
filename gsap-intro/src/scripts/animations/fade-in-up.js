import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function initFadeAnimations() {
    const $fadeElements = document.querySelectorAll("[data-animation='fade-in-up']");

    $fadeElements.forEach($fadeElement => {
        gsap.from($fadeElement, {
            yPercent: 50,
            opacity: 0,
            scrollTrigger: {
                trigger: $fadeElement,
                start: "0 80%"
            }
        });
    })
}

export default initFadeAnimations;