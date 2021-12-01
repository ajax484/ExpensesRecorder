import React, { useState } from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [ showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(true);
    }

    const notShowFormHandler = () => {
        setShowForm(false);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={showFormHandler} >Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={notShowFormHandler}/>}
        </div>
    );
};

export default NewExpense;