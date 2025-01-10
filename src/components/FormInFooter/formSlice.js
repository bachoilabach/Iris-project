import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
	name: 'form',
	initialState: {
		nameAndCompany: '',
		email: '',
		project: '',
	},
	reducers: {
		setFormData: (state, action) => {
			return {
				...state,
				...action.payload, 
			};
		},
		submit: (state,action) => {
			console.log(state,action)
		}
	},
});

export default formSlice;
