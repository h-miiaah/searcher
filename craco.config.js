// craco.config.js
require('dotenv').config()

module.exports = {
    style: {
        postcssOptions: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
}