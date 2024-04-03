/* * */

import styles from './Container.module.css';

/* * */

export default function Container({ className = '', style = {}, children }) {
  return (
    <div className={className} style={style}>
      <div className={styles.innerWrapper}>{children}</div>
    </div>
  );
}
