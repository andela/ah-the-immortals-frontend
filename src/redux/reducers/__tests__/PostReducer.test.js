import postReducer from '../PostReducer';
import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST, EDIT_POST,GET_PAGES,GET_PAGES_NEXT,REPORT_POST,
  GET_REPORTS,
  DELETE_REPORT

} from '../../constants/types';
import ACTION_CONSTANTS from '../../constants/constants';

const { LIKE_SUCCESS, LIKE_FAILURE, GET_HIGHLIGHTS_SUCCESS,
  GET_HIGHLIGHTS_FAILURE, CREATE_HIGHLIGHT_SUCCESS, REMOVE_HIGHLIGHT_SUCCESS,
  UPDATE_HIGHLIGH_SUCCESS, } = ACTION_CONSTANTS;
const initialState = {
  posts: [],
  post: {},
  pages: [],
  pagination: {},
  editpost: [],
  loading: false,
  likeError:{},
  Report:[],
  AllReports:{
    'escalated articles':[]
  },
};
const updateData = {
  ...initialState,
  post: {
    article: {
      highlights: {
        data: {
          highlights: [{
            id: 78,
            highlighted_text: 'highlights'
          }]
        }
      }
    }
  }
};
const noHighlightsState = {
  ...initialState,
  post: {
    article: {}
  }
};
const nohighlightResponse ={
  ...noHighlightsState,
  post: {
    article: {
      ...noHighlightsState.post.article,
      highlights: {
        data: {
          highlights: []
        },
        error: {}
      }
    }
  }
 
};
describe('article crud post tests', () => {
  it('returns original state', () => {
    expect(postReducer({}, { type: 'TYPE' })).toEqual({});
  });
  it('returns post loading', () => {
    expect(postReducer({}, { type: 'POST_LOADING' })).toEqual({
      loading: true
    });
  });
  it('returns get post loading', () => {
    expect(postReducer({}, { type: 'GET_POST' }).loading).toEqual(false);
  });
  it('returns get posts loading', () => {
    expect(postReducer({}, { type: 'GET_POSTS', payload: [] })).toEqual({
      posts: [], loading: false
    });
  });
  it('returns get pages loading', () => {
    expect(postReducer({}, { type: 'GET_PAGES', payload: [] })).toEqual({
      pages: [], loading: false
    });
  });
  it('returns get pages and  pagination loading', () => {
    expect(postReducer({}, { type: GET_PAGES_NEXT, payload: [] })).toEqual({
      pages: [], loading: false
    });
  });
  it('returns add post', () => {
    expect(postReducer({
      posts: []
    }, { type: ADD_POST, payload: '' })).toEqual({ posts: [''] });
  });
  it('returns  report', () => {
    expect(postReducer({
      Report:[]
    }, {type: REPORT_POST, payload: ''})).toEqual({Report:'', loading: false});
  });
  it('returns all reports', () => {
    expect(postReducer({
      AllReports:{},
    }, {type: GET_REPORTS, payload: ''})).toEqual({ AllReports:'', loading: false});
  });
  it('returns delete report', () => {
    expect(postReducer({ posts: [{slug: 'say-more'}]}, {type: DELETE_REPORT, payload: 'say-more'})).toEqual({
      'posts': []
    });
  });
  it('returns delete post', () => {
    expect(postReducer({ posts: [{ slug: 'hi-there' }] }, { type: DELETE_POST, payload: 'hi-there' })).toEqual({
      'posts': []
    });
  });
  it('returns edit post', () => {
    expect(postReducer({}, { type: EDIT_POST, payload: '' })).toEqual({
      'editpost': ''
    });
  });
  it('Triggers like success', () => {
    const result = postReducer({}, {
      type: LIKE_SUCCESS,
      payload: {}
    });
    expect(result).toEqual({
      post: {}
    });
  });
  it('Triggers like failure', () => {
    const result = postReducer({}, {
      type: LIKE_FAILURE,
      payload: {}
    });
    expect(result).toEqual({
      likeError: {}
    });
  });
  it('Rates an article', () => {
    const result = postReducer(initialState, {
      type: 'RATE_ARTICLE',
      payload: 'rate successfully'
    });
    expect(result).toEqual({
      ...initialState,
      post: 'rate successfully'
    });
  });
  it('Getshighlights', () => {
    const result = postReducer(initialState, {
      type: GET_HIGHLIGHTS_SUCCESS,
      payload: [{
        id: 1,
        field: 'body',
        start_index: 0,
        end_index: 3
      }]
    });
    expect(result).toEqual({
      ...initialState,
      post: {
        article: {
          highlights: {
            data: [{
              id: 1,
              field: 'body',
              start_index: 0,
              end_index: 3
            }],
            error: {}
          }
        }
      }
    });
  });
  it('Triggers get highlights failure', () => {
    const result = postReducer(initialState, {
      type: GET_HIGHLIGHTS_FAILURE,
      payload: ['already highlighted this section']
    });
    expect(result).toEqual({
      ...initialState,
      post: {
        article: {
          highlights: {
            data: {},
            error: ['already highlighted this section']
          }
        }
      }
    });
  });
  it('Creates highlight successfully', () => {
    const result = postReducer(updateData, {
      type: CREATE_HIGHLIGHT_SUCCESS,
      payload: {
        highlight: {
          highlightex_text: 'sample highlight'
        }
      }
    });
    const noHighlightResult = postReducer(noHighlightsState, {
      type: CREATE_HIGHLIGHT_SUCCESS,
      payload: []
    });
    expect(result).toEqual({
      ...updateData,
      post: {
        article: {
          highlights: {
            data: {
              highlights: [
                ...updateData.post.article.highlights.data.highlights,
                { highlightex_text: 'sample highlight' },
              ]
            },
            error: {}
          },
        }
      }
    });
    expect(noHighlightResult).toEqual(nohighlightResponse);
  });
  it('Updates highlight successfully', () => {
    const result = postReducer(updateData, {
      type: UPDATE_HIGHLIGH_SUCCESS,
      payload: {
        id: 2,
        data: {
          highlight: 'Sample higlight'
        }
      }
    });
    const noHighlightResult = postReducer(noHighlightsState, {
      type: UPDATE_HIGHLIGH_SUCCESS,
      payload: []
    });
    expect(noHighlightResult).toEqual(nohighlightResponse);
    expect(result).toEqual({
      ...updateData,
      post: {
        article: {
          ...updateData.post.article,
          highlights: {
            data: {
              highlights: [
                ...updateData.post.article.highlights.data.highlights,
                'Sample higlight'
              ]
            },
            error: {}
          }
        }
      }
    });
  });
  it('Removes highlight successfully', () => {
    const result = postReducer(updateData, {
      type: REMOVE_HIGHLIGHT_SUCCESS,
      payload: {
        id: 2,
        data: {
          highlight: 'Sample higlight'
        }
      }
    });
    const noHighlightResult = postReducer(noHighlightsState, {
      type: REMOVE_HIGHLIGHT_SUCCESS,
      payload: []
    });
    expect(noHighlightResult).toEqual(nohighlightResponse);
    expect(result).toEqual({
      ...updateData,
      post: {
        article: {
          ...updateData.post.article,
          highlights: {
            data: {
              highlights: [
                ...updateData.post.article.highlights.data.highlights
              ]
            },
            error: {}
          }
        }
      }
    });
  });
  it('Checks for default inital state', () => {
    const result = postReducer(undefined, {
      type: 'UNEXISTING_ACTION'
    });
    expect(result).toEqual(initialState);
  });
});
