import React from 'react';
import withHocs from './CalendarHoc';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Calendar = ({ classes, theme }) => {

    // const weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu' , 'Fri', 'Sat', 'Sun']

    function FormRow() {
        return (
          <React.Fragment>
            <Grid className={classes.gridItem} item xs={1}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>

            <Grid className={classes.gridItem} item xs={1}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>

            <Grid className={classes.gridItem} item xs={1}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>

            <Grid className={classes.gridItem} item xs={1}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>

            <Grid className={classes.gridItem} item xs={1}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>

            <Grid className={classes.gridItem} item xs={1}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>

            <Grid className={classes.gridItem} item xs={1}>
              <Paper className={classes.paper}>item</Paper>
            </Grid>

            
          </React.Fragment>
        );
      }

    return (
        <div className={classes.root}>
            <div className={classes.creation__container}>

            </div>
            <Grid className={classes.gridContainer} container spacing={1}>
                <Grid className={classes.gridRow} container item xs={12} spacing={1}>
                    <FormRow />
                </Grid>

                <Grid className={classes.gridRow} container item xs={12} spacing={1}>
                    <FormRow />
                </Grid>

                <Grid className={classes.gridRow} container item xs={12} spacing={1}>
                    <FormRow />
                </Grid>

                <Grid className={classes.gridRow} container item xs={12} spacing={1}>
                 <FormRow />
                </Grid>

                <Grid className={classes.gridRow} container item xs={12} spacing={1}>
                 <FormRow />
                </Grid>
            </Grid>
        </div>
    )
}

export default (withHocs(Calendar));