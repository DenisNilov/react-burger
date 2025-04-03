import style from './modal-overlay.module.css';
import { FC } from 'react';

interface IModalOverlayProps {
    onClick?: () => void;
}

const ModalOverlay: FC<IModalOverlayProps> = ({ onClick }) => {
    return (
        <div className={style.overlay} onClick={onClick}></div >
    );
}

export default ModalOverlay;