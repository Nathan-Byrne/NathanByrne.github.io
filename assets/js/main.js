// Additional Features to Include: Fix Mobile Display, Easter Egg (???)

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
		description: "Programming a project that is planned to be released on Steam in the future. The game's premise is a 4 player, 2.5D board game where each player moves and battles each other for control of the board, obtain items, collect money to eventually win the entire game. Players can create custom tailored builds using items in order to adapt to the ever increasing need to survive against their opponents."
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
	if (e.target.closest(".hover-link, .hover-screenshots")) return; // let real links + screenshot clicks work without toggling the card
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
// "Last updated" footer text — driven by document.lastModified,
// so it stays accurate automatically as you push new commits,
// no manual date-editing required.
// ---------------------------------------------------------
const lastUpdatedEl = document.getElementById("last-updated");
if (lastUpdatedEl) {
	const modifiedDate = new Date(document.lastModified);
	const formatted = modifiedDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	lastUpdatedEl.textContent = `Last updated ${formatted}`;
}
