import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // Format the date to a more readable format
  const formattedDate =
    props.date instanceof Date
      ? props.date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "";
  return (
    <div className="expense-item">
      <div>{formattedDate}</div>
      <div className="expense-item__descriptions">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
