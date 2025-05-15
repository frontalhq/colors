import { darkColors } from "@/dark";
import type { ColorPalette } from "@/types";
import { describe, expect, it } from "vitest";

describe("Dark Theme Colors", () => {
	it("should have all color categories", () => {
		expect(darkColors).toHaveProperty("gray");
		expect(darkColors).toHaveProperty("blue");
		expect(darkColors).toHaveProperty("red");
		expect(darkColors).toHaveProperty("amber");
		expect(darkColors).toHaveProperty("green");
		expect(darkColors).toHaveProperty("teal");
		expect(darkColors).toHaveProperty("purple");
		expect(darkColors).toHaveProperty("pink");
	});

	it("should have valid OKLCH values", () => {
		// Test a few colors from different categories
		expect(darkColors.blue[500]).toMatch(/^oklch\([\d.]+% [\d.]+ [\d.]+\)$/);
		expect(darkColors.red[900]).toMatch(/^oklch\([\d.]+% [\d.]+ [\d.]+\)$/);
		expect(darkColors.green[300]).toMatch(/^oklch\([\d.]+% [\d.]+ [\d.]+\)$/);
	});

	it("should have consistent color scales", () => {
		const colorCategories = Object.keys(darkColors) as Array<
			keyof ColorPalette
		>;
		for (const category of colorCategories) {
			const colors = darkColors[category];
			const scaleKeys = Object.keys(colors);
			expect(scaleKeys.length).toBeGreaterThanOrEqual(9);
			expect(scaleKeys).toContain("50");
			expect(scaleKeys).toContain("100");
			expect(scaleKeys).toContain("200");
			expect(scaleKeys).toContain("300");
			expect(scaleKeys).toContain("400");
			expect(scaleKeys).toContain("500");
			expect(scaleKeys).toContain("600");
			expect(scaleKeys).toContain("700");
			expect(scaleKeys).toContain("800");
			expect(scaleKeys).toContain("900");
		}
	});

	it("should have valid lightness values", () => {
		const colorCategories = Object.keys(darkColors) as Array<
			keyof ColorPalette
		>;
		for (const category of colorCategories) {
			const colors = darkColors[category];
			for (const [_shade, value] of Object.entries(colors)) {
				const lightness = Number.parseFloat(
					value.match(/oklch\(([\d.]+)%/)?.[1] || "0",
				);
				expect(lightness).toBeGreaterThanOrEqual(0);
				expect(lightness).toBeLessThanOrEqual(100);
			}
		}
	});
});
