function initScrollObservers() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const viewportObserver = new IntersectionObserver((fadeInElements) => {
        fadeInElements.forEach(fadeInElement => {
            console.log(fadeInElement.isIntersecting);
        })
    }, {
        rootMargin: '0px 0px 100px 0px',
        threshold: 0
    });

    fadeInElements.forEach(fadeInElement => {
        // Hey observe me!
        viewportObserver.observe(fadeInElement);
    });
}

export default initScrollObservers;