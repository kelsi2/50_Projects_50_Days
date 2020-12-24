const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2b99be777da7e52456a9f07e0867f5e9&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2b99be777da7e52456a9f07e0867f5e9&query="'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  // Clear main screen before loading new content
  main.innerHTML = '';

  movies.forEach((movie) => {
    const {
      title,
      poster_path,
      vote_average,
      overview
    } = movie;
    const movieEl = document.createElement('div');

    movieEl.classList.add('movie');
    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRating(vote_average)}">${vote_average}</span>
        </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `
    main.appendChild(movieEl);
  })
};

function getClassByRating(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    // If nothing entered in search reload the page
    window.location.reload();
  }
})