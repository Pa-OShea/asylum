import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentProject {
	currentProject: string;
}

const initialState = { currentProject: 'project-1' } as CurrentProject;

const currentProjectSlice = createSlice({
	name: 'currentProject',
	initialState,
	reducers: {
		updateCurrentProject(state, action: PayloadAction<string>) {
			state.currentProject = action.payload;
		},
	},
});

export const { updateCurrentProject } = currentProjectSlice.actions;
export default currentProjectSlice.reducer;
