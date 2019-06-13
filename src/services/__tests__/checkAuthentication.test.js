import isLoggedIn from '../checkAuthentication';

describe('Tests for check for logged in user', () => {
  const key = 'token';
  const value = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2RhdGEiOnsiZW1haWwiOiJlcmljYWJyYWhhbTgwNkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImVyaWMifSwiZXhwIjoxNTYwNDE0OTc4fQ.7RjPnPTCpE0OPlKGIMViDM7AMTo3JsZPMjw9xc0QRzw';
  localStorage.setItem(key, value);
  it('handle isLoggedIn', () => {
    localStorage.getItem(key);
    expect(isLoggedIn(true)).toEqual(true);
  });
  it('handle isLoggedOut', () => {
    try {
      // Fail test if above expression doesn't throw anything.
      localStorage.getItem(key);
      expect(isLoggedIn(true)).toEqual(true);
    } catch (error) {
      expect(error).toBe(false);
    }
  });
});
