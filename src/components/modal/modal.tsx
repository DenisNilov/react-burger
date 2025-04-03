import React, { FC } from 'react';
import { createPortal } from "react-dom";
import ModalOverlay from '../modal-overlay/modal-overlay';
import style from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot: HTMLElement | null = document.getElementById('react-modals');

interface IModalProps {
    children: JSX.Element | JSX.Element[];
    onClose?: () => void;
    isOpen?: boolean
}

const Modal: FC<IModalProps> = ({ children, onClose, isOpen }) => {

    React.useEffect(() => {

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape" && onClose) {
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

    if (!modalRoot) return null;

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


export default Modal;