/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    domains: ['images.microcms-assets.io', 'pbs.twimg.com'],
  },
}

module.exports = nextConfig
