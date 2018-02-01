import React from 'react';
import { GuessCount } from '../components/guess-count';
import { shallow } from 'enzyme';
import '../setupTest';

describe('<GuessCount/>', () => {
  it('Should Smoke test the guess-count component', () => {
     shallow( < GuessCount / > )
    })

  it('Should test the prop in GuessCount', () => {
    const count = '5';
    const wrapper = shallow( <GuessCount guessCount = {count } />);
    expect(wrapper.contains( <h2>{ count }</h2>));
  });
});
