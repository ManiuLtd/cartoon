module.exports = {
  NODE_ENV: '"production"',
  API_HOST: '"' + (process.argv[2] || 'prod') + '"'
}
