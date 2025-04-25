/**
 * Galaxy S91+ Scroll Animation Script
 * 
 * This script handles the reveal animations when elements come into the viewport
 * during scrolling. Elements with the class 'animate-on-scroll' will fade in
 * when they become visible.
 */
document.addEventListener("DOMContentLoaded", function() {
    // Function to check elements and animate them when they enter the viewport
    function animateOnScroll() {
        // Select all elements with the animation class
        document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
            // Get the element's position relative to the viewport
            const rect = el.getBoundingClientRect();
            
            // If the element is within 60px of the viewport bottom, show it
            // This creates a nice reveal effect as the user scrolls down
            if (rect.top < window.innerHeight - 60) {
                // Add the 'visible' class which triggers the CSS animation
                el.classList.add('visible');
            }
            
            // Note: You can also add this to remove the class when scrolling back up
            // else {
            //     el.classList.remove('visible');
            // }
        });
    }
    
    // Run once on page load to animate elements already in view
    animateOnScroll();
    
    // Add scroll event listener to check for new elements entering viewport
    window.addEventListener('scroll', animateOnScroll);
    
    // Optional: You can add a throttle/debounce function here to improve performance
    // if there are many elements with animations on the page
});
