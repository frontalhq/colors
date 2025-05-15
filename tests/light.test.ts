import { lightColors } from '@/light';
import type { ColorPalette } from '@/types';
import { describe, expect, it } from 'vitest';

const matchRegex = /^oklch\([\d.]+% [\d.]+ [\d.]+\)$/;

describe('Light Theme Colors', () => {
  it('should have all color categories', () => {
    expect(lightColors).toHaveProperty('gray');
    expect(lightColors).toHaveProperty('blue');
    expect(lightColors).toHaveProperty('red');
    expect(lightColors).toHaveProperty('amber');
    expect(lightColors).toHaveProperty('green');
    expect(lightColors).toHaveProperty('teal');
    expect(lightColors).toHaveProperty('purple');
    expect(lightColors).toHaveProperty('pink');
  });

  it('should have valid OKLCH values', () => {
    // Test a few colors from different categories
    expect(lightColors.blue[500]).toMatch(matchRegex);
    expect(lightColors.red[900]).toMatch(matchRegex);
    expect(lightColors.green[300]).toMatch(matchRegex);
  });

  it('should have consistent color scales', () => {
    const colorCategories = Object.keys(lightColors) as Array<
      keyof ColorPalette
    >;
    for (const category of colorCategories) {
      const colors = lightColors[category];
      const scaleKeys = Object.keys(colors);
      expect(scaleKeys.length).toBeGreaterThanOrEqual(9);
      expect(scaleKeys).toContain('50');
      expect(scaleKeys).toContain('100');
      expect(scaleKeys).toContain('200');
      expect(scaleKeys).toContain('300');
      expect(scaleKeys).toContain('400');
      expect(scaleKeys).toContain('500');
      expect(scaleKeys).toContain('600');
      expect(scaleKeys).toContain('700');
      expect(scaleKeys).toContain('800');
      expect(scaleKeys).toContain('900');
    }
  });

  it('should have valid lightness values', () => {
    const colorCategories = Object.keys(lightColors) as Array<
      keyof ColorPalette
    >;
    for (const category of colorCategories) {
      const colors = lightColors[category];
      for (const [, value] of Object.entries(colors)) {
        const lightness = Number.parseFloat(
          value.match(matchRegex)?.[1] || '0'
        );
        expect(lightness).toBeGreaterThanOrEqual(0);
        expect(lightness).toBeLessThanOrEqual(100);
      }
    }
  });
});
