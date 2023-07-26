

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