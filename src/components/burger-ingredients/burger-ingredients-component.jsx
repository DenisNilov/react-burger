import IngredienrsComponentList from './burger-ingredients-component-list.jsx';


const IngredienrsComponent = ({ name }) => {
    return (
        <div className='mt-10 mb-10' pl-6>
            <h2 className='text text_type_main-medium'>{name}</h2>
            <IngredienrsComponentList />
        </div>)
}

export default IngredienrsComponent;