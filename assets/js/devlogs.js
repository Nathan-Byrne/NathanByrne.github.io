const devlogs = [
	{
		title: "Boardbreakers Devlog (Pre-Reveal #1)",
		date: "2026-11-XX",
		project: "Boardbreakers",
		tags: ["Refactoring", 
			"Steamworks", 
			"Online Multiplayer", 
			"Cloud Saves", 
			"Achievements", 
			"Dev Console"
		],
		blurb: "(Not Completed) A summary of work completed and expanded on in August and September 2026.",
		cover: "",
		images: [{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/placeholder.png", after: 2}, 
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/placeholder.png", after: 5},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/placeholder.png", after: 7},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/placeholder.png", after: 8},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/placeholder.png", after: 9},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/placeholder.png", after: 10},
			{src: "assets/images/devlogImages/boardbreakersDevlogPreReveal1/placeholder.png", after: 11}
		],
		content: `This the is first posted, pre-reveal devlog for my own personal game project "Boardbreakers". This devlog goes through what I've worked on during August and Setember this year (most of October is excluded due to me taking a break and celebrating my graduation day).

Refactored Network Logic:
etc.

Local + Cloud Saves:
In the past the game only supported local saves that only lived on the users PC but didn't allow for storing your saves on the cloud. This means that playing the game on two different devices will make new, unwanted saves with no supported way of transfering old saves to different PC's. 

By using Steams cloud saves, I can track file locations and scan their contents in order to upload correct file types that are defined on Steamworks. This results in those uploaded files being saved on Steam and attempting to run the game on different systems will make Steam fetch those saved files to retain your data. Steam also automatically uploads tracked locations when game sessions conclude.

I also expanded the number of profiles a user can use, from 1 to 3 (and an additional 3 development save files to avoid conflicting with legit files).

Refactored Rich Presence:
Originally, the rich presence for the project was not implemented well and everything had to be assigned manually each time I wanted to update or change the rich presence. As a short term addition where I was mainly testing it, this was an acceptable approach but now that I've refactored the networking script, it was also time to create a solid, more maintainable structure for rich presence.

Uploading a rich presence files to Steamworks requires a .txt file with defined "Status", "Messages" and in some cases "Variables". Since you usually only need to deal with the status in code, it's fully possible to contain the full set up of rich presence in functions.
I went ahead and created a manager script for rich presence, and now calling a function inside of there will do all of the updating (if I had a status "#hello" and the message was "Hello User!", all I need to do is make a function along the lines of "useHelloPresence()" and just change the current presence to "#hello"). Any status that required variables would be passed through the functions arguments.

"Team Members":
etc.

Achievements (Local + Steam):
etc.

Internal Dev Console:
etc.

Further Idea Brainstorming:
etc.

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
	
Nathan`
	}
];
