/* * */

import { AboutMeDescription } from '@/components/me/AboutMeDescription';
import { AboutMeIntro } from '@/components/me/AboutMeIntro';

/* * */

export function AboutMePage() {
	return (
		<main>
			<AboutMeIntro />
			<AboutMeDescription />
		</main>
	);
}
