import PropTypes from 'prop-types';

const ingredientsPropTypes = PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
});

const TABS = [
    { id: "bun", title: 'Булки' },
    { id: "sauce", title: 'Соусы' },
    { id: "main", title: 'Начинки' },
];

const BASE_URL = "https://norma.nomoreparties.space/api";

export { ingredientsPropTypes, TABS, BASE_URL };