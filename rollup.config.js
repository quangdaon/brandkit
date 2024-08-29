import scss from 'rollup-plugin-scss';

export default {
  input: './styles.js',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    assetFileNames: '[name][extname]',
  },
  plugins: [
    scss({
      include: `**/core.scss`,
      dir: 'scss',
      fileName: 'core.css',
    })
  ],
};
