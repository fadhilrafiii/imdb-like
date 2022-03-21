import React, { useState } from 'react';

import MovieBox from 'Components/MovieBox';
import { Movie } from 'Components/MovieBox/Types';
import SearchBox from 'Components/SearchBox';

import { movies } from './Dummy';
import './index.css';

const Movies = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

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

  return (
    <div className="movies-container">
      <div className="movies">
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
            <MovieBox movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
