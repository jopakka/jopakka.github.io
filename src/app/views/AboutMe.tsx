import { ReactElement } from "react";
import { BaseComponentProps } from "../model/BaseComponentProps";
import styles from "./views.module.scss";
import AppData from "../AppData";

export default function AboutMe(props: BaseComponentProps) {
  return (
    <section id="about" className={`${styles.view} ${styles.about}`} {...props}>
      <div className={styles.viewContainer}>
        <h1>About me</h1>
        <div className={styles.aboutMeContainer}>
          <div className={styles.heroIcon}>
            <img src="https://placecats.com/300/200" alt="Cat" />
          </div>
          <div className={styles.heroText}>
            {AppData.aboutMeTexts.map((item, index) => (
              <AboutMeText key={index} text={item} />
            ))}
            <div className={styles.listContainer}>
              {AppData.aboutMeSkills.map((item, index) => (
                <ListItem key={index} text={item.text} icon={<item.icon />} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface AboutMeTextProps {
  text: string;
}

const AboutMeText = ({ text }: AboutMeTextProps) => {
  return <p>{text}</p>;
};

interface AboutMeListItemProps {
  icon: ReactElement;
  text: string;
}

const ListItem = ({ icon, text }: AboutMeListItemProps) => {
  return (
    <>
      {icon}
      <p>{text}</p>
    </>
  );
};
