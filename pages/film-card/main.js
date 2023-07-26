import axios from "axios";
import { headerFunction } from "../../modules/header";

let movieCard = document.querySelector('.movie-card')

headerFunction()

let movie_id = location.search.split("=").at(-1)

axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    Accept: 'application/json'
  }
}).then(res => movieCardFunction(res.data))

function movieCardFunction(arr) {

  console.log(arr);
  movieCard.innerHTML += `

    <div class="container">
      <div class="movie-card__top">
        <div class="movie-card__img">
          <img src="${import.meta.env.VITE_BASE_IMG + arr.poster_path}" alt="">
        </div>

        <div class="movie-card__top-right">
          <div class="movie-card__top-path">Главная > Фильмы > <span>${arr.original_title}</span></div>
          <h3 class="movie-card__top-original-name">${arr.original_title}</h3>
          <span class="movie-card__top-title">${arr.title}</span>
          <div class="movie-card__top-chart-rating">
            <div class="circle">1
              <span>Kinoarea</span>
            </div>
            <div class="circle">2
              <span>IMDb</span>
            </div>
          </div>
          <p class="movie-card__top-desc">${arr.overview}</p>
          <div class="movie-card__top-trailer">
            <button>Смотреть трейлер</button>
            <img src="/public/images/social-net.png" alt="">
          </div>
        </div>
      </div>

      <div class="movie-card__bottom"></div>
    </div>
  
  `
  
}
