import React from 'react'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import expenses from '../fixtures/expenses'


test('should render ExpensesSummary component with multiple expenses correctly',() => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should render ExpensesSummary component with a single expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})