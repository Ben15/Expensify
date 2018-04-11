import { addExpense, editExpense, removeExpense } from '../../actions/expenses'


test('should setup remove expense action object', () => {
    const action = removeExpense({id : '123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {notes:'123abc'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {notes:'123abc'}
    })
})

test('should setup add expense action object with provided values', () => {
   
   const expenseData = {
    description: 'Rent',
    amount:1000,
    createdAt: 1000,
    note: 'Last months Rent'
   };
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values', () => {
   const action = addExpense()
   expect(action).toEqual({
       type:'ADD_EXPENSE',
       expense:{
          description:'',
          amount:0,
          note:'',
          createdAt:0,
          id: expect.any(String)

       }
   })
})