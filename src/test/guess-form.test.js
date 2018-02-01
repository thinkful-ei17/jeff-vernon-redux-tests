import React from 'react';
import { GuessForm } from '../components/guess-form';
import { MAKE_GUESS } from '../actions';
import { shallow, mount } from 'enzyme';
import '../setupTest';

describe('<GuessForm />', () => {
    it('Should smoke test the GuessForm component', () => {
        shallow( <GuessForm / > )
    })
})

it('Should test callback on submit in GuessForm', () => {
  const dispatch = jest.fn((value) => {console.log(value)} );
  const callback = jest.fn((value) => {console.log(value)} );
  const wrapper = mount(<GuessForm dispatch={(e) => dispatch(e)}/>);

  wrapper.find('.text').instance().value = '56';

  wrapper.simulate('submit');
  expect(dispatch).toHaveBeenCalled();
  expect(dispatch.mock.calls[0][0]).toEqual({type: MAKE_GUESS, 'guess': '56'});

});
