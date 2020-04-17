import * as axios from "axios";

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/4"
});

apiMovie.interceptors.request.use( req => {
  req.headers['Authorization'] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzM5NDlmMGNlMmNlMjFmMzAzZmUzNzI5MDliZDAwNiIsInN1YiI6IjVkYzliODI2NDcwZWFkMDAxMzk4Zjk4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XlbKGZuAY9j2o81ZtRdGHSse_AdzfDfwo-FrS6CRaQ0";
    return req
});

export default apiMovie;

export const apiMovieMap = (m) => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${ m.release_date } | ${ m.vote_average }/10 (${ m.vote_count })`,
    description: m.overview
  })