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
	name: 'projects',
	initialState,
	reducers: {
		addNewProject(state, action: PayloadAction<Project>) {
			state.push(action.payload);
		},
	},
});

export const { addNewProject } = projectSlice.actions;
export default projectSlice.reducer;
