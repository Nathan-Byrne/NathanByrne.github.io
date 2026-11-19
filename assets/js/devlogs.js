const devlogs = [
	{
		title: "Boardbreakers Devlog (Pre-Reveal #1)",
		date: "2026-11-19",
		project: "Boardbreakers",
		tags: ["Refactoring", 
			"Steamworks", 
			"Online Multiplayer", 
			"Cloud Saves", 
			"Achievements", 
			"Dev Console"
		],
		blurb: "A summary of work completed and expanded on in August, September and the first half of November 2026.",
		cover: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/cover.png",
		images: [{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/multiplayerImage.png", after: 2},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/cloudImage.png", after: 5},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/richPresence1Image.png", after: 8},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/richPresence2Image.png", after: 8},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/achievement1Image.png", after: 12},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/achievement2Image.png", after: 12},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/consoleImage.png", after: 15},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/tabletopImage.png", after: 16}
		],
		content: `This is the first posted, pre-reveal devlog for my own personal game project, "Boardbreakers". This devlog goes through what I've worked on during August, September and the first half of November this year (most of October is excluded due to me taking a break and celebrating my graduation day).

---

__**Refactored Network Logic:**__
The most demanding part of this time was completely refactoring the networking script for multiplayer. The old version was riddled with bugs and was hard to expand on, since this was my first rough attempt at creating a simple networking script. Now the script is structured for future implementations, all functions have clear comments and links explaining what is happening, all known networking bugs have been fixed, and any Steam related functionalities packed with the networking side have been separated and stored in their own scripts.

---

__**Local + Cloud Saves:**__
In the past, the game only supported local saves that only lived on the user's PC but didn't allow for storing your saves in the cloud. This means that playing the game on two different devices will make new, unwanted saves with no supported way of transferring old saves to different PC's.

By using Steam's cloud saves, I can track file locations and scan their contents in order to upload the correct file types that are defined on Steamworks. This results in those uploaded files being saved on Steam and attempting to run the game on different systems will make Steam fetch those saved files to retain your data. Steam also automatically uploads tracked locations when game sessions conclude.

I also expanded the number of profiles a user can use, from 1 to 3 (and an additional 3 development save files to avoid conflicting with legit files). Each profile can store a limited amount of backups which are currently only manually created.

---

__**Refactored Rich Presence:**__
Originally, the rich presence for the project was not implemented well and everything had to be assigned manually each time I wanted to update or change the rich presence. As a short-term addition where I was mainly testing it, this was an acceptable approach, but now that I've refactored the networking script, it was also time to create a solid, more maintainable structure for rich presence.

Uploading a rich presence file to Steamworks requires a .txt file with defined "Status", "Messages" and, in some cases, "Variables". Since you usually only need to deal with the status in code, it's fully possible to contain the full set up of rich presence in functions.

I went ahead and created a manager script for rich presence, and calling a function inside there will do all the updating (if I had a status "#hello" and the message was "Hello User!", all I need to do is make a function along the lines of "useHelloPresence()" and just change the current presence to "#hello"). Any status that required variables would be passed through the functions arguments.

---

__**Side Developers / Playtesters:**__
To provide assistance for future coding / art problems, brainstorming sessions and participating in playtests, I've brought in 4 different people I can trust to make the creation process smoother. I plan to bring more people into the project when playtests start becoming integral for feedback.

---

__**Achievements (Local + Steam):**__
While achievements were working and implemented, they were bare bones and nothing in-game mentioned achievements. There is now a menu dedicated for achievements, which includes if they are unlocked or locked, their unlock conditions, current progress (if the condition isn't a bool), and potential rewards for unlocking an achievement. The current achievements now also support stats (currently ints only) and use the stats created in Steamworks.

Achievements and stats are now tracked individually per profile rather than everything being stored on Steam. The reason for this is to prevent progress on all saves if an achievement was unlocked on a single save. For Steam, bool achievements will be displayed as unlocked if at least one profile has unlocked the achievement, while achievements that use stats (ints) will only display the profile that has the highest saved stat number (all other profiles still make progress in their own save files).

With the inclusion of the new achievement overhaul from Steam, all the display only achievements now live in a developer-only set.

---

__**Internal Dev Console:**__
The game now has a built-in developer console for changing the state of the game without having to edit the Godot project. The developer console also allows us to make these changes on builds uploaded on Steam.

The currently available commands consist of unlocking specific achievements, locking all achievements, displaying all achievement and stat ID sets in Steamworks, resetting stats and modifying stat values. The developer console also allows for the user to target the local saves or Steam for the changes. In the future, this will be the way gameplay will be tested without wasting time by adding new commands. 

With how the project exports are set up, only the developer export is packaged with the developer console, meaning the public exported builds will never include this. The exclusion of the developer console is intended as the developer console is destructive to your saves and should not be used unless you know what it does.

---

__**Further Idea Brainstorming:**__
The core idea of the game is decided, and now it's time to focus on fleshing out content and features that will be present in the final build (playable characters, items, boards, vendors etc.). A "Tabletop Simulator" mod has been created with the intention of testing ideas before implementing them in the Godot project.

---

Nathan`
	},

	{
		title: "Introducing Devlogs",
		date: "2026-11-10",
		project: "Personal Website",
		tags: ["Devlogs"],
		blurb: "Talking about devlogs and how they work.",
		cover: "assets/images/devlogImages/introducingDevlogs/cover.png",
		images: [],
		content: `The most recent addition to my website is devlogs, which allows me to keep track of work I wish to publish and explain on this website. This also keeps me motivated when it comes to developing my own projects and I can now create records of everything I develop and why.

The devlog comes with tags to filter visible logs and can also show up in their own project boxes in different tabs. The devlog tab is a list of all posted devlogs.

Since I don't plan to make this website be "easily visited", the actual implementation of the devlogs is not too complicated since this website is mostly private (currently the only ways are through a link found in my CV or to visit the repo where this project lives. This is because this website only exists to be a portfolio).
The "devlogs.js" file is where every log is created, with multiple fields for each log to define additional information about them that wouldn't be in the body of the log (title, tags, cover etc).

The devlogs are to show continuous growth and to give more life to the website, without adding random features to the website itself.

---
	
Nathan`
	}
];
