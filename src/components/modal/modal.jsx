import { createPortal } from "react-dom";
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import style from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('react-modals');

const Modal = ({ children, onClose }) => {
    return createPortal((
        <ModalOverlay>
            <div className={style.box} onClick={(evt) => evt.stopPropagation()}>
                <button className={style.button} type="button" onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </ModalOverlay>
    ), modalRoot)
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default Modal;