import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { darkColors } from "../src/dark.ts";
import { lightColors } from "../src/light.ts";
import tsupConfig from "../tsup.config.ts";

const outputDir = tsupConfig.outDir;

// Ensure output directory exists
mkdirSync(outputDir, { recursive: true });

function toCssCasing(str) {
	return str
		.replace(/([a-z])(\d)/, "$1-$2")
		.replace(/([A-Z])/g, "-$1")
		.toLowerCase();
}

function generateCssProperties(colors) {
	return Object.entries(colors)
		.map(([name, value]) => {
			const cssName = toCssCasing(name);
			return `  --${cssName}: ${value};`;
		})
		.join("\n");
}

function generateCssFile(colors, selector) {
	const cssProperties = Object.entries(colors)
		.map(([category, scale]) => {
			const properties = generateCssProperties(scale);
			return `/* ${category} */\n${properties}`;
		})
		.join("\n\n");

	return `${selector} {\n${cssProperties}\n}`;
}

// Generate CSS files
const lightCss = generateCssFile(lightColors, ":root, .light, .light-theme");
const darkCss = generateCssFile(darkColors, ".dark, .dark-theme");

// Write CSS files
writeFileSync(join(outputDir, "light.css"), lightCss);
writeFileSync(join(outputDir, "dark.css"), darkCss);

// Generate Tailwind configuration
const tailwindColors = {
	light: lightColors,
	dark: darkColors,
};

// Write Tailwind configuration
writeFileSync(
	join(outputDir, "tailwind-colors.js"),
	`export default ${JSON.stringify(tailwindColors, null, 2)};`,
);

// Write TypeScript types for Tailwind colors
const typeDefinition = `export interface TailwindColors {
	light: ${Object.keys(lightColors)
		.map(
			(category) =>
				`${category}: { ${Object.keys(lightColors[category])
					.map((shade) => `${shade}: string`)
					.join("; ")} }`,
		)
		.join(";\n  ")}
	dark: ${Object.keys(darkColors)
		.map(
			(category) =>
				`${category}: { ${Object.keys(darkColors[category])
					.map((shade) => `${shade}: string`)
					.join("; ")} }`,
		)
		.join(";\n  ")}
}`;

writeFileSync(join(outputDir, "tailwind-colors.d.ts"), typeDefinition);
