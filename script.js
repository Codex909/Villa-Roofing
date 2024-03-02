
 // JavaScript for custom smooth scroll
 document.addEventListener("DOMContentLoaded", function() {
    var headerHeight = document.querySelector('.site-header').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var targetPosition = targetElement.offsetTop - headerHeight;
                var currentPosition = window.pageYOffset;
                var distance = targetPosition - currentPosition;
                var duration = 800; // Adjust the duration (in milliseconds) to control the scroll speed
                var start = null;

                function step(timestamp) {
                    if (!start) start = timestamp;
                    var progress = timestamp - start;

                    window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));

                    if (progress < duration) {
                        requestAnimationFrame(step);
                    }
                }

                requestAnimationFrame(step);
            }
        });
    });

// Easing function for smooth scroll
    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
});



