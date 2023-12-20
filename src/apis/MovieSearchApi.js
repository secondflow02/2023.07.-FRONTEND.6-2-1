// 6. 검색 결과 페이지
//     - 사용 API: /search/movie

import { useEffect, useState } from 'react';

import movieInstanceAxios from './base';

export const MovieSearch = () => {
    const [movieSearch, setMovieSearch] = useState();
    useEffect(() => {
        const searchResult = async (query, page) => {
            try {
                const response = await movieInstanceAxios.get(`/search/movie`, {
                    params: { query, page },
                });
                // setMovieSearch(response.data.results);
                console.log(response.data, 'movieSearch');
                console.log(response.data.results, 'movieSearchResult');
                return response.data;
            } catch (error) {
                console.log('Error fetching movie list:', error);
            }
        };
        searchResult('땡스기빙');
    }, []);
};
