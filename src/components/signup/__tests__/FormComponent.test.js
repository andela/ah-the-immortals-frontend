import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Form from '../FormComponent';

describe('<Form/>', () => {
  it('renders form component', () => {
    const mockOnsubmit = jest.fn();
    const mockOnchange = jest.fn();
    const wrapper = mount(
      <Form
        handleSubmit={mockOnsubmit}
        handleChange={mockOnchange}
        signupdata={{
          email: 'test@gmail.com',
          errors: {}
        }}
        errorShow={{ password: false }}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
