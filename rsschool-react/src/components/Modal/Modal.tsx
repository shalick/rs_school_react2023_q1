import React from 'react'
import classes from './Modal.module.css'

interface IModalProps {
    children: React.ReactNode
    onClose: () => void
}

function Modal({ children, onClose }: IModalProps) {
    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    )
}

export default Modal
