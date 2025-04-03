import IngredientDetails from '../components/ingredient-details/ingredient-details';
import Modal from '../components/modal/modal';
import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';
import { resetIngredientDetails } from '../services/actions/ingredient-details-actions';
import { useDispatch } from '../services/hooks';
import { resetIngredient } from '../utils/utils';


export const IngredientDetailsPage: FC = () => {

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
