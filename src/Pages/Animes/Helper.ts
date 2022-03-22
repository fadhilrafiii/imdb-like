export const getRatings = (score: number) => {
  return parseFloat((score / 20).toFixed(1));
};
