import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import { getExpensesTotal } from '../selectors/expenses-total'
import numeral from 'numeral'


export const ExpensesSummary = (props) => {

    return (
        <div>
            <p>{`You have ${props.expenses.length} expenses of a total of ${numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}` }</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpensesSummary)