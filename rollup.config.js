import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'index.js',
  output: {
    name: 'shanksUtils',
    format: 'iife',
    file: 'dist/bundle.min.js'
  },
  plugins: [
    resolve(),
    babel({
      externalHelpers: true,
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}
