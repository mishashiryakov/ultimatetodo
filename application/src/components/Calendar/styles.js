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
        height: '90%',
      },
      gridItem: {
        flexGrow: '0',
        maxWidth: '14.2%',
        flexBasis: '14.2%',
      },
      gridContainer: {
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        height: '100%',
        width: 'calc(100% - 256px)',
        position: 'relative',
        margin: 0
      },
      creation__container: {
        width: '256px',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '5px 0 5px -5px #333',
      },
      gridRow: {
        // backgroundColor: 'red'
      }
      
});