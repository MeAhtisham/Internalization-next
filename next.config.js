const { i18n } = require('./next-i18next.config');
module.exports = {
  reactStrictMode: true,
  i18n,
  env: {
    //    API_URL : 'http://35.154.100.89:8000/',
    // API_URL : 'https://thumbnail-download.me/',
    API_URL: '/',
    BASE_URL: 'https://ytshorts.savetube.me',
  },
};
