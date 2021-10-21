import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { BankAction } from './bankActions';
import bankReducer from './bankReducer';

/* Combine reducer and create store with thunk */
const rootReducer = combineReducers({
    bank: bankReducer,
    // profile: profileReducer,
    // etc..
});
const thunkMiddleware = applyMiddleware<AppThunkDispatch>(thunk);
const store = createStore(rootReducer, thunkMiddleware);

/* Define some useful derived types from our store */
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

/* Define additional needed types for our thunks */
type KnownAction = BankAction; // | ProfileAction, etc...
type AppThunkDispatch = ThunkDispatch<RootState, unknown, KnownAction>
export type AppThunkAction<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    KnownAction
>

/* Define our own custom hooks so we get strong typings */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;