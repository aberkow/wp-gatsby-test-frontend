// include post css so that tailwind classes are available via the wp page editor

module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-apply'),
    // require tailwind css and the config file in case there are variants or themes etc...
    require('tailwindcss')('./tailwind.config.js')
  ],
})