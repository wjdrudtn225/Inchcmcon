module.exports = {
    entry: './src/index.js',
    output: {
        filename:'out/bundle.js'
    },
    module: {
        rules: [
            {
            test:/.js$/,
            loader:'babel-loader',
            options: {
                presets:['es2015','react']
            }
        }]
    }
};