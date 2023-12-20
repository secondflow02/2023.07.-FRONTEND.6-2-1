import axios from 'axios';

export const baseUrl = 'https://api.themoviedb.org/3';
export const token = process.env.REACT_APP_TMDB_TOKEN;

const movieInstanceAxios = axios.create({
    baseURL: baseUrl,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
    },
    params: {
        language: 'ko-KR',
        region: 'KR',
    },
});

export default movieInstanceAxios;
