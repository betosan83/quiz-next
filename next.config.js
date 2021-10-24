module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/survey',
        destination: 'https://betosan83.github.io/quiz-next/api/survey',
      },
    ]
  },
  basePath: '/quiz-next',
  assetPrefix: '/quiz-next',
  reactStrictMode: true
}
