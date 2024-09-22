import { BaseComponentProps } from "../model/BaseComponentProps";
import styles from "./views.module.scss";

export default function Contacts(props: BaseComponentProps) {
  return (
    <section id="contacts" className={`${styles.view} ${styles.contacts}`} {...props}>
      <p>Contacts</p>
    </section>
  );
}
