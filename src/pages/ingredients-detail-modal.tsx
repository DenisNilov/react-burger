import IngredientDetails from '../components/ingredient-details/ingredient-details';
import Modal from '../components/modal/modal';
import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';
import { addIngredientDetails, resetIngredientDetails } from '../services/actions/ingredient-details-actions';
import { useDispatch, useSelector } from '../services/hooks';
import { resetIngredientId, updateIngredients } from '../utils/utils';
import style from './page.module.css';


const IngredientDetailsModalPage: FC = () => {

    const [openModal, setOpenModal] = React.useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ingredient = useSelector(state => state.details.ingredientDetails);

    React.useEffect(() => {
        updateIngredients(addIngredientDetails, dispatch)
    }, [dispatch])


    const handleClose = () => {
        setOpenModal(false);
        navigate('/');
        dispatch(resetIngredientDetails());
        resetIngredientId()
    };

    return (
        <Modal onClose={handleClose} isOpen={openModal}>
            {ingredient ?
                <IngredientDetails />
                :
                (<div className={style.loader} id="loader"></div>)}
        </Modal>
    )
};

export default IngredientDetailsModalPage;