import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
	id: string;
	columnId: string;
	title: string;
	description?: string;
}

const initialState = [
	{
		id: 'card-1',
		columnId: 'column-1',
		title: 'Card title',
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	},
	{
		id: 'card-2',
		columnId: 'column-1',
		title: 'Card title',
	},
	{
		id: 'card-3',
		columnId: 'column-1',
		title: 'Card title',
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	},
	{
		id: 'card-4',
		columnId: 'column-1',
		title: 'Card title',
		description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
	}
] as Card[];

const cardSlice = createSlice({
	name: 'cards',
	initialState,
	reducers: {
		update(state, action: PayloadAction<string>) {
			console.log('work in progress');
		},
	},
});

export const { update } = cardSlice.actions;
export default cardSlice.reducer;
