document.addEventListener("DOMContentLoaded", function() {
    function animateOnScroll() {
        document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    }
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});