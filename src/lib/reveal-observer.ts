export function setupRevealObserver() {
    const revealElements = document.querySelectorAll<Element>(".reveal");

    if (revealElements.length === 0) return;

    // Failsafe: if observer doesn't fire within 2s, reveal everything
    const failsafeTimer = setTimeout(() => {
        revealElements.forEach((el) => el.classList.add("reveal-visible"));
    }, 2000);

    const observerOptions = {
        root: null,
        rootMargin: "20px", // slightly generous margin so elements near viewport edge trigger
        threshold: 0,       // trigger as soon as 1px is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });

        // Clear failsafe once observer is working
        const allVisible = Array.from(revealElements).every((el) =>
            el.classList.contains("reveal-visible")
        );
        if (allVisible) clearTimeout(failsafeTimer);

    }, observerOptions);

    revealElements.forEach((el) => {
        // Immediately reveal elements already in the viewport
        const rect = el.getBoundingClientRect();
        const isInViewport =
            rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
            el.classList.add("reveal-visible");
        } else {
            observer.observe(el);
        }
    });
}

