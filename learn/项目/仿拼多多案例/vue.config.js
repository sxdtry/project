module.exports = {
    publicPath:'./',
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    require('postcss-plugin-px2rem')({
                        rootValue: 75,
                        unitPrecision: 2,
                        propWhiteList: [],
                        propBlackList: [],
                        exclude: /(node_module)/,
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