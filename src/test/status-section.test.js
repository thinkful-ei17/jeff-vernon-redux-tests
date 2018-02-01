import React from 'react';
import StatusSection from '../components/status-section';
import { shallow, mount } from 'enzyme';
import '../setupTest';

describe('<StatusSection/>', () => {
    it('Should smoke test the StatusSection component', () => {
        // shallow( <StatusSection guesses={[]}/ > ) 
    })

    // it('Should show given prop values when rendered', () => {
    //     const wrapper = mount(<StatusSection guesses={[1,2,3]} auralStatus='Won!'/ >)
    //     console.log(wrapper.debug());
    //     // console.log('Here!');
    //     // console.log(wrapper.props().auralStatus);
    //     //console.log(wrapper.props('auralStatus'));
    //     //console.log(wrapper.props());
    //     expect(wrapper.prop('auralStatus')).toEqual('Won!');
    //     expect(wrapper.prop('guesses')).toEqual([1,2,3]);
    // })
})
