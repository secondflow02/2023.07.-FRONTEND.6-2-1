// 5. 영화 상세 페이지
//     - 사용 API: /movie/{movie_id}
import axios from 'axios';

const apiKey ='10d2ab4a4b95123cd29ad641dbbe26f2'

const baseUrl = 'https://api.themoviedb.org/3/movie/'

const movieId = 'movieId'

const detailApi = `${baseUrl}/${movieId}`;

const fetchData = async ()=>{
    try{
        const response = await axios.get(detailApi,{params:{
            key:apiKey,
        },
        });
        const movieData = response.data;
        return movieData;
    }catch(error){
        console.error('Error fetching movie data:', error.message);
    }
}


