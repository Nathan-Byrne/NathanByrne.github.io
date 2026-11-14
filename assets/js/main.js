// Additional Features to Include: Fix Mobile Display, Easter Egg (???)

const projects = [
	{
		name: "Boardbreakers",
		tags: ["Independent Learning", "GDScript", "Godot", "Steamworks", "Aseprite", "GitHub", "Solo Project"],
		thumbnail: "assets/images/boardbreakersCover.png",
		brief: "A 2.5D, Competitive Board Game where you Craft Builds and Forge New Dice to Come Out on Top Against your Friends",
		personalFavourite: true,
		inDevelopment: true,
		screenshots: [],
		links: [],
		description: "Programming a project that is planned to be released on Steam in the future. The game's premise is a 4 player, 2.5D board game where each player moves and battles each other for control of the board, obtain items, collect money to eventually win the entire game. Players can create custom tailored builds using items in order to adapt to the ever increasing need to survive against their opponents."
	},
	{
		name: "Dead-Line",
		tags: ["GMTK Game Jam 2026", "GDScript", "Godot", "Playtester", "Itch.io", "GitHub", "Team Project"],
		thumbnail: "assets/images/deadLine.png",
		brief: "A Detective Game where the Player must Scan Cameras to pin down the Criminal in the area while under a Ticking Timer",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: ["assets/images/deadLineScreenshots/ss1.png", "assets/images/deadLineScreenshots/ss2.png", "assets/images/deadLineScreenshots/ss3.png", "assets/images/deadLineScreenshots/ss4.png"],
		links: [{label: "Itch.io Page", url: "https://jbatiger.itch.io/dead-line"}],
		description: "I participated in playtesting before the game launched and provided last minute coding support and itch knowledge to the other team members on how to make a game stand out on itch. I also handled designing the Itch game page."
	},
	{
		name: "Personal Website",
		tags: ["Independent Learning", "HTML", "CSS", "JavaScript", "Claude", "GitHub Pages", "GitHub", "Solo Project"],
		thumbnail: "assets/images/websiteCover.png",
		brief: "My Website, which Included Details About my Projects",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: [],
		links: [{label: "Project Repo", url: "https://github.com/Nathan-Byrne/NathanByrne.github.io"}],
		description: "A personal website created to store a record of all my contributed projects and information about them in one space. The initial steps to create this page was helped by using Claude, and further development consisted of tweeks and improvments after file generation. This project stands as an example of prompt engineering and is the only project here that uses a LLM for coding."
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

const mods = [
	{
		name: "Deadlock",
		tags: ["Independent Learning", "Blender", "Aseprite", "Krita", "CSDK 12", "Source2Viewer", "UV Unwrapping"],
		thumbnail: "assets/images/deadlockCover.png",
		brief: "Developer: Valve. Modding Done: Custom Models, Colour Palette Swaps and Image Replacement.",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: ["assets/images/deadlockScreenshots/ss1.png", "assets/images/deadlockScreenshots/ss2.png", "assets/images/deadlockScreenshots/ss3.png", "assets/images/deadlockScreenshots/ss4.png", "assets/images/deadlockScreenshots/ss5.png", 
			"assets/images/deadlockScreenshots/ss6.png", "assets/images/deadlockScreenshots/ss7.png", "assets/images/deadlockScreenshots/ss8.png", "assets/images/deadlockScreenshots/ss9.png", "assets/images/deadlockScreenshots/ss10.png"],
		links: [{label: "Deadlock Modding Notes", url: "https://deadlockmodding.pages.dev/"}],
		description: "Modded the game Deadlock with multiple mods that can range from model updates / changes, skin colour swaps by updating their textures and complete texture replacements on models, UI or other elements."
	},
	{
		name: "UNBEATABLE",
		tags: ["Independent Learning", "Dev Editor"],
		thumbnail: "assets/images/unbeatableCover.png",
		brief: "Developer: D-CELL. Modding Done: Custom Charts (using Dev Editor).",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: [],
		links: [],
		description: "Created modded music tracks for the game UNBEATABLE."
	},
	{
		name: "Rift of the Necrodancer",
		tags: ["Independent Learning", "Dev Editor"],
		thumbnail: "assets/images/necrodancerCover.png",
		brief: "Developer: Brace Yourself Games. Modding Done: Custom Charts (using Dev Editor).",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: [],
		links: [],
		description: "Created modded music tracks for the game Rift of the Necrodancer."
	},
	{
		name: "Guilty Gear -Strive-",
		tags: ["Independent Learning", "Blender", "Unreal Engine 4"],
		thumbnail: "assets/images/striveCover.png",
		brief: "Developer: Arc System Works. Modding Done: Colour Palette Swaps.",
		personalFavourite: false,
		inDevelopment: false,
		screenshots: [],
		links: [],
		description: "Created custom skin for characters for the game Guilty Gear -Strive-."
	}
];


const grid = document.getElementById("project-grid");

const tagPalette = [
	"tag-p0", "tag-p1", "tag-p2", "tag-p3", "tag-p4", "tag-p5", "tag-p6", "tag-p7",
	"tag-p8", "tag-p9", "tag-p10", "tag-p11", "tag-p12", "tag-p13", "tag-p14", "tag-p15",
];

// A devlog's tags, as a clean list (ignores a missing or malformed "tags" field).
function devlogTags(devlog) {
	return Array.isArray(devlog.tags)
		? devlog.tags.filter(tag => typeof tag === "string" && tag.trim() !== "")
		: [];
}

function buildTagColorMap(list, devlogList = []) {
	const map = new Map();
	let nextIndex = 0;
	const assign = tag => {
		if (!map.has(tag)) {
			map.set(tag, tagPalette[nextIndex % tagPalette.length]);
			nextIndex++;
		}
	};
	list.forEach(project => {
		project.tags.forEach((tag, t) => {
			if (t === 0) return; // first tag is the "reason" (colored separately)
			assign(tag);
		});
	});
	// Devlog tags are added last, so they never change an existing project/mod tag's colour,
	// and a tag shared with a project keeps that project's colour. Unlike projects, every
	// devlog tag gets a colour from the map (there is no special first "reason" tag).
	devlogList.forEach(devlog => devlogTags(devlog).forEach(assign));
	return map;
}

const tagColorMap = buildTagColorMap([...projects, ...mods], devlogs);

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

// Devlogs that belong to a project/mod: those whose "project" field matches its name
// (case-insensitive). Newest first.
function devlogsForName(name) {
	const wanted = String(name || "").trim().toLowerCase();
	if (!wanted) return [];
	return devlogs
		.filter(devlog => String(devlog.project || "").trim().toLowerCase() === wanted)
		.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

// Short plain-text preview of a devlog: its blurb, or the start of its content.
function devlogSnippet(devlog, maxLength = 120) {
	const text = String(devlog.blurb || devlog.content || "").replace(/\s+/g, " ").trim();
	return text.length > maxLength ? `${text.slice(0, maxLength).trimEnd()}…` : text;
}

// One speech-bubble previewing a devlog. Clicking it opens that devlog full screen.
function makeDevlogBubble(devlog) {
	const bubble = document.createElement("button");
	bubble.type = "button";
	bubble.className = "devlog-bubble";
	bubble.setAttribute("aria-label", `Read devlog: ${devlog.title || "Untitled devlog"}`);

	const label = document.createElement("span");
	label.className = "devlog-bubble-label";
	label.textContent = formatDevlogDate(devlog.date);

	const title = document.createElement("span");
	title.className = "devlog-bubble-title";
	title.textContent = devlog.title || "Untitled devlog";

	const snippet = document.createElement("span");
	snippet.className = "devlog-bubble-snippet";
	snippet.textContent = devlogSnippet(devlog);

	const cta = document.createElement("span");
	cta.className = "devlog-bubble-cta";
	cta.textContent = "Read devlog →";

	bubble.append(label, title, snippet, cta);
	bubble.addEventListener("click", () => {
		document.querySelectorAll(".project-card.is-open").forEach(c => c.classList.remove("is-open"));
		openDevlog(devlog);
	});
	return bubble;
}

// "Devlogs" title followed by one bubble per matching devlog (newest first).
// Returns null if the project/mod has no devlogs.
function makeDevlogSection(project) {
	const matches = devlogsForName(project.name);
	if (!matches.length) return null;
	const section = document.createElement("div");
	section.className = "devlog-section";
	const heading = document.createElement("h4");
	heading.className = "devlog-section-title";
	heading.textContent = "Devlogs";
	section.appendChild(heading);
	matches.forEach(devlog => section.appendChild(makeDevlogBubble(devlog)));
	return section;
}

function renderCards(list, badgeSuffix = "Project") {
	grid.innerHTML = "";
	list.forEach((project, i) => {
		const card = document.createElement("article");
		card.className = "project-card" + (project.personalFavourite ? " is-favourite" : "");
		card.tabIndex = 0;
		card.dataset.ordinal = String(list.length - i); // used by the "press a number" keyboard shortcut

		const tagsHTML = project.tags
			.map((tag, t) => `<span class="tag ${tagClass(tag, t === 0)}">${tag}</span>`)
			.join("");

		const screenshots = project.screenshots || [];
		const screenshotsHTML = screenshots.length
			? `<div class="hover-screenshots">
					${screenshots
						.map((src, idx) => `<img class="ss-img${idx === 0 ? " active" : ""}" data-idx="${idx}" src="${src}" alt="Additional screenshot of ${project.name}" loading="lazy">`)
						.join("")}
					${screenshots.length > 1
						? `<div class="ss-dots">${screenshots.map((_, idx) => `<span class="ss-dot${idx === 0 ? " active" : ""}"></span>`).join("")}</div>`
						: ""}
				</div>`
			: "";

		const links = project.links || [];
		const linksHTML = links.length
			? `<div class="hover-links">${links
					.map(l => `<a class="hover-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`)
					.join("")}</div>`
			: `<p class="hover-empty-note">No available links.</p>`;

		card.innerHTML = `
			<div class="card-thumb-wrap">
				<span class="card-index">${`${ordinal(list.length - i)} ${badgeSuffix}`.trim()}</span>
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

		const devlogSection = makeDevlogSection(project);
		if (devlogSection) {
			const panel = card.querySelector(".card-hover-panel");
			panel.insertBefore(devlogSection, panel.querySelector(".hover-links, .hover-empty-note"));
		}

		grid.appendChild(card);

		if (screenshots.length > 1) {
			setupScreenshotSlideshow(card.querySelector(".hover-screenshots"));
		}
	});
}

// Cycles a card's screenshots one at a time with a slow crossfade. Clicking
// the image jumps to the next screenshot immediately and restarts the
// auto-advance timer, rather than waiting for the next scheduled change.
function setupScreenshotSlideshow(container) {
	const images = Array.from(container.querySelectorAll(".ss-img"));
	const dots = Array.from(container.querySelectorAll(".ss-dot"));
	let index = 0;
	let intervalId = null;

	function showIndex(newIndex) {
		index = (newIndex + images.length) % images.length;
		images.forEach((img, i) => img.classList.toggle("active", i === index));
		dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
	}

	function startAutoAdvance() {
		clearInterval(intervalId);
		intervalId = setInterval(() => showIndex(index + 1), 3500);
	}

	container.addEventListener("click", () => {
		showIndex(index + 1);
		startAutoAdvance(); // restart the timer so it doesn't double-advance right after a manual click
	});

	startAutoAdvance();
}

renderCards(projects);

// Touch/tap fallback: :hover doesn't exist on touch devices, so tapping a
// card toggles its panel open. Tapping elsewhere (or another card) closes it.
grid.addEventListener("click", (e) => {
	if (e.target.closest(".hover-link, .hover-screenshots, .devlog-bubble")) return; // let real links + screenshot clicks work without toggling the card
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
	// While a devlog is open full screen, Escape closes it and nothing else reacts.
	if (!devlogReader.hidden) {
		if (e.key === "Escape") closeDevlog();
		return;
	}

	if (e.key === "Escape") {
		document.querySelectorAll(".project-card.is-open").forEach(c => c.classList.remove("is-open"));
	}

	// Press 1–9 to jump straight to the project showing that number badge.
	if (/^[1-9]$/.test(e.key)) {
		const target = document.querySelector(`.project-card[data-ordinal="${e.key}"]`);
		if (target) {
			document.querySelectorAll(".project-card.is-open").forEach(c => c.classList.remove("is-open"));
			target.classList.add("is-open");
			target.scrollIntoView({ behavior: "smooth", block: "center" });
		}
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

// ---------------------------------------------------------
// Background FX canvas: cursor trail and click-to-shoot stars.
// Both disabled automatically while Simple Mode is on, so the
// site stays fully static there.
// ---------------------------------------------------------
const fxCanvas = document.getElementById("fx-canvas");
const fxCtx = fxCanvas.getContext("2d");

// window.innerWidth/innerHeight include the scrollbar's width when one is
// present, but the canvas element's actual rendered size (and mouse event
// coordinates like e.clientX) don't. That mismatch caused the cursor trail
// and other effects to drift further off the further right you moved.
// document.documentElement.clientWidth/clientHeight excludes the scrollbar,
// matching both the canvas's real size and clientX/clientY correctly.
function getViewportWidth() {
	return document.documentElement.clientWidth;
}

function getViewportHeight() {
	return document.documentElement.clientHeight;
}

function resizeFxCanvas() {
	const dpr = window.devicePixelRatio || 1;
	fxCanvas.width = getViewportWidth() * dpr;
	fxCanvas.height = getViewportHeight() * dpr;
	fxCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resizeFxCanvas();
window.addEventListener("resize", resizeFxCanvas);

// --- Cursor trail ---
let trailPoints = []; // { x, y, time }

const trailStarColors = ["#f2e6fa", "#e6c9f2"]; // same tones used by the background star field
const trailMinSpacing = 28; // px — minimum distance the cursor must travel before a new trail point is placed
let lastTrailPoint = null;

window.addEventListener("mousemove", (e) => {
	if (document.body.classList.contains("simple-mode")) return;

	if (lastTrailPoint) {
		const dx = e.clientX - lastTrailPoint.x;
		const dy = e.clientY - lastTrailPoint.y;
		if (Math.sqrt(dx * dx + dy * dy) < trailMinSpacing) return;
	}

	lastTrailPoint = { x: e.clientX, y: e.clientY };
	trailPoints.push({
		x: e.clientX,
		y: e.clientY,
		time: performance.now(),
		color: trailStarColors[Math.floor(Math.random() * trailStarColors.length)]
	});
});

function drawCursorTrail(now) {
	const lifespan = 600; // ms
	trailPoints = trailPoints.filter(p => now - p.time < lifespan);

	trailPoints.forEach(p => {
		const age = now - p.time;
		const t = 1 - age / lifespan; // 1 = fresh, 0 = about to vanish
		fxCtx.beginPath();
		fxCtx.arc(p.x, p.y, 1 + t * 0.8, 0, Math.PI * 2);
		fxCtx.fillStyle = p.color;
		fxCtx.globalAlpha = t;
		fxCtx.fill();
		fxCtx.globalAlpha = 1;
	});
}

// --- Click-to-shoot stars ---
let shootingStars = []; // { x, y, vx, vy, startTime }

document.addEventListener("click", (e) => {
	if (document.body.classList.contains("simple-mode")) return;
	if (e.target.closest(".project-card, .mode-toggle, a, button")) return;
	spawnShootingStar(e.clientX, e.clientY);
});

function spawnShootingStar(targetX, targetY) {
	const margin = 120;
	const w = getViewportWidth();
	const h = getViewportHeight();
	const side = Math.floor(Math.random() * 4); // 0 top, 1 right, 2 bottom, 3 left

	let startX, startY;
	if (side === 0)      { startX = Math.random() * w; startY = -margin; }
	else if (side === 1) { startX = w + margin; startY = Math.random() * h; }
	else if (side === 2) { startX = Math.random() * w; startY = h + margin; }
	else                 { startX = -margin; startY = Math.random() * h; }

	const dx = targetX - startX;
	const dy = targetY - startY;

	const travelMs = 550;   // time to reach the clicked point
	const overshootMs = 250; // continues a little past it before fading out
	const framesToTarget = travelMs / 16; // ~16ms per animation frame

	shootingStars.push({
		x: startX,
		y: startY,
		vx: dx / framesToTarget,
		vy: dy / framesToTarget,
		startTime: performance.now(),
		lifespan: travelMs + overshootMs
	});
}

function drawShootingStars(now) {
	shootingStars = shootingStars.filter(s => now - s.startTime < s.lifespan);

	shootingStars.forEach(s => {
		const age = now - s.startTime;
		const x = s.x + s.vx * (age / 16);
		const y = s.y + s.vy * (age / 16);

		// Stay fully opaque for most of the flight, only fading during
		// the final ~30% of its life instead of dimming the whole time.
		const lifeRatio = age / s.lifespan;
		const fadeStart = 0.7;
		const opacity = lifeRatio < fadeStart
			? 1
			: 1 - (lifeRatio - fadeStart) / (1 - fadeStart);

		// Streak trailing behind the star's direction of travel
		const trailX = x - s.vx * 8;
		const trailY = y - s.vy * 8;

		const gradient = fxCtx.createLinearGradient(trailX, trailY, x, y);
		gradient.addColorStop(0, "rgba(240, 228, 250, 0)");
		gradient.addColorStop(1, `rgba(240, 228, 250, ${opacity})`);

		fxCtx.beginPath();
		fxCtx.moveTo(trailX, trailY);
		fxCtx.lineTo(x, y);
		fxCtx.strokeStyle = gradient;
		fxCtx.lineWidth = 3;
		fxCtx.stroke();

		fxCtx.beginPath();
		fxCtx.arc(x, y, 3.5, 0, Math.PI * 2);
		fxCtx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
		fxCtx.fill();
	});
}

// --- Main animation loop ---
function fxLoop() {
	fxCtx.clearRect(0, 0, getViewportWidth(), getViewportHeight());

	if (!document.body.classList.contains("simple-mode")) {
		const now = performance.now();
		drawCursorTrail(now);
		drawShootingStars(now);
	}

	requestAnimationFrame(fxLoop);
}
requestAnimationFrame(fxLoop);

// ---------------------------------------------------------
// Theme color picker — recolors the animated background
// (nebula glow, swirl blobs, wave bands) to shades derived
// from whichever color is picked. The actual colour change
// is slow (2.5s) via CSS custom-property transitions defined
// in style.css (see the @property + :root transition rules).
// ---------------------------------------------------------
function hexToHue(hex) {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h = 0;
	if (max !== min) {
		const d = max - min;
		switch (max) {
			case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h *= 60;
	}
	return h;
}

function applyThemeColor(hex) {
	const h = hexToHue(hex);
	const wrap = (deg) => ((h + deg) % 360 + 360) % 360;
	const root = document.documentElement.style;

	root.setProperty("--nebula-purple", `hsla(${wrap(-20)}, 55%, 45%, 0.4)`);
	root.setProperty("--nebula-pink", `hsla(${wrap(40)}, 60%, 60%, 0.32)`);
	root.setProperty("--swirl-1", `hsl(${wrap(0)}, 55%, 68%)`);
	root.setProperty("--swirl-2", `hsl(${wrap(20)}, 60%, 75%)`);
	root.setProperty("--swirl-3", `hsl(${wrap(-25)}, 45%, 60%)`);
	root.setProperty("--swirl-4", `hsl(${wrap(10)}, 50%, 82%)`);
	root.setProperty("--wave-1", `hsl(${wrap(20)}, 60%, 75%)`);
	root.setProperty("--wave-2", `hsl(${wrap(-25)}, 45%, 60%)`);
	root.setProperty("--wave-3", `hsl(${wrap(0)}, 40%, 92%)`);
	root.setProperty("--wave-accent", `hsl(${wrap(-25)}, 45%, 60%)`);
}

const themeSwatches = document.querySelectorAll(".theme-swatch");
const storedThemeColor = localStorage.getItem("themeColor");

function setActiveSwatch(color) {
	themeSwatches.forEach(btn => btn.classList.toggle("active", btn.dataset.color === color));
}

if (storedThemeColor) {
	applyThemeColor(storedThemeColor);
	setActiveSwatch(storedThemeColor);
}

themeSwatches.forEach(btn => {
	btn.addEventListener("click", () => {
		const color = btn.dataset.color;
		applyThemeColor(color);
		setActiveSwatch(color);
		localStorage.setItem("themeColor", color);
	});
});

// ---------------------------------------------------------
// "Last updated" footer text. document.lastModified only describes index.html, so editing
// devlogs.js (or main.js / style.css) on its own never moved it. Now it shows the newest of:
//   - index.html's modified time (document.lastModified)
//   - the modified time the server reports for devlogs.js, main.js and style.css
//   - the newest devlog date (ignored if it is in the future)
// No manual date-editing needed. Opening index.html straight from disk (file://) can't read
// the other files' times, so there it falls back to index.html plus the newest devlog date.
// ---------------------------------------------------------
const lastUpdatedEl = document.getElementById("last-updated");
if (lastUpdatedEl) {
	const showLastUpdated = date => {
		const formatted = date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
		lastUpdatedEl.textContent = `Last updated ${formatted}`;
	};
	const isValid = date => date instanceof Date && !Number.isNaN(date.getTime());

	let latest = new Date(document.lastModified);
	if (!isValid(latest)) latest = new Date(0);

	const now = new Date();
	devlogs.forEach(devlog => {
		const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(devlog.date || ""));
		if (!parts) return; // skips placeholders like "2026-11-XX"
		const date = new Date(Number(parts[1]), Number(parts[2]) - 1, Number(parts[3]));
		if (isValid(date) && date <= now && date > latest) latest = date;
	});
	showLastUpdated(latest);

	const trackedFiles = ["assets/js/devlogs.js", "assets/js/main.js", "assets/css/style.css"];
	Promise.all(trackedFiles.map(file =>
		fetch(file, { method: "HEAD", cache: "no-cache" })
			.then(response => (response.ok ? response.headers.get("Last-Modified") : null))
			.catch(() => null)
	)).then(headers => {
		headers.forEach(header => {
			const date = header ? new Date(header) : null;
			if (date && isValid(date) && date > latest) latest = date;
		});
		showLastUpdated(latest);
	});
}

// ---------------------------------------------------------
// Page tabs — re-renders the same grid from a different data
// array depending on which tab is selected, rather than keeping
// two separate DOM sections around.
// ---------------------------------------------------------
const pageTabs = document.querySelectorAll(".page-tab");

const tabContentMap = {
	projects: { list: projects, badgeSuffix: "Project" },
	modding: { list: mods, badgeSuffix: "" }
};

const aboutPanel = document.getElementById("about-panel");
const postsPanel = document.getElementById("devlogs-panel");
const postsList = document.getElementById("devlogs-list");
const gridHint = document.getElementById("grid-hint");
const PROJECTS_HINT = "Click or Hover over a Box to View More";
const DEVLOGS_HINT = "Click a Box to View a Devlog";

pageTabs.forEach(tab => {
	tab.addEventListener("click", () => {
		const target = tab.dataset.tab;

		pageTabs.forEach(t => {
			t.classList.toggle("active", t === tab);
			t.setAttribute("aria-selected", String(t === tab));
		});

		aboutPanel.hidden = target !== "about";
		postsPanel.hidden = target !== "devlogs";
		grid.hidden = target === "about" || target === "devlogs";
		gridHint.hidden = target === "about";
		gridHint.textContent = target === "devlogs" ? DEVLOGS_HINT : PROJECTS_HINT;

		if (target === "devlogs") {
			loadPosts();
		} else if (target !== "about") {
			const { list, badgeSuffix } = tabContentMap[target];
			renderCards(list, badgeSuffix);
		}
	});
});

// ---------------------------------------------------------
// Devlogs tab: lists the devlogs array from devlogs.js and
// opens one in a reader view when it is clicked.
// ---------------------------------------------------------
let devlogsLoaded = false;
const devlogReader = document.getElementById("devlog-reader");

function formatDevlogDate(dateString) {
	const date = new Date(`${dateString}T00:00:00`);
	if (Number.isNaN(date.getTime())) return dateString || "";
	return date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

// One tag chip: same .tag markup and colour classes as the project/mod cards.
// The devlog's "project" is shown as the first chip, in the same amber "first tag" colour
// as the project/mod cards.
function makeTagChip(tag, isProject = false) {
	const chip = document.createElement("span");
	chip.className = `tag ${tagClass(tag, isProject)}`;
	chip.textContent = tag;
	return chip;
}

// Project filter at the top of the Devlogs tab: one chip per distinct "project" value.
// Clicking a chip hides/shows the devlogs for that project. Devlogs with no project
// belong to "Miscellaneous", which gets its own chip (always last).
// Devlog cards keep date + project + tags on ONE line. Tags that don't fit are hidden and
// replaced by a "+X more" chip (hover it to see which). Re-run when the width changes.
const devlogMetas = [];

function fitDevlogMeta(meta) {
	const tagChips = [...meta.querySelectorAll(".devlog-meta-tag")];
	const oldMore = meta.querySelector(".devlog-meta-more");
	if (oldMore) oldMore.remove();
	tagChips.forEach(chip => { chip.hidden = false; });
	if (!tagChips.length || meta.clientWidth === 0) return; // nothing to fit, or card not visible

	let more = null;
	let hiddenCount = 0;
	while (meta.scrollWidth > meta.clientWidth + 1 && hiddenCount < tagChips.length) {
		hiddenCount++;
		tagChips[tagChips.length - hiddenCount].hidden = true;
		if (!more) {
			more = document.createElement("span");
			more.className = "tag devlog-meta-more";
			meta.appendChild(more);
		}
		more.textContent = `+${hiddenCount} more`;
		more.title = tagChips.slice(tagChips.length - hiddenCount).map(c => c.textContent).join(", ");
	}
}

function fitAllDevlogMetas() {
	devlogMetas.forEach(fitDevlogMeta);
}

let devlogFitQueued = false;
window.addEventListener("resize", () => {
	if (devlogFitQueued) return;
	devlogFitQueued = true;
	requestAnimationFrame(() => { devlogFitQueued = false; fitAllDevlogMetas(); });
});

// A devlog with no "project" is shown as "Miscellaneous" (and filtered like any other project).
const NO_PROJECT_LABEL = "Miscellaneous";
function devlogProjectLabel(devlog) {
	return String(devlog.project || "").trim() || NO_PROJECT_LABEL;
}

function projectKey(project) {
	return String(project || "").trim().toLowerCase();
}

function setupDevlogFilter(sortedDevlogs, cards) {
	const bar = document.getElementById("devlogs-filter");
	const chipsBox = document.getElementById("devlogs-filter-chips");
	const noMatch = document.getElementById("devlogs-no-match");
	chipsBox.innerHTML = "";

	const projectsSeen = new Map(); // key -> label (first spelling seen)
	sortedDevlogs.forEach(devlog => {
		const label = devlogProjectLabel(devlog);
		const key = projectKey(label);
		if (!projectsSeen.has(key)) projectsSeen.set(key, label);
	});
	// Keep Miscellaneous last.
	const miscKey = projectKey(NO_PROJECT_LABEL);
	if (projectsSeen.has(miscKey)) {
		const misc = projectsSeen.get(miscKey);
		projectsSeen.delete(miscKey);
		projectsSeen.set(miscKey, misc);
	}
	if (!projectsSeen.size) { bar.hidden = true; return; }

	const hiddenProjects = new Set();
	function apply() {
		let visible = 0;
		cards.forEach(card => {
			const hide = hiddenProjects.has(card.dataset.project);
			card.hidden = hide;
			if (!hide) visible++;
		});
		noMatch.hidden = visible > 0;
		fitAllDevlogMetas(); // cards that were hidden have no width until they are shown again
	}

	projectsSeen.forEach((label, key) => {
		const chip = document.createElement("button");
		chip.type = "button";
		chip.className = `tag ${tagClass(label, true)} devlog-filter-chip`;
		chip.textContent = label;
		chip.setAttribute("aria-pressed", "true");
		chip.addEventListener("click", () => {
			const nowHidden = !hiddenProjects.has(key);
			if (nowHidden) hiddenProjects.add(key); else hiddenProjects.delete(key);
			chip.setAttribute("aria-pressed", String(!nowHidden));
			chip.classList.toggle("is-off", nowHidden);
			apply();
		});
		chipsBox.appendChild(chip);
	});
	bar.hidden = false;
	apply();
}

function loadPosts() {
	if (devlogsLoaded) return;
	postsList.innerHTML = "";

	try {
		const sortedDevlogs = [...devlogs];
		sortedDevlogs.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

		if (!sortedDevlogs.length) {
			postsList.innerHTML = '<p class="devlogs-empty">No devlogs yet.</p>';
			devlogsLoaded = true;
			return;
		}

		const cards = [];
		sortedDevlogs.forEach(devlog => {
			const link = document.createElement("button");
			link.type = "button";
			link.className = "devlog-card";
			link.dataset.project = projectKey(devlogProjectLabel(devlog));
			cards.push(link);
			link.addEventListener("click", () => openDevlog(devlog));

			const meta = document.createElement("div");
			meta.className = "devlog-meta";
			const date = document.createElement("time");
			date.className = "devlog-date";
			date.dateTime = devlog.date || "";
			date.textContent = formatDevlogDate(devlog.date);
			meta.appendChild(date);
			meta.appendChild(makeTagChip(devlogProjectLabel(devlog), true));
			devlogTags(devlog).forEach(tag => {
				const chip = makeTagChip(tag);
				chip.classList.add("devlog-meta-tag");
				meta.appendChild(chip);
			});
			devlogMetas.push(meta);

			const title = document.createElement("h3");
			title.className = "devlog-title";
			title.textContent = devlog.title || "Untitled devlog";
			const blurb = document.createElement("p");
			blurb.className = "devlog-blurb";
			blurb.textContent = devlog.blurb || "";
			if (devlog.cover) {
				// Cover image on the Devlogs tab only (not on the project/mod bubbles).
				const cover = document.createElement("img");
				cover.className = "devlog-card-cover";
				cover.src = devlog.cover;
				cover.alt = "";
				cover.loading = "lazy";
				cover.addEventListener("error", () => cover.remove()); // missing image: just skip it
				link.append(cover);
			}
			link.append(meta, title, blurb);
			postsList.appendChild(link);
		});
		setupDevlogFilter(sortedDevlogs, cards);
		devlogsLoaded = true;
		fitAllDevlogMetas();
		if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitAllDevlogMetas);
	} catch (error) {
		console.error("Could not load devlogs:", error);
		postsList.innerHTML = '<p class="devlogs-empty">Devlogs could not be loaded.</p>';
	}
}

// Builds the article body: each blank-line-separated block of `content` becomes a paragraph,
// and each entry of `images` is placed after the paragraph number in its "after" field
// (0 = before the first paragraph; missing or too large = at the end).
function buildDevlogBody(devlog) {
	const body = document.createElement("div");
	body.className = "devlog-content";

	const paragraphs = String(devlog.content || "")
		.split(/\n[ \t]*\n/)
		.map(text => text.replace(/^\n+|\n+$/g, ""))
		.filter(text => text.trim() !== "");

	const images = (Array.isArray(devlog.images) ? devlog.images : [])
		.map(img => (typeof img === "string" ? { src: img } : img))
		.filter(img => img && typeof img.src === "string" && img.src.trim() !== "");
	const placedAt = img => {
		const n = Number(img.after);
		return img.after === undefined || img.after === null || !Number.isFinite(n)
			? paragraphs.length
			: Math.min(Math.max(Math.floor(n), 0), paragraphs.length);
	};

	const addImages = position => {
		images.filter(img => placedAt(img) === position).forEach(img => {
			const figure = document.createElement("figure");
			figure.className = "devlog-figure";
			const image = document.createElement("img");
			image.src = img.src;
			image.alt = img.alt || img.caption || "";
			image.loading = "lazy";
			image.addEventListener("error", () => figure.remove()); // missing image: skip it
			figure.appendChild(image);
			if (img.caption) {
				const caption = document.createElement("figcaption");
				caption.textContent = img.caption;
				figure.appendChild(caption);
			}
			body.appendChild(figure);
		});
	};

	addImages(0);
	paragraphs.forEach((text, i) => {
		const p = document.createElement("p");
		p.textContent = text;
		body.appendChild(p);
		addImages(i + 1);
	});
	return body;
}

let devlogReturnFocus = null;

// The reader fades/slides in and out (see .devlog-reader in the CSS). In simple mode it
// appears and disappears instantly, as before.
const DEVLOG_CLOSE_MS = 260; // a little longer than the CSS close transition (0.22s)
let devlogCloseTimer = null;
let devlogClosing = false;

function closeDevlog() {
	if (devlogReader.hidden || devlogClosing) return;
	document.body.classList.remove("devlog-open");
	if (devlogReturnFocus && document.contains(devlogReturnFocus)) devlogReturnFocus.focus({ preventScroll: true });
	devlogReturnFocus = null;

	const finish = () => {
		devlogReader.hidden = true;
		devlogReader.innerHTML = "";
		devlogClosing = false;
		devlogCloseTimer = null;
	};
	devlogReader.classList.remove("is-visible");
	if (document.body.classList.contains("simple-mode")) {
		finish();
	} else {
		devlogClosing = true;
		devlogCloseTimer = setTimeout(finish, DEVLOG_CLOSE_MS);
	}
}

// Shows one devlog as a full-screen page on top of the site. Works from any tab,
// and closing it (button or Escape) returns to wherever you were.
function openDevlog(devlog) {
	if (devlogCloseTimer) { clearTimeout(devlogCloseTimer); devlogCloseTimer = null; }
	devlogClosing = false;
	if (devlogReader.hidden) devlogReturnFocus = document.activeElement; // remember where to return focus
	devlogReader.hidden = false;
	devlogReader.innerHTML = "";
	document.body.classList.add("devlog-open");

	const topbar = document.createElement("div");
	topbar.className = "devlog-topbar";
	const back = document.createElement("button");
	back.type = "button";
	back.className = "devlog-back";
	back.textContent = "← Back";
	back.addEventListener("click", closeDevlog);
	topbar.appendChild(back);

	const article = document.createElement("article");
	article.className = "devlog-article";
	const header = document.createElement("header");
	header.className = "devlog-article-header";
	const meta = document.createElement("p");
	meta.className = "devlog-date";
	meta.textContent = formatDevlogDate(devlog.date);
	const title = document.createElement("h1");
	title.textContent = devlog.title || "Untitled devlog";
	header.append(meta);
	const articleTags = devlogTags(devlog);
	{
		const tagRow = document.createElement("div");
		tagRow.className = "card-meta";
		tagRow.appendChild(makeTagChip(devlogProjectLabel(devlog), true));
		articleTags.forEach(tag => tagRow.appendChild(makeTagChip(tag)));
		header.append(tagRow);
	}
	header.append(title);
	if (devlog.blurb) {
		const blurb = document.createElement("p");
		blurb.className = "devlog-blurb";
		blurb.textContent = devlog.blurb;
		header.append(blurb);
	}
	if (devlog.cover) {
		const cover = document.createElement("img");
		cover.className = "devlog-cover";
		cover.src = devlog.cover;
		cover.alt = devlog.title ? `${devlog.title} cover` : "Devlog cover";
		header.appendChild(cover);
	}
	const body = buildDevlogBody(devlog);
	article.append(header, body);
	devlogReader.append(topbar, article);
	devlogReader.scrollTop = 0;
	void devlogReader.offsetWidth; // make the browser register the hidden state first, so the fade-in plays
	devlogReader.classList.add("is-visible");
	back.focus({ preventScroll: true });
}

// ---------------------------------------------------------
// Scroll-to-top button — appears after scrolling down a bit,
// smooth-scrolls back to the top on click.
// ---------------------------------------------------------
const scrollTopBtn = document.getElementById("scroll-top-btn");

window.addEventListener("scroll", () => {
	scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
});

scrollTopBtn.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});
