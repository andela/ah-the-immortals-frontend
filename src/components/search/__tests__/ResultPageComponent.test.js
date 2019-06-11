import { mount } from 'enzyme';
import React from 'react';
import ResultPage from '../ResultPageComponent';

describe('Tests for Result page component', () => {
  const zeroResultProps = {
    result: {}
  };
  const resultsProps = {
    result: {
      results: {
        articles: [
          {
            title: 'Immortals',
            description: 'Nice Immortals',
            body: 'Testing immortals',
            author: {
              username: 'Tester',
              image: 'https://res.cloudinary.com/grean/image/upload/v1556488518/samples/vbioaj1wwewmtmeryucv',
            },
          }
        ]
      }
    }
  };
  const wrapper = mount(
    <ResultPage {...zeroResultProps} />
  );
  it('Tests Result Page Componet without results', () => {
    expect(wrapper.find('div.filter-error').text()).toEqual('There are no results found');
  });
  it('Tests Result for page with results', () => {
    const resultsWrapper = mount(
      <ResultPage {...resultsProps} />
    );
    expect(resultsWrapper.find('div.user-info').find('p').text()).toEqual('Tester');
  });
});
