import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title: "Invalid Input",
            message: "Please Enter a Valid Name and Age (non-empty)"
        })
      return;
    }
    if (+enteredAge < 1) {
        setError({
            title: "Invalid Input",
            message: "Please Enter a Valid Age > 0 "
        })
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageNameChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => [
      setError(null)
  ]
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} errorClick={errorHandler}/>}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Name: </label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageNameChangeHandler}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
}
