import { BaseComponentProps } from "../model/BaseComponentProps";
import styles from "./views.module.scss";
import variables from "../variables.module.scss";

export default function Hero(props: BaseComponentProps) {
  return (
    <section className={`${styles.view} ${styles.hero}`} {...props}>
      <p>
        Hello! My name is{" "}
        <span style={{ color: variables.primary }}>Joonas</span>. I&apos;m a
        mobile developer.
      </p>
    </section>
  );
}
