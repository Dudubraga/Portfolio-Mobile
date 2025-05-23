type Contact = {
	id: number;
	name: string;
	image: any;
	link: string;
};

export const contacts: Contact[] = [
	{
		id: 1,
		name: "Discord",
		image: require("../../assets/images/logo-discord-redonda.png"),
		link: "https://discordapp.com/users/390225029784141834",
	},
	{
		id: 2,
		name: "GitHub",
		image: require("../../assets/images/logo-github.png"),
		link: "https://github.com/Dudubraga",
	},
	{
		id: 3,
		name: "Instagram",
		image: require("../../assets/images/logo-instagram.png"),
		link: "https://www.instagram.com/duducbraga/",
	},
	{
		id: 4,
		name: "LinkedIn",
		image: require("../../assets/images/logo-linkedin.png"),
		link: "https://www.linkedin.com/in/eduardo-costa-braga-7a837625b/",
	},
];