import axios from "axios"
import { headerFunction } from "./modules/header"
import { newFilmFunction, otherPopularActerFunction, popularActerFunction, trailerFunction } from "./modules/interface"
import { useHttp } from "./modules/http.request"

// Get variables
let newFilm = document.querySelector('.new-film')
let otherTrailer = document.querySelector('.trailer__other-trailer')
let popularActer = document.querySelector('.popular-acter__place .box')
let otherPopularActer = document.querySelector('.popular-acter__place .popular-acter__other-place')

// Array
let arr = [1,2,3,4]
let arrr = [1,2,3,4]

// Call Functions
headerFunction()

axios.get(import.meta.env.VITE_PLAYINGNOW_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    Accept: 'application/json'
  }
}).then(res => newFilmFunction(res.data.results.splice(0, 5), newFilm))

trailerFunction(arr, otherTrailer)

axios.get(import.meta.env.VITE_PERSON_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    Accept: 'application/json'
  }
}).then(res => popularActerFunction(res.data.results.splice(0, 2), popularActer))

axios.get(import.meta.env.VITE_PERSON_URL, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    Accept: 'application/json'
  }
}).then(res => otherPopularActerFunction(res.data.results.splice(2, 4), otherPopularActer))

// otherPopularActerFunction(arrr, otherPopularActer)