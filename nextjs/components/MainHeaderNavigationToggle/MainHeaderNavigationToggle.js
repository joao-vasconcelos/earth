/* * */

import styles from './MainHeaderNavigationToggle.module.css';
import MainHeaderNavigationToggleIconX from '@/components/MainHeaderNavigationToggleIconX/MainHeaderNavigationToggleIconX';
import MainHeaderNavigationToggleIconBars from '@/components/MainHeaderNavigationToggleIconBars/MainHeaderNavigationToggleIconBars';

/* * */

export default function MainHeaderNavigationToggle({ className = '', isOpen = false, onClick = () => {} }) {
  return (
    <div className={`${styles.container} ${className}`} onClick={onClick}>
      {isOpen ? <MainHeaderNavigationToggleIconX /> : <MainHeaderNavigationToggleIconBars />}
    </div>
  );
}
