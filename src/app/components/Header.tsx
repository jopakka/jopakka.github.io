"use client";

import useMediaQuery from "../hooks/useMediaQuery";
import useScroll from "../hooks/useScroll";
import useTheme from "../hooks/useTheme";
import IconMenu from "../icons/IconMenu";
import NavigationItem from "../model/NavigationItem";
import styles from "./Header.module.scss";
import variables from "../variables.module.scss";
import { useCallback, useState } from "react";
import IconJoonasFull from "./../icons/IconJoonasFull";

export interface NavBarProps {
  navigationItems: NavigationItem[];
  onMenuClicked: () => void;
}

export default function Header({
  navigationItems,
  onMenuClicked,
}: NavBarProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const scrollY = useScroll();

  const logoOnClick = useCallback(() => {
    window.location.href = "#";
  }, []);

  return (
    <header
      className={`${styles.header} ${
        scrollY > 0 ? styles.filledBackground : ""
      }`}
    >
      <div className={styles.logo}>
        <IconJoonasFull fill={variables.primary} onClick={logoOnClick} />
      </div>
      <nav className={styles.nav}>
        {isSmallScreen ? (
          <FullWidthHeader navigationItems={navigationItems} />
        ) : (
          <CompactHeader menuOnClick={onMenuClicked} />
        )}
      </nav>
    </header>
  );
}

interface FullWidthHeaderProps {
  navigationItems: NavigationItem[];
}

const FullWidthHeader = ({ navigationItems }: FullWidthHeaderProps) => {
  return (
    <>
      {navigationItems.map((item) => (
        <a key={item.id} href={item.link}>
          {item.label}
        </a>
      ))}
    </>
  );
};

interface CompactHeaderProps {
  menuOnClick: () => void;
}

const CompactHeader = ({ menuOnClick }: CompactHeaderProps) => {
  const [color, setColor] = useState(variables.foreground);

  return (
    <IconMenu
      className={styles.navMenu}
      onClick={menuOnClick}
      onMouseEnter={() => setColor(variables.foregroundHover)}
      onMouseLeave={() => setColor(variables.foreground)}
      fill={color}
    />
  );
};
