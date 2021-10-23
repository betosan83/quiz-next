module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/survey',
        destination: 'https://betosan83.github.io/quiz-next/api/survey',
      },
    ]
  },
  reactStrictMode: true
}
