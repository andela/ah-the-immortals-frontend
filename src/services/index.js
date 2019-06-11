/* eslint-disable import/prefer-default-export */
export const keyUp = (inputs, button) => Object.values(inputs).forEach(input => {
  input.simulate('keyup', {
    keyCode: 65,
  });
  expect(button.prop('disabled')).toEqual(true);
});
