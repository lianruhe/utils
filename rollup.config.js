import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'index.js',
  output: {
    name: 'shanksUtils',
    format: 'iife',
    file: 'dist/bundle.min.js'
  },
  plugins: [
    babel(),
    commonjs(),
    resolve(),
    uglify()
  ]
}
