import React from 'react';
import Game from '../components/game';
import { shallow, mount } from 'enzyme';
import '../setupTest';

describe('<Game/>', () => {

  it('Should smoke test the Game component', () => {
    // shallow(<Game/>);
  });

  // it('Should test Game state renders', () => {
  //   const wrapper = shallow(<Game/>);
  //   expect(wrapper.state('feedback')).toEqual('Make your guess!');
  // });
  //
  // it('Should test Game feedback state can be updated', () => {
  //   const wrapper = shallow(<Game/>);
  //   expect(wrapper.state('feedback')).toEqual('Make your guess!');
  //   wrapper.setState({feedback: 'What is your guess!'})
  //   expect(wrapper.state('feedback')).toEqual('What is your guess!');
  // });
  //
  // it('Should test Game guesses list can be updated', () => {
  //   const seedList = [];
  //   for (let i = 0; i < 10; i++) {
  //         seedList.push(i+4);
  //     }
  //   const wrapper = shallow(<Game/>);
  //   seedList.forEach(item => {
  //     wrapper.instance().makeGuess(item)
  //   })
  //   // seedList.forEach(instance.addList);
  //   expect(wrapper.state('guesses').length).toEqual(seedList.length);
  // });

})
