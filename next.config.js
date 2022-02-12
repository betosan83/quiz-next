module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/survey',
        destination: '/api/survey',
      },
    ]
  },
  reactStrictMode: true
}
