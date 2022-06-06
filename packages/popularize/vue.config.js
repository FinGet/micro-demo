const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { FileSystemIconLoader } = require('unplugin-icons/loaders');
const path = require('path');// 引入path模块
function resolve (dir) {
  return path.join(__dirname, dir);// path.join(__dirname)设置绝对路径
}
module.exports = {
	publicPath: '/popularize/',
	devServer: {
		port: 8888,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	configureWebpack: {
		plugins: [
			Icons({
				compiler: 'vue3',
				// autoInstall: true
				// 自定义图标加载
				customCollections: {
					// 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
					custom: FileSystemIconLoader('src/assets/svg', svg => svg.replace(/^<svg /, '<svg fill="currentColor" '))
				}
			}),
			AutoImport({
				include: [
					/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
					/\.vue$/, /\.vue\?vue/, // .vue
					/\.md$/ // .md
				],
				resolvers: [
					ElementPlusResolver(),
					IconsResolver({
						prefix: 'Icon'
					})
				]
			}),
			Components({
				dts: true,
				resolvers: [
					ElementPlusResolver(),
					// {prefix}-{collection}-{icon} {前缀（默认i）}-{图标集名称（custom）}-{图标名称（refresh-line）}
					IconsResolver({
						enabledCollections: ['ep']
					})
					// ElIconResolver()
				]
			})
		]
	},
	chainWebpack: config => {
		config.resolve.alias
    .set('@', resolve('src'));

		config.module
			.rule('vue')
			.use('vue-loader')
			.tap(options => {
				options.compilerOptions = {
					...(options.compilerOptions || {}),
					isCustomElement: (tag) => /^micro-app/.test(tag)
				};
				return options;
			});
	}
};
