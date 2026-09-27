    // Add your projects here. Each project should be an object with the following properties:
        // title: The title of the project
        // description: A brief description of the project
        // technologies: An array of technologies used in the project
        // liveUrl: The URL to the live version of the project
        // githubUrl: The URL to the GitHub repository of the project
        // previewType: The type of preview to display (e.g., "quote", "battleship", "weather", "todo")
        // featured: A boolean indicating whether the project should be featured on the homepage

export const projects = [
  {
    title: "QuoteHQ",

    description:
      "A quote management and comparison tool for construction projects.",

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Webpack",
    ],

    liveUrl: "#",

    githubUrl: "#",

    previewType: "quote",

    // change featured to false if you want to hide this project from the homepage
    // change featured to true if you want to show this project on the homepage and projects page    
    featured: true,
  },

  {
    title: "Battleship",

    description:
      "A browser-based Battleship game with a computer opponent and persistent score tracking.",

    technologies: [
      "JavaScript",
      "Jest",
      "HTML",
      "CSS",
    ],

    liveUrl:
      "YOUR-BATTLESHIP-LIVE-LINK",

    githubUrl:
      "https://github.com/l4hmmski/odin_battleship",

    previewType: "battleship",

    featured: true,
  },

  {
    title: "Weather App",

    description:
      "A responsive weather application using live location and forecast data.",

    technologies: [
      "JavaScript",
      "API",
      "HTML",
      "CSS",
    ],

    liveUrl:
      "YOUR-WEATHER-APP-LIVE-LINK",

    githubUrl: "#",

    previewType: "weather",

    featured: true,
  },

  {
    title: "Todo List",

    description:
      "A productivity application with projects, priorities and persistent browser storage.",

    technologies: [
      "JavaScript",
      "localStorage",
      "HTML",
      "CSS",
    ],

    liveUrl:
      "YOUR-TODO-LIST-LIVE-LINK",

    githubUrl: "#",

    previewType: "todo",

    featured: true,
  },
];