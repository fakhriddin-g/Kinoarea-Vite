let header = document.querySelector('header .container')

export function headerFunction() {
  header.innerHTML += `
    <div class="header">
      <div class="header__logo">
        <img src="/public/images/logo.png" alt="" />
        <img class="header__logo-social" src="/public/images/social-net.png" alt="" />
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item"><a href="/">Афиша</a></li>
          <li class="header__nav-item"><a href="/">Медиа</a></li>
          <li class="header__nav-item"><a href="/">Филмы</a></li>
          <li class="header__nav-item"><a href="/">Актёры</a></li>
          <li class="header__nav-item"><a href="/">Новости</a></li>
          <li class="header__nav-item"><a href="/">Подборки</a></li>
          <li class="header__nav-item"><a href="/">Категории</a></li>
        </ul>
      </nav>

      <div class="header__btn">
        <div class="header__btn-search">
          <img src="/public/icons/search.svg" alt="" />
        </div>
        <button class="header__btn-button">Войти</button>
      </div>
    </div>
  `
}