/*1. home page
    - 사용 API: /movie/popular  기본*/
/*2. now playing page
- 사용 API: /movie/now_playing dates maximum,minimunm :내일날짜 , 6주전다음날 */
/* 3. upcoming page
    - 사용 API: /movie/upcoming dates maximum,minimunm : 3주 다음날, 내일날짜*/
/*4. top-rated pag
    - 사용 API: /movie/top_rated */

import axios from 'axios';

//const Api_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQyMGYyZTNmMmI5NjQwZjgyYWJlMjExMTA4ZWIzMiIsInN1YiI6IjY1ODE2MzlkM2E0OGM1Njc0ZmFmNjYyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oxr96qz3N6ZwnKbeKEUfJhrFpopLGnGKpwz0jfagpMA';

const Base_Url = 'https://api.themoviedb.org/3';

const baseApi = axios.create({
    BaseUrl : Base_Url,
    headers : {
        Accept: 'application/json',
        ApiToken : `Bearer ${Api_token}`
    },
    params :{
        language: 'ko-KR',
        region: 'KR'
    }
})

export const MovieListApi = async()=>{
    const home = await axios.get(
        `${BaseUrl}/movie/popular`,
        {
            headers: {
                Authorization
            }
        }
    )
}
