import React from 'react';
import Game from '../components/game';
import { shallow, mount } from 'enzyme';
import '../setupTest';

describe('<Game/>', () => {

  it('Should smoke test the Game component', () => {
    shallow(<Game/>);
  });
});
