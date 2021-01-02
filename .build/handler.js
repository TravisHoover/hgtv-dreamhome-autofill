const launch = require('@serverless-chrome/lambda')

const handler = require('./trbzs4cfw2d___handler.js')
const options = {"flags":[]}

module.exports.hello = function ensureHeadlessChrome (
  event,
  context,
  callback
) {
  return (typeof launch === 'function' ? launch : launch.default)(options)
    .then(instance =>
      handler.hello(event, context, callback, instance))
    .catch((error) => {
      console.error(
        'Error occured in serverless-plugin-chrome wrapper when trying to ' +
          'ensure Chrome for hello() handler.',
        options,
        error
      )

      callback(error)
    })
}