import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import resetPasswordLinkAction from '../passwordReset.action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Tests get password reset link actions', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const ROOT_URL = process.env.REACT_APP_BASE_URL;

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatches a success action', async (done) => {
    const resp = {
      'data': [
        {
          'message': 'A password reset link has been sent to your email'
        }
      ]
    };
    moxios.stubRequest(`${ROOT_URL}/users/password/reset/`,{
      status: 201,
      response: {
        resp
      }
    });
    await store.dispatch(resetPasswordLinkAction({}));
    expect(store.getActions()[0].type).toEqual('RESETPASSWORDLINK');
    done();
  });

  it('dispatches a failure action', async (done) =>{
    moxios.stubRequest(`${ROOT_URL}/users/password/reset/`,{
      status: 400,
      response: {}
    });
    await store.dispatch(resetPasswordLinkAction({}));
    expect(store.getActions()[0].type).toEqual('RESETPASSWORDLINKERROR');
    done();
  });
});
