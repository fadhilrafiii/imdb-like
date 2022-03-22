import React from 'react';

import StarIcon from 'Components/Icons/StarIcon';
import Image from 'Components/Image';

import './index.css';
import { AnimeBoxProps } from './Types';

const AnimeBox = ({
  title,
  genres,
  rating,
  image,
  totalReviews,
}: AnimeBoxProps) => {
  return (
    <div className="anime-box">
      <Image src={image} alt={title} className="anime-img" />
      <h4 className="anime-name">{title}</h4>
      <p className="anime-genre">{genres.join(',  ')}</p>
      <div className="rating">
        <span>
          <StarIcon fill="#fda516" />
        </span>
        <span>{rating}</span>
        <span>{`(${totalReviews} reviews)`}</span>
      </div>
    </div>
  );
};

export default AnimeBox;
