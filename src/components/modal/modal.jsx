import React from 'react';
import { createPortal } from "react-dom";
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import style from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('react-modals');

const Modal = ({ children, onClose, isOpen }) => {

    React.useEffect(() => {

        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        }
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            return () => {
                document.removeEventListener("keydown", handleEsc);
            };
        };
    }, [onClose, isOpen]);

    return createPortal(
        <div className={style.container} onClick={(evt) => evt.stopPropagation()}>
            <div className={style.box}>
                <button className={style.button} type="button" onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
            <ModalOverlay onClick={onClose} />
        </div>, modalRoot)
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;