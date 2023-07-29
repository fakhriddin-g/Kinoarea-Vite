import axios from "axios";
import { headerFunction } from "../../modules/header";
import { acterFunction, movieCardFunction } from "../../modules/interface";

let movieCard = document.querySelector('.movie-card')
let movieActer = document.querySelector('.acter__main-acter')
let iframe = document.querySelector('embed')

headerFunction()

let movie_id = location.search.split("=").at(-1)

axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    Accept: 'application/json'
  }
}).then(res => movieCardFunction(res.data, movieCard)).then(
  axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      Accept: 'application/json'
    }
  }).then(res => acterFunction(res.data.cast.slice(0, 10), movieActer))
).then(
  axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      Accept: 'application/json'
    }
  }).then(res => {
    iframe.src = `https:/www.youtube.com/embed/${res.data.results[0].key}`
  })
)