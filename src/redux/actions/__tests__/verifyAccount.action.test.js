import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { ROOT_URL } from '../../../services/api';
import verifyAccountAction from '../verifyAccount.action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Tests like Comment actions', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const token = '5678WR5670998FDTYUM';
  const verifyAccountUrl = `${ROOT_URL}/users/activate/${token}`;

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('tests successful account verification', async (done) => {
    moxios.stubRequest(
      verifyAccountUrl, {
        status: 200,
        response: {}
      }
    );
    await store.dispatch(verifyAccountAction(token));
    expect(store.getActions()[0].type).toEqual('VERIFY_ACCOUNT');
    done();
  });

  it('tests unsuccessful account verification', async (done) => {
    moxios.stubRequest(
      verifyAccountUrl, {
        status: 400,
        response: {}
      }
    );
    await store.dispatch(verifyAccountAction(token));
    expect(store.getActions()[0].type).toEqual('VERIFY_ACCOUNT_FAILURE');
    done();
  });
});
