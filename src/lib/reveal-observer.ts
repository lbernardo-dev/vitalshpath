export function setupRevealObserver() {
    const revealElements = document.querySelectorAll<Element>(".reveal, .reveal-scale");

    if (revealElements.length === 0) return;

    // Failsafe: if results don't fire within 2.5s, reveal EVERYTHING
    const failsafeTimer = setTimeout(() => {
        revealElements.forEach((el) => el.classList.add("reveal-visible"));
    }, 2500);

    const observerOptions = {
        root: null,
        rootMargin: "50px", // Increased margin for smoother entry
        threshold: 0.1,     // subtle threshold
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target);
            }
        });

        // Clear failsafe once observer is working
        const anyVisible = Array.from(revealElements).some((el) =>
            el.classList.contains("reveal-visible")
        );
        if (anyVisible) clearTimeout(failsafeTimer);

    }, observerOptions);

    revealElements.forEach((el) => {
        observer.observe(el);
    });
}

