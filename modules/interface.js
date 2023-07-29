

export function newFilmFunction(arr, place) {
  for (const film of arr) {
    let filmBox = document.createElement('div')
    let filmImg = document.createElement('div')
    let img = document.createElement('img')
    let filmName = document.createElement('div')
    let filmGenre = document.createElement('div')
    let filmRating = document.createElement('div')

    filmBox.classList.add('new-film__item')
    filmImg.classList.add('new-film__item-img')
    filmName.classList.add('new-film__item-name')
    filmGenre.classList.add('new-film__item-genre')
    filmRating.classList.add('rating')

    filmName.innerHTML = film.original_title
    filmGenre.innerHTML = 'Трилер'
    filmRating.innerHTML = film.vote_average
    img.src = import.meta.env.VITE_BASE_IMG + film.poster_path

    filmImg.append(img)
    filmBox.append(filmImg, filmName, filmGenre, filmRating)
    place.append(filmBox)

    filmBox.onclick = () => {
      location.assign('/pages/film-card/?id=' + film.id)
    }
  }
}

export function trailerFunction(arr, place) {
  for (const trailer of arr) {
    place.innerHTML += `
      <div class="trailer__other-trailer-item">
        <img src="/public/images/trailer2.png" alt="" />
        <h4>Мулан</h4>
      </div>
    `
  }
}

export function popularActerFunction(arr, place) {
  for (const acter of arr) {
    place.innerHTML += `

    <div class="popular-acter__place-item">
      <img src="${import.meta.env.VITE_BASE_IMG + acter.profile_path}" alt="" />
      <div class="popular-acter__name">
        <span class="name-ru">${acter.original_name}</span>
        <span class="name-eng">${acter.name}</span>
      </div>
      <span class="popular-acter__age">57 лет</span>
      <span class="popular-acter__rating">1-е место</span>
    </div>

  `
  }
}

export function otherPopularActerFunction(arr, place) {
  for (const acter of arr) {
    place.innerHTML += `
    
      <div class="popular-acter__other-place__item">
        <div class="right">
          <span class="right__name-ru">${acter.original_name}</span>
          <span class="right__name-eng">${acter.name}</span>
          <span class="right__age">87 лет</span>
        </div>
        <span class="other-acter__rating">3-е место</span>
      </div>
    
    `
  }
}

export function movieCardFunction(arr, place) {

  let body = document.body
  body.style.backgroundImage = `url('${import.meta.env.VITE_BASE_IMG + arr.backdrop_path}')`
  body.backgroundSize = 'cover'
  place.innerHTML += `

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

      <div class="movie-card__bottom">
        <div class="movie-card__bottom-rating-row">
          <img src="/public/icons/like.svg" alt="" class="like">
          <img src="/public/icons/dislike.svg" alt="" class="dislike">
          <div class="rating-box">
            <div class="rating-box-text"></div>
          </div>
          <img src="/public/icons/heart.svg" alt="" class="heart">
          <div class="bookmark">В избранном у 37933 человек </div>
        </div>
        <div class="movie-card__bottom-about">
          <div class="left">
            <table>
              <tbody>
                <tr>
                    <td>Год:</td>
                    <td class="color-column">${arr.release_date.split("-").at(0)}</td>
                </tr>
                <tr>
                    <td>Страна:</td>
                    <td class="color-column">${arr.production_countries[0].name}</td>
                </tr>
                <tr>
                    <td>Слоган:</td>
                    <td class="color-column">${arr.tagline}</td>
                </tr>
                <tr>
                    <td>Режиссер:</td>
                    <td class="color-column">Фрэнсис Аннан</td>
                </tr>
                <tr>
                    <td>Сценарий:  </td>
                    <td class="color-column">Фрэнсис Аннан, Л.Х. Адамс, Кэрол Гриффитс, ...</td>
                </tr>
                <tr>
                    <td>Продюсер:</td>
                    <td class="color-column">Дэвид Баррон, Марк Блэйни, Гари Хэмилтон, ...</td>
                </tr>
                <tr>
                    <td>Оператор:</td>
                    <td class="color-column">Джеффри Холл</td>
                </tr>
                <tr>
                    <td>Композитор:</td>
                    <td class="color-column">Дэвид Хиршфелдер</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="right">
            <table>
              <tbody>
                <tr>
                  <td>Художник: </td>
                  <td class="color-column">Скотт Бёрд, Эрика Брайан, Мариот Керр, ... </td>
                </tr>
                <tr>
                  <td>Монтаж: </td>
                  <td class="color-column">Ник Фентон </td>
                </tr>
                <tr>
                  <td> Жанр: </td>
                  <td class="color-column">Триллер, ...</td>
                </tr>
                <tr>
                  <td>Сборы в мире: </td>
                  <td class="color-column">${arr.budget + ' ' + '$'}</td>
                </tr>
                <tr>
                  <td>Премьера (мир): </td>
                  <td class="color-column">${arr.release_date}</td>
                </tr>
                <tr>
                  <td>Премьера (РФ): </td>
                  <td class="color-column">${arr.release_date}</td>
                </tr>
                <tr>
                  <td>Возраст:</td>
                  <td class="color-column">16+ </td>
                </tr>
                <tr>
                  <td>Время: </td>
                  <td class="color-column">${arr.runtime}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  
  `
}

export function acterFunction(arr, place) {
  console.log(arr);
  
  for (const movieActer of arr) {
    
    place.innerHTML += `
  
    <div class="acter__main-acter-item">
      <img src="${import.meta.env.VITE_BASE_IMG + movieActer.profile_path}" alt="">
      <div class="name-ru">${movieActer.original_name}</div>
      <div class="name-eng">${movieActer.name}</div>
      <div class="name-in-film">${movieActer.character}</div>
    </div>  
    
    `

  }
}