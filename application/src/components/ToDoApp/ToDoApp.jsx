import React, {Component} from 'react';
import withHocs from './ToDoAppHoc';
import AppHeader from "./AppHeader/AppHeader";
import SearchPanel from "./SearchPanel/SearchPanel";
import TodoList from "./TodoList/TodoList";

class ToDoApp extends Component {
    render() {
        return (
          <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
          </div>
        )
    }
}

export default (withHocs(ToDoApp));
