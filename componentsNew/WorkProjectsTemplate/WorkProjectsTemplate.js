/* * */

import WorkProjectsTemplateIntro from '@/components/WorkProjectsTemplateIntro/WorkProjectsTemplateIntro';

/* * */

export default function WorkProjectsTemplate({ projectData, children }) {
  return (
    <main>
      <WorkProjectsTemplateIntro projectData={projectData} />
      {children}
    </main>
  );
}
