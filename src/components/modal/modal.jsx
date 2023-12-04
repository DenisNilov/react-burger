import { createPortal } from "react-dom";

const modalRoot = document.getElementById('react-modals');

const Modal = () => {
    return createPortal((
        <div></div>
    ), modalRoot)
}

export default Modal;