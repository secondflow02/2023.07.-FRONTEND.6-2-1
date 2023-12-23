import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../layout/Layout';
import MovieDetail from '../pages/movie/movieDetail';
import MovieList from '../pages/movies/movieList';
import MovieSearchPage from '../pages/search/movieSearch';
// import HomePage from '../pages/movies/home';

const route = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <MovieList />,
            },
            // {
            //     path: '/',
            //     element: <UpComing />,
            // },
            // {
            //     path: '/3',
            //     element: <TopRated />,
            // },
            // {
            //     path: '/4',
            //     element: <NowPlaying />,
            // },
            {
                path: '/:movieId',
                element: <MovieDetail />,
            },
            {
                path: '/31',
                element: <MovieSearchPage />,
            },
        ],
    },
]);
export default route;
