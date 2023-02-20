const data = [
	{
		key: "become_volunteer",
		title: "Become a Volunteer",
		url: "https://www.google.com",
	},
	{
		key: "become_sponsor",
		title: "Become a Sponsor",
		url: "https://www.google.com",
	},
	{
		key: "become_speakers",
		title: "Become a Speakers",
		url: "https://www.google.com",
	},
];

function getButton(key) {
	return data.find((u) => u.key === key);
}

export { getButton };
