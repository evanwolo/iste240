// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to all "Read More" links
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const fullContent = this.previousElementSibling;
            if (fullContent.style.display === 'none' || !fullContent.style.display) {
                fullContent.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                fullContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});
