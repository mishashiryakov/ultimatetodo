import React from 'react';
import withHocs from './MyDayHoc';

const MyDay = ({ theme }) => {
    return (
        <div>My Day</div>
    )
}

export default (withHocs(MyDay));