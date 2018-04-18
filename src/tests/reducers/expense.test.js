import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state',()=> {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})

test('should remove expense by id',()=> {
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expenses if id not found',()=> {
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[1],expenses[2]])
})

test('should add an expense',()=> {
    const newExpense = {
        id: '4',
        description: 'New Expense',
        note: '',
        amount: 20000000000,
        createdAt:0
    }
    const action = {
        type:'ADD_EXPENSE',
        expense:newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense])
})


test('should edit expense',()=> {
    const note = 'Updated note'
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            note: note
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].note).toEqual('Updated note')
})
test('should not edit expense if expense not found',()=> {
    const note = 'Updated note'
    const action = {
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            note: note
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
   
    const action = {
        type: 'SET_EXPENSES',
        expenses : [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
});