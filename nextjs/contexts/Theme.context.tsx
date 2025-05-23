'use client';

/* * */

import { useLocalStorage } from '@mantine/hooks';
import { createContext, type PropsWithChildren, useContext, useEffect, useMemo } from 'react';

/* * */

import '@/styles/styles.css';

/* * */

import '@/styles/themes/planet.theme.css';
import '@/styles/themes/water.theme.css';
import '@/styles/themes/life.theme.css';
import '@/styles/themes/comet.theme.css';

/* * */

export const AVAILABLE_THEMES = [
	{ _id: 'planet', primary_color: 'var(--theme-planet-accent)' },
	{ _id: 'water', primary_color: 'var(--theme-water-accent)' },
	{ _id: 'life', primary_color: 'var(--theme-life-accent)' },
	{ _id: 'comet', primary_color: 'var(--theme-comet-accent)' },
] as const;

/* * */

const LOCALE_STORAGE_KEY = 'theme';

/* * */

export type ThemeType = (typeof AVAILABLE_THEMES)[number]['_id'];

interface ThemeContextState {
	actions: {
		activateTheme: (theme: ThemeType) => void
	}
	data: {
		active_theme: ThemeType
	}
}

/* * */

const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

export function useThemeContext() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useThemeContext must be used within a ThemeContextProvider');
	}
	return context;
}

/* * */

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
	//

	//
	// A. Setup variables

	const [activeTheme, setActiveTheme] = useLocalStorage<ThemeType>({ defaultValue: AVAILABLE_THEMES[2]._id, key: LOCALE_STORAGE_KEY });

	//
	// B. Handle actions

	useEffect(() => {
		if (typeof window === 'undefined' || !window.document || !activeTheme) return;
		window.document.documentElement.setAttribute('data-theme', activeTheme);
	}, [activeTheme]);

	const handleActivateTheme = (theme: ThemeType) => {
		setActiveTheme(theme);
	};

	//
	// C. Define context value

	const contextValue: ThemeContextState = useMemo(() => ({
		actions: {
			activateTheme: handleActivateTheme,
		},
		data: {
			active_theme: activeTheme,
		},
	}), [activeTheme]);

	//
	// D. Render components

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);

	//
};
