'use client';

/* * */

import { createContext, type PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

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

export type ThemeType = (typeof AVAILABLE_THEMES)[number]['_id'];

interface ThemeContextState {
	actions: {
		activateTheme: (theme: ThemeType) => void
	}
	data: {
		active_theme: ThemeType | undefined
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

	const [activeTheme, setActiveTheme] = useState<ThemeType>();

	//
	// B. Handle actions

	useEffect(() => {
		if (!activeTheme) { // Set random theme on first load
			const randomTheme = AVAILABLE_THEMES[Math.floor(Math.random() * AVAILABLE_THEMES.length)]._id;
			setActiveTheme(randomTheme);
		}
	}, [activeTheme]);

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
