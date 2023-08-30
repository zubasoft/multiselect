import vue from 'vue-next-rollup-plugin-vue'
import alias from '@rollup/plugin-alias'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/Multiselect.vue',
    output: {
      file: 'dist/multiselect.js',
      format: 'esm',
    },
    plugins: [
      vue(),
    ],
    external: ['vue'],
  },
  {
    input: 'src/Multiselect.vue',
    output: {
      file: 'dist/multiselect.mjs',
      format: 'esm',
    },
    plugins: [
      vue(),
    ],
    external: ['vue'],
  },
  {
    input: 'src/Multiselect.vue',
    output: {
      file: '../ds/public/vue/public/js/libs/03multiselect.global.js',
      format: 'iife',
      name: 'VueformMultiselect',
      globals: {
        'vue': 'Vue',
      },
	  sourcemap: true
    },
    plugins: [
      vue(),
      terser(),
    ],
    external: ['vue'],
  }
]