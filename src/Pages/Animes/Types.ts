import { Anime } from 'Types/Anime';

export type MostPopularAnimeProps = {
  loading: boolean;
  data: Array<Anime>;
  onClickAnime: (id: number, from: AnimeDataType) => void;
};

export type SearchAnimeProps = {
  search: string;
  loading: boolean;
  data: Array<Anime>;
  found: number;
  onClickAnime: (id: number, from: AnimeDataType) => void;
};

export enum AnimeDataType {
  SEARCH = 'SEARCH',
  MOST_POPULAR = 'MOST_POPULAR',
}
