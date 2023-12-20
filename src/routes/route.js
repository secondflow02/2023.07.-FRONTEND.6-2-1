import { createBrowserRouter } from 'react-router-dom';

import { MovieDetail } from '../apis/MovieDetailApi';
import {
    MovieList,
    NowPlaying,
    TopRated,
    UpComing,
} from '../apis/MovieListApi';
import { MovieSearch } from '../apis/MovieSearchApi';
import RootLayout from '../layout/Layout';
// import HomePage from '../pages/movies/home';

const route = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            // {
            //     path: '',
            //     element: <HomePage />,
            // },
            {
                path: '/',
                element: <UpComing />,
            },
            {
                path: '/2',
                element: <MovieList />,
            },
            {
                path: '/3',
                element: <TopRated />,
            },
            {
                path: '/4',
                element: <NowPlaying />,
            },
            {
                path: '/:movieId',
                element: <MovieDetail />,
            },
            {
                path: '/31',
                element: <MovieSearch />,
            },
        ],
    },
]);
export default route;
