export type PaginationProps = {
  page: number;
  totalPages: number;
  onChangePage: (current: number) => void;
};
