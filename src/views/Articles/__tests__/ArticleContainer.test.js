import { sortTopRated, sortPopular } from '../../../services/sortArticles';

describe('test sort articles', () => {
  it('test sortPopular', () => {
    const articles = [
      {num_vote_up: 40},
      {num_vote_up: 30}
    ];
    expect(sortPopular(articles)).toStrictEqual(
      [{num_vote_up: 40}, {num_vote_up: 30}]
    );
  });

  it('test sortTopRated', () => {
    const articles = [{
      ratings: {
        average_ratings: 2
      }},
    {ratings: {
      average_ratings: 1
    }
    }];
    expect(sortTopRated(articles)).toStrictEqual(
      [{
        ratings: {
          average_ratings: 2
        }},
      {ratings: {
        average_ratings: 1
      }
      }]
    );
  });
});
