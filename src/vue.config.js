module.exports = {

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            output: {
                 publicPath : "" // only for prod
            }
        } else { // dev
            // org, no changes
        }       
    }  
}