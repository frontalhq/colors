import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'build',
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
});
