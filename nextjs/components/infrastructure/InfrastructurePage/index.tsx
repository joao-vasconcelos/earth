/* * */

import { InfrastructureExamples } from '@/components/infrastructure/InfrastructureExamples';
import { InfrastructureIntro } from '@/components/infrastructure/InfrastructureIntro';

/* * */

export function InfrastructurePage() {
	return (
		<main>
			<InfrastructureIntro />
			<InfrastructureExamples />
		</main>
	);
}
