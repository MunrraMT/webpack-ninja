import React, { useEffect, useState, lazy, Suspense } from 'react';

const MovieCard = lazy(() => import('components/MovieCard'));

import QuickBooking from '../QuickBooking/QuickBooking.jsx';
import './HomeContent.scss';

const dummyItem = [{ name: 'Dummy Movie' }];

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch('http://localhost:5555/movies');
      const data = await response.json();
      setMovies(data);
      console.log(data);
    };

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
          <MovieCard title={item.name} imageUrl={item.imageUrl} />
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <QuickBooking></QuickBooking>
      <div className="movies-container">
        <Suspense fallback={null}>{renderMovieList()}</Suspense>
      </div>
    </div>
  );
};

export default HomeContent;
