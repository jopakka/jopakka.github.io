import { BaseComponentProps } from "../model/BaseComponentProps";
import styles from "./views.module.scss";

export default function Projects(props: BaseComponentProps) {
  return (
    <section id="projects" className={`${styles.view} ${styles.projects}`} {...props}>
      <p>Some projects here</p>
    </section>
  );
}
