import React, { useState } from 'react';

import { ImageProps } from './Types';

const Image = ({ src, alt, className }: ImageProps) => {
  const [imgUrl, setImgUrl] = useState<string>(src);
  const onError = () => {
    setImgUrl('images/not-found.jpg');
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
