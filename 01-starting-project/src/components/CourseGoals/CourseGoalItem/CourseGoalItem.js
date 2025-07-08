import React from "react";

import styles from "./CourseGoalItem.module.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["goal-item"]} onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
