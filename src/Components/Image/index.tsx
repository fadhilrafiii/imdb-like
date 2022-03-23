import React, { SyntheticEvent, useMemo } from 'react';

import { ImageProps } from './Types';

const Image = ({ src, alt, className }: ImageProps) => {
  const imgUrl = useMemo(() => src, [src]);

  const onError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'images/not-found.jpg';
    e.currentTarget.onerror = null;
  };

  return (
    <img
      src={imgUrl || 'images/not-found.jpg'}
      alt={alt}
      className={className}
      onError={onError}
    />
  );
};

export default Image;
