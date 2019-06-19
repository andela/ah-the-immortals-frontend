import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { starClickAction } from '../rateArtcicles';
import { RATE_ARTICLE } from '../../constants/types';
import { ROOT_URL }  from '../../../services/api';

describe('Test the rating of an articke of an article', () => {
  let testStore = configureMockStore([thunk]);
  let store = testStore({});
  const slug = 'rating-slug';
  const rate = 4;
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('rate an article', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/articles/rating-slug/rate/`, {
      status: 200,
      response: {
        data: []
      }
    });
    await store.dispatch(starClickAction(slug, rate));
    expect(store.getActions()[0].type).toEqual(RATE_ARTICLE);
    done();
  });
});
