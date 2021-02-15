import React from "react";
import withHoc from "./TodoListItemHoc";

const TodoListItem = ({label, important = false}) => {
  return <span>{label}</span>
}

export default withHoc(TodoListItem);
