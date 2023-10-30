// JavaScript for interactive behavior
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const toggleButton = document.getElementById('toggleButton');
    const navLinks = document.querySelectorAll('nav ul li a');
    const articles = document.querySelectorAll('article');

    let isBlueBackground = true;

    // Function to toggle header background color
    toggleButton.addEventListener('click', function() {
        isBlueBackground = !isBlueBackground;
        header.style.transition = 'background-color 0.5s ease-in-out';
        header.style.backgroundColor = isBlueBackground ? '#343a40' : '#ffcd00';
    });

    // Hover effect for navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            link.style.transition = 'color 0.2s ease-in-out';
            link.style.color = '#ffcd00'; // Yellow on hover
        });

        link.addEventListener('mouseleave', function() {
            link.style.transition = 'color 0.2s ease-in-out';
            link.style.color = '#0071c3'; // Blue on mouse leave
        });
    });

    // Image rotation effect for articles
    articles.forEach(article => {
        const image = article.querySelector('img');
        article.addEventListener('mouseenter', function() {
            image.style.transform = 'rotate(10deg)';
        });
        article.addEventListener('mouseleave', function() {
            image.style.transform = 'rotate(0deg)';
        });
    });
});
