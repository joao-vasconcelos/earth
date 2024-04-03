/* * */

import styles from './MainHeaderNavigationToggle.module.css';
import IconX from '@/oldComponents/icons/IconX';
import IconHamburger from '@/oldComponents/icons/IconHamburger';

/* * */

export default function MainHeaderNavigationToggle({ className = '', isOpen = false, onClick = () => {} }) {
  return (
    <div className={`${styles.container} ${className}`} onClick={onClick}>
      {isOpen ? <IconX /> : <IconHamburger />}
    </div>
  );
}
