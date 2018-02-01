import React from 'react';
import GuessSection from '../components/guess-section';
import { shallow } from 'enzyme';
import '../setupTest';

describe('<GuessSection/>', () => {
  //no need; everything renders and no logic here
    it('Should smoke test the GuessSection component', () => {
        shallow( <GuessSection / > )
    })
})
