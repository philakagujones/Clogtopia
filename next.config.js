/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withTM = require('next-transpile-modules');

module.exports = withTM({
    transpileModules: ['@iconscout/react-unicons'],
});

