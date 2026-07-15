const projects = [
	{
		name: "Unreleased Game Project",
		reason: "Independent Learning",
		language: "GDScript / Godot",
		thumbnail: "assets/images/studybuddy.svg",
		description: "Placeholder."
	},
	{
		name: "Personal Website",
		reason: "Independent Learning",
		language: "HTML / CSS / JavaScript",
		thumbnail: "assets/images/studybuddy.svg",
		description: "Placeholder."
	},
	{
		name: "Shattered Side",
		reason: "South East Technological University Industry Day 2026",
		language: "C++ / SFML",
		thumbnail: "assets/images/shatteredSide.png",
		description: "Programmed the game 'Shattered Side', a roguelike dungeon crawler game, where the goal is to keep your chosen characters alive while also managing both at the same time. The game not only can be played offline but also includes an online mode, which allows for account creation, leaderboards and online multiplayer."
	},
	{
		name: "FACE//WATCH",
		reason: "TVSJD Game Jam 2026",
		language: "GDScript / Godot",
		thumbnail: "assets/images/faceWatch.png",
		description: "Programmed the game 'FACE//WATCH', a face detection game where you attempt to spot the only unique face on a screen filled with non-unique faces. Later quotas introduce new effects that either distract, challenge or assist you."
	},
	{
		name: "Astro Hopper",
		reason: "Games Fleadh 2024",
		language: "HTML / CSS / JavaScript",
		thumbnail: "assets/images/astroHopper.png",
		description: "Programmed the game 'Astro Hopper', a tile-based puzzle game where you must reach the end of the level without retracing your steps and avoid incoming threats."
	},
	{
		name: "Wewe Loves Time Travel",
		reason: "UI Programming Project 2023",
		language: "HTML / CSS / JavaScript",
		thumbnail: "assets/images/wewe.png",
		description: "Programmed the game 'Wewe Loves Time Travel', a game inspired by 'Baba Is You'. This is a puzzle game where you must complete seemingly impossible levels by moving word blocks to alter the state of the current level."
	},
	{
		name: "Temple Root",
		reason: "Game Jam 2023",
		language: "C++ / SFML",
		thumbnail: "assets/images/studybuddy.svg",
		description: "Programmed the game “Temple Root”, a 2D puzzle game where you solve a series of puzzles in a room as fast as possible before being trapped."
	}
];


const grid = document.getElementById("project-grid");

function renderCards(list) {
	grid.innerHTML = "";
	list.forEach((project, i) => {
		const card = document.createElement("article");
		card.className = "project-card";
		card.innerHTML = `
			<div class="card-thumb-wrap">
				<span class="card-index">No. ${String(i + 1).padStart(2, "0")}</span>
				<img src="${project.thumbnail}" alt="Screenshot of ${project.name}" loading="lazy">
			</div>
			<div class="card-body">
				<h2 class="card-title">${project.name}</h2>
				<div class="card-meta">
					<span class="tag tag-reason">${project.reason}</span>
					<span class="tag tag-lang">${project.language}</span>
				</div>
				<p class="card-description">${project.description}</p>
			</div>
		`;
		grid.appendChild(card);
	});
}

renderCards(projects);
