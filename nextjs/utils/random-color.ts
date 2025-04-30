// Random Color
// Source: https://stackoverflow.com/a/13594375/12671333

export function randomColor() {
	return '#' + (Math.random().toString(16) + '00000').slice(2, 8);
}
