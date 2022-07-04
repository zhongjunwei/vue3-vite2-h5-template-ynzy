/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 *  Introduces component library styles on demand.
 * https://github.com/antfu/unplugin-auto-import
 */

import AutoImport from 'unplugin-auto-import/vite'

export function configAutoImportPlugin() {
	return AutoImport({
		include: [
			/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
			/\.vue$/,
			/\.vue\?vue/, // .vue
			/\.md$/ // .md
		],
		imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
		// 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
		dts: 'types/auto-import.d.ts',
		// eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
		// 生成全局声明文件，给eslint用
		eslintrc: {
			enabled: true, // Default `false`
			filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
			globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
		}
	})
}
