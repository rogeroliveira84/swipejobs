import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './app';

describe('App Component tests...', () => {
   
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders and matches the snapshot', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
     });
  });