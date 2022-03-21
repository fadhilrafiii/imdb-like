import React, { useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import Button from 'Components/Button';
import Carousel from 'Components/Carousel';
import './index.css';

const Home = () => {
  const navigate = useNavigate();
  const movieImages = useMemo(
    () => [
      'images/batman.jpg',
      'images/dont-breathe.jpg',
      'images/spiderman-homecoming.jpg',
      'images/the-martian.jpg',
      'images/peaky-blinders.jpg',
    ],
    [],
  );

  const onClickComeHere = () => {
    navigate('/movies');
  };

  return (
    <div className="home">
      <Carousel slides={movieImages} isGradient />
      <div className="landing-text">
        <h1 className="headline">Don&apos;t be afraid to watch movie!</h1>
        <p className="subtext">
          If you&apos;re afraid wasting your time watching bad movies or ones
          you don&apos;t like, then we&apos;re your good news!&nbsp; We collect
          reviews and ratings of 1.000.000++ movies and we will provide it to
          you, so you could watch movies you love.
        </p>
      </div>
      <Button
        className="come-here-btn"
        size={Button.Size.MEDIUM}
        buttonType={Button.Type.FILLED}
        color={Button.Color.PRIMARY}
        onClick={onClickComeHere}
      >
        Come Here!
      </Button>
    </div>
  );
};

export default Home;
