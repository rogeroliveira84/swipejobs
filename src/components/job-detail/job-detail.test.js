import React from 'react';
import ReactDOM from 'react-dom';
import { dataMock } from '../../services/api/data';
import { shallow } from 'enzyme';
import JobDetail from './job-detail';

describe('JobDetail Component tests...', () => {
    
    it('renders without crashing', () => {
        shallow(<JobDetail data={dataMock} />);
    });

    it('renders and matches the snapshot', () => {
        const component = shallow(<JobDetail data={dataMock} />);
        expect(component).toMatchSnapshot();
     });
  });