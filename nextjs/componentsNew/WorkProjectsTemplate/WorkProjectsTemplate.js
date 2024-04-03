/* * */

import WorkProjectsTemplateIntro from 'nextjs/componentsNew/WorkProjectsTemplateIntro/WorkProjectsTemplateIntro';

/* * */

export default function WorkProjectsTemplate({ projectData, children }) {
  return (
    <main>
      <WorkProjectsTemplateIntro projectData={projectData} />
      {children}
    </main>
  );
}
