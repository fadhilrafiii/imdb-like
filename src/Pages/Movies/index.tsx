import React, { useState } from 'react';

import SearchBox from 'Components/SearchBox';
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
      </div>
    </div>
  );
};

export default Movies;
