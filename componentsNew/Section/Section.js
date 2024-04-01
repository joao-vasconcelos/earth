/* * */

import styles from './Section.module.css';

/* * */

export default function Section({ children, style }) {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
}
