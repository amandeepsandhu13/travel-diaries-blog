// Function to toggle between light and dark mode
function toggleBackground() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Event listener for theme toggle button
const themeToggleBtn = document.getElementById('toggleBtn');
themeToggleBtn.addEventListener('click', toggleBackground);
