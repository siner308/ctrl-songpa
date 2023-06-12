/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/kr',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
