/* * */

import styles from './MainHeaderNavigationToggle.module.css';
import IconX from 'nextjs/components/icons/IconX';
import IconHamburger from 'nextjs/components/icons/IconHamburger';

/* * */

export default function MainHeaderNavigationToggle({ className = '', isOpen = false, onClick = () => {} }) {
  return (
    <div className={`${styles.container} ${className}`} onClick={onClick}>
      {isOpen ? <IconX /> : <IconHamburger />}
    </div>
  );
}
