const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: './',
        aliases: {
          '@': './src',
          '@components': './src/components',
          '@containers': './src/containers',
          '@modules': './src/modules',
          '@pages': './pages'
        }
      }
    }
  ],
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
