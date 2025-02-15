document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');

    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(80%) contrast(130%)';
        });

        ctaButton.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    } else {
        console.error("ctaButton element not found.");
    }
});
