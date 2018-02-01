import React from 'react';
import { Feedback } from '../components/feedback';
import { shallow } from 'enzyme';
import '../setupTest';

describe('<Feedback/>', () => {
  it('Should smoke test the Feedback component', () => {
    shallow( < Feedback /> );
    });

  it('Should test the Feedback props', () => {
    const key = '64';
    const wrapper = shallow(<Feedback key={key} />);
    expect(wrapper.contains(<h2>{key}</h2>));
    });
});
