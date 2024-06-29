document.addEventListener('DOMContentLoaded', function() {
    // Elements to animate
    const header = document.querySelector('.animated-header');
    const paragraph = document.querySelector('.animated-paragraph');
    const items = document.querySelectorAll('.animated-item');

    // Function to add the class that makes elements visible
    function showElement(element) {
        element.style.opacity = 1;
    }

    // Show header and paragraph after page load
    setTimeout(() => {
        showElement(header);
        showElement(paragraph);
    }, 500);

    // Show each info item with a delay
    items.forEach((item, index) => {
        setTimeout(() => {
            showElement(item);
        }, 1000 + (index * 500));
    });
});
