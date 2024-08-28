import scss from 'rollup-plugin-scss';

import { readdirSync } from 'fs';

var bundles = readdirSync('./style/bundles');
export default {
  input: './styles.js',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    assetFileNames: '[name][extname]',
  },
  plugins: [
    bundles.map((e) =>
      scss({
        include: `**/bundles/${e}`,
        dir: 'styles',
        fileName: e.replace(/\.scss$/, '.css'),
      })
    ),
  ],
};
