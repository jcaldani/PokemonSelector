const backButton = document.querySelector('.backButton');

/// back button for everyone
backButton.addEventListener('click', () => {
    switchToPage('index.html');
});

function switchToPage(pageUrl) {
    window.location.href = pageUrl;
  }