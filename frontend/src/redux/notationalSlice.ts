import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notational {
	isAddColumnOpen: boolean;
}

const initialState = {
	isAddColumnOpen: false,
	isAddCardOpen: false,
	isAddProjectOpen: false,
} as Notational;

const notationalSlice = createSlice({
	name: 'notational',
	initialState,
	reducers: {
		toggleAddColumnDialog(state, action: PayloadAction<boolean>) {
			state.isAddColumnOpen = action.payload;
		},
	},
});

export const { toggleAddColumnDialog } = notationalSlice.actions;
export default notationalSlice.reducer;
