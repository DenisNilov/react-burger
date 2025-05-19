import { store } from '../../store/store';
import { TOrderAction } from '../actions/order-actions';
import { TUserAction } from "../actions/user-actions";
import { TConstructorAction } from '../actions/constructor-actions';
import { TGetItemsActions } from '../actions/ingredients-actions';
import { TIngredientDetailsAction } from '../actions/ingredient-details-actions'
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = TGetItemsActions | TConstructorAction | TOrderAction | TUserAction |
    TIngredientDetailsAction;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export interface ICallback {
    (): void;
}