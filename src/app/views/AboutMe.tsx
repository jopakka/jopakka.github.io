/* eslint-disable @next/next/no-img-element */
import { useMemo } from "react";
import AppData from "../AppData";
import { ListItemProps, ListWithIcon } from "../components/ListWithIcon";
import { BaseComponentProps } from "../model/BaseComponentProps";
import styles from "./views.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AboutMe(props: BaseComponentProps) {
  const aboutMeItems: ListItemProps[] = useMemo(() => {
    return AppData.aboutMeSkills.map((skill) => {
      return { text: skill.text, icon: <skill.icon /> } as ListItemProps;
    });
  }, []);

  return (
    <section id="about" className={`${styles.view} ${styles.about}`} {...props}>
      <div className={styles.viewContainer}>
        <h1>About me</h1>
        <div className={styles.aboutMeContainer}>
          <div className={styles.heroIcon}>

          <picture>
            <source media="(max-width: 600px)" srcSet="joonas_200.webp" />
            <source media="(max-width: 899px)" srcSet="joonas_250.webp" />
            <source media="(min-width: 900px)" srcSet="joonas_300.webp" />
            <LazyLoadImage src="joonas_300.webp" alt="Joonas Niemi" width={300} height={300} />
          </picture>
          </div>
          <div className={styles.heroText}>
            {AppData.aboutMeTexts.map((item, index) => (
              <AboutMeText key={index} text={item} />
            ))}
            <ListWithIcon items={aboutMeItems} />
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
