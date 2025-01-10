import { useState } from 'react';
import { useDispatch } from 'react-redux';
import formSlice from './formSlice';
import circle from '/public/assets/circle.png';
import triangle from '/public/assets/triangle.png';

const formFields = [
	{
		title: 'Name & Company',
		placeholder: 'Enter your name & your company',
		type: 'text',
		name: 'nameAndCompany',
	},
	{
		title: 'Your email',
		placeholder: 'Enter your email',
		type: 'email',
		name: 'email',
	},
	{
		title: 'About your project',
		placeholder: 'Tell us about your project',
		type: 'text',
		name: 'project',
	},
];
const FormInFooter = () => {
	const [formData, setFormData] = useState({
		nameAndCompany: '',
		email: '',
		project: '',
	});
	const dispatch = useDispatch();
	const handleChangeFormData = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
		console.log({ name, value });
	};
	const handleSubmit = () => {
		console.log({ formData });
		dispatch(formSlice.actions.submit(formData));
		setFormData({
			nameAndCompany: '',
			email: '',
			project: '',
		});
	};
	return (
		<div className=" flex flex-col gap-[60px] relative">
			<img
				src={circle}
				className="absolute right-0 -top-28 opacity-40"
				width={98}
			/>
			<div className="flex flex-col gap-10 w-full pt-[18px]">
				{formFields.map((field, index) => (
					<div
						className="flex-col justify-start items-start inline-flex w-full"
						key={index}>
						<div className="text-[#1f212e] text-xl font-extrabold font-sans leading-relaxed">
							{field.title}
						</div>
						<div className="py-4 border-b border-[#dee0e6] justify-start items-center gap-2.5 inline-flex w-full">
							<input
								name={field.name}
								type={field.type}
								className="text-[#b1b2be] text-base font-medium font-sans leading-tight w-full border-none outline-none"
								placeholder={field.placeholder}
								value={formData[field.name]}
								onChange={handleChangeFormData}
							/>
						</div>
					</div>
				))}
			</div>
			<div
				className="h-14 w-36 px-10 py-4 bg-[#20212f] rounded-xl justify-center items-center gap-2.5 inline-flex cursor-pointer hover:drop-shadow-2xl"
				onClick={handleSubmit}>
				<div className="text-center text-white text-base font-bold font-sans capitalize leading-normal tracking-tight">
					Submit
				</div>
			</div>
			<img
				src={triangle}
				className="absolute w-[72.14px] right-0 -bottom-28 rotate-[21.60deg] blur-sm"
			/>
		</div>
	);
};

export default FormInFooter;
