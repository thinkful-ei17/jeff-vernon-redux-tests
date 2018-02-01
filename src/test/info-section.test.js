import React from 'react';
import InfoSection from '../components/info-section';
import { shallow } from 'enzyme';
import '../setupTest';

describe('<InfoSection/>', () => {
    it('Should smoke test the InfoSection component', () => {
        shallow( <InfoSection / > )
    })

})
