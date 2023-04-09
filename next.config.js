module.exports = {
  env: {
    APP_URL: process.env.APP_URL,
    TWITTER_LINK: process.env.TWITTER_LINK,
    DISCORD_LINK: process.env.DISCORD_LINK,
    MEDIUM_LINK: process.env.MEDIUM_LINK,
    SOCIAL_LINK: process.env.SOCIAL_LINK,
    BACKEND_PATH: process.env.BACKEND_PATH,
    COLLECTION_ADDRESS: process.env.COLLECTION_ADDRESS
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.BACKEND_PATH // Proxy to Backend
      }
    ]
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
