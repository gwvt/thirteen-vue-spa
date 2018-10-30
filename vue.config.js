module.exports = {
  lintOnSave: false,
  baseUrl: process.env.name === 'gitlab-pages'
    ? '/thirteen-vue-spa/'
    : './',
};
