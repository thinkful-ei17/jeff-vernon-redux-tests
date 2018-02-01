import React from 'react';
import { TopNav } from '../components/top-nav';
import { shallow, mount } from 'enzyme';
import { restartGame, makeGuess, generateAuralUpdate, MAKE_GUESS, RESTART_GAME, GENERATE_AURAL_UPDATE } from '../actions';

import '../setupTest';

describe('<TopNav/>', () => {
    it('Should smoke test the TopNav component', () => {
        shallow(<TopNav / > );
    })

    it('Should run a function when user clicks [Start a New Game]', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch}/>);
        wrapper.find('.new').simulate('click');
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0].correctAnswer).toBeLessThan(101);
        expect(dispatch.mock.calls[0][0].correctAnswer).toBeGreaterThan(0);
        expect(dispatch.mock.calls[0][0].type).toEqual(RESTART_GAME);
    })

    //
    // it('Should run a function when user clicks [#getStatus]', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<TopNav onGenerateAuralUpdate={callback}/>);
    //     wrapper.find('.status-link').simulate('click');
    //     expect(callback).toHaveBeenCalled();
    //
    // })
})

// it('Dispatches addCard from addCard', () => {
//     const dispatch = jest.fn();
//     const index = 2;
//     const wrapper = shallow(
//         <List cards={[]} index={index} dispatch={dispatch} />
//     );
//     const instance = wrapper.instance();
//     const text = seedCards[0].text;
//     instance.addCard(text);
//     expect(dispatch).toHaveBeenCalledWith(addCard(text, index));
// });
