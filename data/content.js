// Edit this file to update the portfolio. No build step or server required.
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/joonasniemi",
  github: "https://github.com/jopakka",
  itch: "https://jopakka.itch.io/"
};

window.portfolioData = {
  name: "Joonas Niemi",
  hero: {
    label: "JOONAS NIEMI · SOFTWARE DEVELOPER",
    heading: "Thoughtful code.",
    highlight: "Exceptional",
    ending: " apps.",
    description: "I'm Joonas Niemi, a software developer focused on building high-quality mobile experiences with native Android and Kotlin Multiplatform. I also work across the stack with Node.js, Firebase, and React.",
    technologies: ["Kotlin", "Android", "Kotlin Multiplatform", "Node.js", "Firebase", "React"]
  },
  sections: {
    expertise: { label: "01 / WHAT I DO", heading: "Focused on mobile. Comfortable across the stack.", description: "Mobile development is my core strength, with the tools to bring connected products to life from interface to infrastructure." },
    projects: { label: "02 / SELECTED WORK", heading: "Things I've built.", description: "A selection of my projects, from mobile applications to web experiences and games." },
    stack: { label: "03 / TOOLKIT", heading: "Technologies I work with." },
    about: { label: "04 / A BIT ABOUT ME", heading: "Building software with purpose." }
  },
  expertise: [
    { icon: "android", title: "Native Android Development", description: "Building reliable, performant Android applications using Kotlin, Jetpack Compose, modern architecture, and Android best practices.", tags: ["Kotlin", "Jetpack Compose", "Coroutines", "Android SDK"] },
    { icon: "layers", title: "Kotlin Multiplatform", description: "Sharing business logic across platforms while maintaining high-quality native experiences.", tags: ["Kotlin Multiplatform", "Compose Multiplatform", "Shared Architecture"] },
    { icon: "code", title: "Full-Stack Development", description: "Developing supporting web applications, APIs, and cloud-backed services for modern products.", tags: ["Node.js", "React", "Firebase", "REST APIs"] }
  ],
  // Imported from https://jopakka.github.io/ in the original order.
  // The published portfolio has no individual project URLs. Add one to show a link.
  // Optional image: "data/images/my-project.webp"; imageAlt describes the screenshot.
  projects: [
    { title: "Fieldsight Survey", description: "Android app for Fieldsight digital excavation and geo-measurement solutions", tags: ["Kotlin", "Bluetooth", "Sensors", "AR", "Firebase"], preview: "android", image: "data/images/fieldsight_cropped.webp", imageAlt: "Image of Fieldsight app", url: "" },
    { title: "Maze Generator & Path Finding", description: "Generates a maze using recursive depth-first search and generates a path from top left corner to bottom right corner using A* algorithm", tags: ["HTML", "CSS", "JavaScript"], preview: "web", image: "data/images/mazeGenerator_cropped.webp", imageAlt: "Image of Maze Generator & Path Finding website", url: "" },
    { title: "ClimbStation", description: "An Android application for controlling the ClimbStation device", tags: ["Kotlin"], preview: "android", image: "data/images/climbStation_cropped.webp", imageAlt: "Image of ClimbStation app", url: "" },
    { title: "HelsinkiTour", description: "An Android application, which shows the user different activities, events and places around Helsinki, which the user might be interested to visit", tags: ["Kotlin", "REST"], preview: "android", image: "data/images/helsinkiTour_cropped.webp", imageAlt: "Image of HelsinkiTour app", url: "" },
    { title: "InMotion", description: "iOS project application for our iOS course in Metropolia UAS", tags: ["iOS", "Swift"], preview: "multiplatform", image: "data/images/inmotion.webp", imageAlt: "Image of InMotion app", url: "" },
    { title: "Officium", description: "Officium is a job marketplace for odd jobs.", tags: ["React Native"], preview: "multiplatform", image: "data/images/officium_cropped.webp", imageAlt: "Image of Officium app", url: "" },
    { title: "GamerVibe", description: "Instagram for gamers, a place to share in-game images and gamer persona", tags: ["React", "Node.js"], preview: "web", image: "data/images/gamervibe_cropped.webp", imageAlt: "Image of GamerVibe website", url: "" },
    { title: "Jack The Avenger", description: "You play as Jack and you try to get revenge on the local mafia for what they did to your father", tags: ["Unity", "C#"], preview: "web", image: "data/images/jacktheavenger.webp", imageAlt: "Image of Jack The Avenger game", url: "" }
  ],
  projectNote: "A few of my projects across mobile, web, and game development.",
  toolkit: [
    { title: "Mobile", tags: ["Kotlin", "Android SDK", "Jetpack Compose", "Kotlin Multiplatform", "Compose Multiplatform"] },
    { title: "Backend & Cloud", tags: ["Node.js", "Firebase", "REST APIs"] },
    { title: "Frontend", tags: ["React", "TypeScript", "JavaScript"] }
  ],
  about: [
    "I'm Joonas Niemi, a software developer with a primary focus on native Android and Kotlin Multiplatform development.",
    "I enjoy turning complex ideas into straightforward, thoughtfully designed software. While mobile development is my main area of expertise, I also have experience developing backend services with Node.js and Firebase, as well as web applications with React.",
    "I care about clean architecture, maintainable code, performance, and creating products that feel good to use."
  ],
  socials: socialLinks
};
