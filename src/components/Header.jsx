import { Link } from 'react-router-dom';
import logo from '/public/assets/Logo.png';
import ButtonContact from './ButtonContact';
import { useState } from 'react';
import menu from '/public/icons/menu.svg';
import cancle from '/public/icons/cancel.svg';


const navigationMenus = [
	{ to: '/', title: 'About' },
	{ to: '/', title: 'Features' },
	{ to: '/', title: 'For investor' },
	{ to: '/', title: 'For partners' },
	{ to: '/', title: 'News' },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e4e5ea]">
			<div className="container lg:px-24 xl:px-28 px-5 flex justify-between items-center py-3 xl:mx-auto">
			
				<Link to="/" className="w-24 md:w-28">
					<img src={logo} alt="Logo" width={59} height={56} />
				</Link>

				
				<nav className="hidden lg:flex gap-6 xl:gap-10 text-[#1f212e]">
					{navigationMenus.map((menu, index) => (
						<Link
							key={index}
							to={menu.to}
							className="uppercase font-sans text-xs font-bold py-2 hover:text-red-500 transition-colors"
						>
							{menu.title}
						</Link>
					))}
				</nav>

				
				<div className="hidden lg:block">
					<ButtonContact />
				</div>

				
				<button
					className="lg:hidden text-2xl text-[#1f212e]"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <img src={cancle}/> : <img src={menu}/>}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<nav className="lg:hidden bg-white shadow-md absolute top-full left-0 w-full">
					<ul className="flex flex-col items-center py-4 gap-4">
						{navigationMenus.map((menu, index) => (
							<Link
								key={index}
								to={menu.to}
								className="uppercase font-sans text-sm font-bold py-2 hover:text-red-500"
								onClick={() => setIsOpen(false)}
							>
								{menu.title}
							</Link>
						))}
						<ButtonContact />
					</ul>
				</nav>
			)}
		</header>
	);
}
