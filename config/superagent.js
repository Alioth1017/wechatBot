const superagent = require('superagent')

//请求
function req (url, method, params, data, options = {}) {
	return new Promise(function (resolve, reject) {
		superagent(method, url)
			.query(params)
			.send(data)
			.set('Content-Type', options.ContentType || 'application/x-www-form-urlencoded')
			.end(function (err, response) {
				if (err) {
					reject(err)
				}
				resolve(response)
			})
	})
}
module.exports = {
	req
}
