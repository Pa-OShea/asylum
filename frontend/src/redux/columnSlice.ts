import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Column {
	id: string;
	projectId: string;
	title: string;
}

const initialState = [
	{
		id: 'column-1',
		projectId: 'project-1',
		title: 'Backlog',
	},
] as Column[];

const columnSlice = createSlice({
	name: 'column',
	initialState,
	reducers: {
		addNewColumn(state, action: PayloadAction<Column>) {
			state.push(action.payload);
		},
		deleteColumn(state, action: PayloadAction<string>) {
			return state.filter(column => column.id !== action.payload);
		},
	},
});

export const { addNewColumn, deleteColumn } = columnSlice.actions;
export default columnSlice.reducer;
