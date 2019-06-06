import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import confirmPasswordResetAction from '../passwordConfirm.action';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Tests password change actions', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const ROOT_URL = process.env.REACT_APP_BASE_URL;
  
  const data = {
    password: 'MAina9176!',
    password_confirm: 'MAina9176!',
    token: '76879781234546ASDFCR4657',
  };

  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('dispatches a success on password change action', async (done) => {
    const resp = {
      'data': [
        {
          'message': 'You have successfully reset your password'
        }
      ]
    };
    moxios.stubRequest(`${ROOT_URL}/users/password/reset/confirm/${data.token}`,{
      status: 201,
      response: {
        resp
      }
    });
    await store.dispatch(confirmPasswordResetAction(data, jest.fn()));
    expect(store.getActions()[0].type).toEqual('PASSWORDCONFIRM');
    done();
  });

  it('dispatches a failure on password change action', async (done) => {
    moxios.stubRequest(`${ROOT_URL}/users/password/reset/confirm/${data.token}`,{
      status: 400,
      response: {}
    });
    await store.dispatch(confirmPasswordResetAction());
    expect(store.getActions()[0].type).toEqual('PASSWORDCONFIRMERROR');
    done();
  });
});
