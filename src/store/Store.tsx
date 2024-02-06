import { configureStore } from '@reduxjs/toolkit';
import CustomizerReducer from './customizer/CustomizerSlice';


import { combineReducers } from 'redux';
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import CoorporateDataSlice from './customizer/CoorporateDataSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    coorporateData: CoorporateDataSlice,
  },
});

const rootReducer = combineReducers({
  customizer: CustomizerReducer,
  coorporateData: CoorporateDataSlice,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const { dispatch } = store;
export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;

export default store;
