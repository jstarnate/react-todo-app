import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    entry: ['./src/index.js', './src/styles/index.scss'],
    output: {
        filename: 'app.[fullhash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                options: {
                    presets: [
                        '@babel/preset-env',
                        ['@babel/preset-react', { runtime: 'automatic' }],
                    ],
                    plugins: ['@babel/plugin-syntax-dynamic-import'],
                },
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            RootComponent: path.resolve(__dirname, 'src/components/App.js'),
            Subcomponents: path.resolve(
                __dirname,
                'src/components/subcomponents'
            ),
            Helpers: path.resolve(__dirname, 'src/components/helpers'),
            Actions: path.resolve(__dirname, 'src/state/actions.js'),
        },
    },
    devServer: {
        port: 3000,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React To-Do App',
            favicon: path.resolve(__dirname, 'public/favicon.ico'),
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
    ],
};
