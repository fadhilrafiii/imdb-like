import { Anime } from 'Types/Anime';
import { PaginationType } from 'Types/Pagination';

export type MostPopularAnimeProps = {
  loading: boolean;
  data: Array<Anime>;
  onClickAnime: (
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
    from: AnimeDataType,
  ) => void;
};

export type SearchAnimeProps = {
  search: string;
  loading: boolean;
  data: Array<Anime>;
  onClickAnime: (
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
    from: AnimeDataType,
  ) => void;
  pagination: PaginationType;
  onChangePage: (current: number) => void;
};

export enum AnimeDataType {
  SEARCH = 'SEARCH',
  MOST_POPULAR = 'MOST_POPULAR',
}
