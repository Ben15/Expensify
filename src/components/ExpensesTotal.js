
export const getExpensesTotal = (expenses) => {
    let total = 0
    if(expenses){
        expenses.map((expense) => {
            total += expense.amount
        })
        
        return total

    } else {
        return total
    }
}

