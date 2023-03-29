const successColor = getComputedStyle(document.documentElement).getPropertyValue(
	"--success"
);
const errorColor = getComputedStyle(document.documentElement).getPropertyValue("--error");

const accentColor = getComputedStyle(document.documentElement).getPropertyValue(
	"--accent"
);
export { successColor, errorColor, accentColor };
