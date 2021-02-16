export const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        position: 'relative',
        width: '100%',
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '140px',
        border: '1px solid rgba(0, 0, 0, .1)',
      },
      paperWeek: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '10%',
      },
      gridItem: {
        flexGrow: '0',
        maxWidth: '14.2%',
        flexBasis: '14.2%',
      },
      gridContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'relative',
        margin: 0
      },
      creation__container: {
        width: '256px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '5px 0 5px -5px #333',
        padding: '10px',
        boxSizing: 'border-box',
      },
      calendar__block: {
        width: 'calc(100% - 256px)',
        overflow: 'hidden',
        position: 'relative',
        margin: 0,
        display: 'flex',
        flexDirection: 'column'
      },
      weekGridContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '10%',
        width: '100%',
        position: 'relative',
        margin: 0,
        flexBasis: '2%'
      },
      weekGridItem: {
        flexGrow: '0',
        maxWidth: '14.2%',
        flexBasis: '14.2%',
        textAlign: 'center',
        fontSize: 13
      },
      select: {
        
        width: '40%'
      },
      changeMonthIcon: {
        fontSize: 'small'
      },
      creation__header: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
      },
      changeMonthButton: {
        width: 5,
        border: 'none',
        cursor: 'pointer',
        backgroundColor: theme.palette.background.main
      },
      today: {
        backgroundColor: theme.palette.primary.main,
        color: theme.typography.color,
        '&:hover': {
          backgroundColor: `${theme.palette.primary.main}!important`
        },
      },
      selected: {
        border: '2px solid rgba(51, 102, 255, .9)',
      },
      day: {
        cursor: 'pointer',
        borderRadius: '50%',
        lineHeight: '30px',
        height: '30px',
        width: '30px',
        margin: '0 auto',
        boxSizing: 'border-box',
        userSelect: 'none',
        '&:hover': {
          backgroundColor: theme.palette.background.main
        },
      }
});