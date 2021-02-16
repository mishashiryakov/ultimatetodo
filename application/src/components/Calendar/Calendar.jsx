import React, { useState, useRef } from 'react';
import withHocs from './CalendarHoc';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as calendar from './calendarCalc';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ModalWindow from '../Modal/ModalWindow'

const Calendar = ({ classes, theme }) => {

    const monthSelect =useRef(null);
    const yearSelect = useRef(null);    

    const [date, setDate] = useState(new Date());
    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState(null);
    const [activeModal, setActiveModal]  = useState(false);

    const handleSelectChange = (e) => {
        const date = new Date(yearSelect.current.value, monthSelect.current.value)
        setDate(date);
    };                

    const handleDayClick = date => {
        
        setSelectedDate(date);
    };

    const weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu' , 'Fri', 'Sat', 'Sun'];

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

    const yearGetter = () => {
        return date.getFullYear();
    }

    const monthGetter = () => {
        return date.getMonth();
    }

    const handlePrevMonthButtonClick = () => {
        setDate(new Date(yearGetter(), monthGetter() - 1));
    };

    const handleNextMonthButtonClick = () => {
        setDate(new Date(yearGetter(), monthGetter() + 1));
    };

    function WeekDaysRow() {
        return (
        <React.Fragment>
            {weekDayNames.map((el, index) => {
                return (
                    <Grid key={index} className={classes.weekGridItem} item xs={1}>
                        {el}
                    </Grid> 
                )
            })}
        </React.Fragment>
        )
    }

    const monthData = calendar.getMonthData(yearGetter(), monthGetter());

    return (
        <div className={classes.root}>
            <div className={classes.creation__container}>
                <div className={classes.creation__header}>
                    <div 
                        className={classes.changeMonthButton}
                        onClick={handlePrevMonthButtonClick}
                    >
                            <ArrowBackIosIcon className={classes.changeMonthIcon}/>
                    </div>
                    
                    <select
                        ref={monthSelect}
                        className={classes.select}
                        value={monthGetter()}
                        onChange={handleSelectChange}
                        name={'month'}
                    >
                        {monthNames.map((month, index) => 
                            <option key={month} value={index}>{month}</option>
                        )}
                    </select>
                    
                    <select
                        ref={yearSelect}
                        className={classes.select}
                        value={yearGetter()}
                        onChange={handleSelectChange}
                        name={'year'}
                    >
                        {years.map((year, index) => 
                            <option key={index} value={year}>{year}</option>
                        )}
                    </select>
                    
                    <div 
                        className={classes.changeMonthButton}
                        onClick={handleNextMonthButtonClick}
                    >
                        <ArrowForwardIosIcon className={classes.changeMonthIcon}/>
                    </div>
                </div>
                
            </div>
            <div className={classes.calendar__block}>

                <Grid className={classes.weekGridContainer} container item xs={12} spacing={1}>
                    <WeekDaysRow />
                </Grid>

                <Grid className={classes.gridContainer} container spacing={1}>
                    
                    {monthData.map((week, index) => 
                    <Grid container item xs={12} spacing={1} key={index}>
                        {week.map((date, index) => date ?
                            <Grid  className={classes.gridItem} item xs={1} key={index}>
                                <Paper
                                    elevation={0}
                                    className={classes.paper}
                                    onClick={() => setActiveModal(true)}
                                >
                                    <div 
                                        onClick={() => handleDayClick(date)}
                                        className={`
                                            ${classes.day}
                                            ${calendar.areEqual(date, currentDate) ? classes.today : ''}
                                            ${calendar.areEqual(date, selectedDate) ? classes.selected : ''}
                                        `}
                                    >
                                        {date.getDate()}
                                    </div>
                                </Paper>
                            </Grid>
                            :
                            <Grid
                                elevation={0}
                                className={classes.gridItem} 
                                item xs={1} 
                                key={index}
                             >
                                <Paper className={classes.paper}></Paper>
                            </Grid>
                        )}
                    </Grid>
                    )}
                </Grid>
            </div>
            <ModalWindow
                activeModal={activeModal} 
                setActiveModal={setActiveModal}
            >
                {'123'}
            </ModalWindow>
        </div>
    )
}

export default (withHocs(Calendar));