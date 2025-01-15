import styles from "./index.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <span className={styles["copyright"]}>© 2017</span>
    </footer>
  );
}
