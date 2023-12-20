// 5. 영화 상세 페이지
//     - 사용 API: /movie/{movie_id}

import { useEffect, useState } from 'react';

import movieInstanceAxios from './base';

export const MovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState({});
    useEffect(() => {
        const fetchData = async movieId => {
            try {
                const response = await movieInstanceAxios.get(
                    `/movie/${movieId}`,
                );
                setMovieDetail(response.data.results);
                console.log(response.data, 'MovieDetail');
                return response.data;
            } catch (error) {
                console.log('Error fetching movie list:', error);
            }
        };
        fetchData(1071215);
    }, []);
};
