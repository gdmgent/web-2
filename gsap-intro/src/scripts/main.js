import { gsap } from 'gsap';
import initFadeAnimations from './animations/fade-in-up';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

initFadeAnimations();

const box = document.querySelector('.box-deleted');

if (box) {

    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: 'elastic'
        }
    });

    tl
        .to([box, '.circle'], {
            x: 200,
            backgroundColor: 'blue',
            duration: 5
        })
        .to(box, {
            rotate: 180
        }, '>-=2');

    gsap.to('.animated-list li', {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: {
            amount: 1,
            from: 'center'
        }
    });
}

document.querySelector('.timeline-test button').addEventListener('click', () => {
    if (boxTimeline.progress() === 1) {
        boxTimeline.reverse();
    } else if (boxTimeline.progress() && !boxTimeline.paused()) {
        boxTimeline.pause();
    } else {
        boxTimeline.play();
    }
});


const boxTimeline = gsap.timeline({
    defaults: {
        x: 200,
        transformOrigin: 'right center',
    },
    // repeat: -1,
    // yoyo: true,
    paused: true,
    scrollTrigger: {
        trigger: '.timeline-test',
        start: '50% 50%',
        end: '100% 50%',
        scrub: true,
        markers: true
    }
});

boxTimeline
    .to('.timeline-test .box--green', {
        scale: .75,
    })
    .to('.timeline-test .box--orange', {
        scale: .5
    })
    .to('.timeline-test .box--grey', {
        scale: 1.25
    });