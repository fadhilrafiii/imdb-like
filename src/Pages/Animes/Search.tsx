import React from 'react';

import AnimeBox from 'Components/AnimeBox';
import Loading from 'Components/Loading';
import NoDataFound from 'Components/NoDataFound';
import Pagination from 'Components/Pagination';
import { Anime } from 'Types/Anime';
import { getRatings } from 'Utils/Parser';

import { AnimeDataType, SearchAnimeProps } from './Types';

const SearchAnime = ({
  loading,
  data,
  search,
  onClickAnime,
  pagination,
  onChangePage,
}: SearchAnimeProps) => {
  return (
    <div className="search-anime">
      <div className="search-header">
        <h2 className="search-title">{`Searching for: '${search}'`}</h2>
        <h3 className="search-found">{`${pagination?.total || 0} found`}</h3>
      </div>
      <div
        className={`hot-anime ${
          (!data || !data.length) && !loading ? 'centered' : ''
        }`}
      >
        {!loading &&
          !!data &&
          data.map((anime: Anime) => (
            <div
              key={anime.title.english || anime.title.romaji}
              className="anime-container"
              role="presentation"
              onClick={() => onClickAnime(anime.id, AnimeDataType.SEARCH)}
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
      <br />
      <Pagination
        page={pagination?.currentPage || 1}
        totalPages={pagination?.lastPage || 1}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default SearchAnime;
