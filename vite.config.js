import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import htmlInject from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [FullReload(['src/pages/**/*.html', 'src/partials/**/*.html']), htmlInject()],

  server: {
    host: true,
    open: true,
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});

// import { defineConfig } from 'vite';
// import { glob } from 'glob';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';
// import SortCss from 'postcss-sort-media-queries';

// export default defineConfig(({ command }) => {
//   return {
//     define: {
//       [command === 'serve' ? 'global' : '_global']: {},
//     },
//     // root: 'src',
//     build: {
//       sourcemap: true,
//       rollupOptions: {
//         input: glob.sync('./src/*.html'),
//         output: {
//           manualChunks(id) {
//             if (id.includes('node_modules')) {
//               return 'vendor';
//             }
//           },
//           entryFileNames: chunkInfo => {
//             if (chunkInfo.name === 'commonHelpers') {
//               return 'commonHelpers.js';
//             }
//             return '[name].js';
//           },
//           assetFileNames: assetInfo => {
//             if (assetInfo.name && assetInfo.name.endsWith('.html')) {
//               return '[name].[ext]';
//             }
//             return 'assets/[name]-[hash][extname]';
//           },
//         },
//       },
//       outDir: '../dist',
//       emptyOutDir: true,
//     },
//     plugins: [
//       injectHTML(),
//       FullReload(['./src/**/**.html']),
//       SortCss({
//         sort: 'mobile-first',
//       }),
//     ],
//   };
// });
