module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "semi": ["error", "always"],
    "camelcase": 'off', // 关闭驼峰命名
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-tabs": ["off", { allowIndentationTabs: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'no-extra-boolean-cast': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'prefer-const': 'off',
    // 强制关键字周围空格的一致性 (keyword-spacing)
		'keyword-spacing': ['error'],
		// 禁止重复导入
		// 'no-duplicate-imports': 'error',
		'no-mixed-operators': 0,
		// 强制使用一致的反勾号、双引号或单引号
		'quotes': [
			2,
			'single',
			{
				'avoidEscape': true,
				'allowTemplateLiterals': true
			}
		],
		'vue/max-attributes-per-line': [
			2,
			{
				'singleline': 5,
				'multiline': 2
			}
		],
		'vue/attribute-hyphenation': 0,
		'vue/html-self-closing': 0,
		'vue/component-name-in-template-casing': 0,
		'vue/html-closing-bracket-spacing': 0,
		'vue/singleline-html-element-content-newline': 0,
		'vue/no-unused-components': 0,
		'vue/multiline-html-element-content-newline': 0,
		'vue/no-use-v-if-with-v-for': 0,
		'vue/html-closing-bracket-newline': 0,
		'vue/no-parsing-error': 0,
		"vue/script-indent": ["error", 'tab', {
			"baseIndent": 1,
			"switchCase": 1,
			"ignores": []
		}],
		'indent': 'off',
		'vue/html-indent': ['error',2,{'baseIndent': 1}],
		'vue/no-v-html': 'off'
  }
}
