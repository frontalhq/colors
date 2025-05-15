import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		include: ["tests/**/*.test.ts"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: ["node_modules/", "dist/"],
		},
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"@tests": resolve(__dirname, "./tests"),
		},
	},
});
