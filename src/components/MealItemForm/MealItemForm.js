import classes from "./MealItemForm.module.css";
import Input from "../Input/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const isAmountValid = (enteredAmount) => {
    if (enteredAmount.trim().length === 0) return false;
    if (enteredAmount < 1) return false;
    if (enteredAmount > 5) return false;
    return true;
  };
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    setAmountIsValid(isAmountValid(enteredAmount));
    if (isAmountValid(enteredAmount)) props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid number</p>}
    </form>
  );
};
export default MealItemForm;
