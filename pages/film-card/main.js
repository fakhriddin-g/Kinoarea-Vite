import axios from "axios";
import { headerFunction } from "../../modules/header";
import { movieCardFunction } from "../../modules/interface";

let movieCard = document.querySelector('.movie-card')

headerFunction()

let movie_id = location.search.split("=").at(-1)

axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    Accept: 'application/json'
  }
}).then(res => movieCardFunction(res.data, movieCard))

// movieCardFunction([], movieCard)
