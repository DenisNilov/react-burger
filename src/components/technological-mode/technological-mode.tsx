import { FC, useState } from "react";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from '../../services/hooks';
import { useDrop, useDrag, DndProvider } from 'react-dnd';
import styles from "./technological-mode.module.css";

interface IIngredient {
    id: string;
    image: string;
    type: string;
    _id: string;
}

const DraggableIngredient: FC<{ ingredient: IIngredient, sourceType: string }> = ({ ingredient, sourceType }) => {
    const [, ref] = useDrag({
        type: 'ingredient',
        item: { ...ingredient, sourceType },
    });

    return (
        <div className={styles.it} key={ingredient._id} ref={ref}>
            <img src={ingredient.image} alt="Ingredient" height={165} width={165} />
        </div>
    );
};

const TechnologicalMode: FC = () => {
    const ingredients = useSelector((state) => state.ingredients.ingredients);
    const [leftIngredients, setLeftIngredients] = useState<IIngredient[]>([...ingredients]);
    const [rightIngredients, setRightIngredients] = useState<IIngredient[]>([]);

    const handleDrop = (item: IIngredient & { sourceType: string }) => {
        if (item.sourceType === 'left') {
            // Перемещение из левой в правую область
            setLeftIngredients(leftIngredients.filter(ing => ing._id !== item._id));
            setRightIngredients([...rightIngredients, item]);
        } else {
            // Перемещение из правой в левую область
            setRightIngredients(rightIngredients.filter(ing => ing._id !== item._id));
            setLeftIngredients([...leftIngredients, item]);
        }
    };

    const [, leftDropTarget] = useDrop({
        accept: 'ingredient',
        drop: (item: IIngredient & { sourceType: string }) => {
            if (item.sourceType === 'right') {
                handleDrop(item);
            }
        },
    });

    const [, rightDropTarget] = useDrop({
        accept: 'ingredient',
        drop: (item: IIngredient & { sourceType: string }) => {
            if (item.sourceType === 'left') {
                handleDrop(item);
            }
        },
    });

    return (
        <div>
            <h1 className={styles.title}>Technological Mode</h1>
            <div className={styles.container}>
                <section className={styles.leftSide} ref={leftDropTarget}>
                    {leftIngredients.map((ingredient) => (
                        <DraggableIngredient
                            key={ingredient.id}
                            ingredient={ingredient}
                            sourceType="left"
                        />
                    ))}
                </section>
                <section className={styles.rightSide} ref={rightDropTarget}>
                    {rightIngredients.map((ingredient) => (
                        <DraggableIngredient
                            key={ingredient.id}
                            ingredient={ingredient}
                            sourceType="right"
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default () => (
    <DndProvider backend={HTML5Backend}>
        <TechnologicalMode />
    </DndProvider>
);