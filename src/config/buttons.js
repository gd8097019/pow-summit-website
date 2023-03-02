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
		title: "Become a Speaker",
		url: "https://docs.google.com/forms/d/1ZVeVLc1LCeqrr1tKl6-MdFtL5p-FHIeiDY5KL3EiiUs/edit",
	},
];

function getButton(key) {
	return data.find((u) => u.key === key);
}

export { getButton };
