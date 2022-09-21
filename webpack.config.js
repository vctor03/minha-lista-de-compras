const resolve = require('path').resolve;

const app_name = 'minha-lista-de-compras'
const path_to_static = resolve(__dirname, app_name, 'static')

module.exports = {
    entry: `./${app_name}/ts_compile_js/list.js`,
    output: {
        filename: 'list_index.js',
        path: path_to_static
    }
};