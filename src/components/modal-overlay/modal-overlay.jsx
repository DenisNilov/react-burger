import style from './modal-overlay.module.css';

const ModalOverlay = ({ children }) => {
    return (
        <div className={style.overlay}>
            {children}
        </div>
    );
}

export default ModalOverlay;