import Validators from '../FormValidators';

describe('Tests for password Match validator', () => {
  const { passwordMatchMsg } = Validators;
  it('Test password errors', () => {
    const errors = {
      password: ['password ins invalid']
    };
    const showError = {};
    expect(passwordMatchMsg(errors, showError)).toEqual(errors.password[0]);
  });
  it('Tests for password mismatch', () => {
    const errors = {};
    const showError = {
      passwdError: 'Password do not match'
    };
    expect(passwordMatchMsg(errors, showError)).toEqual(showError.passwdError);
  });
});
