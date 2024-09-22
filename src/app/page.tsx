"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideNavigationDrawer from "./components/SideNavigationDrawer";
import NavigationItem from "./model/NavigationItem";
import styles from "./page.module.scss";
import AboutMe from "./views/AboutMe";
import Contacts from "./views/Contacts";
import Hero from "./views/Hero";
import Projects from "./views/Projects";

const navItems: NavigationItem[] = [
  { id: "aboutMe", label: "About me", link: "#about" },
  { id: "projects", label: "Projects", link: "#projects" },
  { id: "contacts", label: "Contact", link: "#contacts" },
];

export default function Home() {
  const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);

  return (
    <div className={styles.page}>
      <SideNavigationDrawer
          isVisible={isSideDrawerVisible}
          onDismissRequest={() => setIsSideDrawerVisible(false)}
          navigationItems={navItems}
        />
      <Header
        navigationItems={navItems}
        onMenuClicked={() => setIsSideDrawerVisible(true)}
      />
      <section className={styles.main}>
        <Hero />
        <AboutMe />
        <Projects />
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}
