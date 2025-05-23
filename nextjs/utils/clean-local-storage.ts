/* * */

const LOCAL_STORAGE_CLEANED_KEY = 'clean';

/* * */

export function cleanLocalStorage() {
	//

	//
	// Check if localStorage is available

	if (typeof window === 'undefined' || !window.localStorage) return;

	//
	// Check if localStorage was already cleaned

	if (localStorage.getItem(LOCAL_STORAGE_CLEANED_KEY) === 'true') return;

	//
	// Get and remove all keys from localStorage

	const keys = Object.keys(localStorage);
	keys.forEach(key => localStorage.removeItem(key));

	//
	// Set a flag to indicate that localStorage has been cleaned

	localStorage.setItem(LOCAL_STORAGE_CLEANED_KEY, 'true');

	//
	// Also, get and expire all cookies

	const cookies = window.document.cookie.split(';');

	cookies.forEach((cookie) => {
		const cookieName = cookie.split('=')[0].trim();
		window.document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	});

	//
}
