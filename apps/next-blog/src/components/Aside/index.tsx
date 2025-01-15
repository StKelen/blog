import Search from "@/components/Search";
import styles from './index.module.scss';

export default function Aside() {
  return (
    <aside className={styles['aside']}>
      <Search />
    </aside>
  );
}
