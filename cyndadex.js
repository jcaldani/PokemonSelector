const backButton = document.querySelector('.backButton');
backButton.addEventListener('click', () => {
    window.location.href = 'index.html';
});

var modal = document.getElementById("pokeModal");

var btn = document.getElementById("modalBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

