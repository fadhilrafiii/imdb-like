import React from 'react';

import AnimeBox from 'Components/AnimeBox';
import Loading from 'Components/Loading';
import NoDataFound from 'Components/NoDataFound';
import { Anime } from 'Types/Anime';
import { getRatings } from 'Utils/Parser';

import { AnimeDataType, MostPopularAnimeProps } from './Types';

const MostPopular = ({
  loading,
  data,
  onClickAnime,
}: MostPopularAnimeProps) => {
  return (
    <>
      <h2>Most Popular Animes</h2>
      <div
        className={`hot-anime ${
          (!data || !data.length) && !loading ? 'centered' : ''
        }`}
      >
        {!loading &&
          !!data &&
          data.map((anime: Anime) => (
            <div
              key={anime?.title?.romaji || anime?.title?.english}
              className="anime-container"
              role="presentation"
              onClick={() => onClickAnime(anime.id, AnimeDataType.MOST_POPULAR)}
            >
              <AnimeBox
                title={anime.title.english || anime.title.romaji}
                genres={anime.genres.slice(0, 3)}
                rating={getRatings(anime.averageScore)}
                image={anime.bannerImage}
                totalReviews={anime.reviews.pageInfo.total}
              />
            </div>
          ))}
        {loading && <Loading />}
        {(!data || !data.length) && !loading && <NoDataFound />}
      </div>
    </>
  );
};

export default MostPopular;
