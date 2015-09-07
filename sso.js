var request = require('request');
// Obtener tokens por url sin ningún tipo de autenticación
exports.getTokenURL = function (opts, cb){


	function callback(error, response, body) {
	  	
	  	if (error) {
	  		return cb('La url: ' + opts.uri + ' no responde.', null, error)
	  	}
	  	
	  	var body = (typeof body == 'string') ? JSON.parse(body): body

	  	cb(null, body, response)
	}

	request(opts, callback);
}
// Refrescar tokens por medio del protocólo de autenticación OAuth 2.0
exports.RefreshTokenOA2 = function (uri, opts, cb){

	request.post(uri, opts, function (err, res, body) {

		if (err) {
			return cb('Error al solicitar: ' + uri, null, err)
		}	

		cb(null, body, res)
	})

}