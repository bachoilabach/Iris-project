import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filterSlice from './filterSlice';
import { categories } from '../../json/categories';

const Filter = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');
	const dispatch = useDispatch();

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
		dispatch(filterSlice.actions.setFilter(category));
	};
	return (
		<div className="w-full overflow-x-auto flex items-center sm:justify-center justify-start custom-scrollbar-hidden">
			<div className="flex items-center gap-3 flex-nowrap px-2">
				{categories.map((category, index) => (
					<div
						key={index}
						onClick={() => handleCategoryClick(category.title)}
						className={`px-6 py-4 md:py-3 rounded-full backdrop-blur-[5px] flex items-center justify-center cursor-pointer transition-all whitespace-nowrap ${
							selectedCategory === category.title
								? 'bg-[#20212f] text-white'
								: 'bg-[#e4e5e9] text-[#63657b] hover:bg-[#20212f] hover:text-white'
						}`}>
						<div className="text-center text-sm md:text-xs font-semibold font-sans uppercase leading-5 tracking-wide">
							{category.title}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Filter;
