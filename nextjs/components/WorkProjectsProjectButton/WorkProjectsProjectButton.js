/* * */

import { Container } from '@/components/Container';
import WorkProjectsProjectTag from '@/components/WorkProjectsProjectTag/WorkProjectsProjectTag';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import styles from './WorkProjectsProjectButton.module.css';

/* * */

export default function WorkProjectsProjectButton({ projectData }) {
	//

	//
	// A. Setup variables

	const workProjectsDataTranslations = useTranslations('WorkProjectsData');

	//
	// B. Render components

	return (
		<Link className={styles.container} href={`/work/${projectData.id}`} style={{ '--accent-color': projectData.accent_color, '--accent-text-color': projectData.accent_text_color }}>
			<Container>
				<div className={styles.infoWrapper}>
					<h3 className={styles.title}>{workProjectsDataTranslations(`${projectData.id}.title`)}</h3>
					{projectData.tags.length > 0 && (
						<div className={styles.tagsList}>
							{projectData.tags.map(item => (
								<WorkProjectsProjectTag key={item} tagId={item} />
							))}
						</div>
					)}
				</div>
			</Container>
		</Link>
	);

	//
}
