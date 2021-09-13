import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";
export default function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={props.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
