/* * */

import Image from 'next/image';

import styles from './FullWidthImage.module.css';

/* * */

export default function FullWidthImage({ alt, src, withFalseWidth = false, withRoundEdges = false, withShadow = false }) {
	return <Image alt={alt} className={`${styles.image} ${withShadow && styles.withShadow} ${withRoundEdges && styles.withRoundEdges} ${withFalseWidth && styles.withFalseWidth}`} src={src} priority />;
}
