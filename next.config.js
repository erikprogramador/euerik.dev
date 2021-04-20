module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./generate-sitemap')
    }

    return config
  },
}
