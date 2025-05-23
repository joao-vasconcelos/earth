'use client';

/* * */

export const getCssVariableValue = (variableName: string) => {
	if (typeof window === 'undefined') return undefined;
	return window.getComputedStyle(window.document.documentElement)
		.getPropertyValue(variableName)
		.trim();
};
