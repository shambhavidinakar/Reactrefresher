import React,{useState} from 'react';
import './css/ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput,setUserInput] = useState({
        title:'',
        amount:'',
        date:''
    });

    const titleHandler = event =>{
        setUserInput({
            ...userInput,
            title: event.target.value
        });
    };

    const amountHandler = event =>{
        setUserInput({
            ...userInput,
            amount: event.target.value
        });
    };

    const dateHandler = event =>{
        setUserInput({
            ...userInput,
            date: new Date(event.target.value)
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseData(userInput);
        setUserInput({
            title:'',
            amount:'',
            date:''
        });
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={userInput.title} onChange={titleHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={userInput.amount} onChange={amountHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2023-12-31' value={userInput.date} onChange={dateHandler}/>
                </div>
                <div className='new-expence__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
                <div className='new-expence__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;