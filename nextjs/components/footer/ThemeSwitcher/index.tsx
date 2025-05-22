'use client';

/* * */

import { ThemeSwitcherSwatch } from '@/components/footer/ThemeSwitcherSwatch';
import { AVAILABLE_THEMES, type ThemeType, useThemeContext } from '@/contexts/Theme.context';

import styles from './styles.module.css';

/* * */

interface ThemeSwitcherProps {
	onThemeChange?: (theme: string) => void
}

/* * */

export function ThemeSwitcher({ onThemeChange }: ThemeSwitcherProps) {
	//

	//
	// A. Setup variables

	const themeContext = useThemeContext();

	//
	// B. Handle actions

	const handleThemeChange = (theme: ThemeType) => {
		themeContext.actions.activateTheme(theme);
		onThemeChange?.(theme);
	};

	//
	// C. Render components

	return (
		<div className={styles.container}>
			{AVAILABLE_THEMES.map(item => (
				<ThemeSwitcherSwatch
					key={item._id}
					_id={item._id}
					color={item.primary_color}
					isSelected={themeContext.data.active_theme === item._id}
					onClick={handleThemeChange}
				/>
			))}
		</div>
	);

	//
}
