module.exports = {
    siteMetadata: {
        title: 'Full-Stack Bootcamp',
        author: 'David Sabalete',
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        }
    ]
}