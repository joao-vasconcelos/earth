/* * */

import SPGFacebook1 from '@/assets/work/spg/spg-facebook-1.png';
import SPGInstagram1 from '@/assets/work/spg/spg-instagram-1.png';
import SPGLinkedIn1 from '@/assets/work/spg/spg-linkedin-1.png';
import SPGLogo from '@/assets/work/spg/spg-logo.svg';
import SPGNewsletter1 from '@/assets/work/spg/spg-newsletter-1.png';
import SPGSeccao1 from '@/assets/work/spg/spg-seccao-1.svg';
import SPGSeccao2 from '@/assets/work/spg/spg-seccao-2.svg';
import SPGSeccao3 from '@/assets/work/spg/spg-seccao-3.svg';
import SPGSeccao4 from '@/assets/work/spg/spg-seccao-4.svg';
import SPGSeccao5 from '@/assets/work/spg/spg-seccao-5.svg';
import SPGWebsite1 from '@/assets/work/spg/spg-website-1.png';
import SPGWebsite2 from '@/assets/work/spg/spg-website-2.png';
import SPGWebsite3 from '@/assets/work/spg/spg-website-3.png';
import SPGWebsite4 from '@/assets/work/spg/spg-website-4.png';
import SPGWebsite5 from '@/assets/work/spg/spg-website-5.png';
import SPGWebsite6 from '@/assets/work/spg/spg-website-6.png';
import Columns from '@/components/Columns/Columns';
import { Container } from '@/components/Container';
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage';
import { Section } from '@/components/Section';
import WorkProjectsTemplate from '@/components/WorkProjectsTemplate/WorkProjectsTemplate';
import WorkProjectsTemplateTextSnippet from '@/components/WorkProjectsTemplateTextSnippet/WorkProjectsTemplateTextSnippet';
import WorkProjectsData from '@/data/WorkProjects.json';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

/* * */

export default function Page() {
	//

	//
	// A. Setup variables

	const workProjectsDataTranslations = useTranslations('WorkProjectsData.spg');

	//
	// B. Render components

	return (
		<WorkProjectsTemplate projectData={WorkProjectsData.spg}>
			<Container>
				<Section>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_1', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_2', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
					<Image alt="SPG Logo" src={SPGLogo} style={{ marginTop: 25 }} width={300} />
				</Section>
			</Container>

			<Container style={{ backgroundColor: 'var(--system-background)' }}>
				<Section>
					<Columns cols={5} style={{ gap: 100 }}>
						<FullWidthImage alt="SPG Logo" src={SPGSeccao1} />
						<FullWidthImage alt="SPG Logo" src={SPGSeccao2} />
						<FullWidthImage alt="SPG Logo" src={SPGSeccao3} />
						<FullWidthImage alt="SPG Logo" src={SPGSeccao4} />
						<FullWidthImage alt="SPG Logo" src={SPGSeccao5} />
					</Columns>
					<Columns cols={2}>
						<div />
						<WorkProjectsTemplateTextSnippet>
							<p>
								{workProjectsDataTranslations.rich('paragraphs.paragraph_3', {
									strong: chunks => <strong>{chunks}</strong>,
								})}
							</p>
						</WorkProjectsTemplateTextSnippet>
					</Columns>
				</Section>
			</Container>

			<Container>
				<Section>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_4', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_5', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
					<FullWidthImage alt="Website1" src={SPGWebsite1} withFalseWidth />
					<FullWidthImage alt="Website1" src={SPGWebsite2} withFalseWidth />
				</Section>
			</Container>

			<Container>
				<Section>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_6', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_7', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
					<FullWidthImage alt="Website1" src={SPGWebsite3} withFalseWidth />
				</Section>
			</Container>

			<Container style={{ backgroundColor: 'var(--system-background)' }}>
				<Section>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_8', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_9', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
					<FullWidthImage alt="Website1" src={SPGWebsite4} withFalseWidth />
					<FullWidthImage alt="Website1" src={SPGWebsite5} withFalseWidth />
					<FullWidthImage alt="Website1" src={SPGWebsite6} withFalseWidth />
				</Section>
			</Container>

			<Container>
				<Section>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_10', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_11', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
					<Columns cols={2}>
						<FullWidthImage alt="Website1" src={SPGFacebook1} />
						<FullWidthImage alt="Website1" src={SPGLinkedIn1} />
						<FullWidthImage alt="Website1" src={SPGNewsletter1} />
						<FullWidthImage alt="Website1" src={SPGInstagram1} />
					</Columns>
				</Section>
			</Container>
		</WorkProjectsTemplate>
	);

	//
}
