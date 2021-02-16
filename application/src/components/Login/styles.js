export const styles = theme => ({
    container: {
        width: 400,
        height: 300,
        borderRadius: 8,
        backgroundColor: '#fff',
        boxShadow: theme.shadows[4],
        padding: '25px 25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textField: {
        borderRadius: 5,
        marginBottom: 15,
        width: '100%',
    },
    logInButtons: {
        color: '#fff',
        width: '100%',
        marginBottom: 15,
        height: 50
    },
    userError: {
        height: 30,
        color: 'red',
        marginBottom: 5,
        fontSize: 14
    },
    register__content: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    margin: {
        margin: 10,
    },
    textField2: {
        width: '25ch',
      },
});