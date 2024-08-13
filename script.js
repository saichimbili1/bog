// Example: Script to dynamically update the year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.year');
    const currentYear = new Date().getFullYear();
    if (yearElement) {
        yearElement.textContent = currentYear;
        
    }
});
