/*1. home page
    - 사용 API: /movie/popular  기본*/
/*2. now playing page
- 사용 API: /movie/now_playing dates maximum,minimunm :내일날짜 , 6주전다음날 */
/* 3. upcoming page
    - 사용 API: /movie/upcoming dates maximum,minimunm : 3주 다음날, 내일날짜*/
/*4. top-rated pag
    - 사용 API: /movie/top_rated */

//const Api_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQyMGYyZTNmMmI5NjQwZjgyYWJlMjExMTA4ZWIzMiIsInN1YiI6IjY1ODE2MzlkM2E0OGM1Njc0ZmFmNjYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oxr96qz3N6ZwnKbeKEUfJhrFpopLGnGKpwz0jfagpMA';

/* export const MovieList = () => {
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
}; */

import { useQuery } from 'react-query';

import movieInstanceAxios from './base';

const fetchMovieList = async (endpoint, page) => {
    const response = await movieInstanceAxios.get(endpoint, {
        params: { page },
    });
    console.log(response.data);
    return response.data.results;
};

export const useMovieList = () => {
    return useQuery('movieList', async ({ page }) => {
        return fetchMovieList('/movie/popular', page);
    });
};

export const useNowPlaying = () => {
    return useQuery('nowPlaying', async ({ page }) => {
        return fetchMovieList('/movie/now_playing', page);
    });
};

export const useUpComing = () => {
    return useQuery('upComing', async ({ page }) => {
        return fetchMovieList('/movie/upcoming', page);
    });
};

export const useTopRated = () => {
    return useQuery('topRated', async ({ page }) => {
        return fetchMovieList('/movie/top_rated', page);
    });
};

export const fetchMovieData = async (endpoint, page) => {
    const response = await movieInstanceAxios.get(endpoint, { page });
    return response.data.results;
};
