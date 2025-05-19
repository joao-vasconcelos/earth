/* * */

import JodelCertifications from '@/assets/work/jodel/jodel-certifications.svg';
import JodelDesignation from '@/assets/work/jodel/jodel-designation.svg';
import JodelLogo from '@/assets/work/jodel/jodel-logo.png';
import JodelPositioning from '@/assets/work/jodel/jodel-positioning.svg';
import JodelWebsite1 from '@/assets/work/jodel/jodel-website-1.png';
import JodelWebsite2 from '@/assets/work/jodel/jodel-website-2.png';
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

	const workProjectsDataTranslations = useTranslations('WorkProjectsData.jodel');

	//
	// B. Render components

	return (
		<WorkProjectsTemplate projectData={WorkProjectsData.jodel}>
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
				</Section>
			</Container>

			<Container>
				<Section>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_3', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_4', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
					<Columns cols={3} style={{ marginTop: 50 }}>
						<Image alt="SPG Logo" src={JodelDesignation} width={220} />
						<Image alt="SPG Logo" src={JodelPositioning} width={250} />
						<Image alt="SPG Logo" src={JodelLogo} width={350} />
					</Columns>
				</Section>
			</Container>

			<Container>
				<Section>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_5', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_6', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
					<Image alt="SPG Logo" src={JodelCertifications} style={{ marginTop: 25 }} width={150} />
				</Section>
			</Container>

			<Container>
				<Section style={{ paddingBottom: 30 }}>
					<WorkProjectsTemplateTextSnippet>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_7', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
						<p>
							{workProjectsDataTranslations.rich('paragraphs.paragraph_8', {
								strong: chunks => <strong>{chunks}</strong>,
							})}
						</p>
					</WorkProjectsTemplateTextSnippet>
				</Section>
			</Container>

			<div style={{ background: '#cceff6' }}>
				<FullWidthImage alt="Website1" src={JodelWebsite1} />
			</div>

			<Container>
				<Section>
					<FullWidthImage alt="Website1" src={JodelWebsite2} />
				</Section>
			</Container>
		</WorkProjectsTemplate>
	);

	//
}
