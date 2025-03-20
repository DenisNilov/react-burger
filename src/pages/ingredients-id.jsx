import IngredientDetails from '../components/ingredient-details/ingredient-details.jsx';
import Modal from '../components/modal/modal.jsx';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { resetIngredientDetails } from '../services/actions/ingredient-details-actions.jsx';
import { useDispatch } from "react-redux";
import { resetIngredient } from '../utils/utils.js';


export const IngredientDetailsPage = () => {

    const [openModal, setOpenModal] = React.useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpenModal(false);
        navigate('/');
        dispatch(resetIngredientDetails());
        resetIngredient()
    };

    return (
        <Modal onClose={handleClose} isOpen={openModal}>
            <IngredientDetails />
        </Modal>
    )
};
