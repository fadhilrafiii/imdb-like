export type Movie = {
  id: string;
  name: string;
  genre: Array<string>;
  rating: number;
  images: Array<string>;
  totalRating: number;
  description?: string;
};

export type MovieBoxProps = {
  movie: Movie;
};
