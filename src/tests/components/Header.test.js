import { shallow } from 'enzyme'
import React from 'react'
import toJSON from 'enzyme-to-json'
import { Header } from '../../components/Header';
import {LoginPage} from '../../components/LoginPage';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={()=> {}}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
});



test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})


//  should call startLogout on button click


// LoginPage test file -
