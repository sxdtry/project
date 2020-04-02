module.exports = {
    publicPath:'./',
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({
                        rootValue: 37.5,
                        unitPrecision: 5,
                        propWhiteList: [],
                        propBlackList: [],
                        exclude:/(node_modules)/,
                        selectorBlackList: [],
                        ignoreIdentifier: false,
                        replace: true,
                        mediaQuery: false,
                        minPixelValue: 3
                    })
                ]
            }
        }
    }
}