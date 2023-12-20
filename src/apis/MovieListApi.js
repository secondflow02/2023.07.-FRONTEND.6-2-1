/*1. home page
    - 사용 API: /movie/popular  기본*/
/*2. now playing page
- 사용 API: /movie/now_playing dates maximum,minimunm :내일날짜 , 6주전다음날 */
/* 3. upcoming page
    - 사용 API: /movie/upcoming dates maximum,minimunm : 3주 다음날, 내일날짜*/
/*4. top-rated pag
    - 사용 API: /movie/top_rated */

//const Api_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQyMGYyZTNmMmI5NjQwZjgyYWJlMjExMTA4ZWIzMiIsInN1YiI6IjY1ODE2MzlkM2E0OGM1Njc0ZmFmNjYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oxr96qz3N6ZwnKbeKEUfJhrFpopLGnGKpwz0jfagpMA';

import { useEffect, useState } from 'react';

import movieInstanceAxios from './base';

export const MovieList = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async page => {
            try {
                const response = await movieInstanceAxios.get(
                    '/movie/popular',
                    {
                        params: { page },
                    },
                );
                setMovies(response.data.results);
                console.log(response, 'MovieList');
                return response.data;
            } catch (error) {
                console.log('Error fetching movie list:', error);
            }
        };
        fetchData(1);
    }, []);
};

export const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async page => {
            try {
                const response = await movieInstanceAxios.get(
                    '/movie/now_playing',
                    {
                        params: { page },
                    },
                );
                setMovies(response.data.results);
                console.log(response, 'NowPlaying');
                return response.data;
            } catch (error) {
                console.log('Error fetching movie list:', error);
            }
        };
        fetchData(1);
    }, []);
};

export const UpComing = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async page => {
            try {
                const response = await movieInstanceAxios.get(
                    '/movie/upcoming',
                    {
                        params: { page },
                    },
                );
                setMovies(response.data.results);
                console.log(response, 'UpComing');
                return response.data;
            } catch (error) {
                console.log('Error fetching movie list:', error);
            }
        };
        fetchData(1);
    }, []);
};

export const TopRated = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async page => {
            try {
                const response = await movieInstanceAxios.get(
                    '/movie/top_rated ',
                    {
                        params: { page },
                    },
                );
                setMovies(response.data.results);
                console.log(response, 'TopRated');
                return response.data;
            } catch (error) {
                console.log('Error fetching movie list:', error);
            }
        };
        fetchData(1);
    }, []);
};
