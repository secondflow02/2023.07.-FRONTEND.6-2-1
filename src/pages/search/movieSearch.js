/* 
- search
    - 제목, 포스터, 미리보기(소개), 별점
    - 포스터 없는 경우, 대체 이미지 사용
*/
import styled from 'styled-components';

import { useSearchMove } from '../../apis/MovieSearchApi';
import { useSearchQuery } from '../../components/query';
import Search from '../../components/search';
const MovieSearchPage = () => {
    const { query } = useSearchQuery();

    const { data: searchMovie, isLoading, isError } = useSearchMove(query);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error...</div>;
    }
    // else if (isError) {
    //     return <div>Error...</div>;
    // }
    console.log(searchMovie);
    return (
        <>
            <Search />
            <Styled.h2>searh Movie : </Styled.h2>

            <Styled.h2>{searchMovie.title}</Styled.h2>
            <Styled.SearchMovieContain>
                <Styled.SearchMoviePostContain>
                    <Styled.SearchMoviePost></Styled.SearchMoviePost>
                </Styled.SearchMoviePostContain>
                <SearchMovieStory></SearchMovieStory>
            </Styled.SearchMovieContain>
        </>
    );
};
export default MovieSearchPage;

const h2 = styled.h2``;
const SearchMovieContain = styled.div``;
const SearchMoviePostContain = styled.div``;
const SearchMoviePost = styled.img``;
const SearchMovieStory = styled.p``;

const Styled = {
    h2,
    SearchMovieContain,
    SearchMoviePostContain,
    SearchMoviePost,
    SearchMovieStory,
};
