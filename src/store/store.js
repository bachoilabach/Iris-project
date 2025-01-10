import { configureStore } from '@reduxjs/toolkit';
import iconSlice from '../components/IconAutoScroll/iconSlice';
import memeberSlice from '../components/MemberCard/memberSlice';
import formSlice from '../components/FormInFooter/formSlice';
import slideSlice from '../components/CarouselSlider/slideSlice';
import filterSlice from '../components/Filter/filterSlice';

const store = configureStore({
	reducer: {
		icons: iconSlice.reducer,
		members: memeberSlice.reducer,
		forms: formSlice.reducer,
		slide: slideSlice.reducer,
		filter: filterSlice.reducer,
	},
});
export default store;
