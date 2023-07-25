import axios from "axios"

const popularURL = "https://api.themoviedb.org/3/movie/popular"
const playingNowURL = "https://api.themoviedb.org/3/movie/now_playing"
const genreURL = "https://api.themoviedb.org/3/genre/movie/list"

axios.get(baseURL, {
  headers: {
    Authorization: 'Bearer' + import.meta.env.VITE_API_KEY
  }
})


const enums = {
  get: "get",
  post: "post",
  patch: "patch",
  put: "put",
  delete: "delete"
}

export const useHttp = () => {
  const request = async (url, method, body = null) => {
    if(!enums[method]) {
      throw new Error('Axios has not provide methode ' + method)
    }

    try {
      const res = await axios[method](baseURL + url, body)

      if (res.status === 200 || res.status === 201) {
        return res.data
      }
    } catch (error) {
      return error
    }
  }

  return {
    request
  }

}