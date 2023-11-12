// D&D5E API Search functionality build-out

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const categorySelect = document.getElementById('categorySelect');
const searchResults = document.getElementById('searchResults');
const selectedInfo = document.getElementById('selectedInfo');

searchButton.addEventListener('click', performSearch);