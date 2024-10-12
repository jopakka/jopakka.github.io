import { ReactNode } from "react";
import styles from "./Footer.module.scss";

export interface FooterProps {
  children: ReactNode;
}

export default function Footer({children}: FooterProps) {
  return (
    <footer className={styles.footer}>
      {children}
    </footer>
  );
}
