import React from 'react';
import withHocs from './CalendarHoc';

const Calendar = ({ theme }) => {
    return (
        <div>Calendar</div>
    )
}

export default (withHocs(Calendar));