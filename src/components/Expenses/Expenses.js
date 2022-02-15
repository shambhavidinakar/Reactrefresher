import React, { useState } from "react";
import "./css/Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expenses = (props) => {
  const [year, setYear] = useState("2021");
  const filterYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(item => item.date.getFullYear().toString() === year);
  return (
    <div className="expenses">
      <div>
        <ExpensesFilter selected={year} onSelectedYear={filterYearHandler} />
      </div>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </div>
  );
};

export default Expenses;
