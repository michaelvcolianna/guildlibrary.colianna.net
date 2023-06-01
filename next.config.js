const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/category',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = withContentlayer(nextConfig)
