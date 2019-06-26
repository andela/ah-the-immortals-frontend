import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import { getAllArticles } from '../allArticles.action';
import ACTION_CONSTANTS from '../../constants/constants';
import {fetchNotification} from '../notifications.action';


const { FETCH_ALL, FETCH_FAIL } = ACTION_CONSTANTS;

const store = configureMockStore([thunk])({});

describe('tests fetch all application articles', () => {
  const ROOT_URL = process.env.REACT_APP_BASE_URL;

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  const articles = [
    {
      'slug': 'communication-skills-3',
      'title': 'Communication Skills',
      'description': '7Cs of effective communication',
      'body': 'In order to be understood by your audience, there are rules you need',
      'image_url': 'No image uploaded',
      'created_at': '2019-06-20T08:01:10.236397Z',
      'updated_at': '2019-06-20T08:01:10.236427Z',
      'author': {
        'username': 'Big-Hiro',
        'bio': '',
        'image': 'https://res.cloudinary.com/grean/image/upload/v1561016204',
        'following': false
      },
      'ratings': {
        'average_ratings': 4.0
      },
      'tagList': [
        '7Cs',
        'communication'
      ],
      'readtime': '7 second(s)',
      'bookmarked': false
    }];

  it('test successful fetch all app articles action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/articles/?page_limit=10000`, {
        status: 200,
        response: {
          articles
        }
      });
    await store.dispatch(getAllArticles());
    expect(store.getActions()[0].type).toEqual('FETCH_ALL');
    done();
  });

  it('test unsuccessful fetch all app articles action', async (done) => {
    moxios.stubRequest(
      `${ROOT_URL}/articles/?page_limit=10000`, {
        status: 404,
        response: {
          'message': 'No articles found'
        }
      });

    await store.dispatch(getAllArticles());
    expect(store.getActions()[0].type).toEqual('FETCH_FAIL');
    done();
  });
});
