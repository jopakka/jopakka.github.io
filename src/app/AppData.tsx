import IconAndroid from "./icons/IconAndroid";
import IconCloud from "./icons/IconCloud";
import IconCode from "./icons/IconCode";
import IconGym from "./icons/IconGym";
import IconKotlin from "./icons/IconKotlin";
import IconVideoGame from "./icons/IconVideoGame";
import IconWebhook from "./icons/IconWebhook";

const AppData = Object.freeze({
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
  ]
})

export default AppData;