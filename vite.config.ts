import { defineConfig } from 'vitest/config';
import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [
    enhancedImages(),
    sveltekit(),
    paraglide({
      project: './project.inlang',
      outdir: './src/lib/paraglide'
    })
  ],

  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
