const backButton = document.querySelector('.backButton'); //// ????

function switchToPage(pageUrl) {
    window.location.href = pageUrl;
  };

/// back button for everyone
backButton.addEventListener('click', () => {
    switchToPage('index.html');
});