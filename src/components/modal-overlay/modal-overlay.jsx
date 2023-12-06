import style from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ children }) => {
    return (
        <div className={style.overlay}>
            {children}
        </div>
    );
}

ModalOverlay.propTypes = {
    children: PropTypes.element.isRequired
}

export default ModalOverlay;