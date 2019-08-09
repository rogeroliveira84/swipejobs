import React from 'react';
import ReactDOM from 'react-dom';
import { dataMock } from '../../services/api/data';
import { shallow } from 'enzyme';
import utils from '../utils/utils';
import Shifts from './shifts';

describe('Shifts Component tests...', () => {
    
    const shiftsMock = dataMock.shifts.map(e => e.startDate);

    it('renders without crashing', () => {
        shallow(<Shifts dateFormat={utils.dateFormats.full} startDates={shiftsMock} />);
    });

    it('renders and matches the snapshot', () => {
        const component = shallow(<Shifts dateFormat={utils.dateFormats.full} startDates={shiftsMock} />);
        expect(component).toMatchSnapshot();
     });
  });