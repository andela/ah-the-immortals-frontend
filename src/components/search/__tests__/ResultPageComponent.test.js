import { mount } from 'enzyme';
import React from 'react';
import ResultPage from '../ResultPageComponent';
import TEST_CONSTANTS from '../constants';

describe('Tests for Result page component', () => {
  const zeroResultProps = {
    result: {},
    handleClick: jest.fn()
  };
  const { search } = TEST_CONSTANTS;
  const resultsProps = {
    ...search,
    handleClick: jest.fn()
  };
  const wrapper = mount(
    <ResultPage {...zeroResultProps} />
  );
  it('Tests Result Page Componet without results', () => {
    expect(wrapper.find('div.filter-error').text()).toEqual('There are no results found');
  });
  const resultsWrapper = mount(
    <ResultPage {...resultsProps} />
  );
  it('Tests Result for page with results', () => {
    expect(resultsWrapper.find('div.user-info').find('p').text()).toEqual('Tester');
  });
  it('simulates click event', () => {
    const title = resultsWrapper.find('div.title-info');
    title.simulate('click');
    expect(title.exists()).toEqual(true);
  });
  it('Simulates click of body', () => {
    const body = resultsWrapper.find('div.article-body');
    body.simulate('click');
    expect(body.exists()).toEqual(true);
  });
  it('Simulates click of description', () => {
    const description = resultsWrapper.find('div.description');
    description.simulate('click');
    expect(description.exists()).toEqual(true);
  });
});
