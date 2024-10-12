import { useMemo } from "react";
import AppData from "../AppData";
import { BaseComponentProps } from "../model/BaseComponentProps";
import styles from "./views.module.scss";
import { ListItemProps, ListWithIcon } from "../components/ListWithIcon";

export default function Contacts(props: BaseComponentProps) {
  const contactItems: ListItemProps[] = useMemo(() => {
    return AppData.contacts.map((contact) => {
      return {
        text: (
          <a href={contact.url} target="_blank" rel="noopener noreferrer">
            <contact.icon width={40} height={40} />
          </a>
        ),
        icon: <></>,
      };
    });
  }, []);

  return (
    <section
      id="contacts"
      className={`${styles.view} ${styles.contacts}`}
      {...props}
    >
      <div className={styles.viewContainer}>
        <h1>Contacts</h1>
        <p>If you want to contact me or follow me on social media be my quest.</p>
        <ListWithIcon
          items={contactItems}
          itemClassName={styles.contactItem}
          containerClassName={styles.contactList}
        />
      </div>
    </section>
  );
}
