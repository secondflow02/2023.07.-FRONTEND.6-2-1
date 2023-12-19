import axios from "axios"

export const baseUrl = process.env.BASE_URL
export const token = process.env.TMDB_TOKEN

const movieInstanceAxios = axios.create({
  baseUrl: baseUrl,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  },
  params:{
    language: 'ko-KR',
    region: 'KR'
  }
})

export default movieInstanceAxios