export const styles = theme => ({
  layout: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.main
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  header: {
    height: 50,
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center'
  }
});