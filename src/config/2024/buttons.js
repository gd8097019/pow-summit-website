const data = [
	{
		key: "become_volunteer",
		title: "Become a Volunteer",
		url: "https://docs.google.com/forms/d/e/1FAIpQLSfMUEsVd5I4TPEPDHbbh0REKSYKA4LGlEstJs0jZxw-lscWMg/viewform",
	},
	{
		key: "become_sponsor",
		title: "Become a Sponsor",
		url: "https://docs.google.com/presentation/d/1xnAp2miWbFJpeGCrmXu6ZvuFlYfEpIGd/edit#slide=id.p6",
	},
	{
		key: "become_speakers",
		title: "Become a Speaker",
		url: "https://docs.google.com/forms/d/e/1FAIpQLSeSzqNQrnJ7bo3fLdx-XKDlOopzncXis1unOPhmWT-1AvYG4Q/viewform",
	},
];

function getButton(key) {
	return data.find((u) => u.key === key);
}

export { getButton };
