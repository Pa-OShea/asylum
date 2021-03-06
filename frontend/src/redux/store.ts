import { configureStore } from '@reduxjs/toolkit';
import currentProjectReducer from './currentProjectSlice';
import projectReducer from './projectSlice';
import columnReducer from './columnSlice';
import cardReducer from './cardSlice';
import notationalReducer from './notationalSlice';

const reducer = {
	currentProject: currentProjectReducer,
	projects: projectReducer,
	columns: columnReducer,
	cards: cardReducer,
	notational: notationalReducer,
};

const store = configureStore({
	reducer,
	middleware: [],
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
