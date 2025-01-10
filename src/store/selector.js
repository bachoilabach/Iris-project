import { createSelector } from '@reduxjs/toolkit';
import { categories } from '../json/categories';

export const iconSelector = (state) => state.icons;

export const memberSelector = (state) => state.members;

export const formFieldSelector = (state) => state.form;

export const slideSelector = (state) => state.slide;

export const filterSelector = (state) => state.filter.filter;

export const filterSliderIndexSelector = createSelector(
	slideSelector,
	filterSelector,
	(slides, filter) => {
		const listCategories = categories.map((category) => category.title);
		let number = 2;
		if (filter === 'all') {
			return number;
		}
		if (filter === 'others') {
			number = slides
				.filter((slide) => !listCategories.includes(slide.tag))
				.map((slide) => slide.id);
			return number;
		}

		number = slides
			.filter((slide) => slide.tag === filter)
			.map((slide) => slide.id);
		return number;
	}
);

export const filterSliderSelector = createSelector(
	slideSelector,
	filterSelector,
	(slides, filter) => {
		const listCategories = categories;
		if (filter === 'all') {
			return slides;
		}
		if (filter === 'others') {
			return slides.filter(
				(slide) =>
					!listCategories.map((category) => category.title).includes(slide.tag)
			);
		}
		return slides.filter((slide) => slide.tag === filter);
	}
);
