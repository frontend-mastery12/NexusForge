//           Navbar
gsap.from("nav", {
    y: -25,
    opacity: 0,
    duration: 1.3,
    delay: 0.6,
    ease: "power3.out"
});

gsap.from("nav li", {
    y: -15,
    opacity: 0,
    duration: 0.8,
    delay: 1,
    stagger: 0.3,
    ease: "power2.out"
});


// //       Animate the Hero Section

// Utility function: Split text into spans
function splitTextToSpans(element, splitHalf = false) {
    const text = element.textContent.trim();
    const chars = text.split('');
    let newHTML = '';

    chars.forEach((char, index) => {
        if (splitHalf && index >= chars.length / 2) {
            newHTML += `<span class="second-half">${char}</span>`;
        } else {
            newHTML += `<span class="first-half">${char}</span>`;
        }
    });

    element.innerHTML = newHTML;
}

// Animate function for a single text
function animateText(selector, options = {}) {
    const { delay = 0, stagger = 0.1, splitHalf = false } = options;
    const h1 = document.querySelector(selector);
    if (!h1) return;

    splitTextToSpans(h1, splitHalf);

    // Animate first half
    gsap.from(`${selector} .first-half`, {
        y: 80,
        opacity: 0,
        delay,
        duration: 0.9,
        ease: 'power3.out',
        stagger
    });

    // Animate second half (only if splitHalf is true)
    if (splitHalf) {
        gsap.from(`${selector} .second-half`, {
            y: 80,
            opacity: 0,
            delay,
            duration: 0.9,
            ease: 'power3.out',
            stagger: -stagger
        });
    }
}

// Run Animations
animateText('.h-one h1', { delay: 1, stagger: 0.15 });
animateText('.h-two h1', { delay: 2, stagger: 0.3, splitHalf: true });
animateText('.h-three h1', { delay: 2.2, stagger: 0.15 });


//        Hero-Category

gsap.from(".character, .weapon, .rank", {
    scale: 0.3,
    delay: 2.5,
    opacity: 0,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3
})


//      Section-Two
function animateTextSplit(el, opts = {}) {
    const defaults = {
        trigger: '.sec-two',
        start: 'top 30%',
        end: 'bottom 50%',
        id: 'title-anim',
        stagger: 0.05,
        duration: 1.1,
        y: 70,
        ease: 'power2.out',
        once: true,
        scrum: 2,
    };
    const o = { ...defaults, ...opts };

    const element = typeof el === 'string' ? document.querySelector(el) : el;
    if (!element) return;

    // Remove old ScrollTriggers for this animation
    ScrollTrigger.getAll().forEach(st => {
        if (st.vars.id === o.id) st.kill();
    });

    const rawText = element.textContent.trim();
    if (!rawText) return;

    // Wrap letters in spans
    const frag = document.createDocumentFragment();
    [...rawText].forEach(char => {
        const span = document.createElement('span');
        span.className = 'sec-title';
        span.innerHTML = char === ' ' ? '&nbsp;' : char;
        frag.appendChild(span);
    });

    element.innerHTML = '';
    element.appendChild(frag);

    // Animate letters
    gsap.from(element.querySelectorAll('.sec-title'), {
        y: o.y,
        opacity: 0,
        duration: o.duration,
        ease: o.ease,
        stagger: o.stagger,
        scrollTrigger: {
            id: o.id,
            trigger: o.trigger,
            start: o.start,
            end: o.end,
            once: o.once,
            scrum: o.scrum
        }
    });
}

//    Character And Weapon
gsap.from('.character-img', {
    y: 80,
    delay: 1,
    opacity: 0,
    duration: 1.3,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.sec-two',
        start: 'top 20%'
    }
});
gsap.from('.character-img img', {
    y: 80,
    delay: 1.2,
    opacity: 0,
    duration: 1.3,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.sec-two',
        start: 'top 30%'
    }
});


gsap.from('.sec-three-img img', {
    y: -96,
    scale: 0.2,
    duration: 1.8,
    rotate: 4,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.sec-three',
        start: 'top 20%',
        end: 'bottom 0%',
        scrum: 2,
    }
})

const SecThreeTimeLine = gsap.timeline({
    scrollTrigger: {
        trigger: '.sec-three',
        start: 'top 0%',
        end: 'bottom 0%',
    }
});

SecThreeTimeLine.from('.sec-three-text > h1', {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: 'power2.out',
    delay: 0.5
})
    .from('.sec-three-text > p', {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power2.out'
    }, "-=0.6")
    .from('.sec-three-text > button', {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power2.out'
    }, "-=0.4");

//   Section-Four

gsap.from('.sec-four h1', {
    opacity: 0,
    y: 50,
    duration: 2,
    delay: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.sec-four',
        start: 'top 15%',
        scrum: 2,
    }
})

gsap.from('#legend-character', {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    delay: 1,
    scrollTrigger: {
        trigger: '.sec-four',
        start: 'top 15%',
        scrum: 2,
    }
})

gsap.from('.flex-card .card', {
    y: -30,
    duration: 0.5,
    opacity: 0,
    delay: 2,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.sec-four',
        start: 'top 15%',
        scrum: 2,
    }
})