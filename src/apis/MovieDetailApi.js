// 5. 영화 상세 페이지
//     - 사용 API: /movie/{movie_id}

import { useQuery } from 'react-query';

import movieInstanceAxios from './base';

const fetchMovieDetail = async movieId => {
    const response = await movieInstanceAxios.get(`/movie/${movieId}`);
    return response.data;
};

export const useMovieDetail = movieId => {
    return useQuery('moviedetail', async () => {
        const data = await fetchMovieDetail(movieId);
        console.log(data);
        return data;
    });
};
