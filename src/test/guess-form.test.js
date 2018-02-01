import React from 'react';
import GuessForm from '../components/guess-form';
import { shallow, mount } from 'enzyme';
import '../setupTest';

describe('<GuessForm />', () => {
    it('Should smoke test the GuessForm component', () => {
        // shallow( <GuessForm / > )
    })
})

// it('Shuould test callback on submit in GuessForm', () => {
//   const callback = jest.fn((value) => {console.log(value)} );
//   const wrapper = mount(<GuessForm onMakeGuess={(e) => callback(e)}/>);
//   // console.log(wrapper.find('.text').instance());
//   wrapper.find('.text').instance().value = '56';
//
//   wrapper.simulate('submit');
//   expect(callback).toHaveBeenCalled();
//   expect(callback.mock.calls[0][0]).toEqual('56');
//   //callback was sent a value of 56
//
// });
