import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Column {
	id: string;
	projectId: 'project-1';
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
		update(state, action: PayloadAction<string>) {
			console.log('work in progress');
		},
	},
});

export const { update } = columnSlice.actions;
export default columnSlice.reducer;
