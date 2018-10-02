const htlmLoader = {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader',
      },
    ],
};

const babelLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
};

const storyLoader = {
    test: /\.story.js$/,
    use: 'babel-loader' 
}

const styleLoader = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
};

const SVGLoader = {
    test: /\.svg$/,
    use: 'react-svg-loader',
};

const fileLoader = {
    exclude: [/\.(js|css|mjs|html|json|ejs)$/],
    use: [
        {
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[hash:8].[ext]',
            },
        },
    ],
};

const urlLoader = {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: require.resolve('url-loader'),
    options: {
        limit: 2048,
        name: 'assets/[name].[hash:8].[ext]',
    },
};

module.exports = [
    {
        oneOf: [
            babelLoader,
            storyLoader,
            htlmLoader,
            SVGLoader,
            urlLoader,
            fileLoader,
            styleLoader,
        ],
    },
];