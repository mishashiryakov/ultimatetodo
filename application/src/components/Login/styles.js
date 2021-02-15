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
        // alignItems: 'center'
    },
    inputUserInfoBlock: {

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
    modal: {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        pointerEvents: 'none',
        transition: '0.3s',
        zIndex: 10,

    },
    active: {
        opacity: 1,
        pointerEvents: 'all',
    },
    activeContent: {
        transform: 'scale(1)!important'
    },
    modal__content: {
        padding: 20,
        borderRadius: 12,
        backgroundColor: 'white',
        width: 420,
        height: 350,
        transition: '0.3s',
        transform: 'scale(0.5)',
        
    },
    closeIcon: {
        position: 'fixed',
        top: '-25px',
        right: '-25px',
        cursor: 'pointer'
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