import React from 'react';
import Header from '../components/header';
import TopNav from '../components/top-nav';
import { shallow, mount } from 'enzyme';
import '../setupTest';

describe('<header/>', () => {
    it('Should smoke test the header component', () => {
        shallow( <Header / > )
    })
})
