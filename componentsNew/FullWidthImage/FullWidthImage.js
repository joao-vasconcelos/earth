/* * */

import Image from 'next/image';
import styles from './FullWidthImage.module.css';

/* * */

export default function FullWidthImage({ src, alt, withShadow = false, withRoundEdges = false, withFalseWidth = false }) {
  return <Image className={`${styles.image} ${withShadow && styles.withShadow} ${withRoundEdges && styles.withRoundEdges} ${withFalseWidth && styles.withFalseWidth}`} src={src} alt={alt} priority />;
}
