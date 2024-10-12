import IconAndroid from "./icons/IconAndroid";
import IconCloud from "./icons/IconCloud";
import IconCode from "./icons/IconCode";
import IconGym from "./icons/IconGym";
import IconLinkedIn from "./icons/IconLinkedIn";
import IconKotlin from "./icons/IconKotlin";
import IconVideoGame from "./icons/IconVideoGame";
import IconWebhook from "./icons/IconWebhook";
import Project from "./model/Project";
import Skill from "./model/Skill";
import IconInstagram from "./icons/IconInstagram";
import Contact from "./model/Contact";
import IconGitHub from "./icons/IconGitHub";
import IconItchIo from "./icons/IconItchIo";
import IconEmail from "./icons/IconEmail";

export interface AppDataProps {
  name: string;
  shortName: string;
  description: string;
  aboutMeTexts: string[];
  aboutMeSkills: Skill[];
  projects: Project[];
  contacts: Contact[];
}

const AppData: Readonly<AppDataProps> = Object.freeze({
  name: "Joonas Niemi | Mobile developer",
  shortName: "Joonas Niemi",
  description: "Portfolio of Joonas Niemi",
  aboutMeTexts: [
    "I am a dedicated Android Developer with 5 years of experience in designing, developing, and maintaining high-quality Android applications. My expertise lies in creating seamless and user-friendly mobile experiences using the latest technologies like Kotlin.",
    "I have a strong background in Jetpack, Room, Compose, Material 3, and I am always eager to learn and incorporate new trends in mobile development. My commitment to clean, maintainable code and my problem-solving mindset enable me to tackle complex challenges and deliver reliable, scalable solutions.",
  ],
  aboutMeSkills: [
    {
      icon: IconAndroid,
      text: "Android Developer",
    },
    {
      icon: IconKotlin,
      text: "Kotlin Enthusiast",
    },
    {
      icon: IconWebhook,
      text: "API Integration & RESTful Services",
    },
    {
      icon: IconCloud,
      text: "Google Cloud Services",
    },
    {
      icon: IconCode,
      text: "MVVM",
    },
    {
      icon: IconVideoGame,
      text: "Video Games",
    },
    {
      icon: IconGym,
      text: "Gym",
    },
  ],
  projects: [
    {
      name: "Fieldsight",
      description:"Android app for Fieldsight digital excavation and geo-measurement solutions",
      imageUrl: "fieldsight_cropped.webp",
      imageAlt: "Image of Fieldsight app",
      tags: ["Kotlin", "Bluetooth", "Sensors", "AR", "Firebase"],
    },
    {
      name: "Maze Generator & Path Finding",
      description: "Generates a maze using recursive depth-first search and generates a path from top left corner to bottom right corner using A* algorithm",
      imageUrl: "mazeGenerator_cropped.webp",
      imageAlt: "Image of Maze Generator & Path Finding website",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "ClimbStation",
      description: "An Android application for controlling the ClimbStation device",
      imageUrl: "climbStation_cropped.webp",
      imageAlt: "Image of ClimbStation app",
      tags: ["Kotlin"],
    },
    {
      name: "HelsinkiTour",
      description: "An Android application, which shows the user different activities, events and places around Helsinki, which the user might be interested to visit",
      imageUrl: "helsinkiTour_cropped.webp",
      imageAlt: "Image of HelsinkiTour app",
      tags: ["Kotlin", "REST"],
    },
    {
      name: "InMotion",
      description: "iOS project application for our iOS course in Metropolia UAS",
      imageUrl: "inmotion.webp",
      imageAlt: "Image of InMotion app",
      tags: ["iOS", "Swift"],
    },
    {
      name: "Officium",
      description: "Officium is a job marketplace for odd jobs.",
      imageUrl: "officium_cropped.webp",
      imageAlt: "Image of Officium app",
      tags: ["React Native"],
    },
    {
      name: "GamerVibe",
      description: "Instagram for gamers, a place to share in-game images and gamer persona",
      imageUrl: "gamervibe_cropped.webp",
      imageAlt: "Image of GamerVibe website",
      tags: ["React", "Node.js"],
    },
    {
      name: "Jack The Avenger",
      description: "You play as Jack and you try to get revenge on the local mafia for what they did to your father",
      imageUrl: "jacktheavenger.webp",
      imageAlt: "Image of Jack The Avenger game",
      tags: ["Unity", "C#"],
    },
  ],
  contacts: [
    {
      icon: IconLinkedIn,
      url: "https://www.linkedin.com/in/joonasniemi",
    },
    {
      id: "github",
      icon: IconGitHub,
      url: "https://github.com/jopakka",
    },
    {
      icon: IconItchIo,
      url: "https://jopakka.itch.io",
    },
    {
      icon: IconInstagram,
      url: "https://www.instagram.com/joonaasni",
    },
    {
      icon: IconEmail,
      url: "mailto:joonas.niemi9@gmail.com",
    },
  ],
});

export default AppData;
