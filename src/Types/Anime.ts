export type AnimeBanner = {
  id: number;
  bannerImage: string;
};

export type AnimeTitle = {
  romaji: string;
  english: string;
};

export type ReviewNumber = {
  pageInfo: {
    total: number;
  };
};

export type Anime = {
  id: number;
  title: AnimeTitle;
  averageScore: number;
  genres: Array<string>;
  description: string;
  reviews: ReviewNumber;
  bannerImage: string;
};
