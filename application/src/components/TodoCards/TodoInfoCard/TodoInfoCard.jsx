import React from 'react';
import withHocs from './TodoInfoCardHoc';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';

const TodoInfoCard = ({ classes, theme, todoInfo }) => {
    const {title, year, month, day} = todoInfo;

    const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedWeekDay = weekDayNames[new Date(year, month, day).getDay()];

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const selectedMonthName = monthNames[new Date(year, month, day).getMonth()];

    
    return (
        <div >
            <Typography className={classes.title} variant={'h5'} >
                {`${title}`}
            </Typography>
            <Typography className={classes.date__block} variant={'body1'}>
                <ScheduleIcon className={classes.icon} /> {`${selectedWeekDay},  ${day} ${selectedMonthName}  ${year}`}
            </Typography>
            
        </div>
    )
}

export default (withHocs(TodoInfoCard));