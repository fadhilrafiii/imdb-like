import React, { useMemo } from 'react';

import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { QUERY_HOT_ANIME_BANNERS } from 'Client/Animes';
import Button from 'Components/Button';
import Carousel from 'Components/Carousel';
import { AnimeBanner } from 'Types/Anime';
import './index.css';

const Home = () => {
  const navigate = useNavigate();
  const { error, data } = useQuery(QUERY_HOT_ANIME_BANNERS, {
    variables: { page: 1, perPage: 5 },
  });

  const animeImages = useMemo(
    () =>
      data && !error
        ? data.Page.media.map((anime: AnimeBanner) => anime.bannerImage)
        : [
            'images/gintama.jpg',
            'images/noragami.jpg',
            'images/gintama-2.jpg',
            'images/aot.jpg',
            'images/fullmetal-alchemist.jpg',
          ],
    [data, error],
  );

  const onClickComeHere = () => {
    navigate('/animes');
  };

  return (
    <div className="home">
      <Carousel slides={animeImages} isGradient />
      <div className="landing-text">
        <h1 className="headline">Don&apos;t be afraid to watch anime!</h1>
        <p className="subtext">
          If you&apos;re afraid wasting your time watching bad animes or ones
          you don&apos;t like, then we&apos;re your good news!&nbsp; We collect
          reviews and ratings of 1.000.000++ animes and we will provide it to
          you, so you could watch animes you love.
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
