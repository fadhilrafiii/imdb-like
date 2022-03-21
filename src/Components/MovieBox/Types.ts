export type Movie = {
  name: string;
  genre: Array<string>;
  rating: number;
  images: Array<string>;
  totalRating: number;
};

export type MovieBoxProps = {
  movie: Movie;
};
