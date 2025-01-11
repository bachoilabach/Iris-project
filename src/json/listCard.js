import arcadeImage from '../assets/arcade_game_hub.png';
import xrImage from '../assets/xr_event_hub.png';
import virtualImage from '../assets/virtual_community.png';
import characterImage from '../assets/avatar_character.png';
import interactImage from '../assets/interact_to_earn.png';

export const listCard = [
	{
		title: 'ARCADE Game Hub',
		description:
			'Players in ARCADE GAME HUB can try whatever gameplay fits their preferences to earn resources.',
		image: arcadeImage,
		size: 'xl:w-[800px] md:w-[500px] md:min-h-full w-full ',
	},
	{
		title: 'XR Event Hub',
		description:
			'A diversified game distribution hub with immersive experience.',
		image: xrImage,
		size: 'xl:w-96 md:w-80 w-full max-h-1/2',
	},
	{
		title: 'Virtual Community',
		description:
			'A series of Music and Esport Concerts supported by Virtual Reality experience.',
		image: virtualImage,
		size: 'xl:w-[488px] xl:min-h-[488px] w-[510px] ',
	},
	{
		title: 'Avatar Character',
		description:
			'A place for concert, esport, music events, and especially for virtual interactive events.',
		image: characterImage,
		size: 'xl:w-[696px] xl:min-h-[488px]',
	},
    {
		title: 'Interact to earn ',
		description:
			'Players in ARCADE GAME HUB can try whatever gameplay fits their preferences to earn resources',
		image: interactImage,
		size: 'w-[1221px] ',
	},
];
