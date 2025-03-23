import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from 'redux';
import { store } from '../../store/store';

type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
