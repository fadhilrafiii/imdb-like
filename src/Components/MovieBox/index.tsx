import React from 'react';

import StarIcon from 'Components/Icons/StarIcon';

import './index.css';
import { MovieBoxProps } from './Types';

const MovieBox = ({ movie }: MovieBoxProps) => {
  return (
    <div className="movie-box">
      <img src={movie.images[0]} alt={movie.name} className="movie-img" />
      <h4 className="movie-name">{movie.name}</h4>
      <p className="movie-genre">{movie.genre.join(',  ')}</p>
      <div className="rating">
        <span>
          <StarIcon fill="#fda516" />
        </span>
        <span>{movie.rating}</span>
        <span>{`(${movie.totalRating} reviews)`}</span>
      </div>
    </div>
  );
};

export default MovieBox;
