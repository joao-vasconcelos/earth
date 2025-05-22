'use client';

/* * */

import { IconDroplet, IconDropletFilled, IconMeteor, IconMeteorFilled, IconPlayerRecord, IconPlayerRecordFilled, IconUfo, IconUfoFilled } from '@tabler/icons-react';

import styles from './styles.module.css';

/* * */

interface Props {
	_id: string
	color: string
	isSelected: boolean
	onClick: (id: string) => void
}

/* * */

export function ThemeSwitcherSwatch({ _id, color, isSelected, onClick }: Props) {
	return (
		<div
			className={styles.swatch}
			data-selected={isSelected}
			onClick={() => onClick(_id)}
			style={{ color: color }}
		>

			{_id === 'planet' && !isSelected && <IconPlayerRecord size={30} />}
			{_id === 'planet' && isSelected && <IconPlayerRecordFilled size={30} />}

			{_id === 'water' && !isSelected && <IconDroplet size={30} />}
			{_id === 'water' && isSelected && <IconDropletFilled size={30} />}

			{_id === 'life' && !isSelected && <IconUfo size={30} />}
			{_id === 'life' && isSelected && <IconUfoFilled size={30} />}

			{_id === 'comet' && !isSelected && <IconMeteor size={30} />}
			{_id === 'comet' && isSelected && <IconMeteorFilled size={30} />}

		</div>
	);
}
