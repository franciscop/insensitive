import resolve from 'rollup-plugin-node-resolve';

export default {
  name: 'insensitive',
  input: 'insensitive.js',
  output: {
    format: 'umd'
  },
  plugins: [
    resolve()
  ]
};
