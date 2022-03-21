import React, { useCallback, useState } from 'react';

import StarIcon from 'Components/Icons/StarIcon';
import MovieBox from 'Components/MovieBox';
import { Movie } from 'Components/MovieBox/Types';
import SearchBox from 'Components/SearchBox';
import TrayBox from 'Components/TrayBox';

import { movies } from './Dummy';
import './index.css';

const Movies = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isTrayOpen, setIsTrayOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const onChangeSearch = (value: string) => {
    setSearch(value);
  };

  const onSearch = () => {
    console.log('Clicked search!');
  };

  const onClickSearch = () => {
    if (isSearchOpen) {
      onSearch();
    } else {
      setIsSearchOpen(true);
    }
  };

  const onCloseTray = () => {
    setIsTrayOpen(false);
  };

  const onClickMovie = useCallback((id: string) => {
    const selected = movies.find((movie: Movie) => movie.id === id);

    setSelectedMovie(selected);
    setIsTrayOpen(true);
  }, []);

  return (
    <div className="movies-container">
      <div className={`movies ${isTrayOpen ? 'minimized' : ''}`}>
        <SearchBox
          isOpen={isSearchOpen}
          value={search}
          onChange={onChangeSearch}
          onClick={onClickSearch}
        />
        <br />
        <h2>Latest Movies</h2>
        <div className="latest-movie">
          {movies.map((movie: Movie) => (
            <div
              className="movie-container"
              role="presentation"
              onClick={() => onClickMovie(movie.id)}
            >
              <MovieBox movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <TrayBox isOpen={isTrayOpen} onClose={onCloseTray}>
        {selectedMovie ? (
          <div className="selected-movie">
            <h1 className="selected-movie-name">{selectedMovie.name}</h1>
            <div className="selected-movie-genre">
              {selectedMovie.genre.join(',  ')}
            </div>
            <div className="selected-movie-rating">
              <span>
                <StarIcon fill="#fda516" />
              </span>
              <span>{selectedMovie.rating}</span>
              <span>{`(${selectedMovie.totalRating} reviews)`}</span>
            </div>
            <img
              src={selectedMovie.images[0]}
              alt={selectedMovie.name}
              className="selected-movie-img"
            />
            <h4 className="desc-label">Description:</h4>
            <p className="selected-movie-description">
              {selectedMovie.description}
            </p>
          </div>
        ) : (
          <div />
        )}
      </TrayBox>
    </div>
  );
};

export default Movies;
