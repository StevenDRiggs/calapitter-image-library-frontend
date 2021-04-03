const withSvgr = require("next-svgr");

module.exports = withSvgr({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  // your config for other plugins or the general next.js here...
})
