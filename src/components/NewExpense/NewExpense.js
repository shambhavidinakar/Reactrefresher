import React, {useState} from 'react';
import './css/NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense =(props) =>{
    
    const [isEditing, setEditing] = useState(false);

    const setEditingHandler = () =>{
        setEditing(true);
    }

    const onCancelHandler = () =>{
        setEditing(false);
    }

    const expenseDataHandler = (enteredExpenseData)=> {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddedExpense(expenseData);
        setEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={setEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={expenseDataHandler} onCancel={onCancelHandler}/>}
        </div>
    );
}

export default NewExpense;