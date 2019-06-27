import allArticlesReducer from '../allArticles.reducer';
import ACTION_CONSTANTS from '../../constants/constants';
import {NotificatonsReducer, notifyReducer} from '../notifications.reducer';


describe('Test All app articles reducer', () => {
  it('test successful fetch all app articles', () => {
    const action = {
      type: ACTION_CONSTANTS.FETCH_ALL,
      response: {
        data: {
          results: {
            articles: [
              {
                'slug': 'dummy',
                'title': 'dummy',
                'description': 'dummy',
                'body': '<p>dummy</p>',
                'image_url': 'No image uploaded',
                'created_at': '2019-06-20T08:38:52.545622Z',
                'updated_at': '2019-06-20T08:38:52.545652Z',
                'author': {
                  'username': 'slim',
                  'bio': '',
                  'image': 'https://res.cloudinary.com/grean/image/upload/v1560853425/57028948_10161507756365548_4757796820107657216_o_lvn3p6',
                  'following': false
                },
                'ratings': {
                  'average_ratings': 5.0
                },
                'tagList': [
                  'dude',
                  'Now',
                  'what',
                  'yes'
                ],
                'readtime': '2 second(s)',
                'bookmarked': false
              }
            ]
          }
        }
      }
    };
    expect(allArticlesReducer({}, action)).toEqual({
      articles: action.response.data.results.articles,
      error: {}
    });
  });

  it('test unsuccessful fetch all app articles', () => {
    const action = {
      type: ACTION_CONSTANTS.FETCH_FAIL,
      error: {
        request: {
          response: {
            'message': 'Failed to load resource'
          }
        }
      }
    };
    expect(allArticlesReducer({}, action)).toEqual({
      error: action.error.request.response,
      articles: []
    });
  });

  it('test initial state', () => {
    const action = {
      type: 'default state',
      articles: [],
      error: {}
    };
    expect(allArticlesReducer({}, action)).toEqual({});
  });
});
