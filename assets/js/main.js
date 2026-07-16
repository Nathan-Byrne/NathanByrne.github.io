const projects = [
	{
		name: "PROJECT: Boardbreakers (In Development)",
		tags: ["Independent Learning", "GDScript", "Godot", "Steamworks", "Aseprite", "GitHub", "Solo Project"],
		thumbnail: "assets/images/boardbreakers.png",
		description: "Programming a project that is planned to be released on Steam in the future. The game's premise is a 4 player, 2.5D board game where each player moves and battles each other for control of the board, obtain items, collect money to eventually win the entire game. Players can create custom tailored builds using items in order to adapt to the ever incressing need to survive against their opponents."
	},
	{
		name: "Personal Website",
		tags: ["Independent Learning", "HTML", "CSS", "JavaScript", "Claude", "GitHub Pages", "GitHub", "Solo Project"],
		thumbnail: "assets/images/website.png",
		description: "A personal website created to store a record of all my contributed projects in one space. The initial steps to create this page was helped by using Claude, and further development consisted of tweeks and improvments after file generation."
	},
	{
		name: "FACE//WATCH",
		tags: ["TVSJD Game Jam 2026", "GDScript", "Godot", "Aseprite", "Itch.io", "Excalidraw", "GitHub", "Team Project"],
		thumbnail: "assets/images/faceWatch.png",
		description: "Programmed the game 'FACE//WATCH', a face detection game where you attempt to spot the only unique face on a screen filled with non-unique faces. Later quotas introduce new effects that either distract, challenge or assist you. I was also in charge of designing the Itch.io page for the game."
	},
	{
		name: "Shattered Side",
		tags: ["South East Technological University Industry Day 2026", "C++", "SFML", "Azure", "DigitalOcean", "SQL", "UDP Networking", "Aseprite", "GitHub", "Solo Project"],
		thumbnail: "assets/images/shatteredSide.png",
		description: "Programmed the game 'Shattered Side', a roguelike dungeon crawler game, where the goal is to keep your chosen characters alive while also managing both at the same time. The game not only can be played offline but also includes an online mode, which allows for account creation, leaderboards and online multiplayer."
	},
	{
		name: "Astro Hopper",
		tags: ["Games Fleadh 2024", "HTML", "CSS", "JavaScript", "GitHub", "Team Project"],
		thumbnail: "assets/images/astroHopper.png",
		description: "Programmed the game 'Astro Hopper', a tile-based puzzle game where you must reach the end of the level without retracing your steps and avoid incoming threats."
	},
	{
		name: "Wewe Loves Time Travel",
		tags: ["UI Programming Project 2023", "HTML", "CSS", "JavaScript", "PWA", "Codeberg", "Solo Project"],
		thumbnail: "assets/images/wewe.png",
		description: "Programmed the game 'Wewe Loves Time Travel', a game inspired by 'Baba Is You'. This is a puzzle game where you must complete seemingly impossible levels by moving word blocks to alter the state of the current level."
	},
	{
		name: "Temple Root",
		tags: ["Game Jam 2023", "C++", "SFML", "Aseprite", "GitHub", "Team Project"],
		thumbnail: "assets/images/templeRoot.png",
		description: "Programmed the game 'Temple Root', a 2D puzzle game where you solve a series of puzzles in a room as fast as possible before being trapped."
	}
];


const grid = document.getElementById("project-grid");

const tagPalette = [
	"tag-p0", "tag-p1", "tag-p2", "tag-p3", "tag-p4", "tag-p5", "tag-p6", "tag-p7",
	"tag-p8", "tag-p9", "tag-p10", "tag-p11", "tag-p12", "tag-p13", "tag-p14", "tag-p15",
];

function buildTagColorMap(list) {
	const map = new Map();
	let nextIndex = 0;
	list.forEach(project => {
		project.tags.forEach((tag, t) => {
			if (t === 0) return; // first tag is the "reason" — colored separately
			if (!map.has(tag)) {
				map.set(tag, tagPalette[nextIndex % tagPalette.length]);
				nextIndex++;
			}
		});
	});
	return map;
}

const tagColorMap = buildTagColorMap(projects);

function tagClass(tag, isFirst) {
	if (isFirst) return "tag-reason";
	return tagColorMap.get(tag);
}

function ordinal(n) {
	const suffixes = ["th", "st", "nd", "rd"];
	const remainder = n % 100;
	const suffix = suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
	return `${n}${suffix}`;
}

function renderCards(list) {
	grid.innerHTML = "";
	list.forEach((project, i) => {
		const card = document.createElement("article");
		card.className = "project-card";
		const tagsHTML = project.tags
			.map((tag, t) => `<span class="tag ${tagClass(tag, t === 0)}">${tag}</span>`)
			.join("");
		card.innerHTML = `
			<div class="card-thumb-wrap">
				<span class="card-index">${ordinal(list.length - i)} Project</span>
				<img src="${project.thumbnail}" alt="Screenshot of ${project.name}" loading="lazy">
			</div>
			<div class="card-body">
				<h2 class="card-title">${project.name}</h2>
				<div class="card-meta">${tagsHTML}</div>
				<p class="card-description">${project.description}</p>
			</div>
		`;
		grid.appendChild(card);
	});
}

renderCards(projects);
