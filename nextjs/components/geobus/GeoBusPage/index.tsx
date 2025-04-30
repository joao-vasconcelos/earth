/* * */

import { GeoBusIntro } from '@/components/geobus/GeoBusIntro';
import { GeoBusPresentation } from '@/components/geobus/GeoBusPresentation';
import { GeoBusScreenshots } from '@/components/geobus/GeoBusScreenshots';

/* * */

export function GeoBusPage() {
	return (
		<main>
			<GeoBusIntro />
			<GeoBusPresentation />
			<GeoBusScreenshots />
		</main>
	);
}
