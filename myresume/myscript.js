// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Collapsible sections
const sections = document.querySelectorAll('.collapsible-section');
sections.forEach(section => {
    const toggleButton = section.querySelector('.toggle-button');
    toggleButton.addEventListener('click', () => {
        section.classList.toggle('active');
        toggleButton.textContent = section.classList.contains('active') ? '[-]' : '[+]';
    });
});
