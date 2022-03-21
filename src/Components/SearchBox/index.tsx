import React, { useEffect, useRef } from 'react';

import classnames from 'classnames';

import { SearchIcon } from 'Components/Icons';

import './index.css';
import { SearchBoxProps } from './Types';

const SearchBox = ({
  isOpen,
  value,
  onChange,
  onClick,
  className = '',
}: SearchBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  return (
    <div className={classnames(className, 'search', isOpen ? 'active' : '')}>
      <div className={`search-input ${isOpen ? 'active' : ''}`}>
        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder="Type to search movies..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          }}
        />
      </div>
      <button type="button" className="search-btn" onClick={onClick}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBox;
