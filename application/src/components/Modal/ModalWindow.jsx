import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import withHocs from './ModalWindowHoc';

const ModalWindow = ({activeModal, setActiveModal, classes, children}) => {
    return (
        <div 
            className={activeModal ? `${classes.modal} ${classes.active}` : classes.modal}
        >
            <div
                className={activeModal ? `${classes.modal__content} ${classes.activeContent}` : classes.modal__content}
            >
                <CloseIcon
                    onClick={() => setActiveModal(false)}
                    className={classes.closeIcon}
                />
                {children}
            </div>
        </div>
    )
}

export default withHocs(ModalWindow);