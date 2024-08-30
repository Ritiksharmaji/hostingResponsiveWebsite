document.addEventListener("DOMContentLoaded", function() {
    // Select all the question cards
    const faqQuestions = document.querySelectorAll('.faq-box-question-card');

    console.log("button clocik ")
    faqQuestions.forEach(function(questionCard) {
        questionCard.addEventListener('click', function() {
            // Toggle the visibility of the answer
            const answerCard = this.nextElementSibling;
            const icon = this.querySelector('.icon');

            if (answerCard.style.display === "block") {
                answerCard.style.display = "none";
                icon.classList.remove('rotate');
            } else {
                answerCard.style.display = "block";
                icon.classList.add('rotate');
            }
        });
    });
});

function typeWriter(element, text, index = 0) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(element, text, index), 50); // Adjust the speed here
    }
}

function handleScroll() {
    const elements = document.querySelectorAll('.typewriter');

    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (!element.classList.contains('started')) {
                element.classList.add('started');
                const text = element.textContent.trim();
                element.textContent = ''; // Clear the existing text
                typeWriter(element, text);
            }
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // Check if elements are in view on page load
