import { getExpensesTotal } from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const total = getExpensesTotal([])
    expect(total).toEqual(0)
})

test('should correctly add up a single expense', () => {
    const total = getExpensesTotal([expenses[0]])
    expect(total).toEqual(195)
})

test('should correctly add up a multiple expenses', () => {
    const total = getExpensesTotal(expenses)
    expect(total).toEqual(1095195)
})