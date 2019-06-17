import ACTION_CONSTANTS from '../../constants/constants';
import CommentsReducer from '../Comments.reducer';

describe('Comments reducer', () => {
  const initialState = {
    data: {
      comments: []
    },
    error: {},
    isLoading: true,
  };

  it('tests successful creation of comment', () => {
    const action = {
      type: ACTION_CONSTANTS.CREATE_COMMENT,
      payload: {
        comment: {}
      }
    };
    expect(CommentsReducer(initialState, action)).toEqual({
      data: {
        comments: [
          {
            replies: []
          }
        ]
      },
      error: {},
      isLoading: false
    });
  });

  it('tests failure of comment creation', () => {
    const action = {
      type: ACTION_CONSTANTS.CREATE_COMMENT_FAILURE,
      error: {}
    };
    expect(CommentsReducer(initialState, action)).toEqual({
      error: action.payload,
      data: {},
      isLoading: false
    });
  });

  it('tests successful reply', () => {
    const action = {
      type: ACTION_CONSTANTS.CREATE_REPLY,
      response: {
        data: {
          comment: {}
        }
      }
    };
    expect(CommentsReducer(initialState, action)).toEqual({
      data: {
        comments: [
          {
            replies: []
          }
        ]
      },
      error: {},
      isLoading: false
    });
  });

  it('tests failure of reply', () => {
    const action = {
      type: ACTION_CONSTANTS.CREATE_COMMENT_FAILURE,
      error: {}
    };
    expect(CommentsReducer(initialState, action)).toEqual({
      data: {},
      error: action.payload,
      isLoading: false
    });
  });

  it('tests successful fetching of comments', () => {
    const action = {
      type: ACTION_CONSTANTS.READ_COMMENTS,
      response: {
        data: {
          comments: []
        }
      }
    };
    expect(CommentsReducer(initialState, action)).toEqual({
      data: action.payload,
      error: {},
      isLoading: false
    });
  });

  it('tests failure of fetching comments', () => {
    const action = {
      type: ACTION_CONSTANTS.READ_COMMENTS_FAILURE,
      error: {}
    };
    expect(CommentsReducer(initialState, action)).toEqual({
      error: action.payload,
      data: {},
      isLoading: false
    });
  });

  it('tests invalid action type', () => {
    const action = {
      type: 'invalid'
    };
    expect(CommentsReducer(initialState, action)).toEqual(initialState);
  });

});



