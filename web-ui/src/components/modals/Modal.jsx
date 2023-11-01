import {useCallback, useEffect, useState} from "react";
import "./modal.css"
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

const Modal = ({
       isOpen,
       onClose,
       onSubmit,
       title,
       body,
       actionLabel,
       disabled,
       secondaryAction,
       secondaryActionLabel,
       footer
}) => {
    const [showModal, setShowModal] =useState(false);

    useEffect( ()=> {
        setShowModal(isOpen)
    },[isOpen])

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [onClose, disabled]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [onSubmit, disabled]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction();
    }, [secondaryAction, disabled]);

    if (!isOpen){
        return null;
    }

    return(
        <>
            <div className="modal1">
                <div className="modal2">
                    {/*content*/}
                    <div className={`content`}>
                        <div className="below-content">
                            <div className="below-content1">
                                <button className="modal-button"
                                        onClick={handleClose}
                                >
                                    <IoMdClose size={18} />
                                </button>
                                <div className="below-button">
                                    {title}
                                </div>
                            </div>
                            <div className="body-modal">
                                {body}
                            </div>
                            <div className="footer-modal">
                                <div className="in-footer">
                                    {secondaryAction && secondaryActionLabel && (
                                        <Button
                                            disabled={disabled}
                                            onClick={handleSecondaryAction}
                                            label={secondaryActionLabel}
                                            outline></Button>
                                    )}
                                    <Button
                                        disabled={disabled}
                                        onClick={handleSubmit}
                                        label={actionLabel}></Button>
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
