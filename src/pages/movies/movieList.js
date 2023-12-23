import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';

import { fetchMovieData, useMovieList } from '../../apis/MovieListApi';
import Search from '../../components/search';
import ScrollButton from '../../components/TopButton';

const fetchNextPage = async ({ page = 1 }) => {
    const response = await fetchMovieData('/movie/popular', page);
    return response.data;
};

const MovieList = () => {
    const { data: movieList, isLoading, isError } = useMovieList();

    const options = {
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 5,
    };

    const {
        fetchNextPage, // 다음 페이지의 데이터를 가져옴
        fetchPreviousPage, // 이전 페이지의 데이터를 가져옴
        hasNextPage, // 다음 페이지가 있는지를 나타냄 (boolean)
        hasPreviousPage, // 이전 페이지가 있는지를 나타냄 (boolean)
        isFetchingNextPage, // 다음 페이지를 가져오고 있는지를 나타냄 (boolean)
        isFetchingPreviousPage, // 이전 페이지를 가져오고 있는지를 나타냄 (boolean)
        ...result // 위에 언급한 속성을 제외한 나머지
    } = useInfiniteQuery({
        movieList,
        ...options,
        getNextPageParam: (lastPage, allPages) => lastPage.nextCursor,
        getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error...!!!!</div>;
    }

    return (
        <Styled.Wrapper>
            <Search />
            <Styled.MovieContainer>
                {movieList.map(movie => (
                    <Styled.MovieItem key={movie.id}>
                        <Styled.MovieTitle>{movie.title}</Styled.MovieTitle>
                        {movie.poster_path ? (
                            <Styled.MoviePoster
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                alt={movie.title}
                            />
                        ) : (
                            <Styled.MoviePoster
                                src={
                                    process.env.PUBLIC_URL + '/empty_movies.png'
                                }
                                alt={movie.title}
                            />
                        )}
                        <p>별점💖: {movie.vote_average.toFixed(1)}</p>
                        <p>제작 연도: {movie.release_date}</p>
                        <Styled.OverView>{movie.overview}</Styled.OverView>
                    </Styled.MovieItem>
                ))}
            </Styled.MovieContainer>
            <ScrollButton />
        </Styled.Wrapper>
    );
};

export default MovieList;

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
`;

const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`;

const MovieItem = styled.div`
    width: 15%;
    margin: 10px 0;
    cursor: pointer;
`;

const MovieTitle = styled.h4`
    height: 25px;
`;

const MoviePoster = styled.img`
    width: 100%;
    height: auto;
`;
const OverView = styled.div`
    height: 13%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const Styled = {
    Wrapper,
    MovieContainer,
    MovieItem,
    MovieTitle,
    MoviePoster,
    OverView,
};
