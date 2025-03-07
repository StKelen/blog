import Search from '@/components/common/Search';
import styles from './index.module.scss';

export default function Aside() {
  return (
    <aside className={styles['aside']}>
      <Search />
    </aside>
  );
}
