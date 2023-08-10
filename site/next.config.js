/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'My Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://jvarn.github.io/kasm-registry/',
    contactUrl: 'https://github.com/jvarn/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
