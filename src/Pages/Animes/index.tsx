import React, { useCallback, useState } from 'react';

import { useQuery } from '@apollo/client';

import { QUERY_HOT_ANIMES, QUERY_SEARCH_ANIMES } from 'Client/Animes';
import StarIcon from 'Components/Icons/StarIcon';
import SearchBox from 'Components/SearchBox';
import TrayBox from 'Components/TrayBox';
import { Anime } from 'Types/Anime';

import './index.css';
import MostPopular from './MostPopular';
import SearchAnime from './Search';
import { AnimeDataType } from './Types';

const Animes = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isTrayOpen, setIsTrayOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [selectedAnime, setSelectedAnime] = useState<Anime>();
  const [page] = useState<number>(1);

  const { loading: loadingMostPopular, data: mostPopularAnime } = useQuery(
    QUERY_HOT_ANIMES,
    {
      variables: { page: 1, perPage: 8 },
    },
  );

  const { data: searchedAnime, loading: loadingSearch } = useQuery(
    QUERY_SEARCH_ANIMES,
    {
      variables: {
        page,
        perPage: 20,
        search,
      },
      skip: search.length < 3,
    },
  );

  const onChangeSearch = (value: string) => {
    setSearch(value);
  };

  const onClickSearch = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false);
    } else {
      setIsSearchOpen(true);
    }
  };

  const onCloseTray = () => {
    setIsTrayOpen(false);
  };

  const onClickAnime = useCallback(
    (id: number, from: AnimeDataType) => {
      let selected;
      if (from === AnimeDataType.MOST_POPULAR) {
        selected = mostPopularAnime.Page.media.find(
          (anime: Anime) => anime.id === id,
        );
      } else {
        selected = searchedAnime.Page.media.find(
          (anime: Anime) => anime.id === id,
        );
      }

      setSelectedAnime(selected);
      setIsTrayOpen(true);
    },
    [mostPopularAnime?.Page?.media, searchedAnime?.Page?.media],
  );

  return (
    <div className="animes-container">
      <div className={`animes ${isTrayOpen ? 'minimized' : ''}`}>
        <SearchBox
          isOpen={isSearchOpen}
          value={search}
          onChange={onChangeSearch}
          onClick={onClickSearch}
        />
        <br />
        {isSearchOpen && search.length > 2 && (
          <SearchAnime
            loading={loadingSearch}
            data={searchedAnime?.Page?.media || []}
            search={search}
            found={searchedAnime?.Page?.pageInfo?.total || 0}
            onClickAnime={onClickAnime}
          />
        )}
        <br />
        <br />
        <MostPopular
          data={mostPopularAnime?.Page?.media || []}
          loading={loadingMostPopular}
          onClickAnime={onClickAnime}
        />
      </div>
      <TrayBox isOpen={isTrayOpen} onClose={onCloseTray}>
        {selectedAnime ? (
          <div className="selected-anime">
            <h1 className="selected-anime-name">
              {selectedAnime.title.english || selectedAnime.title.romaji}
            </h1>
            <div className="selected-anime-genre">
              {selectedAnime.genres.join(',  ')}
            </div>
            <div className="selected-anime-rating">
              <span>
                <StarIcon fill="#fda516" />
              </span>
              <span>{selectedAnime.averageScore}</span>
              <span>{`(${selectedAnime.reviews.pageInfo.total} reviews)`}</span>
            </div>
            <img
              src={selectedAnime.bannerImage}
              alt={selectedAnime.title.romaji}
              className="selected-anime-img"
            />
            <h4 className="desc-label">Description:</h4>
            <p className="selected-anime-description">
              {selectedAnime.description}
            </p>
          </div>
        ) : (
          <div />
        )}
      </TrayBox>
    </div>
  );
};

export default Animes;