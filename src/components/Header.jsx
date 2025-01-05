import { Link } from 'react-router-dom';
import logo from '/public/assets/Logo.png';
import ButtonContact from './ButtonContact';
const navigationMenus = [
	{
		to: '/',
		title: 'About',
	},
	{
		to: '/',
		title: 'Features',
	},
	{
		to: '/',
		title: 'For investor',
	},
	{
		to: '/',
		title: 'for partners',
	},
	{
		to: '/',
		title: 'news',
	},
];
export default function Header() {
	return (
		<div className="px-28 py-3 flex justify-between items-center border-b border-[#e4e5ea] backdrop-blur-[15px] bg-white/90 fixed top-0 z-50 w-full">
			{/* Logo */}
			<div className="w-28">
				<img src={logo} width={59} height={56} />
			</div>

			{/* Navigation menu */}
			<div className="flex text-[#1f212e] gap-10">
				{navigationMenus.map((menu, index) => (
					<Link to={menu.to} key={index}>
						<p className="text-center uppercase font-sans text-xs font-bold p-4 leading-[18px] tracking-widest">
							{menu.title}
						</p>
					</Link>
				))}
			</div>

			<ButtonContact />
		</div>
	);
}
