function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

function toggleFAQ(id) {
  const elem = document.getElementById(id);
  elem.classList.toggle('hidden');
}
