var config = require('config'),
    request = require('request')

module.exports = function(req, res, next) {
  if (req.cookies && req.cookies.smbckt && (req.cookies.smbckt == 2)) {
    console.log('Routing request to v2...')
    request({
      method: req.method,
      uri: config.routers.v2.baseuri + req.url,
      followRedirect: false
    }).pipe(res)
  } else {
    next()
  }
} // END function - module.exports