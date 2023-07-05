function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Event listener for the theme toggle button
  const themeToggleBtn = document.getElementById('theme-toggle-button');
  themeToggleBtn.addEventListener('click', toggleTheme);
  
  