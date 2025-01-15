import styles from "./index.module.scss";

export default function Search() {
  return (
    <div className={styles["search-container"]}>
      <input className={styles["search-input"]} placeholder="搜索" />
      <button className={styles["search-button"]} aria-label="search">
        <i data-feather="search" className={styles["search-button-icon"]}></i>
      </button>
    </div>
  );
}
