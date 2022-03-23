import React from 'react';

import { LoadingIcon } from 'Components/Icons';
import './index.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div>
        <LoadingIcon />
        <h2 className="loading-text">
          Loading<span>&nbsp;.</span>
          <span>&nbsp;.</span>
          <span>&nbsp;.</span>
        </h2>
      </div>
    </div>
  );
};

export default Loading;
