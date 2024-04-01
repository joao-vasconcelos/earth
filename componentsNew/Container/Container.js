/* * */

import styles from './Container.module.css';

/* * */

export default function Container({ className = '', children }) {
  return (
    <div className={className}>
      <div className={styles.innerWrapper}>{children}</div>
    </div>
  );
}
