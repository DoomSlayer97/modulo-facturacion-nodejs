const { request, response } = require('express');


exports.create = ( req = request , res = response ) => {

	const {
		nombre
	} = req.params;

	console.log( nombre );

	return res.json({
		mensaje: "Hola " + nombre
	});

}



