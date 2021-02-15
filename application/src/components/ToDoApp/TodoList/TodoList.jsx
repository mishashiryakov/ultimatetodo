import React from "react";
import withHocs from "./TodoListHoc";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label="Drink Coffee"/></li>
      <li><TodoListItem label="Make todo App" important/></li>
    </ul>
  );
};

export default withHocs(TodoList);
