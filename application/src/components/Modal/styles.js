export const styles = theme => ({
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
})