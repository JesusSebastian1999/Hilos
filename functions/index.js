const functions = require('firebase-functions');
exports.saludo = functions.https.onRequest((request, response) => {
    try {
      if (!request.query.fecha) {
        throw new Error("Falta la fecha");
      } else if (!request.query.nombre2) {
        throw new Error("Falta el nombre ");
      }
      response.send(`!Hola ${request.query.nombre2} tu cumpliaños es el ${request.query.fecha}`);
    } catch (e) {
      response.send(e.message);
    }
   });
   