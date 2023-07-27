module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/reset_password',
          permanent: true,
        },
      ]
    },
  }