import React from 'react';

const RegisterModal = ({activeModal, setActiveModal, classes, children}) => {
    return (
        <div 
            className={activeModal ? `${classes.modal} ${classes.active}` : classes.modal}
            onClick={() => setActiveModal(false)}
        >
            <div
                className={activeModal ? `${classes.modal__content} ${classes.activeContent}` : classes.modal__content}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default RegisterModal;