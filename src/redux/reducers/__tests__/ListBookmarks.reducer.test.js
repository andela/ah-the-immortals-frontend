import Bookmarks from '../listBookmarks.reducer';
import ACTION_CONSTANTS from '../../constants/constants';

describe('Test listing of bookmarks reducer', () => {
  it('test successful listing of bookmarks', () => {
    const action = {
      type: ACTION_CONSTANTS.LIST_BOOKMARKS,
      response: {
        data: {
          bookmarks: [
            {
              'username': 'philip',
              'first_name': '',
              'last_name': '',
              'bio': '',
              'img_url': 'https://res.cloudinary.com/grean/image/upload/v1560448760/57028948_10161507756365548_4757796820107657216_o_dtnz3g',
              'created_at': '2019-05-30 11:52:18',
              'updated_at': '2019-06-13 17:59:21',
              'bookmarked': true
            }
          ]
        }
      }
    };
    expect(Bookmarks({}, action)).toEqual({
      bookmarks: action.payload,
      errors: {}
    });
  });

  it('test unsuccessful listing of bookmarks reducer', () => {
    const action = {
      type: ACTION_CONSTANTS.LIST_BOOKMARKS_FAILURE,
      error: {
        'message': 'Bookmarks not found'
      }
    };
    expect(Bookmarks({}, action)).toEqual({
      bookmarks: {},
      errors: action.payload
    });
  });

  it('test default state', () => {
    const action = {
      bookmarks: [],
      errors: {}
    };
    expect(Bookmarks({}, action)).toEqual({});
  });
});
