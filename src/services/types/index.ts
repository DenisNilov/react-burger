import { ThunkDispatch } from "redux-thunk";
import { store } from '../../store/store';
import { TOrderAction } from '../actions/order-actions';
import { TUserAction } from "../actions/user-actions";
import { TConstructorAction } from '../actions/constructor-actions';
import { TGetItemsActions } from '../actions/ingredients-actions';
import { TIngredientDetailsAction } from '../actions/ingredient-details-actions'

type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = TGetItemsActions | TConstructorAction | TOrderAction | TUserAction |
    TIngredientDetailsAction;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;

export interface ICallback {
    (): void;
}
