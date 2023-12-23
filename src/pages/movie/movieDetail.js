/* 
- movie / 상세 페이지
    - 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
    - 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
    - 그 외의 데이터 추가 활용 여부는 자유
*/

import { useMovieDetail } from '../../apis/MovieDetailApi';

const MovieDetail = () => {
    const num = 572802;
    const { data: moviedetail, isLoading, isError } = useMovieDetail(num);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error...!!!!</div>;
    }

    const posterUrl = moviedetail.poster_path
        ? `https://image.tmdb.org/t/p/w500${moviedetail.poster_path}`
        : '이미지 없음';
    return (
        <>
            <h1>movie Detail</h1>
            <div>
                <h2>{moviedetail.title}</h2>
                {moviedetail.poster_path && (
                    <img src={posterUrl} alt={moviedetail.title} />
                )}
                <p>별점: {moviedetail.vote_average}</p>
                <p>제작 연도: {moviedetail.release_date}</p>
            </div>
        </>
    );
};
export default MovieDetail;

/* 
import { useMovieDetail } from '../../apis/MovieDetailApi';

const MovieDetail = () => {
    //movieDetail함수는 쿼리   키로 데이터를 가지고옴
    const {
        //영화 상세 정보를 비동기적으로 가져오고, 그 결과를 객체비구조화 할당을 통해 movieDetail, isLoading, isError 변수에 저장하는 부분
        data: movieDetail, //movieDetail로 구조 분해할당
        isLoading, //isLoading은 데이터를 불러오는 동안 true이며, 데이터가 완전히 불러와진 후에는 false가 된다
        isError, //sError는 데이터를 불러오는 동안 에러가 발생하면 true이며, 그렇지 않은 경우에는 false가 된다
    } = useMovieDetail(572802);
    if (isLoading) {
        return <div>Loading...:c</div>; // isLoading데이터를 불러오는 동안 true이며ㅊ<div>가 불러와잠
    }
    if (isError) {
        return <div>Error...:D</div>; //isError 데이터를 불러오는 과정에서 에러가 발생하면 true이며<div>가 불러와잠
    }
    return (
        <>
            <h1>movie detail</h1>
            <p>{movieDetail.title}</p>
        </>
    );
};
export default MovieDetail;
 */
