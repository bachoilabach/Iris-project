import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filterSlice from './filterSlice';
import { categories } from '../../json/categories';

const Filter = () => {
	const [selectedCategory, setSelectedCategory] = useState('all');
    const dispatch = useDispatch();

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
        dispatch(filterSlice.actions.setFilter(category))
	};
	return (
		<div className="justify-center items-center gap-3 inline-flex">
			{categories.map((category, index) => (
				<div
					key={index}
					onClick={() => handleCategoryClick(category.title)}
					className={`px-6 py-3 rounded-[22px] backdrop-blur-[5px] justify-center items-center gap-2.5 flex group cursor-pointer transition-all ${
						selectedCategory === category.title
							? 'bg-[#20212f] text-white'
							: 'bg-[#e4e5e9] text-[#63657b] hover:bg-[#20212f] hover:text-white'
					}`}>
					<div className="text-center text-xs font-extrabold font-sans uppercase leading-[18px] tracking-wide">
						{category.title}
					</div>
				</div>
			))}
		</div>
	);
};

export default Filter;
