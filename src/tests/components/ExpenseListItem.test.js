import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListItem } from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'


test('should render ExpenseListItem with an expense from expenses', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[0].id} {...expenses[0]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})