  import React from 'react';
import TopNav from '../components/top-nav';
import { shallow, mount } from 'enzyme';
import '../setupTest';

describe('<TopNav/>', () => {
    it('Should smoke test the TopNav component', () => {
        // shallow(<TopNav / > );
    })

    // it('Should run a function when user clicks [Start a New Game]', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<TopNav onRestartGame={callback}/>);
    //     wrapper.find('.new').simulate('click');
    //     expect(callback).toHaveBeenCalled();
    // })
    //
    // it('Should run a function when user clicks [#getStatus]', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<TopNav onGenerateAuralUpdate={callback}/>);
    //     wrapper.find('.status-link').simulate('click');
    //     expect(callback).toHaveBeenCalled();
    //
    // })
})
