export const initialState = {
	basket: [],
	user: null,
};

const reducer = (state, action) => {
	console.log(action);
	//console.log action to see what the information is
	switch (action.type) {
		// everytime action happens, it needs to return the data
		case 'ADD_TO_BASKET':
			//Logic for adding item to basket
			// action.item is its information user clicks the basket
			return {
				...state,
				basket: [...state.basket, action.item],
			};
			break;
		case 'REMOVE_FROM_BASKET':
			//Logic for Removing item from basket
			return { state };
			break;
		default:
			return state;
	}
};

export default reducer;
