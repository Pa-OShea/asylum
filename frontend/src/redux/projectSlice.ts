import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Project {
	id: string;
	title: string;
}

const initialState = [
	{
		id: 'project-1',
		title: 'Asylum',
	},
	{
		id: 'project-2',
		title: 'Chat system (Hush)',
	},
	{
		id: 'project-3',
		title: 'Carbon (Terminal emulator)',
	},
	{
		id: 'project-4',
		title: 'Portfolio',
	},
	{
		id: 'project-5',
		title: 'E-commerce site',
	},
] as Project[];

const projectSlice = createSlice({
	name: 'column',
	initialState,
	reducers: {
		update(state, action: PayloadAction<string>) {
			console.log('work in progress');
		},
	},
});

export const { update } = projectSlice.actions;
export default projectSlice.reducer;
