import { Link } from 'react-router-dom';
import logo from '/public/assets/Logo.png';
import Facebook from '/public/icons/facebook.svg';
import Instagram from '/public/icons/instagram.svg';
import Twitter from '/public/icons/twitter.svg';
import LinkedIn from '/public/icons/linkedin.svg';
import YouTube from '/public/icons/youtube.svg';
import triangle from '/public/assets/triangle.png';
import FormInFooter from '../FormInFooter';
const contacts = [
	{
		icon: Facebook,
	},
	{
		icon: Twitter,
	},
	{
		icon: Instagram,
	},
	{
		icon: LinkedIn,
	},
	{
		icon: YouTube,
	},
];
export default function Footer() {
	return (
		<div className="flex flex-col gap-[147px] overflow-hidden w-full ">
			{/* Main */}

			<div className="container sm:px-28 px-4 pt-[101px] border-t border-[#e4e5ea] relative w-full mx-auto">
			<img
				src={triangle}
				className="w-[184.35px] rotate-[-61.16deg] absolute bottom-10 -left-16 opacity-30"
			/>
				{/* Left */}
				<div className=" flex-col justify-start items-start inline-flex w-full">
					<img src={logo} width={76} />
					<div className="grid sm:grid-cols-2 sm:gap-28 w-full">
						{/*  */}
						<div className="">
							<div className="text-[#1f212e] sm:text-[52px] text-[32px] font-extrabold font-sans leading-[72.80px] sm:mb-16 mb-12 mt-8">
								Have great project?
								<br />
								Tell us now!
							</div>
							<div className="sm:flex flex-col gap-6 hidden">
								<div className="text-[#63657b] text-[28px] font-bold font-sans leading-[42px]">
									Follow us on:
								</div>
								<div className="flex gap-3 mb-32 ">
									{contacts.map((contact, index) => (
										<Link to={''} className="group" key={index}>
											<div className="p-3 rounded-xl border border-[#20212f] justify-center items-center gap-2.5 inline-flex bg-transparent group-hover:bg-[#20212f] transition-colors">
												<img
													src={contact.icon}
													className="w-6 h-6 group-hover:filter group-hover:brightness-0 group-hover:invert transition-colors"
													width={24}
													alt="icon"
												/>
											</div>
										</Link>
									))}
								</div>
							</div>
						</div>

						{/* Right */}
						{/* Form */}
						<FormInFooter />
					</div>
					<div className="sm:hidden flex-col gap-6 flex my-[60px]">
								<div className="text-[#63657b] text-[28px] font-bold font-sans leading-[42px]">
									Follow us on:
								</div>
								<div className="flex gap-3">
									{contacts.map((contact, index) => (
										<Link to={''} className="group" key={index}>
											<div className="p-3 rounded-xl border border-[#20212f] justify-center items-center gap-2.5 inline-flex bg-transparent group-hover:bg-[#20212f] transition-colors">
												<img
													src={contact.icon}
													className="w-6 h-6 group-hover:filter group-hover:brightness-0 group-hover:invert transition-colors"
													width={24}
													alt="icon"
												/>
											</div>
										</Link>
									))}
								</div>
							</div>
					<div className="text-[#1f212e] text-xl font-normal font-sans underline leading-7">
						studio.work@iris.com
					</div>
				</div>
			</div>

			<div className="text-center text-[#63657b] text-xs font-medium font-sans leading-[18px] mb-8">
				©2023 Iris Studio. All rights reserved.
			</div>
		</div>
	);
}
