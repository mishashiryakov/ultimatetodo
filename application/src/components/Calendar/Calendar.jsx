import React, { useState, useRef } from 'react';
import withHocs from './CalendarHoc';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as calendar from './calendarCalc';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ModalWindow from '../Modal/ModalWindow';
import TodoInfoCard from '../TodoCards/TodoInfoCard/TodoInfoCard';
import { useApolloClient, InMemoryCache, gql } from '@apollo/client';

const Calendar = ({ classes, theme }) => {
    // const cache = new InMemoryCache();
    // const client = useApolloClient();

    // const { user } = client.readQuery({
    //     query: gql`
    //       query userLoginQuery($username: String, $password: String) {
    //         userLogin(username: $username, password: $password) {
    //             id
    //             username
    //             password
    //         }
    //     }
    //     `,
    //     variables: {
    //       id: 5,
    //     },
    //   });
    

    const monthSelect =useRef(null);
    const yearSelect = useRef(null);    

    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [activeModalTodoCreation, setActiveModalTodoCreation]  = useState(false);
    const [activeModalTodoInfo, setActiveModalTodoInfo]  = useState(false);
    const [selectedTodoInfo, setSelectedTodoInfo] = useState('')

    const currentDate = new Date();
    const weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu' , 'Fri', 'Sat', 'Sun'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];


    const todos = [
        {
            type: 'task',
            year: '2021', 
            month: '1', 
            day: '19',
            title: 'Купить хлеб',
            backgroundColor: theme.palette.todo.task,
            color: theme.typography.color
        },
        {
            type: 'reminder',
            year: '2021', 
            month: '1', 
            day: '18',
            title: 'Встреча с Куцом',
            backgroundColor: theme.palette.todo.reminder,
            color: theme.typography.color
        },
        {
            type: 'holiday',
            year: '2021', 
            month: '1', 
            day: '14',
            title: 'День влюблённых',
            backgroundColor: theme.palette.todo.holiday,
            color: theme.typography.color
        }
    ]

    const openModalForCreation = (e) => {
        if(e.target.id === 'todoList') {
            setActiveModalTodoCreation(true)
        }
    }

    const openModalWithSelectedTodoInfo = (todoInfo) => {
        setSelectedTodoInfo(todoInfo)
        setActiveModalTodoInfo(true)
    }

    const handleSelectChange = (e) => {
        const date = new Date(yearSelect.current.value, monthSelect.current.value)
        setDate(date);
    };                

    const handleDayClick = date => {
        setSelectedDate(date);
    };

    const handlePrevMonthButtonClick = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    const handleNextMonthButtonClick = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };

    const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());

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
                        value={date.getMonth()}
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
                        value={date.getFullYear()}
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
                    {weekDayNames.map((el, index) => {
                        return (
                            <Grid key={index} className={classes.weekGridItem} item xs={1}>
                                {el}
                            </Grid> 
                        )
                    })}
                </Grid>

                <Grid className={classes.gridContainer} container spacing={1}>
                    
                    {monthData.map((week, index) => 
                    <Grid container item xs={12} spacing={1} key={index}>
                        {week.map((date, index) => date ?
                            <Grid  className={classes.gridItem} item xs={1} key={index}>
                                <Paper
                                    elevation={0}
                                    className={classes.paper}
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
                                    <div
                                        id='todoList' 
                                        className={classes.todoList}
                                        onClick={(e) => openModalForCreation(e)}
                                    >
                                        {todos.map((el, index) => 
                                            calendar.areEqual(date, new Date(el.year, el.month, el.day)) && 
                                                <div 
                                                    className={`${classes.todo}`}
                                                    key={index}
                                                    id={'todo'}
                                                    onClick={() => openModalWithSelectedTodoInfo(el)}
                                                    style={
                                                        {
                                                            backgroundColor: el.backgroundColor,
                                                            color: el.color
                                                        }
                                                    }
                                                >
                                                    {el.title}
                                                </div>
                                        )

                                        }
                                    </div>
                                </Paper>
                            </Grid>
                            :
                            <Grid
                                className={classes.gridItem} 
                                item xs={1} 
                                key={index}
                             >
                                <Paper 
                                    elevation={0} 
                                    className={classes.paper}
                                >
                                </Paper>
                            </Grid>
                        )}
                    </Grid>
                    )}
                </Grid>
            </div>

            <ModalWindow
                activeModal={activeModalTodoCreation} 
                setActiveModal={setActiveModalTodoCreation}
            >
                {'123'}
            </ModalWindow>
            
            <ModalWindow
                activeModal={activeModalTodoInfo} 
                setActiveModal={setActiveModalTodoInfo}
            >
                <TodoInfoCard todoInfo={selectedTodoInfo} />
            </ModalWindow>
            
        </div>
    )
}

export default (withHocs(Calendar));