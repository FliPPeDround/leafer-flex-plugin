import { bold, gray } from 'kolorist'
import { defineConfig } from 'tsup'
import pkg from './package.json'

export default defineConfig ((options) => {
  const buildBanner = `\n 📊  ${bold('flex-plugin')} ${gray(`v${pkg.version}`)} \n`

  return {
    entry: ['src/index.ts'],
    format: options.watch ? 'esm' : ['cjs', 'esm', 'iife'],
    target: 'node14',
    tsconfig: './tsconfig.json',
    dts: true,
    clean: true,
    external: [
      'leafer-ui',
    ],
    minify: !options.watch,
    onSuccess: async () => {
      // eslint-disable-next-line no-console
      console.log(buildBanner)
      return Promise.resolve()
    },
  }
})
