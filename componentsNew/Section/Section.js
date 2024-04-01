/* * */

import styles from './Section.module.css';

/* * */

export default function Section({ children }) {
  return <div className={styles.container}>{children}</div>;
}
