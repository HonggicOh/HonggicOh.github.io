export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I’m Hong Gic and currently looking for a computer science job in Australia. I graduate in Master of Computing at ANU and I did my undergraduate study in Mathematics and business administration at Kyonggi University in Korea.",
				"I'm a person who has an interest in data and electric car and curious about future technology. I have 3 years working experience in semiconductor and display manufacturing machine field as a Technical Sales and Quality Assurance manager.",
				"Lastly, I love to play billiards, computer games, and watch a movie or sports games with beer.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, feel free to send me an email at cjswoghdwlr@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Python(fluent)",
			color: "1",
			percentage: "80",
		},
		{
			title: "Backend",
			skillName: "SQL(fluent)",
			color: "6",
			percentage: "80",
		},
		{
			title: "Languages",
			skillName: "Java(intermediate)",
			color: "2",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub, Trello(intermediate)",
			color: "3",
			percentage: "70",
		},
		{
			title: "Analysis",
			skillName: "R, Visualisation(intermediate)",
			color: "5",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "Agri modelling",
				image: "images/agri.png",
				summary:
					"Predict future Australian crop production and price from various factors such as weather, global crop trade, etc. My main role in this project was data collection, cleaning, mining, and aggregation for prediction algorithm.",
				preview: "http://13.211.157.235:5000/home/",
				techStack: [
					"Excel",
					"Python",
					"R",
					"Web search",
				],
			},
			{
				projectName: "Team Kosy",
				image: "images/kosy.png",
				summary:
					"Find out the precise correlation between the number of electric cars and power stations. My main role was data collection, cleaning, aggregation, mining, and project management",
				preview: "https://teamkosy.pythonanywhere.com/",
				techStack: ["Excel", "Python", "R","Crawling"],
			},
		],
		software: [
			{
				projectName: "AZUL",
				image: "images/AZUL.png",
				summary:
					"Implemented board game Azul based on OOP. Enable player to play a game with computer or another player. My main role was Front-end(full) and Back-end(partial)",
				preview:
					"https://github.com/HonggicOh/AZUL",
				techStack: ["Java", "JavaFx"],
			},
		],
		android: [
			{
				projectName: "Route42",
				image: "images/route.png",
				summary:
					"Social Network Service app with route tracking service.My main role was Search implementation, Grammar, and Unit and UI Testing",
				preview: "https://github.com/HonggicOh/Route42",
				techStack: ["AndroidStudio", "Espresso"],
			},
		],
		Analysis: [
			{
				projectName: "SNS energy keyword analysis(Ongoing)",
				image: "images/tweeter.png",
				summary:
					"Collect and analyse Australian's idea about eco-friendly energy on Tweeter.",
				preview: "will update soon",
				techStack: ["Python","OpenAPI"],
			},
			{
				projectName: "Questionnaire Analysis",
				image: "images/QA.png",
				summary:
					"Analysing Australians' response about life, COVID-19, vaccine, mental health, employment, income, behaviour from Life in Australia Wave41 August 2020.",
				preview:
					"https://drive.google.com/file/d/1rbl3i3FSvYA0VhkNP0lJEO_U-XdizuJS/view?usp=share_link",
				techStack: ["Python", "R"],
			},
		],
	},
	experience: [
		{
			title: "DooHoINS Co., Ltd",
			duration: "Jan 2018 - Dec 2019",
			subtitle: "Quality Assurance Manager",
			details: [
				"Assessed materials and products for conformance with quality control requirements and production specifications",
				"Published monthly Non-Conformance Reports(NCR) to provide statistical data about issues and solutions.",
				"Established Standard Operating Procedure (SOP)",
				"Client Audit preparation",
			],
			tags: [
				"SOP",
				"NCR",
				"Schedule management",
				"Analysis",
				"Client response"
			],
			icon: "bar-chart",
		},
		{
			title: "DooHoINS Co., Ltd",
			duration: "Jan 2016 - Dec 2018",
			subtitle: "Technical Sales Senior staff",
			details: [
                		"Conducted comparative analysis of products (material type, size, predicted work hour, work type and price) to finalise proper quotes for clients.",
				"Presented sales report for business development planning, and analysis for product trends.",
				"Managed inventory data to adjust, evaluate and forecast demand.",
				"Ensured successful product delivery by coordinating with the manufacturing, delivery team and clients.",
			],
			tags: [
				"CAD",
				"Quote",
				"Inventory management",
				"Sales report",
				"Price analysis",
				"Client support",
			],
			icon: "group",
		},
	],
	education: [
		{
			title: "Master of computing",
			duration: "",
			subtitle: "Australian National University, Canberra",
			details: [
				"Data Science specialisation.",
				"GPA of 5.56 out of 7.0.",
				"Received over 80% marks for most coding assignments.",
			],
			tags: [
				"Data Mining",
				"Data wrangling",
				"Relational Database",
				"Document analysis",
				"Software construction",
				"Structured programming",
				"Artificial Intelligence"
			],
			icon: "graduation-cap",
		},
		{
			title: "Bachelor of Mathematics",
			duration: "",
			subtitle: "Kyonggi University, Suwon, Republic of Korea",
			details: [
				"GPA of 3.6 out of 4.5.",
				"Double major in Business Administration.",
			],
			tags: ["Analytics", "Cryptography", "Algebra","Business administration",],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/HonggicOh",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/honggic-oh-46b909242/",
				},
				{
					text: "Facebook",
					link: "https://www.facebook.com/profile.php?id=100004629722861",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"&copy; No Copyrights. Feel free to use this template."
			],
		},
	],
};
