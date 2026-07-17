// Additional Features to Include: Website Last Updated Text, Social Links (GitHub, LinkedIn etc), Browser Icon, Fix Mobile Display, Larger Screenshots, Easter Egg (???)

const projects = [
	{
		name: "PROJECT: Boardbreakers",
		tags: ["Independent Learning", "GDScript", "Godot", "Steamworks", "Aseprite", "GitHub", "Solo Project"],
		thumbnail: "assets/images/boardbreakersCover.png",
		brief: "A 2.5D, Competitive Board Game where you Craft Builds and Forge New Dice to Come Out on Top Against your Friends",
		personalFavourite: true,
		inDevelopment: true,
		screenshots: [],
		links: [],
		description: "Programming a project that is planned to be released on Steam in the future. The game's premise is a 4 player, 2.5D board game where each player moves and battles each other for control of the board, obtain items, collect money to eventually win the entire game. Players can create custom tailored builds using items in order to adapt to the ever incressing need to survive against their opponents."
	},
	{
		name: "GMTK Submission",
		tags: ["GMTK Game Jam 2026", "GDScript", "Godot", "Playtester", "Itch.io", "Team Project"],
		thumbnail: "assets/images/gmtkCover.png",
		brief: "A Future Planned Project for the GMTK Game Jam 2026",
		personalFavourite: false,
		inDevelopment: true,
		screenshots: [],
		links: [],
		description: "Description, screenshots and links for this project will be updated when the project has been relesed to the public."
	},
	{
		name: "Personal Website",
		tags: ["Independent Learning", "HTML", "CSS", "JavaScript", "Claude", "GitHub Pages", "GitHub", "Solo Project"],
		thumbnail: "assets/images/websiteCover.png",
		brief: "My Website, which Included Details About my Projects",
		personalFavourite: true,
		inDevelopment: false,
		screenshots: [],
		links: [{label: "Project Repo", url: "https://github.com/Nathan-Byrne/NathanByrne.github.io"}],
		description: "A personal website created to store a record of all my contributed projects in one space. The initial steps to create this page was helped by using Claude, and further development consisted of tweeks and improvments after file generation."
	},
	{
		name: "FACE//WATCH",
		tags: ["TVSJD Game Jam 2026", "GDScript", "Godot", "Aseprite", "Itch.io", "Excalidraw", "GitHub", "Team Project"],
		thumbnail: "assets/images/faceWatchCover.png",
		brief: "A Reaction Face Detection Game where the Game gets Infinitely Harder",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: ["assets/images/faceWatchScreenshots/ss1.png", "assets/images/faceWatchScreenshots/ss2.png", "assets/images/faceWatchScreenshots/ss3.png", "assets/images/faceWatchScreenshots/ss4.png"],
		links: [{label: "Project Repo (commits under the username 'ZetDerp')", url: "https://github.com/ZetDerp/Very-Serious-Game-Jam"}, {label: "Itch.io Page", url: "https://zetderp.itch.io/face-watch"}],
		description: "Programmed the game 'FACE//WATCH', a face detection game where you attempt to spot the only unique face on a screen filled with non-unique faces. Later quotas introduce new effects that either distract, challenge or assist you. I was also in charge of designing the Itch.io page for the game."
	},
	{
		name: "Shattered Side",
		tags: ["South East Technological University Industry Day 2026", "C++", "SFML", "Azure", "DigitalOcean", "SQL", "UDP Networking", "Aseprite", "GitHub", "Solo Project"],
		thumbnail: "assets/images/shatteredSideCover.png",
		brief: "A Dungeon Crawler where you Manage 2 Characters at Once",
		personalFavourite: true,
		inDevelopment: false,
		screenshots: ["assets/images/shatteredSideScreenshots/ss1.png", "assets/images/shatteredSideScreenshots/ss2.png", "assets/images/shatteredSideScreenshots/ss3.png", "assets/images/shatteredSideScreenshots/ss4.png", "assets/images/shatteredSideScreenshots/ss5.png", 
						"assets/images/shatteredSideScreenshots/ss6.png", "assets/images/shatteredSideScreenshots/ss7.png", "assets/images/shatteredSideScreenshots/ss8.png", "assets/images/shatteredSideScreenshots/ss9.png", "assets/images/shatteredSideScreenshots/ss10.png", 
						"assets/images/shatteredSideScreenshots/ss11.png", "assets/images/shatteredSideScreenshots/ss12.png"],
		links: [{label: "Project Repo", url: "https://github.com/Nathan-Byrne/4thYearFinalProject"}, {label: "Project Website (SETU Showcase site can experience outages which are out of my control)", url: "https://showcase.setu.ie/C00281281/index.html"}],
		description: "Programmed the game 'Shattered Side', a roguelike dungeon crawler game, where the goal is to keep your chosen characters alive while also managing both at the same time. The game not only can be played offline but also includes an online mode, which allows for account creation, leaderboards and online multiplayer."
	},
	{
		name: "Astro Hopper",
		tags: ["Games Fleadh 2024", "HTML", "CSS", "JavaScript", "GitHub", "Team Project"],
		thumbnail: "assets/images/astroHopperCover.png",
		brief: "A 2D Puzzle Game Focused on Avoiding Repeating Steps",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: ["assets/images/astroHopperScreenshots/ss1.png", "assets/images/astroHopperScreenshots/ss2.png", "assets/images/astroHopperScreenshots/ss3.png", "assets/images/astroHopperScreenshots/ss4.png"],
		links: [{label: "Project Repo (commits under the username 'ZetDerp')", url: "https://github.com/Nathan-Byrne/GameFleadh"}],
		description: "Programmed the game 'Astro Hopper', a tile-based puzzle game where you must reach the end of the level without retracing your steps and avoid incoming threats."
	},
	{
		name: "Wewe Loves Time Travel",
		tags: ["UI Programming Project 2023", "HTML", "CSS", "JavaScript", "PWA", "Codeberg", "Solo Project"],
		thumbnail: "assets/images/weweCover.png",
		brief: "A Level Manipulation Game Inspired by 'Baba Is You'",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: ["assets/images/weweScreenshots/ss1.png", "assets/images/weweScreenshots/ss2.png", "assets/images/weweScreenshots/ss3.png", "assets/images/weweScreenshots/ss4.png"],
		links: [{label: "Project Repo", url: "https://github.com/Nathan-Byrne/Wewe-Loves-Time-Travel"}],
		description: "Programmed the game 'Wewe Loves Time Travel', a game inspired by 'Baba Is You'. This is a puzzle game where you must complete seemingly impossible levels by moving word blocks to alter the state of the current level."
	},
	{
		name: "Temple Root",
		tags: ["Game Jam 2023", "C++", "SFML", "Aseprite", "GitHub", "Team Project"],
		thumbnail: "assets/images/templeRootCover.png",
		brief: "A Fast Paced 2D Escape Room Puzzle Game",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: [],
		links: [{label: "Project Repo", url: "https://github.com/DarraghMcKernan/Temple-Root"}],
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
			if (t === 0) return; // first tag is the "reason" (colored separately)
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
		card.className = "project-card" + (project.personalFavourite ? " is-favourite" : "");
		card.tabIndex = 0;

		const tagsHTML = project.tags
			.map((tag, t) => `<span class="tag ${tagClass(tag, t === 0)}">${tag}</span>`)
			.join("");

		const screenshots = project.screenshots || [];
		const screenshotsHTML = screenshots.length
			? `<div class="hover-screenshots">${screenshots
					.map(src => `<img src="${src}" alt="Additional screenshot of ${project.name}" loading="lazy">`)
					.join("")}</div>`
			: "";

		const links = project.links || [];
		const linksHTML = links.length
			? `<div class="hover-links">${links
					.map(l => `<a class="hover-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`)
					.join("")}</div>`
			: `<p class="hover-empty-note">No available links.</p>`;

		card.innerHTML = `
			<div class="card-thumb-wrap">
				<span class="card-index">${ordinal(list.length - i)} Project</span>
				${project.personalFavourite ? `<span class="card-favourite">Personal Favourite</span>` : ""}
				<img src="${project.thumbnail}" alt="Screenshot of ${project.name}" loading="lazy">
				${project.inDevelopment ? `<span class="card-in-development">In Development</span>` : ""}
			</div>
			<div class="card-body">
				<h2 class="card-title">${project.name}</h2>
				<div class="card-meta">${tagsHTML}</div>
				<p class="card-brief">${project.brief}</p>
				<p class="card-hint">Hover / Click for additional details</p>
			</div>
			<div class="card-hover-panel">
				<h3 class="hover-title">${project.name}</h3>
				${screenshotsHTML}
				<p class="hover-description">${project.description}</p>
				${linksHTML}
			</div>
		`;
		grid.appendChild(card);
	});
}

renderCards(projects);

// Touch/tap fallback: :hover doesn't exist on touch devices, so tapping a
// card toggles its panel open. Tapping elsewhere (or another card) closes it.
grid.addEventListener("click", (e) => {
	if (e.target.closest(".hover-link")) return; // let real links navigate normally
	const card = e.target.closest(".project-card");
	if (!card) return;
	const wasOpen = card.classList.contains("is-open");
	document.querySelectorAll(".project-card.is-open").forEach(c => c.classList.remove("is-open"));
	if (!wasOpen) card.classList.add("is-open");
});

document.addEventListener("click", (e) => {
	if (!e.target.closest(".project-card")) {
		document.querySelectorAll(".project-card.is-open").forEach(c => c.classList.remove("is-open"));
	}
});

document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		document.querySelectorAll(".project-card.is-open").forEach(c => c.classList.remove("is-open"));
	}
});

const modeToggle = document.getElementById("mode-toggle");
const modeToggleLabel = document.getElementById("mode-toggle-label");

function applySimpleMode(isSimple) {
	document.body.classList.toggle("simple-mode", isSimple);
	modeToggle.setAttribute("aria-pressed", String(isSimple));
	modeToggleLabel.textContent = isSimple ? "Animated mode" : "Simple mode";
}

const storedPreference = localStorage.getItem("simpleMode");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const startInSimpleMode = storedPreference !== null ? storedPreference === "true" : prefersReducedMotion;

applySimpleMode(startInSimpleMode);

modeToggle.addEventListener("click", () => {
	const nowSimple = !document.body.classList.contains("simple-mode");
	applySimpleMode(nowSimple);
	localStorage.setItem("simpleMode", String(nowSimple));
});
