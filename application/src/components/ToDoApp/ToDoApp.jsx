import React from 'react';
import withHocs from './ToDoAppHoc';

const ToDoApp = ({ theme }) => {
    return (
        <div>TO DO APP</div>
    )
}

export default (withHocs(ToDoApp));