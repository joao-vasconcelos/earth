/* * */

import WorkProjectsTemplateIntro from '@/components/WorkProjectsTemplateIntro/WorkProjectsTemplateIntro';

/* * */

export default function WorkProjectsTemplate({ children, projectData }) {
	return (
		<main>
			<WorkProjectsTemplateIntro projectData={projectData} />
			{children}
		</main>
	);
}
