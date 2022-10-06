import React, { useEffect, useState, lazy, Suspense } from 'react';

const MovieCard = lazy(() => import('components/MovieCard'));

import QuickBooking from '../QuickBooking/QuickBooking.jsx';
import './HomeContent.scss';

const dummyItem = [{ name: 'Dummy Movie' }];

const fetchMovies = async () => {
  const response = await fetch('http://localhost:5555/movies');
  const data = await response.json();
  console.log(data);
};

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(() => {
    fetchMovies();
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === 'function') {
      props.movieClicked(item);
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          <div>Load the cards Here</div>
          <Suspense fallback={null}>
            <MovieCard />
          </Suspense>
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <QuickBooking></QuickBooking>
      <div className="movies-container">{renderMovieList()}</div>
    </div>
  );
};

export default HomeContent;
