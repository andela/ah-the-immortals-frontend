export const sortPopular = (articles) => {
  return articles.sort((a, b) => b.num_vote_up- a.num_vote_up);
};

export const sortTopRated = (articles) => {
  return articles.sort((a, b) => b.ratings.average_ratings - a.ratings.average_ratings);
};
